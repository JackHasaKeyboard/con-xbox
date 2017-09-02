import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import Dash from '../imports/app/Dash.jsx';
 
Meteor.startup(() => {
  render(<Dash />, document.body);
});
