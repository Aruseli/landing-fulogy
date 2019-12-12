import React, {useContext, useState} from 'react';

import {
  makeStyles,  
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Typography,
  Button,
  Hidden
} from '@material-ui/core';

import Close from '@material-ui/icons/Close';
import {DialogContext} from '../index';

import {Thanks} from './thanks';
import { Context as AnaliticsContext } from '../package/analitics';
import {getCookie} from "../startup/helpers";


const useStyle = makeStyles(theme => ({
  dialogStyles: {
    width: '100%',
    maxWidth: 350
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    color: theme.palette.grey[500],
    [theme.breakpoints.up('md')]: {
      right: theme.spacing(1),
      top: theme.spacing(1),
    }
  },
  paperDialog: {
    borderRadius: 10
  }
}))

export const Form = ({}) => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const {setDialog, title, open, bottom, thanks, onThanksHandler, event} = useContext(DialogContext);
  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const onClick = () => {
    setDialog({
      open: !open,
      onThanksHandler: null
    });
  }

  const onThanks = (e) => {
    e.preventDefault();
    const options = {
        name: nameValue || 'Гость',
        phone: phoneValue,
        page: document.location && (document.location.origin + document.location.pathname),
        pixelId: getCookie('__opix_uid'),
    };

    Meteor.call('leads.insert', options, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        setDialog({thanks: !thanks});
        trigger('thanks');
        if (onThanksHandler) onThanksHandler(trigger);
        //if (window.opix) window.opix('event', 'reachGoal', {goal: 'make_request'});
      }
    })
  }

  return(
    <>
      <Dialog open={open} onClose={onClick} aria-labelledby="form-dialog-title" maxWidth='md' classes={{paper: classes.paperDialog}}>
        <Hidden implementation='css' only={['md', 'lg', 'xl']}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClick}>
            <Close style={{height: 24, width: 24}} />
          </IconButton>
          { thanks
          ? <Thanks />
          : <form onSubmit={onThanks}>
            <DialogContent style={{padding: 32, boxSizing: 'border-box'}}>
              {title}
              <Typography variant='body1' component="p" align='center' gutterBottom>Введите свое имя и телефон</Typography>
              <div style={{paddingTop: 16}}>
              <TextField
                onChange={(e) => setNameValue(e.target.value)}
                value={nameValue}
                autoFocus
                id="name"
                label="Имя"
                type="text"
                fullWidth
                margin="normal"
                inputRef={c => this.contactName = c}
              />
              <TextField
                onChange={(e) => setPhoneValue(e.target.value)}
                value={phoneValue}
                id="phone"
                label="Телефон"
                type="text"
                fullWidth
                inputProps={{pattern: "[+]?(\\d[-\\(\\)\\s]*){11}"}}
                required
                />
              </div>
            </DialogContent>
            <DialogActions style={{padding: 24}}>
              <Button fullWidth variant="contained" color="primary" size="large" type="submit">{bottom}</Button>
            </DialogActions>
            </form>}
        </Hidden>
        <Hidden implementation='css' only={['sm', 'xs']}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClick}>
            <Close style={{height: 36, width: 36}} />
          </IconButton>
          { thanks
          ? <Thanks />
          : <form onSubmit={onThanks}>
            <DialogContent style={{padding: '64px 32px', boxSizing: 'border-box'}}>
              {title}
              <Typography variant='body1' component="p" align='center' gutterBottom>Введите свое имя и телефон</Typography>
              <div style={{paddingTop: 48}}>
                <TextField
                  onChange={(e) => setNameValue(e.target.value)}
                  value={nameValue}
                  autoFocus
                  id="name"
                  label="Имя"
                  type="text"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  onChange={(e) => setPhoneValue(e.target.value)}
                  value={phoneValue}
                  id="phone"
                  label="Телефон"
                  type="phone"
                  fullWidth
                  inputProps={{pattern: "[+]?(\\d[-\\(\\)\\s]*){11}"}}
                  required
              />
            </div>
          </DialogContent>
          <DialogActions style={{padding: 48}}>
              <Button fullWidth variant="contained" color="primary" size="large" type="submit">{bottom}</Button>
            </DialogActions>
          </form>}
        </Hidden>
      </Dialog>
    </>
  )
}