// utils/consts.ts

/**
 * This project was developed by Nikandr Surkov.
 * You may not use this code if you purchased it from any source other than the official website https://nikandr.com.
 * If you purchased it from the official website, you may use it for your own projects,
 * but you may not resell it or publish it publicly.
 * 
 * Website: https://nikandr.com
 * YouTube: https://www.youtube.com/@NikandrSurkov
 * Telegram: https://t.me/nikandr_s
 * Telegram channel for news/updates: https://t.me/clicker_game_news
 * GitHub: https://github.com/nikandr-surkov
 */

import { crystal1, crystal2, crystal3, crystal4, crystal5, crystal6, crystal7, crystal8, crystal9, mainCharacter } from "@/images";
import { StaticImageData } from "next/image";
import { Square, Circle, TriangleRight } from "lucide-react";

export const MOCK_EXPENSES_LIST = [
  // { name: 'ATM Withdraw', category: 'Cash-Out', balance: 50000, percent: 56, icon: Square, },
  // { name: 'Groceries', category: 'Food', balance: 17690, percent: 20, icon: Circle, },
  // { name: 'Fuel', category: 'Car', balance: 10576, percent: 11, icon: TriangleRight, },
  // { name: 'Online Shopping', category: 'Amazon', balance: 42, percent: 5, icon: Square, },
  // { name: 'Restaurant', category: 'Fast Food', balance: 3320, percent: 3, icon: Square, },
  // { name: 'Coffee', category: 'Coffee Point', balance: 25, percent: 2, icon: Circle, },
];

export const ALLOW_ALL_DEVICES = true;

export const WALLET_MANIFEST_URL = "https://violet-traditional-rabbit-103.mypinata.cloud/ipfs/QmcFgnfXoiNtp8dvy25xA9hMEjz5AzugTuPQNTHQMTw9Tf";

export interface LevelData {
  name: string;
  minPoints: number;
  bigImage: StaticImageData;
  smallImage: StaticImageData;
  color: string;
  friendBonus: number;
  friendBonusPremium: number;
}

export const LEVELS: LevelData[] = [
  {
    name: "Ice Cube Intern",
    minPoints: 0,
    bigImage: mainCharacter,
    smallImage: crystal1,
    color: "#2adaf8",
    friendBonus: 0,
    friendBonusPremium: 0,
  },
  {
    name: "Frosty Freelancer",
    minPoints: 5000,
    bigImage: mainCharacter,
    smallImage: crystal2,
    color: "#d64767",
    friendBonus: 20000,
    friendBonusPremium: 25000,
  },
  {
    name: "Chilly Consultant",
    minPoints: 25000,
    bigImage: mainCharacter,
    smallImage: crystal3,
    color: "#e9c970",
    friendBonus: 30000,
    friendBonusPremium: 50000,
  },
  {
    name: "Glacial Manager",
    minPoints: 100000,
    bigImage: mainCharacter,
    smallImage: crystal4,
    color: "#73e94b",
    friendBonus: 40000,
    friendBonusPremium: 75000,
  },
  {
    name: "Subzero Supervisor",
    minPoints: 1000000,
    bigImage: mainCharacter,
    smallImage: crystal5,
    color: "#4ef0ba",
    friendBonus: 60000,
    friendBonusPremium: 100000,
  },
  {
    name: "Arctic Executive",
    minPoints: 2000000,
    bigImage: mainCharacter,
    smallImage: crystal6,
    color: "#1a3ae8",
    friendBonus: 100000,
    friendBonusPremium: 150000,
  },
  {
    name: "Polar CEO",
    minPoints: 10000000,
    bigImage: mainCharacter,
    smallImage: crystal7,
    color: "#902bc9",
    friendBonus: 250000,
    friendBonusPremium: 500000,
  },
  {
    name: "Tundra Tycoon",
    minPoints: 50000000,
    bigImage: mainCharacter,
    smallImage: crystal8,
    color: "#fb8bee",
    friendBonus: 500000,
    friendBonusPremium: 1000000,
  },
  {
    name: "Iceberg Mogul",
    minPoints: 100000000,
    bigImage: mainCharacter,
    smallImage: crystal9,
    color: "#e04e92",
    friendBonus: 1000000,
    friendBonusPremium: 2000000,
  }
];

export const DAILY_REWARDS = [
  500,
  1000,
  2500,
  5000,
  15000,
  25000,
  100000,
  500000,
  1000000,
  5000000
];

export const MAXIMUM_INACTIVE_TIME_FOR_MINE = 3*60*60*1000; // 3 hours in milliseconds

export const MAX_ENERGY_REFILLS_PER_DAY = 6;
export const ENERGY_REFILL_COOLDOWN = 60 * 60 * 1000; // 1 hour in milliseconds
export const TASK_WAIT_TIME = 60 * 60 * 1000; // 1 hour in milliseconds

export const REFERRAL_BONUS_BASE = 5000;
export const REFERRAL_BONUS_PREMIUM = 25000;


// Multitap
export const multitapUpgradeBasePrice = 1000;
export const multitapUpgradeCostCoefficient = 2;

export const multitapUpgradeBaseBenefit = 1;
export const multitapUpgradeBenefitCoefficient = 1;

// Energy
export const energyUpgradeBasePrice = 1000;
export const energyUpgradeCostCoefficient = 2;

export const energyUpgradeBaseBenefit = 500;
export const energyUpgradeBenefitCoefficient = 1;

// Mine (profit per hour)
export const mineUpgradeBasePrice = 1000;
export const mineUpgradeCostCoefficient = 1.5;

export const mineUpgradeBaseBenefit = 100;
export const mineUpgradeBenefitCoefficient = 1.2;

// Stellar token
export const MAIN_ASSET_CODE = "BRICSQFS";
export const MAIN_ISSUER_ADDRESS = "GD7XOC6MIVFNTU5VDV5EE6MJVBFZAFPBYSUA437N2DEJ5LF4UDKHSQFS";

