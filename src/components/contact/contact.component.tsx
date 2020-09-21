import React from 'react';

import { Grid, makeStyles, Button, Box, Typography, IconButton } from '@material-ui/core';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        color: 'white'
    }, 
    blockGrid: {
        width: '65%',
    },
    button: {
        color: 'white'
    }
}));

const Contact = (): React.ReactElement => {
    const classes = useStyles();
    return(
        <Grid 
            container 
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.root}
        >  
            <Grid item>
                <Typography component="div" align="center">
                    <Box fontWeight={100} letterSpacing={10} m={1}>
                        let's connect.
                    </Box>
                </Typography>
            </Grid>
            <Grid item>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <IconButton className={classes.button} onClick={() => window.open('mailto:jw7zhang@uwaterloo.ca')}>
                            <MailOutlineIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.button} onClick={() => window.open('https://www.linkedin.com/in/julia-z/')}>
                            <LinkedInIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.button} onClick={() => window.open('https://github.com/jliaz')}>
                            <GitHubIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.button} onClick={() => window.open('https://na.op.gg/summoner/userName=Jliaz')}>
                            <SportsEsportsIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>       
        </Grid>
    )
    
}

export default Contact;