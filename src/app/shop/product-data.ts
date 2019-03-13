export interface IProductDataItem {
  id: string;
  name: string;
  image: string;
  company: string;
  location: string;
  price: string;
}

export interface ICartItem extends IProductDataItem {
  quantity: number;
}

export const ProductData: IProductDataItem[] = [
  {
    id: '1',
    name: 'Coho Salmon Fillet, 8 oz',
    image: '/assets/products/salmon1.png',
    company: 'Glacier Fish Company',
    location: 'Petersburg, AK',
    price: '11.49',
  },
  {
    id: '2',
    name: 'Pink Salmon Fillet, 8 oz',
    image: '/assets/products/salmon2.png',
    company: 'Loki Fish Company',
    location: 'Anchorage, AK',
    price: '12.40',
  },
  {
    id: '3',
    name: 'Sockeye Salmon Fillet, 8 oz',
    image: '/assets/products/salmon3.png',
    company: 'Alaska Seafood',
    location: 'St Michael, AK',
    price: '13.49',
  },
  {
    id: '4',
    name: 'Keta Salmon Fillet, 8 oz',
    image: '/assets/products/salmon4.png',
    company: 'Glacier Fish Company',
    location: 'Juneau, AK',
    price: '10.49',
  },
  {
    id: '5',
    name: 'King Salmon Fillet, 8 oz',
    image: '/assets/products/salmon5.png',
    company: 'Loki Fish Company',
    location: 'Victoria, BC',
    price: '18.99',
  },
  {
    id: '6',
    name: 'Sockeye Salmon Fillet, 8 oz',
    image: '/assets/products/salmon6.png',
    company: 'Alaska Seafood',
    location: 'Seattle, WA',
    price: '13.49',
  },
  {
    id: '7',
    name: 'Coho Salmon Fillet, 8 oz',
    image: '/assets/products/salmon7.png',
    company: 'Glacier Fish Company',
    location: 'Juneau, AK',
    price: '10.49',
  },
  {
    id: '8',
    name: 'Pink Salmon Fillet, 8 oz',
    image: '/assets/products/salmon8.png',
    company: 'Alaska Seafood',
    location: 'Anchorage, AK',
    price: '14.99',
  },
];
