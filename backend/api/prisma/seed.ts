import { PrismaClient } from '@prisma/client';

import { productMock } from '../mock';

const prisma = new PrismaClient();

async function main() {
  productMock().forEach(async (i) => {
    await prisma.product.create({
      data: {
        name: i.name,
        brand: i.brand,
        price: i.price,
        image: i.image,
      },
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
