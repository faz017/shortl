import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

class Signup extends React.Component {
  render() {
    return (<div><p>Signup component here</p></div>);
  }
}

Meteor.startup(() => {
  ReactDOM.render(<Signup/>, document.getElementById('app'));
});