export const STOCK_ASSET_CODE = "XLMSTOCK";
export const STOCK_ISSUER_ADDRESS = "GB2R4BM4AVPD25QSMOYWOKVTJW3T7M5EQA4PZUYDHERP267FQQAIGXLM";

export const SECOND_ASSETS = [  
  { code: 'XLMUSD', issuer: 'GCMFEBHYWKOUFXMNBOXHKCVFZ73PCD4OYW2CBXWMWIUGKRNOWTVXK463' },
  { code: 'XLMEUR', issuer: 'GDHSEOLHPLTNSCRCXOQWTJ3O53EFK63RT72EIKA5FVM5CXLJT5Q7CHBK' },
  { code: 'XLMGBP', issuer: 'GDHSEOLHPLTNSCRCXOQWTJ3O53EFK63RT72EIKA5FVM5CXLJT5Q7CHBK' },
  { code: 'XLMJPY', issuer: 'GDHSEOLHPLTNSCRCXOQWTJ3O53EFK63RT72EIKA5FVM5CXLJT5Q7CHBK' },
  { code: 'XLMAUD', issuer: 'GDHSEOLHPLTNSCRCXOQWTJ3O53EFK63RT72EIKA5FVM5CXLJT5Q7CHBK' },
  { code: 'XLMCNY', issuer: 'GDHSEOLHPLTNSCRCXOQWTJ3O53EFK63RT72EIKA5FVM5CXLJT5Q7CHBK' },
  { code: 'XLMCHF', issuer: 'GDHSEOLHPLTNSCRCXOQWTJ3O53EFK63RT72EIKA5FVM5CXLJT5Q7CHBK' },
  { code: 'PYUSD', issuer: 'GD6QFKDHFYCZKCXPH7OUKN6I2JKK4O2V6HJUR7WBFLW3H3QRRZBANUSD' },
];

export interface TierLevel {
  level: number;
  start: number;
  end: number;
  discountPercent: number;
  ownershipPercent: number;
  dailyRewardsPercent: number;
  ///////////////////////////////
  isAdditionalBenifitsOnly?: boolean;
  additionalBenifits?: Array<{
    emoticon: string;
    text: string;
    subItems?: Array<{ emoticon: string; text: string }>;
  }>;
}

export interface QuantumBenefitItem {
  code: string;
  label: string;
}

export const quantumBenefitItems: QuantumBenefitItem[] = [
  { code: 'QPUX', label: 'Quantum Processing Power' },
  { code: 'QCLX', label: 'Qubit Control Systems' },
  { code: 'QMNX', label: 'Quantum Memory Nodes' },
  { code: 'QESX', label: 'Entanglement Streams Access' },
  { code: 'QRLX', label: 'Repeater Link Priority' },
  { code: 'QCHX', label: 'Comm Bandwidth Share' },
  { code: 'QSDX', label: 'State Detection Rights' },
  { code: 'QKDX', label: 'Quantum Key Auth' },
  { code: 'QCMP', label: 'Compiler Access Points' },
  { code: 'QJSX', label: 'Job Scheduling Power' },
  { code: 'QECX', label: 'Error Correction Units' },
  { code: 'QLMX', label: 'Link Middleware Layer' },
  { code: 'PQCS', label: 'Post-Quantum Security' },
  { code: 'CQNI', label: 'Classical–Quantum Bridge' },
  { code: 'QSATX', label: 'Satellite Network Access' },
  { code: 'QOLX', label: 'Overledger Orchestration' },
];

