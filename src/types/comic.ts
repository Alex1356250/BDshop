export interface Comic {
  id: string;
  title: string;
  cover: string;
  synopsis: string;
  category: string;
  publisher: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  price: number;
  isNew: boolean;
  publishedDate: string;
}