import React from 'react';
import PropTypes from 'prop-types';

const PlatformDisconnected = props => (
  <div className="profile-content unauthorized">
    <p>
      <span className="tk-futura-pt-bold">{props.platformName}</span>: Not Connected
    </p>
  </div>
);

PlatformDisconnected.propTypes = {
  platformName: PropTypes.string.isRequired,
};

export default PlatformDisconnected;