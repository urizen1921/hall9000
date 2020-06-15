import React from 'react';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.profile = props.profile;
    this.state = { seconds: 0 };

    this.print = {
      printChar: function(num) {
        let string = '';
        let char = [];
        while(num < props.profile.length) {
          char.push(props.profile.charAt(num));
          string = char.join(num);
          return string;
        }
      }
    }
  }

  tick() {
    this.setState(state => ({
       seconds: state.seconds + 1
      }));      
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='profile-bio'>
        <p>{this.profile}</p>
        {/*
        <div id='message'>
          Seconds: {this.print.printChar(this.state.seconds)}
        </div>
        
        */}
      </div>
    );
  }
}

export default Profile;