/** Demo/placeholder data for UI pages not yet wired to live API. */

export const mockFarmer = {
  name: 'Ramesh Kumar',
  village: 'Venkateshwara Pally, Warangal',
  upiId: 'ramesh.kumar@oksbi',
  avatar: 'https://ui-avatars.com/api/?name=Ramesh+Kumar&background=2E7D32&color=fff&size=128',
};

export const mockWallet = {
  balance: 18420,
  verifiedCredits: 24.6,
  pendingCredits: 8.2,
  blockchainExplorerLink: 'https://polygonscan.com',
  activities: [
    {
      id: 'act-1',
      type: 'credit',
      title: 'Carbon Credit Minted',
      credits: 12.4,
      date: '22 May 2026',
      meta: 'Warangal North Plot',
      status: 'Completed',
    },
    {
      id: 'act-2',
      type: 'payout',
      title: 'UPI Payout — Marketplace Sale',
      amount: 6240,
      date: '18 May 2026',
      status: 'Completed',
    },
    {
      id: 'act-3',
      type: 'credit',
      title: 'Biodiversity Bonus Credits',
      credits: 2.1,
      date: '12 May 2026',
      meta: 'Sentinel-2 verified',
      status: 'Completed',
    },
    {
      id: 'act-4',
      type: 'pending',
      title: 'Listing Auction — Active Bid',
      amount: 5200,
      date: 'Today',
      status: 'Pending',
      statusText: 'In Escrow',
    },
  ],
};

export const mockMarketplace = {
  activeAuctions: [
    {
      id: 'auc-01',
      crop: 'Agroforestry — Teak & Neem',
      farmer: 'Ramesh Kumar',
      location: 'Warangal, Telangana',
      credits: '24 tCO2e',
      currentBid: '₹520/credit',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
    },
    {
      id: 'auc-02',
      crop: 'Organic Paddy — SRI Method',
      farmer: 'K. Ranga Rao',
      location: 'Nalgonda, Telangana',
      credits: '18 tCO2e',
      currentBid: '₹495/credit',
      image: 'https://images.unsplash.com/photo-1530836369250-59d4cc6901c2?w=600&h=400&fit=crop',
    },
    {
      id: 'auc-03',
      crop: 'Cotton — Zero Tillage',
      farmer: 'M. Chennappa',
      location: 'Mahbubnagar, Telangana',
      credits: '31 tCO2e',
      currentBid: '₹540/credit',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop',
    },
  ],
};

export const mockCorporate = {
  companyName: 'Tata Sustainability Ventures',
  purchasedCredits: 8420,
  esgTarget: 12000,
  complianceScore: 'A+ (CDP Gold)',
  activeBids: 3,
  offsetsTimeline: [
    { year: '2022', offset: 1200, target: 2000 },
    { year: '2023', offset: 3400, target: 4000 },
    { year: '2024', offset: 5800, target: 6000 },
    { year: '2025', offset: 7200, target: 8000 },
    { year: '2026', offset: 8420, target: 12000 },
  ],
  portfolio: [
    {
      id: 'port-1',
      farm: 'Warangal Agroforestry Plot',
      state: 'Telangana',
      size: '4.2 Ha',
      status: 'Verified',
      purchased: '24 tCO2e',
      standard: 'Gold Standard',
      price: '₹12,480',
    },
    {
      id: 'port-2',
      farm: 'Nalgonda Paddy Cluster',
      state: 'Telangana',
      size: '3.5 Ha',
      status: 'Verified',
      purchased: '18 tCO2e',
      standard: 'Verra VCS',
      price: '₹9,360',
    },
    {
      id: 'port-3',
      farm: 'Khammam Teak Grove',
      state: 'Telangana',
      size: '2.1 Ha',
      status: 'Pending',
      purchased: '12 tCO2e',
      standard: 'ISO 14064',
      price: '₹6,240',
    },
  ],
};

export const mockAdmin = {
  totalFarmsApproved: 1247,
  activeDetections: 3,
  revenueMetrics: {
    totalVolume: '₹2.4 Cr',
    blockchainGasAverage: '0.002 MATIC',
  },
};

const farmScanHistory = [
  { id: 's1', source: 'Sentinel-2 SR', time: '24 May 2026, 06:12 IST', label: 'NDVI 0.74', type: 'success' },
  { id: 's2', source: 'Landsat-9 OLI', time: '20 May 2026, 05:48 IST', label: 'Cloud-free', type: 'info' },
  { id: 's3', source: 'ISRO Bhuvan LULC', time: '15 May 2026, 12:00 IST', label: 'Boundary OK', type: 'success' },
];

export const mockFarms = [
  {
    id: 'farm-01',
    name: 'Warangal North Plot',
    cropType: 'Agroforestry',
    ndvi: 0.74,
    vegetationHealth: 'Excellent',
    carbonPot: '12.4 tCO2e',
    soilCarbon: '2.8% +0.4%',
    aiConfidence: '98.2%',
    biodiversity: 'High (62 species)',
    waterRetention: '45% Optimal',
    ndviTrend: [
      { month: 'Jan', ndvi: 0.52 },
      { month: 'Feb', ndvi: 0.58 },
      { month: 'Mar', ndvi: 0.65 },
      { month: 'Apr', ndvi: 0.71 },
      { month: 'May', ndvi: 0.74 },
      { month: 'Jun', ndvi: 0.69 },
    ],
    scans: farmScanHistory,
  },
  {
    id: 'farm-02',
    name: 'East Paddy Field',
    cropType: 'Organic Paddy',
    ndvi: 0.61,
    vegetationHealth: 'Good',
    carbonPot: '8.6 tCO2e',
    soilCarbon: '2.1% +0.2%',
    aiConfidence: '94.5%',
    biodiversity: 'Moderate (38 species)',
    waterRetention: '52% Optimal',
    ndviTrend: [
      { month: 'Jan', ndvi: 0.45 },
      { month: 'Feb', ndvi: 0.51 },
      { month: 'Mar', ndvi: 0.58 },
      { month: 'Apr', ndvi: 0.62 },
      { month: 'May', ndvi: 0.61 },
      { month: 'Jun', ndvi: 0.55 },
    ],
    scans: farmScanHistory,
  },
  {
    id: 'auc-01',
    name: 'Warangal Agroforestry',
    cropType: 'Teak & Neem',
    ndvi: 0.74,
    vegetationHealth: 'Excellent',
    carbonPot: '24 tCO2e',
    soilCarbon: '2.8% +0.4%',
    aiConfidence: '98.2%',
    biodiversity: 'High (62 species)',
    waterRetention: '45% Optimal',
    ndviTrend: [
      { month: 'Jan', ndvi: 0.52 },
      { month: 'Feb', ndvi: 0.58 },
      { month: 'Mar', ndvi: 0.65 },
      { month: 'Apr', ndvi: 0.71 },
      { month: 'May', ndvi: 0.74 },
    ],
    scans: farmScanHistory,
  },
];
