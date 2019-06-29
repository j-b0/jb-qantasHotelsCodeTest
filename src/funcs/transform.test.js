import transform from './transform';
import hotels from '../data/hotels.json';

describe('Transform Functionality', () => {
  it('It transforms data!', () => {
    expect(transform(hotels)).toEqual([
      {
        id: 'cxd650nuyo',
        title: 'Courtyard by Marriott Sydney-North Ryde',
        address: '7-11 Talavera Rd, North Ryde',
        image: 'https://unsplash.it/145/125/?random',
        rating: 4.5,
        ratingType: 'self',
        promotion: 'Exclusive Deal',
        roomName: 'Deluxe Balcony Room',
        price: 329,
        savings: 30,
        freeCancellation: false
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
        id: 'xbtlihs45t',
        title: 'Rydges World Square Sydney',
        address: '389 Pitt St, Sydney',
        image: 'https://unsplash.it/145/125/?random',
        rating: 4,
        ratingType: 'star',
        promotion: 'Red Hot',
        roomName: 'Deluxe King Room',
        price: 227,
        savings: null,
        freeCancellation: false
      },
      {
        id: '5lm8loqk1s',
        title: 'PARKROYAL Darling Harbour Sydney',
        address: '150 Day Street, Sydney',
        image: 'https://unsplash.it/145/125/?random',
        rating: 4.5,
        ratingType: 'star',
        promotion: 'Exclusive Deal',
        roomName: 'Deluxe King',
        price: 535,
        savings: null,
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
        roomName: 'Deluxe King',
        price: 295,
        savings: null,
        freeCancellation: true
      }
    ]);
  });
});

module.exports = null;
