import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

function Stars({ count }) {
  if (typeof count !== 'number' || isNaN(count) || count < 1 || count > 5) {
    return null;
  }

  const numberOfStars = [];
  for (let i = 0; i < Math.floor(count); i += 1) {
    numberOfStars.push(<Star key={i} />);
  }
  return <ul className="card-body-stars u-clearfix">{numberOfStars}</ul>;
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Stars;
