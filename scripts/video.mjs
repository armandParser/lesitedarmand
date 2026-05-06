#!/usr/bin/env node                                                                                                                                                                                  
/**                                                                                                                                                                                                  
* Generates scroll-preview videos for portfolio cards.
*
* Run once (or whenever a site updates):
*   npm run record-previews
*
* Requires:
*   npx playwright install chromium
*
* Optional:
*   ffmpeg — produces .mp4 alongside .webm for wider Safari support
*/
import { chromium } from 'playwright';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import os from 'os';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '../public/previews');
fs.mkdirSync(outDir, { recursive: true });

const sites = [
    // { slug: 'kimi-antonelli',   url: 'https://kimiantonelli.netlify.app' },
    { slug: 'parser-lab',       url: 'https://parser-lab.com', scrollDuration: 8000 },
    // { slug: 'oyo-escapes',      url: 'https://oyoescapes.com/south-africa-retreat.html' },
    // { slug: 'la-gragna-guette', url: 'https://lagragnaguette.com' },
    // { slug: 'liftov-bordeaux',  url: 'https://liftovbordeaux.fr' },
    // { slug: 'bauer-debarras',   url: 'https://bauer-debarras.netlify.app' },
];

 let hasFfmpeg = false;
 try { execSync('ffmpeg -version', { stdio: 'ignore' }); hasFfmpeg = true; } catch {}
 if (!hasFfmpeg) {
   console.warn('ffmpeg not found — outputting .webm only (Chrome/Firefox/Edge/Safari 14.5+)');
   console.warn('Install ffmpeg to also get .mp4 for older Safari.\n');
 }

async function recordSite({ slug, url, scrollDuration = 2000 }) {
  process.stdout.write(`  ${slug}... `);
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pw-'));
  const browser = await chromium.launch();

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: { dir: tmpDir, size: { width: 1440, height: 900 } },
    ignoreHTTPSErrors: true
  });

  const page = await context.newPage();

  try {
    // Wait for full load (HTML + CSS + images)
    await page.goto(url, { waitUntil: 'load', timeout: 45000 });

    // Wait until network is quiet (useful for SPAs / lazy loading)
    await page.waitForLoadState('networkidle');

    // EXTRA BUFFER — give everything time to settle
    await page.waitForTimeout(3000);

    // Smooth scroll
    await page.evaluate((dur) =>
      new Promise(resolve => {
        const vh = window.innerHeight;
        const t0 = performance.now();

        function step(t) {
          const p = Math.min((t - t0) / dur, 1);
          const e = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
          window.scrollTo(0, e * vh);
          if (p < 1) requestAnimationFrame(step);
          else resolve();
        }

        requestAnimationFrame(step);
      }),
      scrollDuration
    );

    // Longer hold so you can trim later in editing
    await page.waitForTimeout(2000);

  } catch (err) {
    process.stdout.write(`skipped (${err.message.slice(0, 60)})\n`);
  } finally {
    await context.close();
    await browser.close();
  }

  const [webmFile] = fs.readdirSync(tmpDir).filter(f => f.endsWith('.webm'));
  if (!webmFile) {
    console.error('no video output');
    fs.rmSync(tmpDir, { recursive: true });
    return;
  }

  const webmSrc = path.join(tmpDir, webmFile);
  const webmDest = path.join(outDir, `${slug}.webm`);
  fs.copyFileSync(webmSrc, webmDest);

  if (hasFfmpeg) {
    const mp4Dest = path.join(outDir, `${slug}.mp4`);
    execSync(
      `ffmpeg -i "${webmDest}" -c:v libx264 -crf 23 -preset fast -an -movflags +faststart "${mp4Dest}" -y`,
      { stdio: 'ignore' }
    );
    console.log('✓  mp4 + webm');
  } else {
    console.log('✓  webm');
  }

  fs.rmSync(tmpDir, { recursive: true });
}
console.log('Recording previews...\n');
for (const site of sites) {
  await recordSite(site);
}
console.log('\nDone — videos written to public/previews/');