type Product = {
  name: string;
  brand: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    name: 'Xbox Series S',
    brand: 'Microsoft',
    price: 2034.99,
    image: 'https://i.ibb.co/MCSRw4F/seriesS.webp',
  },
  {
    name: 'Notebook',
    brand: 'Samsung',
    price: 2499,
    image: 'https://i.ibb.co/1Gc7BS5/notbook.jpg',
  },
  {
    name: 'Smart TV LED 43" 4K UHD',
    brand: 'Samsung',
    price: 1899,
    image: 'https://i.ibb.co/HncvfQ5/tv.jpg',
  },
  {
    name: 'Cafeteira',
    brand: 'Mondial',
    price: 113.61,
    image: 'https://i.ibb.co/YLCfnb2/cafeteira.jpg',
  },
  {
    name: 'Geladeira',
    brand: 'Brastemp',
    price: 6590,
    image: 'https://i.ibb.co/Dp3Jb4d/geladeira.jpg',
  },
];

export function productMock(): Product[] {
  const mock: Product[] = [];

  for (let i = 1; i <= 4; i++) {
    mock.push(...products);
  }

  return mock;
}