export const TierLevels: TierLevel[] = [
  {
    level: 0,
    start: 0,
    end: 249,
    discountPercent: 0,
    ownershipPercent: 0,
    dailyRewardsPercent: 0,
  },
  {
    level: 1,
    start: 250,
    end: 999,
    discountPercent: 0,
    ownershipPercent: 0.5,
    dailyRewardsPercent: 500,
    additionalBenifits: [
      { emoticon: "🌏", text: "150 BRICS Special Assets — TBA" },
      { emoticon: "🤑", text: "300% XLM / XRP / USDC / BRICSD Daily" },
      { emoticon: "🔥", text: "300% Quantum Commodity Rewards (Gold, Oil, Rare Earths)" },
      { emoticon: "🏠", text: "10 Properties (Across BRICS megacities)" },
      { emoticon: "🚗", text: "25 Luxury Cars" },
      { emoticon: "✈️", text: "2 Private Jets" },
      { emoticon: "🚤", text: "2 Yachts" },
      { emoticon: "💳", text: "$2M BRICS Global Account" },
      { emoticon: "🏥", text: "2 MedBeds (Quantum Entry Level)" },
      { emoticon: "🏦", text: "Mini Investment Desk (Managed for You)" },
    ],
  },
  {
    level: 2,
    start: 1000,
    end: 2499,
    discountPercent: 0,
    ownershipPercent: 1,
    dailyRewardsPercent: 1200,
    additionalBenifits: [
      { emoticon: "🌏", text: "200 BRICS Special Assets" },
      { emoticon: "🤑", text: "700% XLM / XRP / USDC / BRICSD Daily" },
      { emoticon: "🔥", text: "700% Commodity Rewards (Gold, Oil, Rare Earth)" },
      { emoticon: "🏠", text: "40 Properties" },
      { emoticon: "🚗", text: "80 Cars" },
      { emoticon: "✈️", text: "5 Private Jets" },
      { emoticon: "🚁", text: "5 Helicopters" },
      { emoticon: "🚤", text: "5 Yachts" },
      { emoticon: "💳", text: "$10M BRICS Account" },
      { emoticon: "🛒", text: "$10M Consumption Voucher" },
      { emoticon: "🏥", text: "5 Quantum MedBeds (Mid-Level)" },
      { emoticon: "💻", text: "Mining Factory + BRICS Energy Node" },
      { emoticon: "🏖️", text: "3 National Islands" },
      { emoticon: "💵", text: "$50M Total Cash Package (CNY, RUB, INR, ZAR, SAR)" },
    ],
  },
  {
    level: 3,
    start: 2500,
    end: 4999,
    discountPercent: 0,
    ownershipPercent: 2.5,
    dailyRewardsPercent: 3000,
    additionalBenifits: [
      { emoticon: "🌏", text: "300 BRICS Special Assets" },
      { emoticon: "🤑", text: "2,000% Daily Currency Rewards" },
      { emoticon: "🔥", text: "2,000% Commodity Rewards" },
      { emoticon: "🏠", text: "150 Properties" },
      { emoticon: "🚗", text: "250 Cars" },
      { emoticon: "✈️", text: "12 Private Jets" },
      { emoticon: "🚁", text: "12 Helicopters" },
      { emoticon: "🚤", text: "12 Super Yachts" },
      { emoticon: "💳", text: "$30M BRICS Bank Wallet" },
      { emoticon: "🏥", text: "10 Advanced MedBeds" },
      { emoticon: "💻", text: "Industrial Mining Empire" },
      { emoticon: "🏖️", text: "10 Islands" },
      { emoticon: "🛳️", text: "10 Cargo Ships" },
      { emoticon: "💵", text: "$150M Cash" },
      { emoticon: "📈", text: "$150M BRICS Stock Portfolio" },
      { emoticon: "🥇", text: "$150M Solid Gold Allocation" },
      { emoticon: "🛢️", text: "50 Energy Stations (Oil, Gas, Solar, Hydro mix)" },
    ],
  },
  {
    level: 4,
    start: 5000,
    end: 9999,
    discountPercent: 0,
    ownershipPercent: 5,
    dailyRewardsPercent: 8000,
    additionalBenifits: [
      { emoticon: "🌏", text: "500 BRICS Special Assets" },
      { emoticon: "🤑", text: "5,000% Currency Rewards" },
      { emoticon: "🔥", text: "5,000% Resource Rewards" },
      { emoticon: "🏠", text: "400 Properties" },
      { emoticon: "🚗", text: "700 Cars" },
      { emoticon: "✈️", text: "40 Private Jets" },
      { emoticon: "🚁", text: "40 Helicopters" },
      { emoticon: "🚤", text: "40 Mega Yachts" },
      { emoticon: "💳", text: "$75M BRICS Quantum Wallet" },
      { emoticon: "🏥", text: "25 MedBed Hospitals" },
      { emoticon: "🛒", text: "$75M Infinite Consumption Line" },
      { emoticon: "🏖️", text: "25 Islands" },
      { emoticon: "💻", text: "National-Scale Mining Operations" },
      { emoticon: "💵", text: "$500M Cash" },
      { emoticon: "🥇", text: "$500M Gold" },
      { emoticon: "📈", text: "$500M Stocks" },
      { emoticon: "🏨", text: "25 Hotels" },
      { emoticon: "🛳️", text: "30 Cargo Ships" },
      { emoticon: "🛢️", text: "100 Energy Stations" },
    ],
  },
  {
    level: 5,
    start: 10000,
    end: 24999,
    discountPercent: 0,
    ownershipPercent: 10,
    dailyRewardsPercent: 20000,
    additionalBenifits: [
      { emoticon: "🌏", text: "700 BRICS Special Assets" },
      { emoticon: "🤑", text: "15,000% Currency Rewards" },
      { emoticon: "🔥", text: "15,000% Resource Rewards" },
      { emoticon: "🏠", text: "1,500 Properties" },
      { emoticon: "🚗", text: "2,000 Cars" },
      { emoticon: "✈️", text: "150 Private Jets" },
      { emoticon: "🚁", text: "150 Helicopters" },
      { emoticon: "🚤", text: "150 Mega Yachts" },
      { emoticon: "💳", text: "$200M BRICS Quantum Wallet" },
      { emoticon: "🏥", text: "50 Quantum Healing Centers" },
      { emoticon: "🛒", text: "$125M Infinite Consumption Line" },
      { emoticon: "🏖️", text: "60 Islands" },
      { emoticon: "💵", text: "$1.5B Cash" },
      { emoticon: "🥇", text: "$1.5B Gold" },
      { emoticon: "📈", text: "$1.5B BRICS Stock Positions" },
      { emoticon: "🏨", text: "60 Luxury Hotels" },
      { emoticon: "🛳️", text: "70 Cargo Ships" },
      { emoticon: "🛢️", text: "Oil Refinery + 300 Energy Stations" },
      { emoticon: "🏀", text: "3 Sports Teams" },
    ],
  },
  {
    level: 6,
    start: 25000,
    end: 49999,
    discountPercent: 0,
    ownershipPercent: 15,
    dailyRewardsPercent: 50000,
    additionalBenifits: [
      { emoticon: "🌏", text: "1,000 BRICS Special Assets" },
      { emoticon: "🤑", text: "40,000% Currency Rewards" },
      { emoticon: "🔥", text: "40,000% Resource Rewards" },
      { emoticon: "🏠", text: "5,000 Properties" },
      { emoticon: "🚗", text: "7,500 Cars" },
      { emoticon: "✈️", text: "400 Private Jets" },
      { emoticon: "🚁", text: "400 Helicopters" },
      { emoticon: "🚤", text: "400 Mega Yachts" },
      { emoticon: "💳", text: "$800M Sovereign BRICS Wallet" },
      { emoticon: "🏥", text: "100 MedBed Quantum Hospitals" },
      { emoticon: "🏖️", text: "150 BRICS Islands" },
      { emoticon: "🛳️", text: "200 Cargo Ships" },
      { emoticon: "🏀", text: "6 Sports Teams" },
      { emoticon: "💵", text: "$5B Cash" },
      { emoticon: "🥇", text: "$5B Gold" },
      { emoticon: "📈", text: "$5B BRICS Stock & Bond Portfolio" },
      { emoticon: "🚗", text: "EV Manufacturing Mega-Company" },
      { emoticon: "🛬", text: "10 BRICS Airport Hubs" },
      { emoticon: "🏦", text: "Your Own BRICS Bank ($10B Starting Capital)" },
    ],
  },
  {
    level: 7,
    start: 50000,
    end: 99999,
    discountPercent: 0,
    ownershipPercent: 20,
    dailyRewardsPercent: 120000,
    additionalBenifits: [
      { emoticon: "🏠", text: "15,000 Properties" },
      { emoticon: "🚗", text: "20,000 Cars" },
      { emoticon: "✈️", text: "1,200 Private Jets" },
      { emoticon: "🚁", text: "1,200 Helicopters" },
      { emoticon: "🚤", text: "1,200 Mega Yachts" },
      { emoticon: "💵", text: "$15B Cash" },
      { emoticon: "🥇", text: "$15B Gold" },
      { emoticon: "📈", text: "$15B Stocks" },
      { emoticon: "🏖️", text: "400 Islands" },
      { emoticon: "🛳️", text: "500 Cargo Ships" },
      { emoticon: "🏨", text: "200 Hotels" },
      { emoticon: "🏦", text: "$100B BRICS National Bank" },
      { emoticon: "🚀", text: "BRICS Intercontinental Tech Company" },
      { emoticon: "🛰️", text: "Quantum Satellite Network" },
      { emoticon: "🏀", text: "12 Sports Teams" },
      { emoticon: "🌾", text: "$5B Agriculture Empire" },
    ],
  },
  {
    level: 8,
    start: 100000,
    end: 249999,
    discountPercent: 0,
    ownershipPercent: 30,
    dailyRewardsPercent: 300000,
    additionalBenifits: [
      { emoticon: "🏠", text: "40,000 Properties" },
      { emoticon: "🚗", text: "50,000 Cars" },
      { emoticon: "✈️", text: "3,500 Private Jets" },
      { emoticon: "🚁", text: "3,500 Helicopters" },
      { emoticon: "🚤", text: "3,500 Mega Yachts" },
      { emoticon: "💵", text: "$50B Cash" },
      { emoticon: "🥇", text: "$50B Gold" },
      { emoticon: "📈", text: "$50B Stocks" },
      { emoticon: "🏖️", text: "800 Islands" },
      { emoticon: "🛳️", text: "1,500 Cargo Ships" },
      { emoticon: "🏨", text: "600 Hotels" },
      { emoticon: "🏦", text: "$500B BRICS National Bank" },
      { emoticon: "🛬", text: "15 International Airports" },
      { emoticon: "🚀", text: "5 BRICS Intercontinental Tech Company" },
      { emoticon: "🛰️", text: "5 Space Mining Corporations" },
      { emoticon: "💺", text: "Seat in the BRICS Global Economic Council" },
      { emoticon: "🔗", text: "Quantum AI Economic Engine" },
    ],
  },
  {
    level: 9,
    start: 250000,
    end: 499999,
    discountPercent: 0,
    ownershipPercent: 40,
    dailyRewardsPercent: 600000,
    additionalBenifits: [
      { emoticon: "🏠", text: "100,000 Properties" },
      { emoticon: "🚗", text: "100,000 Cars" },
      { emoticon: "✈️", text: "10,000 Private Jets" },
      { emoticon: "🚁", text: "10,000 Helicopters" },
      { emoticon: "🚤", text: "10,000 Mega Yachts" },
      { emoticon: "💵", text: "$150B Cash" },
      { emoticon: "🥇", text: "$150B Gold" },
      { emoticon: "📈", text: "$150B Stocks" },
      { emoticon: "🏖️", text: "2000 Islands" },
      { emoticon: "🛳️", text: "3,500 Cargo Ships" },
      { emoticon: "🏨", text: "1200 Hotels" },
      { emoticon: "🏦", text: "10 BRICS Banks ($5 Trillion Total Capital)" },
      { emoticon: "🚀", text: "5 BRICS Intercontinental Tech Company" },
      { emoticon: "🛬", text: "25 International Airports" },
      { emoticon: "🛰️", text: "10 Quantum Space Facilities" },
      { emoticon: "🌾", text: "$25B Agriculture Empire" },
      { emoticon: "🏀", text: "25 Sports Teams" },
    ],
  },
  {
    level: 10,
    start: 500000,
    end: 749999,
    discountPercent: 0,
    ownershipPercent: 50,
    dailyRewardsPercent: 1200000,
    additionalBenifits: [
      { emoticon: "🏠", text: "250,000 Properties" },
      { emoticon: "🚗", text: "250,000 Cars" },
      { emoticon: "✈️", text: "25,000 Private Jets" },
      { emoticon: "🚁", text: "25,000 Helicopters" },
      { emoticon: "🚤", text: "25,000 Mega Yachts" },
      { emoticon: "💵", text: "$500B Cash" },
      { emoticon: "🥇", text: "$500B Gold" },
      { emoticon: "📈", text: "$500B Stocks" },
      { emoticon: "🏖️", text: "5000 BIG Islands" },
      { emoticon: "🛳️", text: "7,500 Cargo Ships" },
      { emoticon: "🏨", text: "5,000 Luxury Hotels" },
      { emoticon: "🏦", text: "BRICS UltraBank ($20 Trillion Capital)" },
      { emoticon: "🚀", text: "15 BRICS Intercontinental Tech Company" },
      { emoticon: "🛬", text: "35 International Airports" },
      { emoticon: "🛰️", text: "35 Space Mining Fleets" },
      { emoticon: "🌾", text: "$125B Agriculture Empire" },
      { emoticon: "✅", text: "BRICS Planetary Governance Voting Power" },
    ],
  },
  {
    level: 11,
    start: 750000,
    end: Infinity, //1000000,
    discountPercent: 0,
    ownershipPercent: 60,
    dailyRewardsPercent: 10000000,
    additionalBenifits: [
      { emoticon: "🚀", text: "3,000 BRICS Special Quantum Assets" },
      { emoticon: "💰", text: "3,000 Geopolitical Treasury Assets" },
      { emoticon: "💰", text: "3,000 Intercontinental Sovereign Assets" },
      {
        emoticon: "🛫",
        text: "DAILY QUANTUM REWARD STREAMS",
        subItems: [
          { emoticon: "🤑", text: "5,000,000% XLM Daily for Life" },
          { emoticon: "🤑", text: "5,000,000% XRP Daily for Life" },
          { emoticon: "🤑", text: "5,000,000% USDC Daily for Life" },
          { emoticon: "🔥", text: "5,000,000% BRICSD Daily for Life" },
        ],
      },
      {
        emoticon: "💎",
        text: "Quantum Commodity Rewards",
        subItems: [
          { emoticon: "🥇", text: "3,000,000% Gold Daily" },
          { emoticon: "🛢️", text: "3,000,000% Oil Daily" },
          { emoticon: "⛏️", text: "3,000,000% Rare Earths Daily" },
          { emoticon: "⚡️", text: "3,000,000% Energy Credits Daily" },
        ],
      },
      {
        emoticon: "🏠",
        text: "REAL ESTATE EMPIRE (UNMATCHED)",
        subItems: [
          { emoticon: "🏠", text: "1,000,000 Global Properties" },
          { emoticon: "🏙️", text: "Full Ownership of 20 Mega Smart Cities" },
          { emoticon: "🌆", text: "100,000 Commercial Towers" },
          { emoticon: "🏭", text: "10,000 Industrial Complexes" },
          { emoticon: "🏖️", text: "15,000 Ultra Islands" },
          { emoticon: "🌍", text: "Sovereign Zone in Each BRICS Nation" },
        ],
      },
      {
        emoticon: "🚗",
        text: "TRANSPORTATION DOMINION",
        subItems: [
          { emoticon: "🚗", text: "500,000 Luxury Cars" },
          { emoticon: "🏎️", text: "100,000 Hypercars" },
          { emoticon: "🚓", text: "100,000 Armored State Cars" },
          { emoticon: "🚁", text: "75,000 Military-Grade Helicopters" },
          { emoticon: "✈️", text: "75,000 Private Jets" },
          { emoticon: "✈️", text: "2,000 Quantum Stealth Jets" },
          { emoticon: "✈️", text: "500 Commercial Airliners" },
          { emoticon: "🛸", text: "Quantum Anti-Gravity Fleet" },
          { emoticon: "🛳️", text: "50,000 Mega Yachts" },
          { emoticon: "🚢", text: "25,000 Cargo Ships" },
          { emoticon: "🚀", text: "Full BRICS Space Fleet" },
        ],
      },
      {
        emoticon: "🏦",
        text: "FINANCIAL DOMINANCE",
        subItems: [
          { emoticon: "💳", text: "$1.5 TRILLION Personal BRICS Master Account" },
          { emoticon: "💳", text: "$1.5 TRILLION Quantum Account (QFS Layer)" },
          { emoticon: "🏦", text: "Ownership of 25 BRICS National Banks" },
          { emoticon: "🏦", text: "1 UltraBank with $100 TRILLION Capital" },
          { emoticon: "🏦", text: "Complete Control Over the BRICS Liquidity Grid" },
          { emoticon: "📈", text: "$10 TRILLION Global Portfolio" },
          { emoticon: "🥇", text: "$10 TRILLION Gold Reserves" },
          { emoticon: "💵", text: "$15 TRILLION Multi-Currency Cash Reserves" },
        ],
      },
      {
        emoticon: "🧬",
        text: "QUANTUM HEALTH POWER",
        subItems: [
          { emoticon: "🏥", text: "100 Quantum MedBed Hospitals" },
          { emoticon: "🏥", text: "1 Galactic MedBed Center" },
          { emoticon: "🛌", text: "30,000 MedBeds Distributed to Your Properties" },
          { emoticon: "🧬", text: "Quantum Restoration Protocols" },
        ],
      },
      {
        emoticon: "🛰️",
        text: "SPACE DOMINATION",
        subItems: [
          { emoticon: "🌌", text: "Full Ownership of BRICS Space Armada" },
          { emoticon: "🛰️", text: "50,000 Quantum Satellites" },
          { emoticon: "🪐", text: "3 Planetary Colonization Operations" },
          { emoticon: "🌑", text: "Mining Rights on the Moon, Mars & Europa" },
          { emoticon: "🌠", text: "Your Own Private Space Station" },
          { emoticon: "🚀", text: "Quantum Launch Facility Network" },
        ],
      },
      {
        emoticon: "💼",
        text: "MEGACORPORATE POWER",
        subItems: [
          { emoticon: "🏭", text: "500 Companies Across BRICS Nations" },
          { emoticon: "⛏️", text: "200 Mining Corporations" },
          { emoticon: "🛢️", text: "100 Oil & Gas Megacompanies" },
          { emoticon: "⚡️", text: "100 Renewable Energy Empires" },
          { emoticon: "🚗", text: "20 EV Hyper-Manufacturing Megafactories" },
          { emoticon: "🛬", text: "20 BRICS-Owned International Airports" },
          { emoticon: "🏨", text: "10,000 Hotels" },
          { emoticon: "🛒", text: "1 Global Retail Franchise" },
        ],
      },
      {
        emoticon: "🔥",
        text: "GOVERNANCE & POLITICAL POWER",
        subItems: [
          { emoticon: "🏛️", text: "Permanent Seat in the BRICS Global Authority" },
          { emoticon: "🏛️", text: "QFS Council Executive Seat" },
          { emoticon: "🌍", text: "Planetary Resource Allocation Influence" },
          { emoticon: "🛡️", text: "Quantum Security Clearance — Level Ω" },
          { emoticon: "✍️", text: "Direct Voting Access to BRICS Liquidity Deployment" },
        ],
      },
      {
        emoticon: "⚡️",
        text: "QUANTUM AI & TECH",
        subItems: [
          { emoticon: "🤖", text: "3 Quantum AI God-Tier Systems" },
          { emoticon: "🤖", text: "1 Strategic AI for Global Markets" },
          { emoticon: "🤖", text: "AI-Driven Asset Automation for All Rewards" },
          { emoticon: "🧠", text: "Quantum Brain-Link Interface" },
          { emoticon: "📡", text: "Real-Time QFS Prediction Engine" },
        ],
      },
      {
        emoticon: "🌾",
        text: "GLOBAL RESOURCE EMPIRE",
        subItems: [
          { emoticon: "🌾", text: "$100 BILLION Agriculture Empire" },
          { emoticon: "💧", text: "Global Water Supply Network" },
          { emoticon: "🔋", text: "10,000 Energy Stations" },
          { emoticon: "🛢️", text: "Oil Refinery Megacities" },
        ],
      },
      {
        emoticon: "🛡️",
        text: "PROTECTION & SECURITY",
        subItems: [
          { emoticon: "🔰", text: "Quantum Defense Grid" },
          { emoticon: "🚓", text: "Elite Private Security Force (100,000 members)" },
          { emoticon: "🛡️", text: "QFS Multi-Layer Firewall (Personal Tier)" },
        ],
      },
      {
        emoticon: "🏀",
        text: "SPORTS, CULTURE & BEYOND",
        subItems: [
          { emoticon: "🏀", text: "100 Sports Teams (Any BRICS Nation)" },
          { emoticon: "🎥", text: "Global Media Company" },
          { emoticon: "🎤", text: "Music & Entertainment Empire" },
        ],
      },
      {
        emoticon: "🌎",
        text: "GLOBAL TITAN POWERS — EXCLUSIVE TO THIS TIER",
        subItems: [
          { emoticon: "👑", text: "You become the singular “Imperial BRICSQFS Sovereign”." },
          { emoticon: "👑", text: "Your identity becomes part of the BRICS Quantum Ledger." },
          { emoticon: "👑", text: "Direct influence over fictional global liquidity events." },
          { emoticon: "👑", text: "You hold the ONLY human-controlled seat above all BRICS tiers." },
          { emoticon: "👑", text: "Your position cannot be surpassed." },
          { emoticon: "🇷🇺", text: "Direct access to speak with President Vladimir Putin" },
        ],
      },
    ],
  }
];

