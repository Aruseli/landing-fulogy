import React, {useContext} from 'react';

import {
  makeStyles, 
  Typography, 
  Container, 
  Button, 
  Grid
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
    height: 200,
    position: 'absolute',
    top: 123,
    left: -67,
    zIndex: -1
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
  dottedLineStyleDarker: {
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
  dottedLineStyleDarker2: {
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
  clipPathBlock: {
    clipPath: 'polygon(100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
    backgroundPosition: 'center',
    backgroundImage: "url('/Photo-5.jpg')",
    backgroundSize: 'cover',
    width: '100%',
    height: '25vh',
    position: 'relative',
    zIndex: 2
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
    width: 100,
    right: 342,
    transform: 'rotate(15deg)',
    bottom: 342,
  },
  arrowStyles2: {
    position: 'absolute',
    width: 121,
    left: 35,
    transform: 'rotate(-1deg)',
    bottom: 30,
  },
  arrowStyles3: {
    position: 'absolute',
    width: 121,
    right: 13,
    transform: 'rotate(-1deg)',
    top: 335,
  }
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
      <div style={{position: 'relative'}}>
        <div style={{position: 'relative', paddingTop: 240, paddingRight: 96, paddingBottom: 48}}>
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
          <Typography variant='body2' component='p' align='center' style={{padding: 64}}>подробнее 
            ознакомиться с необычными свойствами светильника Вы можете<br />на этой странице ниже
          </Typography>
        </div>
      </div>
      <div style={{position: 'relative', paddingTop: 128, paddingRight: 96, paddingBottom: 48}}>
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
      <div style={{position: 'relative'}}>   
        <div className={classes.dottedLineStyleDarker2} />     
        <Typography variant='body1' component='p' align='center' style={{padding: 64}}>Таким образом, приобретая наши светильники,
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
    </>  
  )
}