import order from './order';
import transform from './transform';

import hotels from '../data/hotels.json';

const transformedHotels = transform(hotels);

describe('Order Functionality', () => {
  /*
  it('Descending Test', () => {
    expect(order(transformedHotels, 'price', 'desc')).toEqual([
      {
        id: '5lm8loqk1s',
        title: 'PARKROYAL Darling Harbour Sydney',
        address: '150 Day Street, Sydney',
        image: 'https://unsplash.it/145/125/?random',
        rating: 4.5,
        ratingType: 'star',
        promotion: 'Red Hot',
        roomName: 'Darling Harbour Club Room',
        price: 535,
        savings: 0,
        freeCancellation: true
      },
      {
        id: 'mesq6mggyn',
        title: 'Primus Hotel Sydney',
        address: '339 Pitt St, Sydney',
        image: 'https://unsplash.it/145/125/?random',
        rating: 5,
        ratingType: 'self',
        promotion: 'Exclusive Deal',
        roomName: 'Deluxe King',
        price: 375,
        savings: 28,
        freeCancellation: true
      },
      {
        id: 'cxd650nuyo',
        title: 'Courtyard by Marriott Sydney-North Ryde',
        address: '7-11 Talavera Rd, North Ryde',
        image: 'https://unsplash.it/145/125/?random',
        rating: 4,
        ratingType: 'self',
        promotion: 'Exclusive Deal',
        roomName: 'Deluxe Balcony Room',
        price: 329,
        savings: 30,
        freeCancellation: true
      },
      {
        id: 'kwjf8jlxg9',
        title: 'Metro Hotel Marlow Sydney Central',
        address: '431-439 Pitt Street, Sydney',
        image: 'https://unsplash.it/145/125/?random',
        rating: 3.5,
        ratingType: 'star',
        promotion: 'Bonus Points',
        roomName: 'Deluxe Triple',
        price: 295,
        savings: 0,
        freeCancellation: true
      },
      {
        id: 'xbtlihs45t',
        title: 'Rydges World Square Sydney',
        address: '389 Pitt Street, Sydney',
        image: 'https://unsplash.it/145/125/?random',
        rating: 4.5,
        ratingType: 'star',
        promotion: 'Red Hot',
        roomName: 'Deluxe King Room',
        price: 227,
        savings: 0,
        freeCancellation: false
      }
    ]);
  });
  it('Ascending Test', () => {
    expect(order(transformedHotels, 'price', 'asc')).toEqual([
      {
        id: 'xbtlihs45t',
        title: 'Rydges World Square Sydney',
        address: '389 Pitt Street, Sydney',
        image: 'https://unsplash.it/145/125/?random',
        rating: 4.5,
        ratingType: 'star',
        promotion: 'Red Hot',
        roomName: 'Deluxe King Room',
        price: 227,
        savings: 0,
        freeCancellation: false
      },
      {
        id: 'kwjf8jlxg9',
        title: 'Metro Hotel Marlow Sydney Central',
        address: '431-439 Pitt Street, Sydney',
        image: 'https://unsplash.it/145/125/?random',
        rating: 3.5,
        ratingType: 'star',
        promotion: 'Bonus Points',
        roomName: 'Deluxe Triple',
        price: 295,
        savings: 0,
        freeCancellation: true
      },
      {
        id: 'cxd650nuyo',
        title: 'Courtyard by Marriott Sydney-North Ryde',
        address: '7-11 Talavera Rd, North Ryde',
        image: 'https://unsplash.it/145/125/?random',
        rating: 4,
        ratingType: 'self',
        promotion: 'Exclusive Deal',
        roomName: 'Deluxe Balcony Room',
        price: 329,
        savings: 30,
        freeCancellation: true
      },
      {
        id: 'mesq6mggyn',
        title: 'Primus Hotel Sydney',
        address: '339 Pitt St, Sydney',
        image: 'https://unsplash.it/145/125/?random',
        rating: 5,
        ratingType: 'self',
        promotion: 'Exclusive Deal',
        roomName: 'Deluxe King',
        price: 375,
        savings: 28,
        freeCancellation: true
      },
      {
        id: '5lm8loqk1s',
        title: 'PARKROYAL Darling Harbour Sydney',
        address: '150 Day Street, Sydney',
        image: 'https://unsplash.it/145/125/?random',
        rating: 4.5,
        ratingType: 'star',
        promotion: 'Red Hot',
        roomName: 'Darling Harbour Club Room',
        price: 535,
        savings: 0,
        freeCancellation: true
      }
    ]);
  });
  */
  it('Throws error if invalid key used', () => {
    expect(() => {
      order(transformedHotels, 'tax', 'desc');
    }).toThrowError('Key inputted does not exist in object');
  });
  it('Throws error if missing data', () => {
    expect(() => {
      order([], 'price', 'asc');
    }).toThrowError('Data Missing');
  });
  it('Throws error if not enough data to compare', () => {
    expect(() => {
      order(
        [
          {
            id: 'xbtlihs45t',
            title: 'Rydges World Square Sydney',
            address: '389 Pitt Street, Sydney',
            image: 'https://unsplash.it/145/125/?random',
            rating: 4.5,
            ratingType: 'star',
            promotion: 'Red Hot',
            roomName: 'Deluxe King Room',
            price: 227,
            savings: 0,
            freeCancellation: false
          }
        ],
        'price',
        'asc'
      );
    }).toThrowError('Not large enough to compare');
  });
});

module.exports = null;
