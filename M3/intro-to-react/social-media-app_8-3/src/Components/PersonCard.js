// Import React
import React from 'react';
import Profile from './Profile';

// Declare my class component
class PersonCard extends React.Component {
  render() {
    const today = new Date();

    return (
      <div>
        <h1>Bootsy</h1>
        <p>
          Up to date as of: {today.getMonth()}/{today.getDay()}/
          {today.getFullYear()}
        </p>
        <img src='http://placekitten.com/g/200/300' />
        <Profile />
      </div>
    );
  }
}

// Export the class component
export default PersonCard;
