import React from 'react';

import {
  makeStyles, 
  Typography, 
  Container, 
  Paper, 
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Grid
} from '@material-ui/core';

import FiberManualRecord from '@material-ui/icons/FiberManualRecord';

import {ChildrenResponsive} from '../package/children-responsive';
import {Slider} from './slider';
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
    backgroundImage: 'linear-gradient(#f37e78 35%, rgba(255,255,255,0) 0%)',
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
    background: '#f3b3b3',
    fontSize: 16,
    padding: 7,
    boxSizing: 'border-box',
    color: '#fff',
  },
  clipPathBlock1: {
    clipPath: 'polygon(100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
    backgroundPosition: 'center',
    backgroundImage: "url('/Photo-14.png')",
    backgroundSize: 'cover',
    width: '100%',
    height: '25vh',
    position: 'relative',
    zIndex: 2
  },
  clipPathBlock2: {
    clipPath: 'polygon(100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
    backgroundPosition: 'top',
    backgroundImage: "url('/hand.jpg')",
    backgroundSize: 'cover',
    width: '100%',
    height: '25vh',
    position: 'relative',
    zIndex: 2
  },
  dotStyle: {
    width: 10
  },
  minWidth: {
    minWidth: 15
  },
  clipPathBlockDesktop: {
    clipPath: 'polygon(85% 0, 100% 5%, 100% 100%, 0 100%, 0 5%, 15% 0)',
    backgroundPosition: 'top -50px left 0px',
    backgroundImage: "url('/Photo-14.png')",
    height: '100%',
    backgroundSize: 'auto 160%',
    width: '100%',
    position: 'absolute',
    zIndex: 11
  },
  arrowStyles: {
    position: 'absolute',
    width: 45,
    bottom: -76,
    left: '35vw',
    transform: 'rotate(15deg)',
  },
  redRect: {
    position: 'absolute',
    top: -16,
    left: '66%',
    width: 48,
    height: 112,
    backgroundColor: '#FCF0F0'
  },
  arrowStyles2: {
    position: 'absolute',
    width: 45,
    bottom: 0,
    left: '30vw',
    transform: 'rotate(-55deg)',
  },
  arrowStyles3: {
    position: 'absolute',
    width: 45,
    bottom: -72,
    left: 0,
    transform: 'rotate(31deg)',
  },
}))

const items = [
  {
    id: 1,
    src: '/Photo-15.jpg',
    alt: 'теплый свет'
  },
  {
    id: 2,
    src: '/Photo-16.jpg',
    alt: 'дневной свет'
  },
  {
    id: 3,
    src: '/Photo-17.jpg',
    alt: 'холодный свет'
  }
]

const itemsDesktop = [
  { 
    src: '/Photo-15.jpg', 
  },
  {
    src: '/Photo-16.jpg', 
  },
  {
    src: '/Photo-17.jpg', 
  },
]