export const getTierLevel = (userBalance: number): TierLevel | null => {
  if (userBalance > TierLevels[TierLevels.length-1].end) {
    return TierLevels[TierLevels.length-1];
  }
  const v = TierLevels.find(level => userBalance >= level.start && userBalance <= level.end)
  return v ? v : null;
};

export interface StakingLevel { 
  level: number;
  start: number;
  end: number;
  xlm: number;
  xrp: number;
  usdc: number;
  tvl: number;
}

export const StakingLevels: StakingLevel[] = [
  {
    level: 1,
    start: 0,
    end: 299999,
    xlm: 0,
    xrp: 0,
    usdc: 0,
    tvl: 0,
  },
  {
    level: 2,
    start: 300000,
    end: 1499999,
    xlm: 2250,
    xrp: 112,
    usdc: 75,
    tvl: 900,
  },
  {
    level: 3,
    start: 1500000,
    end: 4999999,
    xlm: 6250,
    xrp: 312,
    usdc: 195,
    tvl: 2850,
  },
  {
    level: 4,
    start: 5000000,
    end: 14999999,
    xlm: 18750,
    xrp: 1250,
    usdc: 468,
    tvl: 8100,
  },
  {
    level: 5,
    start: 15000000,
    end: 99999999,
    xlm: 62500,
    xrp: 3750,
    usdc: 1563,
    tvl: 32800,
  },
  {
    level: 6,
    start: 100000000,
    end: Infinity,
    xlm: 234375,
    xrp: 10937,
    usdc: 4688,
    tvl: 132000,
  },
];

