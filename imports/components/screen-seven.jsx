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
  progressNumberStyle: {
    width: 80,
    height: 80,
    textAlign: 'center',
    background: '#fff',
    fontSize: '2.9rem',
    padding: 15,
    boxSizing: 'border-box',
    color: theme.palette.primary.main,
    boxShadow: '0 0 0px 6px #f37e78',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative'
  },
  nudeBlockStyle: {
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    padding: '32px 100px 32px 32px',
    position: 'relative'
  },
  dottedLineStyle: {
    position: 'absolute',
    right: 75,
    top: 0,
    height: '100%',
    width: 1,
    backgroundSize: '1px 66px',
    backgroundImage: 'linear-gradient(#f3dfdf 33%, rgba(255,255,255,0) 0%), linear-gradient(#f3dfdf 33%, rgba(255,255,255,0) 0%)',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'right'
  },
  arrowStyles1: {
    position: 'absolute',
    width: 100,
    right: 24,
    transform: 'rotate(1deg)',
    top: -20
  },
  arrowStyles2: {
    position: 'absolute',
    width: 121,
    left: 115,
    transform: 'rotate(-7deg)',
    top: 8
  },
  arrowStyles3: {
    position: 'absolute',
    width: 100,
    right: 45,
    transform: 'rotate(1deg)',
    top: 300
  },
  arrowStyles4: {
    position: 'absolute',
    width: 121,
    left: 115,
    transform: 'rotate(-7deg)',
    top: 8
  },
  arrowStyles5: {
    position: 'absolute',
    width: 100,
    right: 145,
    transform: 'rotate(1deg)',
    top: 0
  },
  clipPathBlock: {
    clipPath: 'polygon(100% 0, 100% 100%, 85% 95%, 15% 95%, 0 100%, 0 0)',
    backgroundPosition: 'center',
    backgroundImage: "url('/Photo-13.jpg')",
    backgroundSize: 'cover',
    width: '100%',
    height: '25vh',
    position: 'relative',
    zIndex: 2
  },
  redBordersBlockStyle: {
    borderTop: `3px solid ${theme.palette.primary.main}`,
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    boxSizing: 'border-box',
    padding: 48,
    position: 'relative',
    marginTop: 32
  },
}))

