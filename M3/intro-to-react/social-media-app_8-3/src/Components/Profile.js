import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div className='profile'>
        <h2>Biography</h2>
        <p>I'm a cat with an attitude!</p>

        <h3>Top Three Cities</h3>
        <ol>
          <li>New York</li>
          <li>Paris</li>
          <li>Tokyo</li>
        </ol>
      </div>
    );
  }
}

export default Profile;
