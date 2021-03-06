import React from 'react';
import { Flex, Icon } from '@procore/core-react';

const PUBLIC_URL = process.env.PUBLIC_URL || '';

const clearSession = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
  localStorage.removeItem('expires_at');
};

class Profile extends React.Component {
  handleLogout = () => {
    clearSession();
    this.props.handleLogout();
    window.location.pathname = PUBLIC_URL + '/';
  };

  render() {
    return (
      <div>
        <Icon
          className="icon"
          size="lg"
          onClick={this.props.toggleProfile}
          icon="tool-crews"
        />
        {this.props.open && (
          <Flex className="notifications-container" direction="column">
            <Flex className="notification" alignItems="center">
              User Settings
            </Flex>
            <Flex className="notification" alignItems="center">
              Go to Slack
            </Flex>
            <Flex
              className="notification"
              alignItems="center"
              onClick={this.handleLogout}
            >
              Log out
            </Flex>
          </Flex>
        )}
      </div>
    );
  }
}

export default Profile;
