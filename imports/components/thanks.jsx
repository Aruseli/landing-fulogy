import React from 'react';

import {
  makeStyles, 
  DialogContent,
  Typography,
} from '@material-ui/core';

import {Close} from '@material-ui/icons';


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



export const Thanks = ({onClick, open}) => {
  const classes = useStyle();

  return(
    <>
      <DialogContent style={{padding: '112px 112px 32px 112px', boxSizing: 'border-box'}}>
        <Typography variant='h5' component="h1" align='center'>спасибо за заявку</Typography>
        <Typography variant='body1' component="p" align='center' gutterBottom>В ближайшее время мы с Вами свяжемся</Typography>
      </DialogContent>
    </>
  )
}