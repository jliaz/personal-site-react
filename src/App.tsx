import { createMuiTheme, Divider, Grid, makeStyles, Grow, ThemeProvider, Paper } from '@material-ui/core';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import React, { useRef, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import BackgroundImg from './assets/nebula.jpg';
import Menu from './components/menu/menu.component';
import Header from './components/header/header.component';
import Navigator from './components/navigator/navigator.component';
import About from './components/about/about.component';
import Art from './components/art/art.component';
import Contact from './components/contact/contact.component';

import './App.css';


const theme = createMuiTheme({
  typography: {
    fontFamily: 'Open Sans',
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${BackgroundImg})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%'
  },
  content: {
    width: '100%',
    height: '100%',
  },
}));


const App = (): React.ReactElement => {

  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

  const items: Array<string> = ["Home", "Intro", "Art", "Connect"];
  const len: number = items.length;

  useEffect(() => {
    scroll.scrollTo(0);
    scrollSpy.update();
  }, []);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
     // e.preventDefault();
      const timer = window.setTimeout(() => {
        const deltaY = e.deltaY;
        if (deltaY < 0) {
          navigateUp();
        } else if (deltaY > 0) {
          navigateDown();
        }
        clearTimeout(timer);
      }, 150)
    }

    const handleKeyPress = (e: KeyboardEvent) => {
      console.log(e);
      const timer = window.setTimeout(() => {
        const keyType = e.code;
        if (keyType === "ArrowDown") {
          //e.preventDefault();
          navigateDown();
        } else if (keyType === "ArrowUp") {
          //e.preventDefault();
          navigateUp();
        }
        clearTimeout(timer);
      }, 50)
    }

    let initialY: number | null = 0;
    let initialX: number | null = 0;

    const handleTouchStart = (e: TouchEvent) => {
      initialY = e.touches[0].clientY;
      initialX = e.touches[0].clientX;
    }

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const currentX = e.touches[0].clientX;
      const timer = window.setTimeout(() => {
        //e.preventDefault();
        if (initialY === null || initialX === null) return;
        if (Math.abs(initialX - currentX) > Math.abs(initialY - currentY)) return;
        if (initialY < currentY) {
          navigateUp();
        } else if (initialY > currentY) {
          navigateDown();
        }
        clearTimeout(timer);
      }, 50)
      
    }

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyPress, { passive: false });
    /* window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false }); */
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
      /* window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove); */
    }

  }, [index])
  

  

  const navigate = (i: number) => {
    setIndex(i);
    scroller.scrollTo(`${items[i]}`, {
      duration: 1000,
      delay: 50,
      smooth: true,
      offset: 0,
    })
  }

  const navigateUp = () => {
    const prev = index;
    if (index === 0) return;
    setIndex(prev - 1);
    scroller.scrollTo(`${items[prev - 1]}`, {
      duration: 1000,
      delay: 50,
      smooth: true,
      offset: 0,
    })
  }

  const navigateDown = () => {
    const prev = index;
    if (index === len - 1) return;
    setIndex(prev + 1);
    scroller.scrollTo(`${items[prev + 1]}`, {
      duration: 1000,
      delay: 50,
      smooth: true,
      offset: 0,
    })
  }
  //TODO do not let index go past max/min (DONE)
  //Loading starting index based on querystring
  // ANIMATIONS (no longer a prio)
  // hide srollbar (DONE)
  // scroll (DONE)
  // mobile (DONE)
  // keyboard presses (DONE)
  // change index when scrolling with mouse (DONE)
  // make functions for move up, move down, move (DONE)
  // navigation by clicking on the dots in timeline (DONE)
  // add interests: animal crossing island + op.gg
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className={classes.root}>
            <Menu></Menu>
            <Navigator 
              moveUp={navigateUp}
              moveDown={navigateDown}
              move={(i: number)=> {navigate(i)}}
              items={items}
              currentItem={items[index]}
            ></Navigator>
            <div className={classes.content}>
              <Element name="Home">
                <Header onExplore={() => {navigate(1)}}></Header>
              </Element>
              <Element name="Intro">
                <About></About>
              </Element>
              <Element name="Art">
                <Art></Art>
              </Element>
              <Element name="Connect">
                <Contact></Contact>
              </Element>
            </div>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
    

  )
}

export default App;
