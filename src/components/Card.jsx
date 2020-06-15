import React from 'react';
import Avatar from './Avatar.jsx';
import Profile from './Profile.jsx';
import Links from './Links.jsx';
import Description from './Description.jsx';


class Card extends React.Component {

  constructor(props) {
    super(props);
    this.object = props.object;
  }

  render() {
    return (
      <aside className='profile-card'>
        <header>
          <Avatar 
            className={this.object.className}
            src={this.object.src}
            alt={this.object.alt}
          />
          <Description
            name={this.object.name}
            description={this.object.description}
          />
        </header>
        <Profile
          profile={this.object.text}
        />
        <Links
          socialMedia={this.object.socialMedia}
        />
      </aside>
    );
  }
}

export default Card;