import React, {useState} from 'react';

import { Switch, Route } from 'react-router';

import { ThemeProvider } from '@material-ui/core/styles';

import {theme} from '../theme';
import {ScreenOne} from './components/screen-one';
import {ScreenTwo} from './components/screen-two';
import {ScreenThree} from './components/screen-three';
import {ScreenFour} from './components/screen-four';
import {ScreenFive} from './components/screen-five';

export const Index = () => {
  return (
    <>
      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
      <ScreenFour />
      <ScreenFive />
    </>
  )
}

export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path='/' component={Index} />
      </Switch>
    </ThemeProvider>
  )
}