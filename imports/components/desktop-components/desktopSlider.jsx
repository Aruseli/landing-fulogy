import React, {useState} from 'react';

import { ChildrenResponsive } from '../../package/children-responsive';
import { makeStyles, ButtonBase } from '@material-ui/core';
import { nominalTypeHack } from 'prop-types';

const useStyles = makeStyles(() => ({
  cover: {
    width: '100%',
    maxWidth: 360,
  },
  tableCellStyle: {
    borderBottom: 0
  },
  animation: {
    transition: 'all 1s ease',
  },
  checkboxStyle: {
    backgroundColor: '#fff',
    color: '#00b6ff',
    margin: '0 -4px',
    height: 10
  }
}));

// const items = [
//   {
    
//     src: '/Photo-9.png',
    
//   },
//   {
    
//     src: '/Photo-10.png',
    
//   },
//   {
    
//     src: '/Photo-11.jpg',
    
//   },
// ]

export const DesktopSlider = ({items, style}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const classes = useStyles();

  return (<>
      <div style={{position: 'relative', width: 'calc(100% - 214px)', height: '30vw', float: 'left'}}>
          {items.map((item, i) => (
            <ChildrenResponsive style={{ borderRadius: 10}} key={i}>
              <img src={item.src} alt='fulogy' style={{
              opacity: i == activeIndex ? 1 : 0
            }} />
            </ChildrenResponsive>
          ))}
      </div>
      <div style={{position: 'relative', width: 150, float: 'right', right: 32, top: 0}}>
        {items.map((item, i) => (  
          <ButtonBase
            onClick={() => setActiveIndex(i)} className={classes.animation} key={i}
            style={{ marginBottom: 16 }}
          >
            <ChildrenResponsive style={{
              borderRadius: 10,
              opacity: i == activeIndex ? 1 : 0.3,
              position: 'relative',
              width: 150,
              height: 100,
              display: i == activeIndex && 'none'
            }}>
              <img src={item.src} alt='fulogy' />
            </ChildrenResponsive>
          </ButtonBase>
        ))}
      </div>
    </>
  )
}