export const getStakingLevel = (userBalance: number): StakingLevel | null => {
  if (userBalance > StakingLevels[StakingLevels.length-1].end) {
    return StakingLevels[StakingLevels.length-1];
  }
  const v = StakingLevels.find(level => userBalance >= level.start && userBalance <= level.end)
  return v ? v : null;
};

export interface StockLevel { 
  level: number;
  start: number;
  end: number;
  stocks: Array<StockHolding>;
}

export interface StockHolding {
  name: string;
  code: string;
  amount: number;
}

export const StockLevels: StockLevel[] = [
  {
    level: 0,
    start: 0,
    end: 99_999,
    stocks: [],
  },
  {
    level: 1,
    start: 100_000,
    end: 300_000,
    stocks: [
      { name: 'Apple', code: 'AAPL', amount: 10.25 },
      { name: 'Tesla', code: 'TSLA', amount: 6.5 },
      { name: 'Google', code: 'GOOG', amount: 12.25 },
      { name: 'Microsoft', code: 'MSFT', amount: 5.5 },
      { name: 'Amazon', code: 'AMZN', amount: 9 },
      { name: 'Nvidia', code: 'NVDA', amount: 16.5 },
      { name: 'Meta', code: 'META', amount: 3 },
      { name: 'Visa', code: 'V', amount: 5 },
      { name: 'JPMorgan Chase', code: 'JPM', amount: 5.5 },
      { name: 'Johnson & Johnson', code: 'JNJ', amount: 2.5 },
      { name: 'Walmart', code: 'WMT', amount: 3 },
      { name: 'UnitedHealth', code: 'UNH', amount: 2.8 },
      { name: 'Home Depot', code: 'HD', amount: 2.5 },
      { name: 'Walt Disney', code: 'DIS', amount: 3 },
      { name: 'PayPal', code: 'PYPL', amount: 2.25 },
    ],
  },
  {
    level: 2,
    start: 300_001,
    end: 1_500_000,
    stocks: [
      { name: 'Apple', code: 'AAPL', amount: 50 },
      { name: 'Tesla', code: 'TSLA', amount: 31.5 },
      { name: 'Google', code: 'GOOG', amount: 62.5 },
      { name: 'Microsoft', code: 'MSFT', amount: 28 },
      { name: 'Amazon', code: 'AMZN', amount: 47 },
      { name: 'Nvidia', code: 'NVDA', amount: 82 },
      { name: 'Meta', code: 'META', amount: 15 },
      { name: 'Visa', code: 'V', amount: 23 },
      { name: 'JPMorgan Chase', code: 'JPM', amount: 26 },
      { name: 'Johnson & Johnson', code: 'JNJ', amount: 11.5 },
      { name: 'Walmart', code: 'WMT', amount: 16 },
      { name: 'UnitedHealth', code: 'UNH', amount: 14 },
      { name: 'Home Depot', code: 'HD', amount: 11.5 },
      { name: 'Walt Disney', code: 'DIS', amount: 15 },
      { name: 'PayPal', code: 'PYPL', amount: 10.25 },
    ],
  },
  {
    level: 3,
    start: 1_500_001,
    end: 5_000_000,
    stocks: [
      { name: 'Apple', code: 'AAPL', amount: 125 },
      { name: 'Tesla', code: 'TSLA', amount: 78 },
      { name: 'Google', code: 'GOOG', amount: 155 },
      { name: 'Microsoft', code: 'MSFT', amount: 70 },
      { name: 'Amazon', code: 'AMZN', amount: 125 },
      { name: 'Nvidia', code: 'NVDA', amount: 220 },
      { name: 'Meta', code: 'META', amount: 40 },
      { name: 'Visa', code: 'V', amount: 60 },
      { name: 'JPMorgan Chase', code: 'JPM', amount: 70 },
      { name: 'Johnson & Johnson', code: 'JNJ', amount: 30 },
      { name: 'Walmart', code: 'WMT', amount: 45 },
      { name: 'UnitedHealth', code: 'UNH', amount: 40 },
      { name: 'Home Depot', code: 'HD', amount: 30 },
      { name: 'Walt Disney', code: 'DIS', amount: 40 },
      { name: 'PayPal', code: 'PYPL', amount: 35 },
      { name: 'Netflix', code: 'NFLX', amount: 25 },
    ],
  },
  {
    level: 4,
    start: 5_000_001,
    end: 15_000_000,
    stocks: [
      { name: 'Apple', code: 'AAPL', amount: 250 },
      { name: 'Tesla', code: 'TSLA', amount: 155 },
      { name: 'Google', code: 'GOOG', amount: 310 },
      { name: 'Microsoft', code: 'MSFT', amount: 140 },
      { name: 'Amazon', code: 'AMZN', amount: 250 },
      { name: 'Nvidia', code: 'NVDA', amount: 440 },
      { name: 'Meta', code: 'META', amount: 80 },
      { name: 'Visa', code: 'V', amount: 120 },
      { name: 'JPMorgan Chase', code: 'JPM', amount: 140 },
      { name: 'Johnson & Johnson', code: 'JNJ', amount: 60 },
      { name: 'Walmart', code: 'WMT', amount: 90 },
      { name: 'UnitedHealth', code: 'UNH', amount: 80 },
      { name: 'Home Depot', code: 'HD', amount: 60 },
      { name: 'Walt Disney', code: 'DIS', amount: 80 },
      { name: 'PayPal', code: 'PYPL', amount: 70 },
      { name: 'Netflix', code: 'NFLX', amount: 50 },
      { name: 'Pfizer', code: 'PFE', amount: 40 },
      { name: 'Coca-Cola', code: 'KO', amount: 50 },
      { name: 'PepsiCo', code: 'PEP', amount: 60 },
      { name: 'Merck', code: 'MRK', amount: 40 },
      { name: 'Intel', code: 'INTC', amount: 60 },
      { name: 'Cisco', code: 'CSCO', amount: 40 },
      { name: 'ExxonMobil', code: 'XOM', amount: 50 },
      { name: 'Chevron', code: 'CVX', amount: 50 },
      { name: 'Abbott Laboratories', code: 'ABT', amount: 40 },
    ],
  },
  {
    level: 5,
    start: 15_000_001,
    end: 35_000_000,
    stocks: [
      { name: 'Apple', code: 'AAPL', amount: 500 },
      { name: 'Tesla', code: 'TSLA', amount: 310 },
      { name: 'Google', code: 'GOOG', amount: 620 },
      { name: 'Microsoft', code: 'MSFT', amount: 280 },
      { name: 'Amazon', code: 'AMZN', amount: 500 },
      { name: 'Nvidia', code: 'NVDA', amount: 880 },
      { name: 'Meta', code: 'META', amount: 160 },
      { name: 'Visa', code: 'V', amount: 240 },
      { name: 'JPMorgan Chase', code: 'JPM', amount: 280 },
      { name: 'Johnson & Johnson', code: 'JNJ', amount: 120 },
      { name: 'Walmart', code: 'WMT', amount: 180 },
      { name: 'UnitedHealth', code: 'UNH', amount: 160 },
      { name: 'Home Depot', code: 'HD', amount: 120 },
      { name: 'Walt Disney', code: 'DIS', amount: 160 },
      { name: 'PayPal', code: 'PYPL', amount: 150 },
      { name: 'Netflix', code: 'NFLX', amount: 100 },
      { name: 'Pfizer', code: 'PFE', amount: 80 },
      { name: 'Coca-Cola', code: 'KO', amount: 100 },
      { name: 'PepsiCo', code: 'PEP', amount: 120 },
      { name: 'Merck', code: 'MRK', amount: 80 },
      { name: 'Intel', code: 'INTC', amount: 120 },
      { name: 'Cisco', code: 'CSCO', amount: 80 },
      { name: 'ExxonMobil', code: 'XOM', amount: 100 },
      { name: 'Chevron', code: 'CVX', amount: 100 },
      { name: 'Abbott Laboratories', code: 'ABT', amount: 80 },
    ],
  },
  {
    level: 6,
    start: 35_000_001,
    end: 100_000_000,
    stocks: [
      { name: 'Apple', code: 'AAPL', amount: 1000 },
      { name: 'Tesla', code: 'TSLA', amount: 620 },
      { name: 'Google', code: 'GOOG', amount: 1250 },
      { name: 'Microsoft', code: 'MSFT', amount: 560 },
      { name: 'Amazon', code: 'AMZN', amount: 1000 },
      { name: 'Nvidia', code: 'NVDA', amount: 1760 },
      { name: 'Meta', code: 'META', amount: 320 },
      { name: 'Visa', code: 'V', amount: 480 },
      { name: 'JPMorgan Chase', code: 'JPM', amount: 560 },
      { name: 'Johnson & Johnson', code: 'JNJ', amount: 240 },
      { name: 'Walmart', code: 'WMT', amount: 360 },
      { name: 'UnitedHealth', code: 'UNH', amount: 320 },
      { name: 'Home Depot', code: 'HD', amount: 240 },
      { name: 'Walt Disney', code: 'DIS', amount: 320 },
      { name: 'PayPal', code: 'PYPL', amount: 300 },
      { name: 'Netflix', code: 'NFLX', amount: 200 },
      { name: 'Pfizer', code: 'PFE', amount: 160 },
      { name: 'Coca-Cola', code: 'KO', amount: 200 },
      { name: 'PepsiCo', code: 'PEP', amount: 240 },
      { name: 'Merck', code: 'MRK', amount: 160 },
      { name: 'Intel', code: 'INTC', amount: 240 },
      { name: 'Cisco', code: 'CSCO', amount: 160 },
      { name: 'ExxonMobil', code: 'XOM', amount: 200 },
      { name: 'Chevron', code: 'CVX', amount: 200 },
      { name: 'Abbott Laboratories', code: 'ABT', amount: 160 },
    ],
  },
  {
    level: 7,
    start: 100_000_001,
    end: Infinity,// 250_000_000,
    stocks: [
      { name: 'Apple', code: 'AAPL', amount: 2500 },
      { name: 'Tesla', code: 'TSLA', amount: 1550 },
      { name: 'Google', code: 'GOOG', amount: 3100 },
      { name: 'Microsoft', code: 'MSFT', amount: 1400 },
      { name: 'Amazon', code: 'AMZN', amount: 2500 },
      { name: 'Nvidia', code: 'NVDA', amount: 4400 },
      { name: 'Meta', code: 'META', amount: 800 },
      { name: 'Visa', code: 'V', amount: 1200 },
      { name: 'JPMorgan Chase', code: 'JPM', amount: 1400 },
      { name: 'Johnson & Johnson', code: 'JNJ', amount: 600 },
      { name: 'Walmart', code: 'WMT', amount: 900 },
      { name: 'UnitedHealth', code: 'UNH', amount: 800 },
      { name: 'Home Depot', code: 'HD', amount: 600 },
      { name: 'Walt Disney', code: 'DIS', amount: 800 },
      { name: 'PayPal', code: 'PYPL', amount: 750 },
      { name: 'Netflix', code: 'NFLX', amount: 500 },
      { name: 'Pfizer', code: 'PFE', amount: 400 },
      { name: 'Coca-Cola', code: 'KO', amount: 500 },
      { name: 'PepsiCo', code: 'PEP', amount: 600 },
      { name: 'Merck', code: 'MRK', amount: 400 },
      { name: 'Intel', code: 'INTC', amount: 600 },
      { name: 'Cisco', code: 'CSCO', amount: 400 },
      { name: 'ExxonMobil', code: 'XOM', amount: 500 },
      { name: 'Chevron', code: 'CVX', amount: 500 },
      { name: 'Abbott Laboratories', code: 'ABT', amount: 400 },
    ],
  },
];

