import _ from 'lodash';
import React, { useEffect, createContext, useState } from 'react';
import { useLocation } from "react-router-dom";

import ReactPixel from 'react-facebook-pixel';
import ya, { YMInitializer } from 'react-yandex-metrika';
import ReactGA from 'react-ga';

var Chance = require('chance');
var chance = new Chance();

export const generateUserId = () => {
  return `${new Date().valueOf()}${chance.fbid()}`;
};

export const Context = createContext({});

/**
 *
 * @param {object} props
 * @param {number=} props.facebookPixel
 * @param {number=} props.facebookTimeout
 * @param {string=} props.googleAnalitics
 * @param {number=} props.yandexMetrika
 * @param {*=} props.children
 * @param {ReactContext=} props.context
 */
export const AnaliticsProvider = ({
  facebookPixel = null,
  facebookTimeout = 0,
  googleAnalitics = null,
  yandexMetrika = null,
  context = Context,
  children,
}) => {
  const router = useLocation();
  const pathname = router ? router.pathname : null;
  const [facebookReady, setFacebookReady] = useState(false);

  const content = (
    <context.Provider
      value={{
        facebookPixel,
        googleAnalitics,
        yandexMetrika,
        trigger: (action, data) => {
          try {
            if (window.opix) window.opix('event', 'reachGoal', {goal: action});
            if (googleAnalitics)
              ReactGA.event({
                category: 'actions',
                action,
                value: data ? data.value : undefined,
              });
            if (yandexMetrika) ya('reachGoal', action, data);
            if (facebookPixel && facebookReady) ReactPixel.trackCustom(action, data);
          } catch (error) {
            console.error(error);
          }
        },
      }}
    >
      {children}
    </context.Provider>
  );

  useEffect(() => {
    if (Meteor.isServer || !pathname) return;

    if (!localStorage.getItem('_analiticsUserId')) {
      localStorage.setItem('_analiticsUserId', generateUserId());
    }
    
    setTimeout(() => {
      setFacebookReady(true);
      if (facebookPixel) {
        const facebookPixelAdvancedMatching = {
          userId: localStorage.getItem('_analiticsUserId'),
        };
        ReactPixel.init(facebookPixel, facebookPixelAdvancedMatching, {
          autoConfig: true,
          debug: true,
        });
        ReactPixel.pageView();
      }
    }, facebookTimeout); 

    if (googleAnalitics) {
      ReactGA.initialize(googleAnalitics, {
        gaOptions: {
          userId: localStorage.getItem('_analiticsUserId'),
        },
      });
    }
  }, []);

  useEffect(() => {
    if (Meteor.isServer || !pathname) return;

    if (facebookPixel && facebookReady) ReactPixel.pageView();
    if (googleAnalitics) {
      ReactGA.set({ page: pathname });
      ReactGA.pageview(pathname);
    }
  }, [pathname]);

  return (
    <>
      {content}
      {(!!yandexMetrika && !!pathname) && <YMInitializer
        accounts={[yandexMetrika]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          trackHash: true,
          triggerEvent: true,
          userParams: {
            userId: Meteor.isClient ? localStorage.getItem('userId') : null,
          },
        }}
        version="2"
      />}
    </>
  );
};
