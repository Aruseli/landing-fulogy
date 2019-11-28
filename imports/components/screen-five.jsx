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
import {ChildrenResponsive} from '../package/children-responsive';

const useStyle = makeStyles(theme => ({
  redLineStyle2: {
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
  nudeBlockStyle: {
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    padding: 16
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
    background: '#f7f5f5',
    fontSize: 16,
    padding: 7,
    boxSizing: 'border-box',
    color: '#cdcdcd',
    borderColor: '#fff',
  },
  arrowStyles3: {
    position: 'absolute',
    width: 45,
    left: 16,
    transform: 'rotate(-14deg)',
    top: 86
  },
  arrowStyles3: {
    position: 'absolute',
    width: 35,
    right: 48,
    transform: 'rotate(7deg)',
    top: 48
  },
  handBlockDesktopStyle: {
    backgroundImage: "url('/handAll.png')",
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '100%',
    height: 200,
    position: 'absolute',
    top: -96,
    right: -112,
    [theme.breakpoints.up('md')]: {
      backgroundImage: "url('/handDesktop.png')",
      top: 'initial',
      bottom: -65,
      right: -14,
      width: 200,
      height: 145
    }
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
  redBordersBlockStyle: {
    borderTop: `3px solid ${theme.palette.primary.main}`,
    borderBottom: `3px solid ${theme.palette.primary.main}`,
  },
  cardStyles: {
    position: 'relative',
    padding: '32px 32px 32px 64px',
    '&:hover': {
      boxShadow: '0 5px 5px 0 rgba(0, 0, 0, .1)',
      backgroundColor: '#FDFBFC'
    }
  },
  iconStyle: {
    position: 'absolute',
    top: -20,
    left: -42,
    width: 30
  },
  arrowStyles3: {
    position: 'absolute',
    width: 35,
    right: '20vw',
    transform: 'rotate(15deg)',
    top: 0,
  },
  leftGridItemStyleBlock: {
    position: 'absolute',
    left: 32,
    top: 64,
    width: 'calc(100% - 64px)',
    height: 'calc(100% - 8px)'
  },
  redLineStyle3: {
    backgroundColor: '#f37e78',
    width: 40,
    height: 3,
    margin: '0 auto',
  },
  iconLikeStyle: {
    width: 30,
    display: 'block',
    margin: '0 auto'
  },
  nudeBlockDesktopStyle: {
    backgroundColor: theme.palette.primary.light,
    boxSizing: 'border-box',
    paddingBottom: 48,
    position: 'relative',
    marginTop: 64
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
  arrowStyles4: {
    position: 'absolute',
    width: 45,
    right: '50vw',
    transform: 'rotate(0deg)',
    top: 330,
  },
  iconStyles: {
    width: 25,
    paddingRight: 15
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
      <Hidden implementation='css' only={['md', 'lg', 'xl']}>
        <div style={{position: 'relative', paddingTop: 96, paddingRight: 16, paddingBottom: 16}}>
          <div className={classes.dottedLineStyle} />
          <Paper elevation={4} className={classes.circleNumberStyle}>4</Paper>
          <div className={classes.headerStyle}>
            <Typography variant="h1" component='h1'>гарантия</Typography>
            <div className={classes.redLineStyle2} />
          </div>
          <Container>
            <Typography variant='body1' component='p' gutterBottom>Мы настолько уверены в качестве своего продукта, что 
              даем письменную&ensp;
              <Typography variant="body1" component='span' color='primary'>5&#xfeff;-&#xfeff;летнюю</Typography>&ensp;гарантию на готовое изделие и монтаж.  
            </Typography>
          </Container>
        </div> 
        <div style={{position: 'relative', overflow: 'hidden'}}>
          <div className={classes.nudeBlockStyle}>
            <Typography variant='body2' component='p' gutterBottom>У нас вежливые и чистоплотные монтажники, которые не мусорят.
            </Typography>
          </div>
          <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles3}/>
          <div style={{position: 'relative', paddingTop: 48}}>
            <div className={classes.dottedLineStyle} />
            <div className={classes.handBlockStyle} />
            <Container>
              <Typography variant='body1' component='p'>Мы также обеспечим для Вас гарантийное и 
              постгарантийное обслуживание.
              </Typography>
            </Container>
          </div> 
        </div>
        <div style={{position: 'relative', paddingTop: 48, paddingRight: 16, paddingBottom: 16}}>
          <div className={classes.dottedLineStyle} />
          <Container style={{paddingRight: 50}}>
            <Typography variant="h2" component='h1' gutterBottom>а главное,</Typography>
            <Typography variant='body1' component='p'>мы понимаем, что только довольный заказчик может принести
              реальную прибыль!</Typography>
          </Container>
          <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles3}/>
        </div>
        <div className={classes.clipPathBlock} />
        <div style={{position: 'relative'}}>   
          <div className={classes.dottedLineStyle} />     
          <Typography variant='body1' component='p' align='center' style={{padding: 32}}>
            Поэтому мы создаем удобство готовки на кухне, что влияет на вкус блюд и на 
            само желание готовить.
          </Typography>
        </div>
        <div style={{boxShadow: '0 5px 10px 0 rgba(0, 0, 0, .1)', boxSizing: 'border-box', padding: 32}}>
          <Typography variant='h2' component='p' align='center'>И вся наша работа</Typography>
          <Typography variant='body1' component='p' align='center'>направлена именно на это.<br />
            <Typography variant="body1" component='span' color='primary'>Вы&nbsp;будете приходить к нам снова</Typography>&ensp;и&nbsp;приведете друзей и знакомых.  
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
      </Hidden>
      <Hidden implementation='css' only={['sm', 'xs']}>
        <div style={{position: 'relative', textAlign: 'center', marginTop: 96}}>
        <Grid container justify="center" alignItems="center">
            <Grid item style={{ position: 'relative', overflow: 'hidden', padding: '16px 48px' }}>
            <Typography variant="h1" component='h1' gutterBottom>гарантия</Typography>
              <Typography variant='body1' component='p' gutterBottom style={{position: 'relative', zIndex: 111}}>Мы настолько уверены в качестве своего продукта, что 
                даем письменную<br />гарантию качества на&ensp;
                <Typography variant="h5" component='span' color='primary' >5 лет</Typography>&ensp;на сами изделия и на монтаж.  
              </Typography>
              <Typography variant='h1' component='span' style={{
                color: '#FDFBFC',
                fontSize: '9rem',
                fontWeight: 500,
                position: 'absolute',
                top: -20,
                left: 32
                }}>5</Typography>
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center" className={classes.redBordersBlockStyle}>
            <Grid item style={{ position: 'relative', overflow: 'hidden', padding: '16px 48px' }}>
              <Typography variant='body1' component='p' align='center' gutterBottom>
                У нас вежливые и чистоплотные монтажники, которые не мусорят.
              </Typography>
              <div className={classes.handBlockStyle} />
            </Grid>
          </Grid>
        </div>
        <div style={{paddingTop: 48}}>
          <Grid
            container
            justify="space-around"
            alignItems='center'>
            <Grid item md={3}>
              <div className={classes.cardStyles}>
                <Typography variant='body1' component='p'>
                  <span style={{
                    position: 'relative', 
                    display: 'inline-block'}}>
                    <img src='/icon/security.svg' alt="гарантия от Fulogy" className={classes.iconStyle} />
                  </span>Мы также обеспечим для Вас гарантийное и постгарантийное обслуживание.
                </Typography>
              </div>
            </Grid>
            <Grid item md={3}>
              <div className={classes.cardStyles}>
                <Typography variant='body1' component='p'>
                  <span style={{
                    position: 'relative', 
                    display: 'inline-block'}}>
                    <img src='/icon/smiling-girl.svg' alt="гарантия от Fulogy" className={classes.iconStyle} />
                  </span>А главное, мы понимаем, что только довольный заказчик может принести реальную прибыль!
                </Typography>
              </div>
            </Grid>
            <Grid item md={3}>
              <div className={classes.cardStyles}>
                <Typography variant='body1' component='p'>
                  <span style={{
                    position: 'relative', 
                    display: 'inline-block'}}>
                    <img src='/icon/sun.svg' alt="гарантия от Fulogy" className={classes.iconStyle} />
                  </span>Поэтому, мы создаем удобство готовки на кухне, что влияет на вкус блюд и на само желание готовить.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div style={{position: 'relative', paddingTop: 64}}>
          <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles3}/>
          <Grid
            container
            justify='center'
            alignItems='stretch'
            style={{position: 'relative'}}
          >
            <Grid item style={{position: 'relative', width: 350}}>
              <ChildrenResponsive style={{borderRadius: 10, boxShadow: '0 5px 5px 0 rgba(0, 0, 0, .1)',}}>
                <img src='/Photo-8.jpg' alt='fulogy' />
              </ChildrenResponsive>
              <div className={classes.redRect} />
            </Grid>
            <Grid item xs={1}/>
            <Grid item style={{position: 'relative', width: 350}}>
              <img src='/icon/dottet.svg' style={{width: '100%'}} />
              <Grid 
                container
                justify='center'
                alignItems='center'
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
                >
                <Grid item style={{padding: 32}}>
                  <img src='/icon/like.svg' alt="гарантия от Fulogy" className={classes.iconLikeStyle} />
                  <Typography variant="h2" component='h2' align='center' style={{paddingTop: 32}}>и вся наша работа</Typography>
                  <Typography variant="body2" component='h3' align='center' gutterBottom>направлена именно на это.</Typography>
                  <div className={classes.redLineStyle3} />
                  <Typography variant='body1' component='p' align='center' style={{paddingTop: 32}}>
                    Вы будете приходить<br />к нам снова и приведете<br />друзей и знакомых.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Typography variant='h1' component='span' style={{
                color: '#FDFBFC',
                fontSize: '9rem',
                fontWeight: 500,
                position: 'absolute',
                top: -20,
                right: 32
                }}>5</Typography>
          </Grid>
          <div className={classes.nudeBlockDesktopStyle}>
            <Typography variant='h1' component='span' style={{
              color: '#FDFBFC',
              fontSize: '9rem',
              fontWeight: 500,
              position: 'absolute',
              top: -116,
              left: 64
              }}>5</Typography>
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
            <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles4}/>
          </div>
        </div>
      </Hidden>
    </>  
  )
}