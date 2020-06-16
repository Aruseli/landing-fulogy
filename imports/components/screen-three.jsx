import React, {useContext} from 'react';

import {
  Grid, 
  makeStyles, 
  Typography, 
  Container, 
  Paper, 
  Button,
  Hidden
} from '@material-ui/core';
import Check from '@material-ui/icons/Check';

import {DialogContext} from '../index';
import { Context as AnaliticsContext } from '../package/analitics';

const useStyle = makeStyles(theme => ({
  redLineStyle: {
    position: 'absolute',
    top: 12,
    left: 0,
    backgroundColor: '#f37e78',
    width: 32,
    height: 3
  },
  headerStyle: {
    position: 'relative', 
    paddingLeft: 48
  },
  clipPathBlock: {
    clipPath: 'polygon(100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
    backgroundPosition: 'center',
    backgroundImage: "url('/Photo-3.jpg')",
    backgroundSize: 'cover',
    width: '100%',
    height: '25vh',
    position: 'relative'
  },
  dottedLineStyle: {
    position: 'absolute',
    right: 24,
    top: 0,
    height: '100%',
    width: 1,
    backgroundSize: '1px 35px',
    backgroundImage: 'linear-gradient(#d8d8d8 35%, rgba(255,255,255,0) 0%)',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'right'
  },
  circleNumberStyle: {
    top: 32,
    right: 10,
    width: 30,
    height: 30,
    textAlign: 'center',
    position: 'absolute',
    background: '#fff',
    fontSize: 16,
    padding: 7,
    boxSizing: 'border-box',
    color: '#d8d8d8',
  },
  redBordersBlockStyle: {
    borderTop: `3px solid ${theme.palette.primary.main}`,
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    boxSizing: 'border-box',
    padding: 16
  },
  buttonStyle: {
    minWidth: 230, 
  },
  iconStyles: {
    width: 25,
    paddingRight: 15
  },
  redRect: {
    position: 'absolute',
    top: '35%',
    left: -12,
    width: 24,
    height: 24,
    backgroundColor: '#FCF0F0'
  },
  dottedLineHorStyle: {
    position: 'absolute',
    left: 0,
    top: 23,
    height: 1,
    width: '100%',
    backgroundSize: '35px 1px',
    backgroundImage: 'linear-gradient(to right, #f37e78 35%, rgba(255, 255, 255, 0) 0%)',
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'top'
  },
}))