export const ScreenEight = () => {
  const classes = useStyle();
  
  return(
    <>
      <Hidden implementation='css' only={['md', 'lg', 'xl']}>
        <div style={{position: 'relative', paddingTop: 96, paddingRight: 32, paddingBottom: 16}}>
          <div className={classes.dottedLineStyle} />
          <Paper elevation={4} className={classes.circleNumberStyle}>6</Paper>
          <div className={classes.headerStyle}>
            <Typography variant="h1" component='h1'>преимущества</Typography>
            <Typography variant="h2" component='h1' gutterBottom>самого светильника</Typography>
            <div className={classes.redLineStyle} />
          </div>
          <Container>
            <List>
              <ListItem>
                <ListItemIcon classes={{root: classes.minWidth}}>
                  <FiberManualRecord className={classes.dotStyle} color='primary'/>
                </ListItemIcon>
                <ListItemText 
                  primary={
                  <Typography variant='h5' component='h3'>алюминиевый корпус</Typography>
                } 
                />
              </ListItem>
            </List>
            <Typography variant='body1' component='p'>позволяет рассеивать тепло,
              что делает<br />возможным использование мощных ярких<br />лент без боязни перегрева.
            </Typography>
          </Container>
        </div> 
        <div className={classes.clipPathBlock1} />
        <div style={{position: 'relative', paddingTop: 32, paddingRight: 32, paddingBottom: 32}}>
          <div className={classes.dottedLineStyle} />
          <Container>
            <List>
              <ListItem>
                <ListItemIcon classes={{root: classes.minWidth}}>
                  <FiberManualRecord className={classes.dotStyle} color='primary'/>
                </ListItemIcon>
                <ListItemText 
                  primary={
                  <Typography variant='body1' component='p'>Мы применяем</Typography>
                } 
                />
              </ListItem>
            </List>
            <Typography variant='body1' component='p'>
              <Typography variant='h5' component='h3'>светодиоды высокой цветопередачи,</Typography>
              что делает свет приближенным к естественному солнечному свету, и Вы видите предметы привычно, 
              как и при дневном свете.
            </Typography>
            <Typography variant='body1' component='p'>Рабочая зона столешницы при этом освещается равномерно
            для комфортного приготовления пищи.
            </Typography>
          </Container>
        </div>
        <Slider items={items} />
        <div style={{position: 'relative', paddingTop: 24, paddingRight: 16, paddingBottom: 16}}>
          <div className={classes.dottedLineStyle} />
          <Container>
            <List>
              <ListItem>
                <ListItemIcon classes={{root: classes.minWidth}}>
                  <FiberManualRecord className={classes.dotStyle} color='primary'/>
                </ListItemIcon>
                <ListItemText 
                  primary={
                  <Typography variant='body1' component='p'>Для Вашего удобства светильник</Typography>
                } 
                />
              </ListItem>
            </List>
            <Typography variant='body1' component='span'>
              <Typography variant='h5' component='h3'>оснащен бесконтактной системой управления.</Typography>
              Вы можете его включать, выключать, регулировать яркость без прикосновения, только по взмаху руки, как
              волшебной палочкой!
            </Typography>
            <Typography variant='body2' component='p'>Это удобно и гигиенично.</Typography>
          </Container>
        </div>
        <div className={classes.clipPathBlock2} />
        <div style={{
          position: 'relative', 
          boxShadow: '0 5px 10px 0 rgba(0, 0, 0, .1)', 
          boxSizing: 'border-box',  
          zIndex: 222,
          backgroundColor: '#fff'
        }}>
          <div style={{padding: '32px 32px 32px 16px'}}>
            <List disablePadding>
              <ListItem>
                <ListItemIcon classes={{root: classes.minWidth}}>
                  <FiberManualRecord className={classes.dotStyle} color='primary'/>
                </ListItemIcon>
                <ListItemText 
                  primary={
                  <Typography variant='h5' component='h3'>блок питания</Typography>
                } 
                />
              </ListItem>
            </List>
            <Typography variant='body1' component='p'>
                Fulogy очень компактный, что позволяет проводить скрытый монтаж. При этом он не шумит и 
                прослужит долго, потому что мы НЕ ЭКОНОМИМ НА МАТЕРИАЛАХ. 
            </Typography>
          </div>
        </div>
        <div style={{position: 'relative', paddingTop: 48, paddingRight: 16}}>
          <div className={classes.dottedLineStyle} />
          <Container>
            <List disablePadding>
              <ListItem>
                <ListItemIcon classes={{root: classes.minWidth}}>
                  <FiberManualRecord className={classes.dotStyle} color='primary'/>
                </ListItemIcon>
                <ListItemText 
                  primary={
                  <Typography variant='h5' component='h3'>светодиодная подсветка</Typography>
                } 
                />
              </ListItem>
            </List>
            <Typography variant='body1' component='p'>
              имеет низкое энергопотребление, а значит,&ensp;
              <Typography variant='body2' component='span'>экономит Ваши расходы.</Typography>
            </Typography>
          </Container>
        </div> 
      </Hidden>
      <Hidden implementation='css' only={['sm', 'xs']}>
        <div style={{position: 'relative', paddingTop: 64}}>
          <Typography variant="h1" component='h2' align='center' gutterBottom>преимущества светильника</Typography>
        </div>
        <div style={{position: 'relative', marginTop: 64, marginBottom: 64,}}>
          <div className={classes.clipPathBlockDesktop} />
          <Grid
            container
            justify="flex-end"
            alignItems='center'
          >
            <Grid item style={{
              position: 'relative',
              top: 56,
              right: '2%',
              width: 430,
              height: '37vw',
              zIndex: 111
            }}>
              <List>
                <ListItem>
                  <ListItemIcon classes={{root: classes.minWidth}}>
                    <FiberManualRecord className={classes.dotStyle} color='primary'/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                    <Typography variant='h5' component='h3' style={{color: '#fff'}}>алюминиевый корпус</Typography>
                  } 
                  />
                </ListItem>
              </List>
              <Typography variant='body1' component='p' style={{color: '#fff'}}>позволяет рассеивать тепло,
                что делает возможным использование мощных ярких лент без боязни перегрева.
              </Typography>
            </Grid>
          </Grid>
          <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles} />
        </div>
        <Grid
          container
          justify='center'
          alignItems="stretch" 
          style={{paddingTop: 32}}
        >
          <Grid item md={5}>
            <Grid container justify='center' alignItems='center' style={{marginRight: 80, paddingLeft: 32}}>
              <Grid item md={12}> 
                <List>
                  <ListItem>
                    <ListItemIcon classes={{root: classes.minWidth}}>
                      <FiberManualRecord className={classes.dotStyle} color='primary'/>
                    </ListItemIcon>
                    <ListItemText 
                      primary={
                      <Typography variant='body1' component='p'>Мы применяем</Typography>
                    } 
                    />
                  </ListItem>
                </List>
                <Typography variant='body1' component='p' gutterBottom>
                  <Typography variant='h5' component='h3'>светодиоды высокой цветопередачи,</Typography>
                  что делает свет приближенным<br />к естественному солнечному свету, и Вы видите<br />предметы привычно, 
                  как и при дневном свете.
                </Typography>
                <Typography variant='body1' component='p'>Рабочая зона столешницы при этом освещается<br />равномерно
                для комфортного приготовления<br />пищи.
                </Typography>
              </Grid>
              <Grid item md={12}>
                <div style={{position: 'relative', paddingTop: 24, paddingBottom: 16}}>
                  <List>
                    <ListItem>
                      <ListItemIcon classes={{root: classes.minWidth}}>
                        <FiberManualRecord className={classes.dotStyle} color='primary'/>
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                        <Typography variant='body1' component='p'>Для Вашего удобства светильник</Typography>
                      } 
                      />
                    </ListItem>
                  </List>
                  <Typography variant='body1' component='p' gutterBottom>
                    <Typography variant='h5' component='h3'>оснащен бесконтактной системой управления.</Typography>
                    Вы можете его включать, выключать, регулировать<br />яркость без прикосновения, только по взмаху руки,<br />как
                    волшебной палочкой!
                  </Typography>
                  <Typography variant='body2' component='p' gutterBottom>Это удобно и гигиенично.</Typography>  
                  <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles2} />
                </div>
                <div style={{position: 'relative'}}>
                  <div className={classes.redRect} />
                  <ChildrenResponsive style={{height: 210, width: '70%', position: 'relative', borderRadius: 10}}>
                    <img src='/hand.jpg' alt='бесконтактная системой управления Fulogy' />
                  </ChildrenResponsive>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={7}>
            <Grid container justify='center' alignItems='center'>
              <Grid item md={12}>
                <DesktopSlider items={itemsDesktop} />
              </Grid>
              <Grid item md={11} style={{paddingTop: 48}}>
                <Grid container justify='center' alignItems='flex-end' style={{
                  boxShadow: '12px 4px 0 13px #FCFCFC, -1px 17px 11px 0 rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#fcfcfc'  
                }}>
                  <Grid item md={11}>
                    <div >
                      <List disablePadding>
                        <ListItem>
                          <ListItemIcon classes={{root: classes.minWidth}}>
                            <FiberManualRecord className={classes.dotStyle} color='primary'/>
                          </ListItemIcon>
                          <ListItemText 
                            primary={
                            <Typography variant='h5' component='h3'>блок питания</Typography>
                          } 
                          />
                        </ListItem>
                      </List>
                      <Typography variant='body1' component='p'>
                          Fulogy очень компактный, что позволяет проводить скрытый монтаж.<br />При этом он не шумит и 
                          прослужит долго, потому что мы<br /><b>не экономим на материалах.</b>
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={11} style={{paddingTop: 48}}>
                <Grid container justify='center' alignItems='flex-end'>
                  <Grid item md={11} style={{position: 'relative'}}>
                    <List disablePadding>
                      <ListItem>
                        <ListItemIcon classes={{root: classes.minWidth}}>
                          <FiberManualRecord className={classes.dotStyle} color='primary'/>
                        </ListItemIcon>
                        <ListItemText 
                          primary={
                          <Typography variant='h5' component='h3'>светодиодная подсветка</Typography>
                        } 
                        />
                      </ListItem>
                    </List>
                    <Typography variant='body1' component='p'>
                      имеет низкое энергопотребление, а значит,&ensp;
                      <Typography variant='body2' component='span'>экономит Ваши расходы.</Typography>
                    </Typography>
                    <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles3} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>  
          </Grid>
        </Grid>
      </Hidden>
    </>  
  )
}