// Import React
import React from 'react';
import Profile from './Profile';

// Declare my class component
class PersonCard extends React.Component {
  render() {
    // destructure the props passed in App.js
    const { name, img, date } = this.props;

    // const today = new Date();

    return (
      <div>
        <h1>{name}</h1>
        <p>
          Up to date as of: {date.getMonth()}/{date.getDay()}/
          {date.getFullYear()}
        </p>
        <img src={img} />
        <Profile />
      </div>
    );
  }
}

// Export the class component
export default PersonCard;
