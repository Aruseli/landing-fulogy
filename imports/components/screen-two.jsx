import React from 'react';

import {
  makeStyles, 
  Typography, 
  Container, 
  Paper, 
  Hidden,
  Grid
} from '@material-ui/core';

import {ChildrenResponsive} from '../package/children-responsive';

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
    backgroundImage: 'linear-gradient(#ececec 35%, rgba(255,255,255,0) 0%)',
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
    color: '#ececec',
  },
  rightGridItemStyleText: { 
    position: 'absolute', 
    bottom: 0
  },
  rightGridItemStyleBlock: {
    position: 'absolute',
    left: 32,
    top: 64,
    width: 'calc(100% - 64px)',
    height: 'calc(100% - 128px)'
  },
  redRect: {
    position: 'absolute',
    top: '40%',
    left: '-2%',
    width: 48,
    height: 112,
    backgroundColor: '#FCF0F0'
  },
  arrowStyles1: {
    position: 'absolute',
    width: 35,
    left: -48,
    top: '85%',
    transform: 'rotate(-85deg)',
    bottom: 150,
  },
  arrowStyles2: {
    position: 'absolute',
    width: 45,
    left: '87%',
    transform: 'rotate(15deg)',
    bottom: -42
  },
}))

export const ScreenTwo = () => {
  const classes = useStyle();
  
  return(
    <>
      <Hidden implementation='css' only={['md', 'lg', 'xl']}>
        <div style={{position: 'relative', paddingTop: 96, paddingRight: 16, paddingBottom: 48}}>
          <div className={classes.dottedLineStyle} />
          <Paper elevation={4} className={classes.circleNumberStyle}>2</Paper>
          <div className={classes.headerStyle}>
            <Typography variant="h1" component='h1'>здравствуйте,</Typography>
            <Typography variant="h2" component='h1' gutterBottom>уважаемый заказчик!</Typography>
            <div className={classes.redLineStyle} />
          </div>
          <Container>
            <Typography variant='body1' component='p'>Компания Fulogy представляет абсолютно
              уникальный продукт собственной разработки - 
            </Typography>
          </Container>
        </div> 
        <div className={classes.nudeBlockStyle}>
          <Typography variant='h3' component='p'>эксклюзивный светодиодный светильник премиального качества
          для рабочей зоны кухни.
          </Typography>
        </div>
      </Hidden>
      <Hidden implementation='css' only={['xs', 'sm']}>
        <Grid
          container
          justify='center'
          alignItems='stretch'>
          <Grid item md={5}>
            <div style={{padding: '64px 32px', position: 'relative'}}>
              <div>
                <Typography variant="h1" component='h2' gutterBottom>здравствуйте, уважаемый заказчик!</Typography>
                <Typography variant='body1' component='p' gutterBottom>Компания Fulogy представляет абсолютно
                  уникальный продукт собственной разработки - эксклюзивный светодиодный светильник премиального качества
                  для рабочей зоны кухни.
                </Typography>
              </div>
              <div>
                <Typography variant="h2" component='h2' gutterBottom>в чем его новизна и особенности?</Typography>
                <Typography variant='subtitle1' component='p'>Светильник дает&ensp;
                <Typography variant="body1" component='span' color='primary'>яркий,</Typography>&thinsp;
                качественный и, главное, естественный свет "БЕЗ ТОЧЕК", не перегревается и потребляет 
                очень мало электроэнергии. Кроме этого, он выглядит очень эстетично и просто красиво!  
                </Typography>
              </div>
              <div>
                <Typography variant="body1" component='span'>Мы не экономим на материалах, а потому качество нашей 
                  продукции на высшем уровне, в чем Вы сможете убедиться сами.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item md={7} style={{position: 'relative'}}>
            <div className={classes.rightGridItemStyleBlock}>
              <ChildrenResponsive style={{width: '100%', height: 'calc(100% - 55px)', zIndex: 111, borderRadius: 10}}>
                <img src='/Photo-3.jpg' alt='fulogy'/>
              </ChildrenResponsive>
              <Typography variant='body1' component='p' className={classes.rightGridItemStyleText}>подробнее 
                ознакомиться с необычными свойствами светильника Вы можете на этой странице ниже
              </Typography>
              <div className={classes.redRect} />
              <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles1} />
              <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles2} />
            </div>
          </Grid>
        </Grid>
      </Hidden>
    </>  
  )
}
