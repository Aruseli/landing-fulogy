import React from 'react';

import {
  makeStyles, 
  Typography, 
  Container, 
  Paper, 
  Hidden,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import {Slider} from './slider';
import { ChildrenResponsive } from '../package/children-responsive';
import { DesktopSlider } from './desktop-components/desktopSlider';

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
  circleNumberStyle: {
    top: 32,
    right: 10,
    width: 30,
    height: 30,
    textAlign: 'center',
    position: 'absolute',
    background: '#f3dfdf',
    fontSize: 16,
    padding: 7,
    boxSizing: 'border-box',
    color: '#fff',
  },
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
  arrowStyles: {
    position: 'absolute',
    top: 0,
    width: 35,
    left: 32,
    transform: 'rotate(-12deg)',
  },
  arrowStyles1: {
    position: 'absolute',
    width: 35,
    right: 48,
    transform: 'rotate(7deg)',
    top: 160
  },
  arrowStyles2: {
    position: 'absolute',
    width: 35,
    left: 64,
    transform: 'rotate(-10deg)',
    top: 208
  },
  arrowStyles3: {
    position: 'absolute',
    width: 35,
    left: 0,
    transform: 'rotate(-10deg)',
    bottom: -60
  },
  progressStepsStyle: {
    color: '#000', 
    opacity: 0.2,
    position: 'absolute',
    top: 3,
    left: 8,
    width: 100
  },
  clipPathBlock: {
    clipPath: 'polygon(100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
    backgroundPosition: 'center',
    backgroundImage: "url('/Photo-12.jpg')",
    backgroundSize: 'cover',
    width: '100%',
    height: '25vh',
    position: 'relative',
    zIndex: 2
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
  }
}))

const items = [
  {
    id: 1,
    src: '/Photo-9.png',
    alt: 'подсветка кухни'
  },
  {
    id: 2,
    src: '/Photo-10.png',
    alt: 'подсветка кухни'
  },
  {
    id: 3,
    src: '/Photo-11.jpg',
    alt: 'подсветка кухни'
  }
]

const itemsDesktop = [
  { 
    src: '/Photo-9.png', 
  },
  {
    src: '/Photo-10.png', 
  },
  {
    src: '/Photo-11.jpg', 
  },
]

export const ScreenSix = () => {
  const classes = useStyle();
  
  return(
  <>
    <Hidden implementation="css" only={['md', 'lg', 'xl']}>
      <div style={{position: 'relative'}}>
        <div style={{paddingTop: 96, paddingRight: 16}}>
          <div className={classes.dottedLineStyle} />
          <Paper elevation={4} className={classes.circleNumberStyle}>5</Paper>
          <div className={classes.headerStyle}>
            <Typography variant="h1" component='h1'>почему стоит купить</Typography>
            <Typography variant="h2" component='h1' gutterBottom>светильник именно у нас?</Typography>
            <div className={classes.redLineStyle} />
          </div>
          <div style={{position: 'relative', paddingTop: 32, paddingBottom: 48}}>
            <Paper elevation={4} className={classes.progressNumberStyle}>1
              <Typography variant='body1' component='span' className={classes.progressStepsStyle}>из 7</Typography>
            </Paper>
            <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles}/>
            <Typography variant='h5' component='h2' align='center' style={{paddingTop: 16}} gutterBottom>уникальные<br />качества светильника</Typography>
            <Container>
              <Typography variant='body1' component='p'>
                <Typography variant="body1" component='span' color='primary'>Яркий,</Typography>&ensp;качественный и естественный свет "БЕЗ ТОЧЕК",
                что создает комфортные условия для приготовления еды.
              </Typography>
            </Container>
          </div>
        </div>
        <Slider items={items}/>
        <div style={{position: 'relative'}}>
          <div style={{
            position: 'relative', 
            boxShadow: '0 5px 10px 0 rgba(0, 0, 0, .1)', 
            boxSizing: 'border-box', 
            padding: 32, 
            zIndex: 222,
            backgroundColor: '#fff'
          }}>
            <Typography variant='h2' component='p' align='center'>оригинальный дизайн "не&nbsp;как&nbsp;у&nbsp;всех"</Typography>
            <Typography variant='body1' component='p' align='center'>- выглядит стильно, этетично и просто красиво!</Typography>
          </div>
          <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles1}/>
          <div style={{position: 'relative', paddingTop: 48, paddingRight: 8, paddingBottom: 16}}>
            <div className={classes.dottedLineStyle} />
            <Container style={{paddingRight: 50}}>
              <Typography variant='body1' component='p'>Свет, максимально направленный на рабочую зону,&ensp;
                <Typography variant="body1" component='span' color='primary'>не бьет в глаза</Typography>. 
                А также многие другие качества с которыми Вы ознакомитесь далее.
              </Typography>
            </Container>
          </div>
        </div>
        <div style={{position: 'relative'}}>
          <div className={classes.clipPathBlock} />
          <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles2}/>
        </div>
      </div> 
    </Hidden>
    <Hidden implementation='css' only={['sm', 'xs']}>
      <div style={{position: 'relative', paddingTop: 128}}>
        <Typography variant="h1" component='h2' align='center' gutterBottom>почему стоит купить светильник именно у нас?</Typography>
      </div>
      <Grid
        container
        justify='center'
        alignItems="center" 
        style={{paddingTop: 32}}
      >
        <Grid item md={5}>
          <Grid container justify='center' alignItems='center'>
            <Grid item style={{marginRight: 80, paddingLeft: 32}}> 
              <List>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <Paper elevation={4} className={classes.numberStyle}>1</Paper>
                  </ListItemIcon>
                  <ListItemText primary={
                    <Typography variant='h5' component='h2' style={{position: 'relative', top: 14}} gutterBottom>уникальные качества светильника</Typography>
                  } />
                </ListItem>
              </List>
              <div style={{position: 'relative'}}>
                <Typography variant='body1' component='p' gutterBottom>
                  <Typography variant="body1" component='span' color='primary'>Яркий,</Typography>&ensp;качественный и естественный свет "БЕЗ ТОЧЕК",
                  что создает комфортные условия для приготовления еды.
                </Typography>
                <Typography variant='body1' component='p' gutterBottom>Свет, максимально направленный на рабочую зону,&ensp;
                  <Typography variant="body1" component='span' color='primary'>не бьет в глаза</Typography>. 
                  А также многие другие качества с которыми Вы ознакомитесь далее.
                </Typography>
                <Typography variant='body2' component='p'>Оригинальный дизайн "не как у всех"<br />
                  <Typography variant="body1" component='span'>- Выглядит эстетично, стильно и просто красиво.</Typography>
                </Typography>
                <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles3}/>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={7}>
          <DesktopSlider items={itemsDesktop} />
        </Grid>
      </Grid>
    </Hidden>
  </>  
  )
}