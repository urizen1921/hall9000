import React from 'react';

class Description extends React.Component {

  constructor(props) {
    super(props);
    this.name = props.name;
    this.description = props.description;
  }

  render() {
    return (
      <div>
        <h1>{this.name}</h1>
        <h2>{this.description}</h2>
      </div>
    );
  }
}

export default Description;