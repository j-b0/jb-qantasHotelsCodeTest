const transform = hotels => {
  return hotels.map(oldHotel => {
    return {
      id: oldHotel.id,
      title: oldHotel.property.title,
      address: oldHotel.property.address.join(', '),
      image: oldHotel.property.previewImage.url,
      rating: oldHotel.property.rating.ratingValue,
      ratingType: oldHotel.property.rating.ratingType,
      promotion: oldHotel.offer.promotion.title,
      roomName: oldHotel.offer.name,
      price: oldHotel.offer.displayPrice.amount,
      savings: oldHotel.offer.savings && oldHotel.offer.savings.amount,
      freeCancellation: oldHotel.offer.cancellationOption.cancellationType === 'FREE_CANCELLATION'
    };
  });
};

exports.transform = transform;
