import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';

import PlatformConnected from './PlatformConnected';
import PlatformDisconnected from './PlatformDisconnected';

const propTypes = {
    auth: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
      auth: state.auth,
    };
};

const Profile = (props) => {
    if (!props.auth.isAuthenticated) {
      return <Navigate to="/profile" />;
    }
    const user = props.auth.user;
    console.log('-----profile---', user)

    if (user.authorized) {
        const content = (
          <PlatformConnected
            platformName="Twitter"
            platformUrl={`http://localhost:8081/users/login${user.name}`}
            userName={` @${user.name}`}
          />
        );
    }
};

export default connect(mapStateToProps(Profile));