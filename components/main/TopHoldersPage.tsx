'use client';

import React, { useEffect, useState } from 'react';
import MainLayout from '../layout/MainLayout';
import MyCard from '../custom/MyCard';
import { useAppStore } from '@/utils/app-store';
import { triggerHapticFeedback } from '@/utils/ui';
import { MAIN_ASSET_CODE } from '@/utils/consts';

interface TopHoldersPageProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

interface Holder {
  address: string;
  amount: number;
}

const maskAddress = (addr: string) => {
  if (!addr) return '';
  const start = addr.slice(0, 6);
  const end = addr.slice(-4);
  return `${start}...${end}`;
};

export default function TopHoldersPage({ currentView, setCurrentView }: TopHoldersPageProps) {
  const { getSelectedWalletAddress } = useAppStore();
  const [selectedWalletAddress, setSelectedWalletAddress] = useState<string | null>(null);
  const [holders, setHolders] = useState<Holder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleViewChange = (view: string) => {
    try {
      triggerHapticFeedback(window);
      setCurrentView(view);
    } catch (error) {
      console.error('Error occurred while changing view:', error);
    }
  };

  useEffect(() => {
    const swa = getSelectedWalletAddress();
    if (!swa) {
      handleViewChange('wallets');
      return;
    }
    setSelectedWalletAddress(swa);
  }, [getSelectedWalletAddress]);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/top-holders');
        if (!res.ok) throw new Error(`Failed to load top holders (${res.status})`);
        const data = await res.json();
        setHolders(data?.holders ?? []);
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'Unable to load top holders');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const isLoaded = selectedWalletAddress !== null;

  return (
    <MainLayout title="Top Holders">
      <div className="relative space-y-4">
        {isLoaded ? (
          <MyCard p={0} className="overflow-hidden">
            <div className="px-4 py-3 border-b border-info">
              <h3 className="text-sm font-semibold text-gray-200">Top 10 {MAIN_ASSET_CODE} Holders</h3>
            </div>
            <div className="divide-y divide-info">
              {loading && (
                <div className="p-4 text-sm text-gray-400">Loading top holders...</div>
              )}
              {error && !loading && (
                <div className="p-4 text-sm text-warning">Error: {error}</div>
              )}
              {!loading && !error && holders.length === 0 && (
                <div className="p-4 text-sm text-gray-400">No holders found.</div>
              )}
              {!loading && !error && holders.slice(0, 10).map((holder, index) => (
                <div key={holder.address} className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-bold text-info w-6 text-center">#{index + 1}</span>
                    <div className="text-sm text-gray-300">{maskAddress(holder.address)}</div>
                  </div>
                  <div className="text-sm font-semibold text-success">
                    {Math.floor(holder.amount).toLocaleString()} {MAIN_ASSET_CODE}
                  </div>
                </div>
              ))}
            </div>
          </MyCard>
        ) : (
          <div className="text-center text-sm text-gray-400">Loading...</div>
        )}
      </div>
    </MainLayout>
  );
}

