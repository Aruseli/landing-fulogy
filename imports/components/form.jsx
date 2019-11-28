import React, {useContext} from 'react';

import {
  makeStyles,  
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Typography,
  Button
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
    right: theme.spacing(3),
    top: theme.spacing(3),
    color: theme.palette.grey[500],
  },
  paperDialog: {
    borderRadius: 10
  }
}))

export const Form = ({}) => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const {setDialog, title, open, bottom, thanks, onThanksHandler, event} = useContext(DialogContext);
  
  const onClick = () => {
    setDialog({
      open: !open,
      onThanksHandler: null
    });
  }

  const onThanks = (e) => {
    e.preventDefault();
    const options = {
        name: this.contactName.value.trim() || 'Гость',
        phone: this.contacPhone.value.trim(),
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
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClick}>
          <Close style={{height: 60, width: 60}} />
        </IconButton>
        { thanks 
        ? <Thanks />
        : <form onSubmit={onThanks}>
          <DialogContent style={{padding: '112px 112px 16px 112px', boxSizing: 'border-box'}}>
            {title}
            <Typography variant='body1' component="p" align='center' gutterBottom>Введите свое имя и телефон</Typography>
            <div style={{paddingTop: 48}}>
              <TextField
                autoFocus
                id="name"
                label="Имя"
                type="text"
                fullWidth
                margin="normal"
                inputRef={c => this.contactName = c}
              />
              <TextField
                id="phone"
                label="Телефон"
                type="text"
                fullWidth
                style={{marginTop: 60}}
                inputRef={c => this.contacPhone = c}
                inputProps={{pattern: "[+]?(\\d[-\\(\\)\\s]*){11}"}}
                required
              />
            </div>
          </DialogContent>
          <DialogActions style={{padding: 112}}>
            <Button fullWidth variant="contained" color="primary" size="large" type="submit">{bottom}</Button>
          </DialogActions>
        </form>}
      </Dialog>
    </>
  )
}