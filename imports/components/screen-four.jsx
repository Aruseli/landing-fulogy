import React, {useContext} from 'react';

import {
  makeStyles, 
  Typography, 
  Container, 
  Button, 
  Grid,
  Hidden,
  Paper
} from '@material-ui/core';

import {DialogContext} from '../index';
import { Context as AnaliticsContext } from '../package/analitics';

const useStyle = makeStyles(theme => ({
  handBlockStyle: {
    backgroundImage: "url('/hand.png')",
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '100%',
    height: 75,
    position: 'absolute',
    top: 44,
    left: -26,
    zIndex: -1
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
  dottedLineStyleDarker: {
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
  dottedLineStyleDarker2: {
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
  clipPathBlock: {
    clipPath: 'polygon(100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
    backgroundPosition: 'center',
    backgroundImage: "url('/Photo-5.jpg')",
    backgroundSize: 'cover',
    width: '100%',
    height: '25vh',
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.up('md')]: {
      backgroundImage: "url('/kitchen.jpg')",
      backgroundPosition: '15% 95%',
      height: '45vw',
    },
  },
  clipPathBlock2: {
    clipPath: 'polygon(100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
    backgroundPosition: 'center',
    backgroundImage: "url('/Photo-6.jpg')",
    backgroundSize: 'cover',
    width: '100%',
    height: '25vh',
    position: 'relative',
    zIndex: 2
  },
  arrowStyles1: {
    position: 'absolute',
    width: 35,
    right: 112,
    transform: 'rotate(15deg)',
    bottom: 150,
  },
  arrowStyles2: {
    position: 'absolute',
    width: 45,
    left: 8,
    transform: 'rotate(-1deg)',
    bottom: 30,
  },
  arrowStyles3: {
    position: 'absolute',
    width: 45,
    right: 0,
    transform: 'rotate(-1deg)',
    top: 144,
  },
  arrowStyles4: {
    position: 'absolute',
    width: 35,
    right: '22%',
    top: -80,
    transform: 'rotate(-21deg)',
    bottom: 150,
  },
  redRect1: {
    position: 'absolute',
    top: -48,
    right: 0,
    width: 20,
    height: 24,
    backgroundColor: '#FCF0F0'
  },
  clipPathBlockDesktop: {
    clipPath: 'polygon(85% 0, 100% 5%, 100% 100%, 0 100%, 0 5%, 15% 0)',
    backgroundPosition: '60%',
    backgroundImage: "url('/Photo-3-desktop.jpg')",
    // height: '38vw',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 11
  },
  paperStyles: {
    padding: theme.spacing(6, 4),
    borderRadius: 10,
  },
  redRect2: {
    position: 'absolute',
    top: -10,
    left: '13vw',
    width: 112,
    height: 24,
    backgroundColor: '#FCF0F0'
  },
  arrowStyles5: {
    position: 'absolute',
    width: 45,
    bottom: -76,
    right: '45vw',
    transform: 'rotate(15deg)',
  },
}))

export const ScreenFour = () => {
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
  };   
  
  return(
    <>
      <Hidden implementation='css' only={['md', 'lg', 'xl']}>
        <div style={{position: 'relative'}}>
          <div style={{position: 'relative', paddingTop: 90, paddingRight: 16, paddingBottom: 16}}>
            <div className={classes.dottedLineStyle} />
            <div className={classes.handBlockStyle} />
            <Container>
              <Typography variant='body1' component='p'>&ensp;
              <Typography variant="body1" component='span' style={{color: '#fff', textTransform: 'uppercase'}}>мы</Typography>&ensp;не экономим на материалах, а потому качество нашей 
                продукции на высшем уровне, в чем Вы сможете убедиться сами.
              </Typography>
            </Container>
          </div> 
          <div className={classes.clipPathBlock} />
          <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles1}/>
          <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles2}/>
          <div style={{boxShadow: '0 5px 10px 0 rgba(0, 0, 0, .1)'}}>
            <Typography variant='body2' component='p' align='center' style={{padding: '32px 16px'}}>подробнее 
              ознакомиться с необычными свойствами светильника Вы можете<br />на этой странице ниже
            </Typography>
          </div>
        </div>
        <div style={{position: 'relative', paddingTop: 80, paddingRight: 16, paddingBottom: 16}}>
          <div className={classes.dottedLineStyleDarker} />
          <Container>
            <Typography variant="h2" component='h1' gutterBottom>благодаря отсутствию посредников</Typography>
            <Typography variant='body1' component='p'>(поскольку это собственная разработка) и высококачественным комплектующим,&ensp;
                  <Typography variant="body1" component='span' color='primary'>мы предлагаем</Typography>&ensp;оптимальное
                  сочетание цены и качества!
                  </Typography>
          </Container>
          <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles3}/>
        </div>
        <div className={classes.clipPathBlock2} />
        <div style={{position: 'relative', paddingBottom: 16}}>   
          <div className={classes.dottedLineStyleDarker2} />     
          <Typography variant='body1' component='p' align='center' style={{padding: 32}}>Таким образом, приобретая наши светильники,
          Вы получаете оригинальную продукцию от компании&ensp;
              <Typography variant="body1" component='span' style={{color: '#241E4C'}}>Fulogy</Typography>&ensp;
          </Typography>
          <Grid 
            container
            justify='center'
            alignItems='center'
          >
            <Grid item xs={9}>
              <Button fullWidth variant="contained" color="primary" size="large" onClick={handlerEvent('calculation2', 'thanksCalculation2', {
                title: <Typography variant='h3' component="h1" align='center'>чтобы рассчитать стоимость светильника</Typography>,
                bottom: <>Рассчитать стоимость</>,
              })}>Рассчитать стоимость</Button>
            </Grid>
          </Grid>
        </div>
      </Hidden>
      <Hidden implementation='css' only={['sm', 'xs']}>
        <div style={{position: 'relative', marginTop: 64, marginBottom: 64}}>
          <div className={classes.redRect1} />
          <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles4} />
          <div className={classes.clipPathBlockDesktop} />
          <div className={classes.redRect2} />
          <Grid
            container
            justify="flex-end"
            alignItems='center'
          >
            <Grid item style={{
              position: 'relative',
              top: 56,
              right: '10%',
              width: 430,
              zIndex: 111
            }}>
              <Paper className={classes.paperStyles} square elevation={5}>
                <div>
                  <Typography variant="h2" component='h2' gutterBottom style={{color: '#252048', textTransform: 'none', fontWeight: 500}}>Благодаря отсутствию посредников</Typography>
                  <Typography variant='body1' component='p' gutterBottom>
                  &#40;поскольку это собственная разработка&#41; и высококачественным комплектующим <b>мы предлагаем</b> оптимальное сочетание цены и качества!
                  </Typography>
                </div>
                <div style={{position: 'relative'}}>
                  <div style={{
                    borderLeft: '3px solid #f37e78',
                    paddingLeft: 32 
                  }}>
                    <Typography variant='body1' component='p'>
                      Таким образом, покупая наши светильники, Вы получаете оригинальную продукцию от компании&ensp;
                      <Typography variant='body1' component='span' style={{color: '#252048'}}>
                        Fulogy
                      </Typography>
                    </Typography>
                  </div>
                </div>
                <div style={{paddingTop: 48}}>
                  <Button variant="contained" color="primary" size="large" onClick={handlerEvent('calculation2', 'thanksCalculation2', {
                    title: <Typography variant='h3' component="h1" align='center'>чтобы рассчитать стоимость светильника</Typography>,
                    bottom: <>Рассчитать стоимость</>,
                  })}>Рассчитать стоимость</Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles5} />
        </div>
      </Hidden>
    </>  
  )
}