import React from 'react';
import { AppBar, Button, Grid, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TelegramIcon from '@material-ui/icons/Telegram';
//TODO: change name to topBar or something

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    contactButton: {
      marginRight: theme.spacing(2),
      color: 'white',
    },
    resumeButton: {
        color: 'white',
        position: 'relative',
        marginLeft: 0,
        borderColor: 'white',
        borderRadius: '20px',
    },
    title: {
      flexGrow: 1,
    },
  }));


const Menu = (): React.ReactElement => {
    const classes = useStyles();

    return(
        <React.Fragment>
            <AppBar position="fixed" color="transparent" elevation={0}>
                <Toolbar>
                    <Grid
                        justify="space-between"
                        container
                        alignItems="center"
                    >
                        <Grid item>
                            <Button startIcon={<TelegramIcon/>} onClick={() => window.open('https://www.linkedin.com/in/julia-z/')} className={classes.contactButton}>
                            message me
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" className={classes.resumeButton} onClick={() => window.open('../../assets/Julia Zhang 2020 Resume.pdf')}>
                                RESUME
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Menu;