import '../imports/startup/server/register-api'

import React from 'react';
import { renderToString } from "react-dom/server";

import { StaticRouter } from 'react-router';

import { onPageLoad } from "meteor/server-render";
  
import { ServerStyleSheets } from '@material-ui/core/styles';

import CleanCSS from 'clean-css';
import autoprefixer from "autoprefixer";
import postcss from 'postcss';

import {App} from '../imports/index';

const cleanCSS = new CleanCSS();

onPageLoad(sink => {
  const sheets = new ServerStyleSheets();

  sink.renderIntoElementById('react-target', renderToString(
    sheets.collect(
      <StaticRouter location={sink.request.url} context={{}}>
        <App />
      </StaticRouter>
    ),
  ));

  const css = cleanCSS.minify(sheets.toString()).styles;

  let prefixedCss;
  Promise.await(new Promise((resolve) => {
    postcss([ autoprefixer({ overrideBrowserslist: ['last 100 version'] }) ]).process(css, { from: 'css.css', to: 'prefixedCss.css' }).then(result => {
      prefixedCss = result.css;
      result.warnings().forEach(warn => {
        prefixedCss = css;
        console.warn(warn.toString());
      })
      resolve();
    })
  }));

  sink.appendToHead(`<style>${prefixedCss}</style>`);
});