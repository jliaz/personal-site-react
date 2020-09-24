import React from 'react';
import { Grid, makeStyles, Button, Box } from '@material-ui/core';
import ImageBlock from '../image-block/image-block.component';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    }, 
    blockGrid: {
        width: '65%',
    },
}));

const About = (): React.ReactElement => {
    const classes = useStyles();

    const scrollTo = (loc: string) => {
        scroller.scrollTo(`${loc}`, {
            duration: 1000,
            delay: 50,
            smooth: true,
            offset: 0,
          });
    }
    return (
        <Grid 
            container 
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.root}
        >  
            <Grid item>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item className={classes.blockGrid}>
                        <ImageBlock image="../../assets/headshot.jpg" title="Hi. I'm Julia Zhang.">
                            I am a third-year student at the University of Waterloo studying CS + Data Science, and currently looking
                            for a Jan 2021 - April 2021 internship. 
                            <br/><br/>
                            I am also an artist! I do watercolour, pencil and digital art. Take a peek of my art below.
                            <br/><br/>
                            In my free time, I like to play video games, read webtoons, collect trivia facts, and watch dog videos on Youtube.
                        </ImageBlock>
                    </Grid>
                    
                </Grid>
            </Grid>       
        </Grid>
    )
}  

export default About;