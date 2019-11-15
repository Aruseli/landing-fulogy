import '../imports/startup/client/monitor.js'
import { getCookie } from "../imports/startup/helpers";

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
        document.addEventListener('yacounter56224693inited', (e) => {
            const uuid = getCookie('__opix_uid');
            console.log('in yandex', uuid);
            const yaCounter = window['yaCounter56224693'];
            if (yaCounter) {
                if (uuid) {
                    /*ym(56224693, 'setUserID', uuid); //не работает с пакетом react-yandexmetrika, пришлось делать через устаревшее API яндекс метрики
                    ym(56224693, 'userParams', {UserID: uuid});*/
                    yaCounter.setUserID(uuid);
                    yaCounter.userParams({UserID: uuid});
                }
                /*ym(56224693, 'getClientID', function(clientID) { //не работает с пакетом react-yandexmetrika
                    if (window.opix) window.opix('event', 'addClientID', {value: clientID});
                });*/
                const clientID = yaCounter.getClientID();
                if (window.opix) window.opix('event', 'addClientID', {value: clientID});
            }
        });
    }
});
