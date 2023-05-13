const sequelize = require('../config/connection');
const { Songs, User } = require('../models');

// import seed files
const favoritesData = require('./favoritesData.json');
const songsData = require('./songsData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // populates database tables via Sequelize
  /* await Favorites.bulkCreate(favoritesData); */
  await Songs.bulkCreate(songsData);
  await User.bulkCreate(userData);
  // force: true causes everything to drop

  process.exit(0);
};

seedDatabase();
