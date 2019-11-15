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

const useStyle = makeStyles(theme => ({
  redLineStyle: {
    position: 'absolute',
    top: 33,
    left: 0,
    backgroundColor: '#f37e78',
    width: 80,
    height: 7
  },
  headerStyle: {
    position: 'relative', 
    paddingLeft: 90
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
    background: '#fff',
    fontSize: '2.9rem',
    padding: 15,
    boxSizing: 'border-box',
    color: '#d8d8d8',
  },
  redBordersBlockStyle: {
    borderTop: `3px solid ${theme.palette.primary.main}`,
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    boxSizing: 'border-box',
    padding: 48
  },
}))

export const ScreenThree = () => {
  const classes = useStyle();
  const {setDialog, open} = useContext(DialogContext);

  const handlerEvent = (config) => () => setDialog({ 
    ...config,
    open: !open, 
  });
  
  return(
    <>
      <div style={{position: 'relative', paddingTop: 240, paddingRight: 96, paddingBottom: 48}}>
        <div className={classes.dottedLineStyle} />
        <Paper elevation={4} className={classes.circleNumberStyle}>3</Paper>
        <div className={classes.headerStyle}>
          <Typography variant="h1" component='h1'>в чем его</Typography>
          <Typography variant="h2" component='h1' gutterBottom>новизна и особенности?</Typography>
          <div className={classes.redLineStyle} />
        </div>
        <Container>
          <Typography variant='subtitle1' component='p'>Светильник дает&ensp;
            <Typography variant="body1" component='span' color='primary'>яркий,</Typography>&ensp;
            качественный и, главное, естественный свет "БЕЗ ТОЧЕК", не перегревается и потребляет 
            очень мало электроэнергии.  
          </Typography>
        </Container>
      </div> 
      <div className={classes.clipPathBlock} />
      <div style={{position: 'relative'}}>
        <div className={classes.dottedLineStyle} />
        <Typography variant="body1" component='p' align='center' style={{padding: 64}}>
        Кроме этого, он выглядит очень эстетично и просто красиво!</Typography>
      </div> 
      <div className={classes.redBordersBlockStyle}>
        <Typography variant='body1' component='p'>Мы изготовим для Вас светильник на 
          заказ по индивидуальным размерам, вплоть до&ensp;
          <Typography variant="body1" component='span' color='primary'>МИЛЛИМЕТРА</Typography>&ensp;
          без видимых стыков (соединений).
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
            <Button fullWidth variant="contained" color="primary" size="large" onClick={handlerEvent({
              title: <Typography variant='h3' component="h1" align='center'>чтобы оставить заявку</Typography>,
              bottom: <>Оставить заявку</>
            })}>Оставить заявку</Button>
          </Grid>
          <Grid item xs={9}>
            <Button fullWidth variant="contained" color="primary" size="large" onClick={handlerEvent({
              title: <Typography variant='h3' component="h1" align='center'>чтобы задать вопрос</Typography>,
              bottom: <>Задать вопрос</>
            })}>Задать вопрос</Button>
          </Grid>
          <Grid item xs={9}>
            <Button fullWidth variant="contained" color="primary" size="large" onClick={handlerEvent({
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