import React, {useContext} from 'react';

import {
  Grid, 
  makeStyles, 
  Typography, 
  Container, 
  Paper, 
  Button,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import Check from '@material-ui/icons/Check';

import {DialogContext} from '../index';
import { Context as AnaliticsContext } from '../package/analitics';
import { ChildrenResponsive } from '../package/children-responsive';

const useStyle = makeStyles(theme => ({
  progressNumberStyle: {
    width: 30,
    height: 30,
    textAlign: 'center',
    background: '#fff',
    fontSize: 18,
    padding: 6,
    boxSizing: 'border-box',
    color: theme.palette.primary.main,
    boxShadow: '0 0 0px 2px #f37e78',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative'
  },
  nudeBlockStyle: {
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    padding: '16px 100px 16px 16px',
    position: 'relative'
  },
  dottedLineStyle: {
    position: 'absolute',
    right: 24,
    top: 0,
    height: '100%',
    width: 1,
    backgroundSize: '1px 35px',
    backgroundImage: 'linear-gradient(#f3dfdf 35%, rgba(255,255,255,0) 0%)',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'right'
  },
  arrowStyles1: {
    position: 'absolute',
    width: 35,
    right: 6,
    transform: 'rotate(1deg)',
    top: -16
  },
  arrowStyles2: {
    position: 'absolute',
    width: 45,
    left: 48,
    transform: 'rotate(-7deg)',
    top: 0
  },
  arrowStyles3: {
    position: 'absolute',
    width: 35,
    right: 16,
    transform: 'rotate(1deg)',
    top: 176
  },
  arrowStyles4: {
    position: 'absolute',
    width: 45,
    left: 32,
    transform: 'rotate(1deg)',
    bottom: -32
  },
  arrowStyles5: {
    position: 'absolute',
    width: 35,
    right: 48,
    transform: 'rotate(1deg)',
    top: 0
  },
  arrowStyles6: {
    position: 'absolute',
    width: 35,
    right: '80%',
    transform: 'rotate(-56deg)',
    top: 24
  },
  clipPathBlock: {
    clipPath: 'polygon(100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
    backgroundPosition: 'center',
    backgroundImage: "url('/Photo-13.jpg')",
    backgroundSize: 'cover',
    width: '100%',
    height: '25vh',
    position: 'relative',
    zIndex: 2,
  },
  redBordersBlockStyle: {
    borderTop: `3px solid ${theme.palette.primary.main}`,
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    boxSizing: 'border-box',
    padding: 16,
    position: 'relative',
    marginTop: 16
  },
  numberStyle: {
    width: 25,
    height: 25,
    background: theme.palette.primary.main,
    fontSize: 18,
    paddingLeft: 8,
    paddingTop: 3,
    boxSizing: 'border-box',
    color: '#fff',
    position: 'relative'
  },
  photoBlock: {
    backgroundPosition: 'center',
    backgroundImage: "url('/Photo-9-desktop.jpg')",
    backgroundSize: 'cover',
    width: '100%',
    height: '19vh',
    position: 'relative',
    marginTop: 64,
    marginBottom: 32,
    textAlign: 'center'
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
  iconStyles: {
    width: 25,
    paddingRight: 15
  }
}))

export const ScreenSeven = () => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const {setDialog, open} = useContext(DialogContext);

  const handlerEvent = (openEvent, thanksName, config) => () => {
    trigger(openEvent);
    setDialog({ 
      ...config,
      open: !open, 
      onThanksHandler: (trigger) => (trigger(thanksName), trigger('thanks')), 
    });
  }
  
  return(
    <>
      <Hidden implementation='css' only={['md', 'lg', 'xl']}>
        <div style={{position: 'relative', paddingTop: 32, paddingBottom: 32}}>
          <div className={classes.dottedLineStyle} />
            <Paper elevation={4} className={classes.progressNumberStyle}>2</Paper>
            <Typography variant='h5' component='h2' align='center' style={{paddingTop: 16}} gutterBottom>собственное<br />производство</Typography>
            <Container style={{paddingRight: 16}}>
              <Typography variant='body1' component='p'>Собственная разработка изделий и комплектующих позволяет
                  нам гарантировать максимальную согласованность комплектующих между собой и запас прочности более чем&ensp;
                <Typography variant="body1" component='span' color='primary'>на&nbsp;10-летний&nbsp;срок&nbsp;службы,
                  </Typography>&ensp;а также оптимальное сочетание цены и качества.
              </Typography>
            </Container>
        </div>
        <div style={{position: 'relative', paddingTop: 32, paddingBottom: 16}}>
          <div className={classes.dottedLineStyle} />
            <Paper elevation={4} className={classes.progressNumberStyle}>3</Paper>
            <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles1}/>
            <Typography variant='h5' component='h2' align='center' style={{paddingTop: 16}} gutterBottom>индивидуальное<br />исполнение</Typography>
            <Container style={{paddingRight: 16}}>
              <Typography variant='body1' component='p'>Изготовим для Вас светильник на заказ по индивидуальным размерам, вплоть до&ensp;
                <Typography variant="body1" component='span' color='primary'>МИЛЛИМЕТРА
                  </Typography>&ensp;без видимых стыков (соединений) и точно в срок.
              </Typography>
              <Typography variant='body2' component='p'>Выполним монтаж.</Typography>
            </Container>
        </div>
        <div className={classes.clipPathBlock} />
        <div style={{position: 'relative', paddingTop: 32, paddingBottom: 32}}>
          <div className={classes.dottedLineStyle} />
            <Paper elevation={4} className={classes.progressNumberStyle}>4</Paper>
            <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles2}/>
            <Typography variant='h5' component='h2' align='center' style={{paddingTop: 16}} gutterBottom>гарантия 5 лет</Typography>
            <Container style={{paddingRight: 16}}>
              <Typography variant='body1' component='p'>Мы даем письменную гарантию качества на светильник сроком на 5 лет
                и гарантию на монтажные работы также на 5 лет.
              </Typography>
            </Container>
        </div>
        <div className={classes.nudeBlockStyle}>
          <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles3}/>
          <Typography variant='h2' component='h2'>в случае перебоя в работе,</Typography>
          <Typography variant='body1' component='p'>
            мы не ищем виноватых и не ищем причины отказать в замене - мы просто&ensp;
                <Typography variant="body1" component='span' color='primary'>
                  меняем светильник на новый
                </Typography>&ensp;или устраняем проблемы за наш счет.
          </Typography>
        </div>
        <div style={{position: 'relative', paddingTop: 32, paddingBottom: 32}}>
          <div className={classes.dottedLineStyle} />
          <Paper elevation={4} className={classes.progressNumberStyle}>5</Paper>
          <Typography variant='h5' component='h2' align='center' style={{paddingTop: 16}} gutterBottom>цена<br />производителя</Typography>
          <Container style={{paddingRight: 48, paddingBottom: 16}}>
            <Typography variant='body1' component='p'>
              Посколько светильник - это наша собственная разработка, Вы не  переплачиваете посредникам.
            </Typography>
          </Container>
          <div className={classes.redBordersBlockStyle}>
            <Typography variant='body2' component='p'>
              В нашей цепочке поставок полностью отсутствуют посредники, тем самым обеспечивая оптимальное соотношение цены
              и качества, а также гибкую систему СКИДОК.
              <span style={{display: 'inline-block', position: 'relative'}}><img src='/icon/blok-6.svg' style={{width: 25, position: 'absolute', bottom: -6, left: 2}} /></span>
            </Typography>
          </div>
        </div>
        <div style={{position: 'relative', paddingTop: 32, paddingBottom: 32}}>
          <div className={classes.dottedLineStyle} />
            <Paper elevation={4} className={classes.progressNumberStyle}>6</Paper>
            <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles6}/>
            <Typography variant='h5' component='h2' align='center' style={{paddingTop: 16}} gutterBottom>
              гарантийное<br />обслуживание
            </Typography>
            <Container style={{paddingRight: 16}}>
              <Typography variant='body1' component='p'>
                Мы выполняем для своих заказчиков гарантийное и постгарантийное обслуживание и стремимся
                максимально продлить срок службы наших изделий.
              </Typography>
            </Container>
        </div>
        <div style={{position: 'relative', paddingTop: 32, paddingBottom: 32}}>
          <div className={classes.dottedLineStyle} />
            <Paper elevation={4} className={classes.progressNumberStyle}>7</Paper>
            <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles5}/>
            <Typography variant='h5' component='h2' align='center' style={{paddingTop: 16}} gutterBottom>
              доставка
            </Typography>
            <Container style={{paddingRight: 16}}>
              <Typography variant='body1' component='p' align='center'>
                Осуществляем быструю доставку изделий по всей России.
              </Typography>
            </Container>
        </div>
        <div style={{position: 'relative', overflow: 'hidden'}}>
          <div className={classes.dottedLineStyle} />
        <Typography variant="h4" component='h2' align='center' style={{paddingTop: 32, paddingLeft: 16, paddingRight: 16}}>
          чтобы задать вопрос или оставить заявку</Typography>
          <Typography variant="body1" component='p' align='center' style={{paddingBottom: 32}}>
          нажмите на кнопку ниже:</Typography>
          <Grid display='column' container justify='center' alignItems='center' spacing={4}>
            <Grid item xs={9}>
              <Button fullWidth variant="contained" color="primary" size="large" onClick={handlerEvent('request3', 'thanksRequest3', {
                title: <Typography variant='h3' component="h1" align='center'>чтобы оставить заявку</Typography>,
                bottom: <>Оставить заявку</>
              })}>Оставить заявку</Button>
            </Grid>
            <Grid item xs={9}>
              <Button fullWidth variant="contained" color="primary" size="large" onClick={handlerEvent('question3', 'thanksQuestion3', {
                title: <Typography variant='h3' component="h1" align='center'>чтобы задать вопрос</Typography>,
                bottom: <>Задать вопрос</>
              })}>Задать вопрос</Button>
            </Grid>
            <Grid item xs={9}>
              <Button fullWidth variant="contained" color="primary" size="large" onClick={handlerEvent('callback3', 'thanksCallback3', {
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
        <div style={{padding: 32, overflow: 'hidden'}}>
          <List>
            <ListItem disableGutters style={{position: 'relative', zIndex: 99}}>
              <ListItemIcon>
                <Paper elevation={4} className={classes.numberStyle}>2</Paper>
              </ListItemIcon>
              <ListItemText primary={
                <Typography variant='h5' component='h2' style={{position: 'relative', top: 14}} gutterBottom>собственное производство</Typography>
              } />
            </ListItem>
            <Typography variant='h1' component='span' style={{
              color: '#FDFBFC',
              fontSize: '9rem',
              fontWeight: 500,
              position: 'absolute',
              top: -36,
              left: -60
              }}>10</Typography>
          </List>
          <div style={{position: 'relative'}}>
            <Typography variant='body1' component='p' gutterBottom>
              Cобственная разработка изделий и комплектующих, позволяет нам гарантировать максимальную<br />согласованность
              комплектующих между собой и запас прочности более чем&ensp;
              <Typography variant="body1" component='span' color='primary'>на 10-летний срок службы,</Typography><br />
              а также, оптимальное сочетание цены и качества.
            </Typography>
            <Typography variant='h1' component='span' style={{
              color: '#FDFBFC',
              fontSize: '9rem',
              fontWeight: 500,
              position: 'absolute',
              top: -20,
              right: -64
              }}>10</Typography>
          </div>
        </div>
        <Grid
          container
          justify='center'
          alignItems='stretch'
        >
          <Grid item md={3} style={{paddingLeft: 32}}>
            <List>
              <ListItem disableGutters  style={{position: 'relative'}}>
                <ListItemIcon>
                  <Paper elevation={4} className={classes.numberStyle}>3</Paper>
                </ListItemIcon>
                <ListItemText primary={
                  <Typography variant='h5' component='h2' style={{position: 'relative', top: 14}} gutterBottom>индивидуальное исполнение</Typography>
                } />
                <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles6}/>
              </ListItem>
            </List>
            <div>
              <Typography variant='body1' component='p' gutterBottom>Изготовим для Вас светильник на заказ по индивидуальным размерам, вплоть до&ensp;
                <Typography variant="body1" component='span' color='primary'>МИЛЛИМЕТРА
                  </Typography>&ensp;без видимых стыков (соединений) и точно в срок.
              </Typography>
              <Typography variant='body2' component='p' gutterBottom>Выполним монтаж.</Typography>
            </div>
          </Grid>
          <Grid item md={2} />
          <Grid item md={7}>
            <List>
              <ListItem disableGutters>
                <ListItemIcon>
                  <Paper elevation={4} className={classes.numberStyle}>4</Paper>
                </ListItemIcon>
                <ListItemText primary={
                  <Typography variant='h5' component='h2' style={{position: 'relative', top: 14}} gutterBottom>гарантия 5 лет</Typography>
                } />
              </ListItem>
            </List>
            <div>
              <Typography variant='body1' component='p' gutterBottom>Мы даем письменну гарантию качества на светильник сроком<br />на 5 лет
                и гарантию на монтажные работы также на 5 лет.
              </Typography>
              <div style={{boxShadow: '-8px 8px 0 13px #fff, -19px 21px 11px 0 rgba(0, 0, 0, 0.1)'}}>
                <Typography variant='body2' component='p'>В случае перебоя в работе,&ensp;
                  <Typography variant='body1' component='span'>
                  мы не ищем виноватых и не ищем причины<br />отказать в замене - мы просто&ensp;
                      <Typography variant="body1" component='span' color='primary'>
                        меняем светильник на новый
                      </Typography>&ensp;или устраняем<br />проблемы только за наш счет.
                  </Typography>
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          justify='center'
          alignItems='flex-end'
        >
          <Grid item md={3} style={{paddingLeft: 32}}>
            {/* <div style={{position: 'relative'}}> */}
              <ChildrenResponsive style={{height: 180, position: 'relative', borderRadius: 10}}>
                <img src='/Photo-13.jpg' alt='монтаж Fulogy' />
              </ChildrenResponsive>
            {/* </div> */}
          </Grid>
          <Grid item md={2} />
          <Grid item md={7}>
            <List>
              <ListItem disableGutters style={{position: 'relative'}}>
                <ListItemIcon>
                  <Paper elevation={4} className={classes.numberStyle}>5</Paper>
                </ListItemIcon>
                <ListItemText primary={
                  <Typography variant='h5' component='h2' style={{position: 'relative', top: 14}} gutterBottom>цена производителя</Typography>
                } />
                <Typography variant='h1' component='span' style={{
                  color: '#FDFBFC',
                  fontSize: '9rem',
                  fontWeight: 500,
                  position: 'absolute',
                  top: -20,
                  left: 398
                  }}>5</Typography>
              </ListItem>
            </List>
            <div>
              <Typography variant='body1' component='p' gutterBottom>
                Посколько светильник, это наша собственная разработка,<br />Вы не переплачиваете посредникам.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div className={classes.photoBlock}>
          <Grid
            container
            justify='center'
            alignItems='center'
            style={{height: '100%'}}
            >
            <Grid item>
              <Typography variant='body2' component='p' style={{color: '#fff'}}>
              В нашей цепочке поставок полностью отсутствуют посредники,<br />тем самым обеспечивая оптимальное соотношение цены
              и качества,<br />а также гибкую систему СКИДОК.
              <span style={{display: 'inline-block', position: 'relative'}}><img src='/icon/blok-6-desktop.svg' style={{width: 25, position: 'absolute', bottom: -6, left: 2}} /></span>
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Grid
          container
          justify='center'
          alignItems='stretch'
        >
          <Grid item md={3} style={{paddingLeft: 32}}>
            <List>
              <ListItem disableGutters style={{position: 'relative'}}>
                <ListItemIcon>
                  <Paper elevation={4} className={classes.numberStyle}>6</Paper>
                </ListItemIcon>
                <ListItemText primary={
                  <Typography variant='h5' component='h2' style={{position: 'relative', top: 14}} gutterBottom>гарантийное обслуживание</Typography>
                } />
                <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles6}/>
              </ListItem>
            </List>
            <div>
              <Typography variant='body1' component='p'>
                Мы выполняем для своих заказчиков<br />гарантийное и постгарантийное<br />обслуживание и стремимся
                максимально<br />продлить срок службы наших изделий.
              </Typography>
            </div>
          </Grid>
          <Grid item md={2} />
          <Grid item md={4} style={{position: 'relative'}}>
            <List>
              <ListItem disableGutters>
                <ListItemIcon>
                  <Paper elevation={4} className={classes.numberStyle}>7</Paper>
                </ListItemIcon>
                <ListItemText primary={
                  <Typography variant='h5' component='h2' style={{position: 'relative', top: 14}} gutterBottom>доставка</Typography>
                } />
              </ListItem>
            </List>
            <div style={{position: 'relative'}}>
              <Typography variant='body1' component='p' gutterBottom>
                Осуществляем быструю доставку<br />изделий по всей России.
              </Typography>
            </div>
            <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles4}/>
          </Grid>
          <Grid item md={3}>
            <img src='/pigeon.png' alt='fulogy' style={{width: 170}} />
          </Grid>
        </Grid>
        <div className={classes.nudeBlockDesktopStyle}>
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
        </div>
      </Hidden>
    </>  
  )
}
