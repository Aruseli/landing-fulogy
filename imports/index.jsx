import React, {useState} from 'react';

import { Switch, Route } from 'react-router';

import { ThemeProvider } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

import { AnaliticsProvider } from './package/analitics';

import {Form} from './components/form';
import {theme} from '../theme';
import {ScreenOne} from './components/screen-one';
import {ScreenTwo} from './components/screen-two';
import {ScreenThree} from './components/screen-three';
import {ScreenFour} from './components/screen-four';
import {ScreenFive} from './components/screen-five';
import {ScreenSix} from './components/screen-six';
import {ScreenSeven} from './components/screen-seven';
import {ScreenEight} from './components/screen-eight';
import {ScreenNine} from './components/screen-nine';
import {Footer} from './components/footer';

export const DialogContext = React.createContext();

export const Index = () => {
  return (
    <>
      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
      <ScreenFour />
      <ScreenFive />
      <ScreenSix />
      <ScreenSeven />
      <ScreenEight />
      <ScreenNine />
      <Footer />
    </>
  )
}

export const DialogContextProvider = ({ children }) => {
  const [dialogConfig, setDialogConfig] = useState({
    open: false,
    title: <Typography variant='h3' component="h1" align='center'>чтобы рассчитать стоимость светильника</Typography>,
    bottom: <>Рассчитать стоимость</>,
    thanks: false,
    onThanksHandler: null,
  });

  const setDialog = (config) => {
    setDialogConfig({ ...dialogConfig, ...config });
    if (dialogConfig.thanks) setTimeout(() => {
      setDialogConfig({ ...dialogConfig, ...config, thanks: false });
    }, 1000);
  };

  return <DialogContext.Provider value={{...dialogConfig, setDialog}}>
    {children}
  </DialogContext.Provider>;
};

export const App = () => {

  return (
    <AnaliticsProvider
      facebookPixel={'1245714662288364'}
      facebookTimeout={20000}
      googleAnalitics={'UA-56824740-6'}
      yandexMetrika={56224693}
    >
      <ThemeProvider theme={theme}>
        <DialogContextProvider>
          <Form />
          <Switch>
            <Route path='/podsvetka-dlya-kuhni-1' component={Index} />
          </Switch>
        </DialogContextProvider>
      </ThemeProvider>
    </AnaliticsProvider>
  )
}
