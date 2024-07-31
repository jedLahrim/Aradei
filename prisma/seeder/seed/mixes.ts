import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedMixes() {
  await prisma.mixCategory.createMany({
    data: [
      {
        id: 1,
        alias: 'Ready Wear',
        color: '#009BAE',
        i18nAlias: 'mix.ready_wear',
        icon: 'tabler:sock',
      },
      {
        id: 2,
        alias: 'Beauty / Health / Accessories',
        color: '#EA5455',
        i18nAlias: 'mix.bha',
        icon: 'tabler:heartbeat',
      },
      {
        id: 3,
        alias: 'Food & Beverage',
        color: 'success',
        i18nAlias: 'mix.fb',
        icon: 'tabler:apple',
      },
      {
        id: 4,
        alias: 'Home',
        color: 'primary',
        i18nAlias: 'mix.home',
        icon: 'tabler:armchair',
      },
      {
        id: 5,
        alias: 'Hobby / Gifts / Specialty Ret',
        color: 'warning',
        i18nAlias: 'mix.hgsr',
        icon: 'tabler:gift',
      },
      {
        id: 6,
        alias: 'Culture / Art / Entertainement',
        color: '#4B4B4B',
        i18nAlias: 'mix.cae',
        icon: 'tabler:palette',
      },
      {
        id: 7,
        alias: 'Services',
        color: '#FF9F43',
        i18nAlias: 'mix.serv',
        icon: 'tabler:headphones',
      },
      {
        id: 8,
        alias: 'Anchors',
        color: '#7367F0',
        i18nAlias: 'mix.anch',
        icon: 'tabler:anchor',
      },
      {
        id: 9,
        alias: 'Other',
        color: '#A8AAAE',
        i18nAlias: 'mix.oth',
        icon: 'tabler:dice',
      },
    ],
  });
  /*
      await prisma.mixCategory.createMany({
        data: [
          { id: 1, alias: 'Ready Wear' },
          { id: 2, alias: 'Beauty / Health / Accessories' },
          { id: 3, alias: 'Food & Beverage' },
          { id: 4, alias: 'Home' },
          { id: 5, alias: 'Hobby / Gifts / Specialty Ret' },
          { id: 6, alias: 'Culture / Art / Entertainement' },
          { id: 7, alias: 'Services' },
          { id: 8, alias: 'Anchors' },
          { id: 9, alias: 'Other' },
        ],
      });
    */
  /*  await prisma.mix.createMany({
        data: [
          { id: 1, mixCategoryId: 8, alias: 'Department Store' },
          { id: 2, mixCategoryId: 8, alias: 'DIY ( Do-it-yourself )' },
          { id: 3, mixCategoryId: 8, alias: 'Discount Department Store' },
          { id: 4, mixCategoryId: 8, alias: 'Automobile' },
          { id: 5, mixCategoryId: 8, alias: 'Showroom' },
          { id: 6, mixCategoryId: 8, alias: 'Office' },
          { id: 7, mixCategoryId: 8, alias: 'Hotel' },
          { id: 8, mixCategoryId: 8, alias: 'Hypermarket / Supermarket' },
          { id: 9, mixCategoryId: 8, alias: 'Other' },
        ],
      });
      await prisma.mix.createMany({
        data: [
          { id: 10, mixCategoryId: 7, alias: 'Dry cleaning' },
          { id: 11, mixCategoryId: 7, alias: 'Locksmith, Bootblack, Tailor' },
          { id: 12, mixCategoryId: 7, alias: 'Drugstore' },
          { id: 13, mixCategoryId: 7, alias: 'Photo / Photocopy' },
          { id: 14, mixCategoryId: 7, alias: 'Travel Agency' },
          { id: 15, mixCategoryId: 7, alias: 'Flower Shop' },
          { id: 16, mixCategoryId: 7, alias: 'Bank / Exchange' },
          { id: 17, mixCategoryId: 7, alias: 'Other' },
        ],
      });
      await prisma.mix.createMany({
        data: [
          { id: 18, mixCategoryId: 6, alias: 'Cinema' },
          { id: 19, mixCategoryId: 6, alias: 'Bowling' },
          { id: 20, mixCategoryId: 6, alias: 'Theater' },
          { id: 21, mixCategoryId: 6, alias: 'Kids play area' },
          { id: 22, mixCategoryId: 6, alias: 'Art Gallery' },
          { id: 23, mixCategoryId: 6, alias: 'Other' },
        ],
      });
      await prisma.mix.createMany({
        data: [
          { id: 24, mixCategoryId: 5, alias: 'Music / Books' },
          { id: 25, mixCategoryId: 5, alias: 'Stationary' },
          { id: 26, mixCategoryId: 5, alias: 'Outdoor sports accessories' },
          { id: 27, mixCategoryId: 5, alias: 'Toys & Models' },
          { id: 28, mixCategoryId: 5, alias: 'Computer / Computer Games' },
          { id: 29, mixCategoryId: 5, alias: 'Petshop' },
          { id: 30, mixCategoryId: 5, alias: 'Specialty Stores' },
          { id: 31, mixCategoryId: 5, alias: 'Other' },
        ],
      });
      await prisma.mix.createMany({
        data: [
          { id: 32, mixCategoryId: 4, alias: 'Furniture' },
          { id: 33, mixCategoryId: 4, alias: 'White goods / Electronics / GSM' },
          { id: 34, mixCategoryId: 4, alias: 'Home Accessories' },
          { id: 35, mixCategoryId: 4, alias: 'Home Textile' },
          { id: 36, mixCategoryId: 4, alias: 'Illuminaition' },
          { id: 37, mixCategoryId: 4, alias: 'Home Decoration' },
          { id: 38, mixCategoryId: 4, alias: 'Other' },
        ],
      });
      await prisma.mix.createMany({
        data: [
          { id: 39, mixCategoryId: 3, alias: 'Specialty Gourmet Store' },
          { id: 40, mixCategoryId: 3, alias: 'Fast Food' },
          { id: 41, mixCategoryId: 3, alias: 'Restaurants' },
          { id: 42, mixCategoryId: 3, alias: 'Coffeeshop' },
          { id: 43, mixCategoryId: 3, alias: 'Dried Fruits / Candy / Chocolate' },
          { id: 44, mixCategoryId: 3, alias: 'Other' },
        ],
      });
      await prisma.mix.createMany({
        data: [
          { id: 45, mixCategoryId: 2, alias: 'Jewelry' },
          { id: 46, mixCategoryId: 2, alias: 'Accessories' },
          { id: 47, mixCategoryId: 2, alias: 'Optics / Watches' },
          { id: 48, mixCategoryId: 2, alias: 'Cosmetics' },
          { id: 49, mixCategoryId: 2, alias: 'Beauty Center / Spa / Hairdresser' },
          { id: 50, mixCategoryId: 2, alias: 'Sports club / Health Club' },
          { id: 51, mixCategoryId: 2, alias: 'Other' },
        ],
      });
      await prisma.mix.createMany({
        data: [
          { id: 52, mixCategoryId: 1, alias: 'Ready Wear' },
          { id: 53, mixCategoryId: 1, alias: 'Women´s Wear' },
          { id: 54, mixCategoryId: 1, alias: 'Men´s Wear' },
          { id: 55, mixCategoryId: 1, alias: 'Unisex' },
          { id: 56, mixCategoryId: 1, alias: 'Sportwear' },
          { id: 57, mixCategoryId: 1, alias: 'Leather, Shoes, Bags' },
          { id: 58, mixCategoryId: 1, alias: 'Underwear / Swimwear / Socks' },
          { id: 59, mixCategoryId: 1, alias: 'Kid´s Wear' },
          { id: 60, mixCategoryId: 1, alias: 'Other' },
        ],
      });*/
  await prisma.mix.createMany({
    data: [
      { mixCategoryId: 8, alias: 'Department Store' },
      { mixCategoryId: 8, alias: 'DIY ( Do-it-yourself )' },
      { mixCategoryId: 8, alias: 'Discount Department Store' },
      { mixCategoryId: 8, alias: 'Automobile' },
      { mixCategoryId: 8, alias: 'Showroom' },
      { mixCategoryId: 8, alias: 'Office' },
      { mixCategoryId: 8, alias: 'Hotel' },
      { mixCategoryId: 8, alias: 'Hypermarket / Supermarket' },
      { mixCategoryId: 8, alias: 'Other' },
      { mixCategoryId: 7, alias: 'Dry cleaning' },
      { mixCategoryId: 7, alias: 'Locksmith, Bootblack, Tailor' },
      { mixCategoryId: 7, alias: 'Drugstore' },
      { mixCategoryId: 7, alias: 'Photo / Photocopy' },
      { mixCategoryId: 7, alias: 'Travel Agency' },
      { mixCategoryId: 7, alias: 'Flower Shop' },
      { mixCategoryId: 7, alias: 'Bank / Exchange' },
      { mixCategoryId: 7, alias: 'Other' },
      { mixCategoryId: 6, alias: 'Cinema' },
      { mixCategoryId: 6, alias: 'Bowling' },
      { mixCategoryId: 6, alias: 'Theater' },
      { mixCategoryId: 6, alias: 'Kids play area' },
      { mixCategoryId: 6, alias: 'Art Gallery' },
      { mixCategoryId: 6, alias: 'Other' },
      { mixCategoryId: 5, alias: 'Music / Books' },
      { mixCategoryId: 5, alias: 'Stationary' },
      { mixCategoryId: 5, alias: 'Outdoor sports accessories' },
      { mixCategoryId: 5, alias: 'Toys & Models' },
      { mixCategoryId: 5, alias: 'Computer / Computer Games' },
      { mixCategoryId: 5, alias: 'Petshop' },
      { mixCategoryId: 5, alias: 'Specialty Stores' },
      { mixCategoryId: 5, alias: 'Other' },
      { mixCategoryId: 4, alias: 'Furniture' },
      { mixCategoryId: 4, alias: 'White goods / Electronics / GSM' },
      { mixCategoryId: 4, alias: 'Home Accessories' },
      { mixCategoryId: 4, alias: 'Home Textile' },
      { mixCategoryId: 4, alias: 'Illumination' },
      { mixCategoryId: 4, alias: 'Home Decoration' },
      { mixCategoryId: 4, alias: 'Other' },
      { mixCategoryId: 3, alias: 'Specialty Gourmet Store' },
      { mixCategoryId: 3, alias: 'Fast Food' },
      { mixCategoryId: 3, alias: 'Restaurants' },
      { mixCategoryId: 3, alias: 'Coffeeshop' },
      { mixCategoryId: 3, alias: 'Dried Fruits / Candy / Chocolate' },
      { mixCategoryId: 3, alias: 'Other' },
      { mixCategoryId: 2, alias: 'Jewelry' },
      { mixCategoryId: 2, alias: 'Accessories' },
      { mixCategoryId: 2, alias: 'Optics / Watches' },
      { mixCategoryId: 2, alias: 'Cosmetics' },
      { mixCategoryId: 2, alias: 'Beauty Center / Spa / Hairdresser' },
      { mixCategoryId: 2, alias: 'Sports club / Health Club' },
      { mixCategoryId: 2, alias: 'Other' },
      { mixCategoryId: 1, alias: 'Ready Wear' },
      { mixCategoryId: 1, alias: 'Women´s Wear' },
      { mixCategoryId: 1, alias: 'Men´s Wear' },
      { mixCategoryId: 1, alias: 'Unisex' },
      { mixCategoryId: 1, alias: 'Sportswear' },
      { mixCategoryId: 1, alias: 'Leather, Shoes, Bags' },
      { mixCategoryId: 1, alias: 'Underwear / Swimwear / Socks' },
      { mixCategoryId: 1, alias: 'Kid´s Wear' },
      { mixCategoryId: 1, alias: 'Other' },
    ],
  });

  //   const mixes = await prisma.mix.createMany({
  //     data: [
  //       {
  //         id: 1,
  //         alias: 'HOME',
  //       },
  //       {
  //         id: 2,
  //         alias: 'FASHION',
  //       },
  //       {
  //         id: 3,
  //         alias: 'SPORT',
  //       },
  //       {
  //         id: 4,
  //         alias: 'JEWELRY',
  //       },
  //       {
  //         id: 5,
  //         alias: 'MEDIA',
  //       },
  //       {
  //         id: 6,
  //         alias: 'CULTURE',
  //       },
  //       {
  //         id: 7,
  //         alias: 'F&B',
  //       },
  //       {
  //         id: 8,
  //         alias: 'To fill...',
  //       },
  //       {
  //         id: 9,
  //         alias: 'N/A',
  //       },
  //     ],
  //   });
}
