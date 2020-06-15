import React from 'react';


class Avatar extends React.Component {

  constructor(props) {
    super(props);
    this.className = props.className;
    this.src = props.src;
    this.alt = props.alt;
  }
  render() {
    return (
        <img
          className={this.className}
          src={this.src}
          alt={this.alt}
        />
    );
  }
}

export default Avatar;