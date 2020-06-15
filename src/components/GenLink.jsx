import React from 'react';

class GenLink extends React.Component {
  
  constructor(props) {
    super(props);
    this.href = props.href;
    this.img = props.img;
    this.alt = props.alt;
  }
  render() {
    return (
      <li>
        <a href={this.href}>
          <img src={this.img} alt={this.alt}/>
        </a>
      </li>
    );
  }
}

export default GenLink;