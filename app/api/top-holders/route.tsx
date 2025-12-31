'use server';

import { NextResponse } from 'next/server';
import { fetchTopHolders } from '@/utils/custom';

type Holder = { address: string; amount: number };

let cachedHolders: Holder[] | null = null;
let cacheExpiresAt = 0;

const CACHE_TTL_MS = 180 * 1000; // 180 seconds
const RESULTS_LIMIT = 50;

export async function GET() {
  const now = Date.now();

  if (cachedHolders && now < cacheExpiresAt) {
    return NextResponse.json({ holders: cachedHolders, cached: true });
  }

  try {
    const holders = await fetchTopHolders(RESULTS_LIMIT);
    cachedHolders = holders;
    cacheExpiresAt = now + CACHE_TTL_MS;
    return NextResponse.json({ holders, cached: false });
  } catch (error: any) {
    console.error('Failed to fetch top holders:', error);
    return NextResponse.json({ error: error?.message || 'Failed to fetch top holders' }, { status: 500 });
  }
}