export const ScreenSeven = () => {
  const classes = useStyle();
  const { trigger } = useContext(AnaliticsContext);
  const {setDialog, open} = useContext(DialogContext);

  const handlerEvent = (openEvent, thaksName, config) => () => {
    trigger(openEvent);
    setDialog({ 
      ...config,
      open: !open, 
      onThanksHandler: (trigger) => (trigger(thanksName), trigger('thanks')), 
    });
  }
  
  return(
    <>
      <div style={{position: 'relative', paddingTop: 112, paddingBottom: 48}}>   
        <div className={classes.dottedLineStyle} /> 
          <Paper elevation={4} className={classes.progressNumberStyle}>2</Paper>
          <Typography variant='h5' component='h2' align='center' style={{paddingTop: 64}} gutterBottom>собственное<br />производство</Typography>
          <Container style={{paddingRight: 48}}>
            <Typography variant='body1' component='p'>Собственная разработка изделий и комплектующих позволяет 
                нам гарантировать максимальную согласованность комплектующих между собой и запас прочности более чем&ensp;
              <Typography variant="body1" component='span' color='primary'>на&nbsp;10-летний&nbsp;срок&nbsp;службы,
                </Typography>&ensp;а также оптимальное сочетание цены и качества.
            </Typography>
          </Container>
      </div>
      <div style={{position: 'relative', paddingTop: 112, paddingBottom: 64}}>   
        <div className={classes.dottedLineStyle} /> 
          <Paper elevation={4} className={classes.progressNumberStyle}>3</Paper>
          <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles1}/>
          <Typography variant='h5' component='h2' align='center' style={{paddingTop: 64}} gutterBottom>индивидуальное<br />исполнение</Typography>
          <Container style={{paddingRight: 48}}>
            <Typography variant='body1' component='p'>Изготовим для Вас светильник на заказ по индивидуальным размерам, вплоть до&ensp;
              <Typography variant="body1" component='span' color='primary'>МИЛЛИМЕТРА
                </Typography>&ensp;без видимых стыков (соединений) и точно в срок.
            </Typography>
            <Typography variant='body2' component='p'>Выполним монтаж.</Typography>
          </Container>
      </div>
      <div className={classes.clipPathBlock} />
      <div style={{position: 'relative', paddingTop: 112, paddingBottom: 64}}>   
        <div className={classes.dottedLineStyle} /> 
          <Paper elevation={4} className={classes.progressNumberStyle}>4</Paper>
          <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles2}/>
          <Typography variant='h5' component='h2' align='center' style={{paddingTop: 64}} gutterBottom>гарантия 5 лет</Typography>
          <Container style={{paddingRight: 48}}>
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
      <div style={{position: 'relative', paddingTop: 112, paddingBottom: 64}}>   
        <div className={classes.dottedLineStyle} /> 
        <Paper elevation={4} className={classes.progressNumberStyle}>5</Paper>
        <Typography variant='h5' component='h2' align='center' style={{paddingTop: 64}} gutterBottom>цена<br />производителя</Typography>
        <Container style={{paddingRight: 48, paddingBottom: 48}}>
          <Typography variant='body1' component='p'>
            Посколько светильник - это наша собственная разработка, Вы не  переплачиваете посредникам.
          </Typography>
        </Container>
        <div className={classes.redBordersBlockStyle}>
          <Typography variant='body2' component='p'>
            В нашей цепочке поставок полностью отсутствуют посредники, тем самым обеспечивая оптимальное соотношение цены
            и качества, а также гибкую систему СКИДОК.
          </Typography>
          <img src='/icon/blok-6.svg' style={{width: 65, position: 'absolute', bottom: 48, right: 282}} />
        </div>
      </div>
      <div style={{position: 'relative', paddingTop: 112, paddingBottom: 64}}>   
        <div className={classes.dottedLineStyle} /> 
          <Paper elevation={4} className={classes.progressNumberStyle}>6</Paper>
          <img src='/icon/up-broken-line-arrow-right.svg' alt='стрелочка' className={classes.arrowStyles4}/>
          <Typography variant='h5' component='h2' align='center' style={{paddingTop: 64}} gutterBottom>
            гарантийное<br />обслуживание
          </Typography>
          <Container style={{paddingRight: 48}}>
            <Typography variant='body1' component='p'>
              Мы выполняем для своих заказчиков гарантийное и постгарантийное обслуживание и стремимся
              максимально продлить срок службы наших изделий.
            </Typography>
          </Container>
      </div>
      <div style={{position: 'relative', paddingTop: 112, paddingBottom: 64}}>   
        <div className={classes.dottedLineStyle} /> 
          <Paper elevation={4} className={classes.progressNumberStyle}>7</Paper>
          <img src='/icon/up-broken-line-arrow-left.svg' alt='стрелочка' className={classes.arrowStyles5}/>
          <Typography variant='h5' component='h2' align='center' style={{paddingTop: 64}} gutterBottom>
            доставка
          </Typography>
          <Container style={{paddingRight: 48}}>
            <Typography variant='body1' component='p' align='center'>
              Осуществляем быструю доставку изделий по всей России.
            </Typography>
          </Container>
      </div>
      <div style={{position: 'relative', padding: '0 48px'}}>
        <div className={classes.dottedLineStyle} />
        <Typography variant="h4" component='h2' align='center' style={{paddingTop: 64}}>
        чтобы задать вопрос или оставить заявку</Typography>
        <Typography variant="body1" component='p' align='center' style={{paddingBottom: 64}}>
        нажмите на кнопку ниже:</Typography>
        <Grid display='column' container justify='center' alignItems='center' spacing={10}>
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
    </>  
  )
}