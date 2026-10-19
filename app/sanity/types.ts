export type StyledHeading = {
  italic?: string;
  regular?: string;
};

export type Legend = {
  first?: string;
  second?: string;
};

export type SanityImage = {
  alt?: string;
  crop?: { top: number; bottom: number; left: number; right: number };
  hotspot?: { x: number; y: number; width: number; height: number };
  asset: {
    _id: string;
    metadata: { dimensions: { width: number; height: number } };
  };
};

export type HomePage = {
  hero: {
    headline: (StyledHeading & { _key: string })[];
    legend?: Legend;
    intro: string;
    ctaLabel: string;
  };
  about: {
    heading?: StyledHeading;
    legend?: Legend;
    photo: SanityImage;
    summary: string;
    linkLabel?: string;
    bioHeading?: StyledHeading;
    bioRole?: string;
    bio?: string[];
  };
  expertise: {
    heading?: StyledHeading;
    legend?: Legend;
    intro?: string;
    ctaLabel?: string;
    areas?: { _key: string; name: string; description?: string }[];
  };
  principles?: { _key: string; heading?: StyledHeading; body: string }[];
  contact: {
    heading?: StyledHeading;
    blurb?: string;
  };
};

export type SiteSettings = {
  firmName: string;
  email: string;
  phone: string;
  fax?: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    latitude?: number;
    longitude?: number;
  };
  principal: { name: string; role?: string; profileUrl?: string };
  title: string;
  description: string;
  keywords?: string[];
  practiceAreas?: string[];
  ogImage?: SanityImage;
};