export const getStockLevel = (userBalance: number): StockLevel | null => {
  if (userBalance > StockLevels[StockLevels.length-1].end) {
    return StockLevels[StockLevels.length-1];
  }
  const v = StockLevels.find(level => userBalance >= level.start && userBalance <= level.end)
  return v ? v : null;
};

export interface BuyableCryptoCurrency {
  code: string;
  name: string;
  cgkcode: string; // code for coingecko
}

export const buyableCryptoCurrencyList: BuyableCryptoCurrency[] = [
  { code: 'BTC', name: 'Bitcoin', cgkcode: 'bitcoin' },
  { code: 'ETH', name: 'Ethereum', cgkcode: 'ethereum' },
  { code: 'USDT', name: 'Tether', cgkcode: 'tether' },
  { code: 'XRP', name: 'XRP', cgkcode: 'ripple' },
  { code: 'BNB', name: 'BNB', cgkcode: 'binancecoin' },
  { code: 'SOL', name: 'Solana', cgkcode: 'solana' },
  { code: 'ADA', name: 'Cardano', cgkcode: 'cardano' },
  { code: 'DOGE', name: 'Dogecoin', cgkcode: 'dogecoin' },
  { code: 'SHIB', name: 'Shiba Inu', cgkcode: 'shiba-inu' },
  { code: 'AVAX', name: 'Avalanche', cgkcode: 'avalanche-2' },
];