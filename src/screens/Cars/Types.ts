export interface Car {
  bodyType: { title: string };
  capacity: string | number;
  date: string;
  drive: string;
  engine: string;
  gearbox: string;
  image: string;
  id: string;
  isDeleted: boolean;
  issueYear: string | number;
  isVisible?: boolean;
  link: string;
  mileage: string | number;
  name: string;
  priceUSD: number;
  samePhone: string | number;
}
