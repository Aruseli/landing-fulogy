import React, {useContext} from 'react';

import {
  Grid, 
  makeStyles, 
  Typography, 
  Container, 
  Paper, 
  Button
} from '@material-ui/core';

import {DialogContext} from '../index';
import { Context as AnaliticsContext } from '../package/analitics';

const useStyle = makeStyles(theme => ({
  redLineStyle: {
    position: 'absolute',
    top: 35,
    left: 0,
    backgroundColor: '#f37e78',
    width: 80,
    height: 7
  },
  headerStyle: {
    position: 'relative', 
    paddingLeft: 90
  },
  nudeBlockStyle: {
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    padding: '32px 100px 32px 32px'
  },
  dottedLineStyle: {
    position: 'absolute',
    right: 75,
    top: 0,
    height: '100%',
    width: 1,
    backgroundSize: '1px 66px',
    backgroundImage: 'linear-gradient(#d8d8d8 33%, rgba(255,255,255,0) 0%), linear-gradient(#d8d8d8 33%, rgba(255,255,255,0) 0%)',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'right'
  },
  circleNumberStyle: {
    top: 105,
    right: 39,
    width: 80,
    height: 80,
    textAlign: 'center',
    position: 'absolute',
    background: '#f7f5f5',
    fontSize: '2.9rem',
    padding: 15,
    boxSizing: 'border-box',
    color: '#cdcdcd',
    borderColor: '#fff',
  },
  arrowStyles1: {
    position: 'absolute',
    width: 121,
    left: 35,
    transform: 'rotate(-14deg)',
    top: 208
  },
  arrowStyles2: {
    position: 'absolute',
    width: 100,
    right: 110,
    transform: 'rotate(7deg)',
    top: 100
  },
  handBlockStyle: {
    backgroundImage: "url('/handAll.png')",
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '100%',
    height: 450,
    position: 'absolute',
    top: -240
  },
  clipPathBlock: {
    clipPath: 'polygon(100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
    backgroundPosition: '15% 43%',
    backgroundImage: "url('/photo-2.jpg')",
    backgroundSize: 'cover',
    width: '100%',
    height: '25vh',
    position: 'relative',
    zIndex: 2
  },
}))

export const ScreenFive = () => {
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
      <div style={{position: 'relative', paddingTop: 240, paddingRight: 96, paddingBottom: 48}}>
        <div className={classes.dottedLineStyle} />
        <Paper elevation={4} className={classes.circleNumberStyle}>4</Paper>
        <div className={classes.headerStyle}>
          <Typography variant="h1" component='h1'>гарантия</Typography>
          <div className={classes.redLineStyle} />
        </div>
        <Container>
          <Typography variant='body1' component='p' gutterBottom>Мы настолько уверены в качестве своего продукта, что 
            даем письменную&ensp;
            <Typography variant="body1" component='span' color='primary'>5-летнюю</Typography>&ensp;гарантию на готовое изделие и монтаж.  
          </Typography>
        </Container>
      </div> 
      <div style={{position: 'relative'}}>
        <div className={classes.nudeBlockStyle}>
          <Typography variant='body2' component='p' gutterBottom>У нас вежливые и чистоплотные монтажники, которые не мусорят.
          </Typography>
        </div>
        <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles1}/>
        <div style={{position: 'relative', paddingTop: 112}}>
          <div className={classes.dottedLineStyle} />
          <div className={classes.handBlockStyle} />
          <Container>
            <Typography variant='body1' component='p'>Мы также обеспечим для Вас гарантийное и 
            постгарантийное обслуживание.
            </Typography>
          </Container>
        </div> 
      </div>
      <div style={{position: 'relative', paddingTop: 128, paddingRight: 96, paddingBottom: 48}}>
        <div className={classes.dottedLineStyle} />
        <Container style={{paddingRight: 50}}>
          <Typography variant="h2" component='h1' gutterBottom>а главное,</Typography>
          <Typography variant='body1' component='p'>мы понимаем, что только довольный заказчик может принести
            реальную прибыль!</Typography>
        </Container>
        <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles2}/>
      </div>
      <div className={classes.clipPathBlock} />
      <div style={{position: 'relative'}}>   
        <div className={classes.dottedLineStyle} />     
        <Typography variant='body1' component='p' align='center' style={{padding: 64}}>
          Поэтому мы создаем удобство готовки на кухне, что влияет на вкус блюд и на 
          само желание готовить.
        </Typography>
      </div>
      <div style={{boxShadow: '0 5px 10px 0 rgba(0, 0, 0, .1)', boxSizing: 'border-box', padding: 80}}>
        <Typography variant='h2' component='p' align='center'>И вся наша работа</Typography>
        <Typography variant='body1' component='p' align='center'>направлена именно на это.<br />
          <Typography variant="body1" component='span' color='primary'>Вы&nbsp;будете приходить к нам снова</Typography>&ensp;и&nbsp;приведете друзей и знакомых.  
        </Typography>
      </div>
      <div style={{position: 'relative', padding: '0 48px'}}>
        <div className={classes.dottedLineStyle} />
        <Typography variant="h4" component='h2' align='center' style={{paddingTop: 64}}>
        чтобы задать вопрос или оставить заявку</Typography>
        <Typography variant="body1" component='p' align='center' style={{paddingBottom: 64}}>
        нажмите на кнопку ниже:</Typography>
        <Grid display='column' container justify='center' alignItems='center' spacing={10}>
          <Grid item xs={9}>
            <Button fullWidth variant="contained" color="primary" size="large" onClick={handlerEvent('request2', 'thanksRequest2', {
              title: <Typography variant='h3' component="h1" align='center'>чтобы оставить заявку</Typography>,
              bottom: <>Оставить заявку</>
            })}>Оставить заявку</Button>
          </Grid>
          <Grid item xs={9}>
            <Button fullWidth variant="contained" color="primary" size="large" onClick={handlerEvent('question2', 'thanksQuestion2', {
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
    </>  
  )
}