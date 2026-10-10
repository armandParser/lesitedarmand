import type { APIRoute } from 'astro';
import { buildLlms } from '../data/llms';

export const GET: APIRoute = ({ site }) =>
  new Response(buildLlms(site!.origin, true), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
