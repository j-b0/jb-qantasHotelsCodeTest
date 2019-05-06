import propTypes from 'prop-types';

const order = (data, key, dir) => {
  if (!data[0]) {
    throw Error('Data Missing');
  }
  if (!data[1]) {
    throw Error('Not large enough to compare');
  }
  if (data[0][key] === undefined) {
    throw Error('Key inputted does not exist in object');
  }
  if (dir === 'asc') {
    data.sort((a, b) => a[key] - b[key]);
  } else {
    data.sort((a, b) => b[key] - a[key]);
  }
  return data;
};

order.propTypes = {
  data: propTypes.shape.isRequired,
  key: propTypes.string,
  desc: propTypes.oneOf(['desc', 'asc'])
};

order.defaultProps = {
  desc: 'asc',
  key: 'price'
};

export default order;
