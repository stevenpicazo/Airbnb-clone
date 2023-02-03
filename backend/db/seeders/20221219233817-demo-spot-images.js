'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-48407664/original/1225a495-262f-4d8d-9eba-a0b5241172f8.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-52010747/original/d96b2ded-9d33-4932-b590-040754975c19.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49774628/original/5db4d9bf-6737-4135-899c-dda0c2054536.jpeg?im_w=720',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/52f6081b-263f-4c78-931c-e028570ddb68.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-698043117609650625/original/409aa015-a914-49f1-9bdd-93fbb9c7fbb7.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-43894966/original/51171ada-73c9-472c-89ae-07ffd7036e26.jpeg?im_w=720',
        preview: true
      },

      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/9da6dfb6-9bbc-4f97-bf60-f8502814de69.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/6e75f583-5c1f-41e8-b705-511dbffe92b5.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49774628/original/1b1146f3-b1a9-4916-9644-6fe0b652e37f.jpeg?im_w=720',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/f1ea064b-9c26-47f8-aa17-6f92b1a9c14b.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/d7e9ec73-f907-493d-83ed-1d89ad92fb5e.jpg?im_w=1200',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-53344870/original/695285e4-af45-46de-8507-f01cd227b7e2.jpeg?im_w=1200',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/d2b95cc9-dbed-45f8-9349-c6da0d6633b2.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/347136ce-5e02-4a90-86d1-8d96a0e12354.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/c1d698ff-ce89-4c9c-908a-9866e63eae71.jpg?im_w=720',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/32587e50-0d86-4b15-94bb-ece242c73d72.jpg?im_w=1200',
        preview: true
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] }
    }, {});
  }
};