export const ScreenThree = () => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const {setDialog, open} = useContext(DialogContext);

  const handlerEvent = (openEvent, thanksName, config) => () => { 
    trigger(openEvent);
    setDialog({ 
      ...config,
      open: !open, 
      onThanksHandler: (trigger) => (trigger(thanksName), trigger('thanks')),
    }) 
  };
  
  return(
    <>
      <Hidden implementation='css' only={['md', 'lg', 'xl']}>
        <div style={{position: 'relative', paddingTop: 96, paddingRight: 16, paddingBottom: 48}}>
          <div className={classes.dottedLineStyle} />
          <Paper elevation={4} className={classes.circleNumberStyle}>3</Paper>
          <div className={classes.headerStyle}>
            <Typography variant="h1" component='h1'>в чем его</Typography>
            <Typography variant="h2" component='h1' gutterBottom>новизна и особенности?</Typography>
            <div className={classes.redLineStyle} />
          </div>
          <Container>
            <Typography variant='subtitle1' component='p'>Светильник дает&ensp;
              <Typography variant="body1" component='span' color='primary'>яркий,</Typography>&thinsp;
              качественный и, главное, естественный свет "БЕЗ ТОЧЕК", не перегревается и потребляет 
              очень мало электроэнергии.  
            </Typography>
          </Container>
        </div> 
        <div className={classes.clipPathBlock} />
        <div style={{position: 'relative'}}>
          <div className={classes.dottedLineStyle} />
          <Typography variant="body1" component='p' align='center' style={{padding: 32}}>
          Кроме этого, он выглядит очень эстетично и просто красиво!</Typography>
        </div> 
        <div className={classes.redBordersBlockStyle}>
          <Typography variant='body1' component='p'>Мы изготовим для Вас светильник на 
            заказ по индивидуальным размерам, вплоть до&ensp;
            <Typography variant="body1" component='span' color='primary'>МИЛЛИМЕТРА</Typography>&ensp;
            без видимых стыков (соединений).
          </Typography>
        </div>
        <div style={{position: 'relative', overflow: 'hidden'}}>
          <div className={classes.dottedLineStyle} />
          <Typography variant="h4" component='h2' align='center' style={{paddingTop: 48, paddingLeft: 16, paddingRight: 16}}>
            чтобы задать вопрос или оставить заявку</Typography>
          <Typography variant="body1" component='p' align='center' style={{paddingBottom: 32}}>
          нажмите на кнопку ниже:</Typography>
          <Grid display='column' container justify='center' alignItems='center' spacing={4}>
            <Grid item xs={9}>
              <Button fullWidth variant="contained" color="primary" size="large" onClick={handlerEvent('request1', 'thanksRequest1', {
                title: <Typography variant='h3' component="h1" align='center'>чтобы оставить заявку</Typography>,
                bottom: <>Оставить заявку</>
              })}>Оставить заявку</Button>
            </Grid>
            <Grid item xs={9}>
              <Button fullWidth variant="contained" color="primary" size="large" onClick={handlerEvent('question1', 'thanksQuestion1', {
                title: <Typography variant='h3' component="h1" align='center'>чтобы задать вопрос</Typography>,
                bottom: <>Задать вопрос</>
              })}>Задать вопрос</Button>
            </Grid>
            <Grid item xs={9}>
              <Button fullWidth variant="contained" color="primary" size="large" onClick={handlerEvent('callback2', 'thanksCallback2', {
                title: <Typography variant='h3' component="h1" align='center'>чтобы заказать звонок</Typography>,
                bottom: <>Заказать звонок</>
              })}>Заказать звонок</Button>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body1" component='h2' align='center'>
            или звоните по телефону</Typography>
              <Typography variant="h4" component='p' align='center'>
                <a href='tel: 8(800) 505 65 33' style={{
                  textDecoration: 'none', 
                  color: '#000',
                  }}>8 800 505-65-33
                </a>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Hidden>
      <Hidden implementation='css' only={['xs', 'sm']}>
        <div className={classes.redBordersBlockStyle}>
          <Typography variant='body1' component='p' align='center'>Мы изготовим для Вас светильник на 
            заказ по индивидуальным размерам,<br />вплоть до&ensp;
            <Typography variant="body1" component='span' color='primary'>МИЛЛИМЕТРА</Typography>&ensp;
            без видимых стыков (соединений).
          </Typography>
        </div>
        <div style={{position: 'relative', overflow: 'hidden'}}>
          <Typography variant="h4" component='h2' align='center' style={{paddingTop: 48, paddingLeft: 16, paddingRight: 16}}>
            чтобы задать вопрос или оставить заявку</Typography>
          <Typography variant="body1" component='p' align='center' style={{paddingBottom: 32}}>
          нажмите на кнопку ниже:</Typography>
          <Grid container justify='space-between' alignItems='center' style={{width: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
            <Grid item md={12} style={{position: 'relative'}}>
              <div className={classes.dottedLineHorStyle} />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className={classes.buttonStyle} size="large" onClick={handlerEvent('request1', 'thanksRequest1', {
                title: <Typography variant='h3' component="h1" align='center'>чтобы оставить заявку</Typography>,
                bottom: <>Оставить заявку</>
              })}><Check style={{paddingRight: 15}} />Оставить заявку</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className={classes.buttonStyle} size="large" onClick={handlerEvent('question1', 'thanksQuestion1', {
                title: <Typography variant='h3' component="h1" align='center'>чтобы задать вопрос</Typography>,
                bottom: <>Задать вопрос</>
              })}><img src='./icon/interview.svg' alt='задать вопрос менеджеру Fulogy' className={classes.iconStyles} />Задать вопрос</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className={classes.buttonStyle} size="large" onClick={handlerEvent('callback2', 'thanksCallback2', {
                title: <Typography variant='h3' component="h1" align='center'>чтобы заказать звонок</Typography>,
                bottom: <>Заказать звонок</>
              })}><img src='./icon/call.svg' alt='заказать звонок менеджеру Fulogy' className={classes.iconStyles} />Заказать звонок</Button>
            </Grid>
            <Grid item xs={12} style={{paddingTop: 32}}>
              <Typography variant="body1" component='h2' align='center'>
                или звоните по телефону: <Typography variant="h4" component='span' align='center'>
                  <a href='tel: 8(800) 505 65 33' style={{
                    textDecoration: 'none', 
                    color: '#000',
                    }}>8 800 505-65-33
                  </a>
                </Typography>
              </Typography>
            </Grid>
          </Grid>
          <div className={classes.redRect} />
        </div>
      </Hidden>
    </>  
  )
}