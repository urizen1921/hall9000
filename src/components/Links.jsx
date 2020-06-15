import React from 'react';
import GenLink from './GenLink.jsx';

class Links extends React.Component {

  constructor(props) {
    super(props);
    this.socialMedia = props.socialMedia;
  }

  render() {
    return (
      <ul className='profile-social-links'>
        {this.socialMedia.map((socialMedia) => (
          <GenLink
            href={socialMedia.href}
            img={socialMedia.img}
            alt={socialMedia.alt}
          />
        ))}
      </ul>
    );
  }
}

export default Links;