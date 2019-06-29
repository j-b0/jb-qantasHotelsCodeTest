const hotels = require('./src/data/hotels.json');
const transform = require('./src/funcs/transform');

const transformedHotels = transform.transform(hotels);

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  // You can access the variable "house" in your page queries now
  createPage({
    ...page,
    context: transformedHotels
  });
};
