export interface IMarket {
  market: string;
  division: string;
  min: number;
  max: number;
}

export interface IProduct {
  error?: string
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: string;
    pct: number;
  };
  markets: IMarket[];
}

export interface IMarquee {
  id: number;
  nameBn: string;
  unit: string;
  image: string;
  price: number;
  change: {
    dir: string;
    pct: number;
  };
}
