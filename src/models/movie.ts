interface Maker {
  id: number;
  name: string;
}

interface Review {
  count: number;
  average: string;
}

interface Actress {
  id: number;
  name: string;
  ruby: string;
}

export interface Movie {
  name: string;
  siteUrl: string;
  imageUrl: string;
  date: string;
  maker: Maker[];
  review: Review;
  actress: Actress[];
}
