export type ArtworkDataType = {
  _id: string;
  title: string;
  category: string;
  styles: string[];
  mediums: string[];
  materials: string[];
  subjects: string[];
  description: string;
  dimensions: { depth: number; height: number; width: number };
  creationYear: number;
  imageUrl: string;
  price: number;
  artistShort: {
    name: string;
    country: string;
    countryCode: string;
    fullname: string;
  };
  fullname: string;
  status: string;
  artistId: string;
  otherArtworkImages: string[];
};
