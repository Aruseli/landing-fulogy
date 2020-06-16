import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import { onPageLoad } from "meteor/server-render";

import {App} from '/imports/index';


onPageLoad(async sink => {
  ReactDOM.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("react-target")
  );
});

Meteor.startup(()=>{
    if (Meteor.isProduction) {
        
    }
});
