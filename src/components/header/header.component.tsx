import { Grid, makeStyles, Typography, Box, IconButton } from '@material-ui/core';
import React from 'react';
import Logo from '../../assets/logo.png';
import ArrowDropDownCircleTwoToneIcon from '@material-ui/icons/ArrowDropDownCircleTwoTone';

const useStyles = makeStyles((theme) => ({
    logo: {
        maxWidth: '200px',
    },
    container: {
        color: 'white',
        height: '100vh',
    },
    exploreText: {
        marginTop: theme.spacing(10),
    },
    exploreButton: {
        color: 'white',
    }
}));

interface HeaderProps {
    onExplore: Function,
}

const Header = (props: HeaderProps): React.ReactElement => {
    const { onExplore } = props;
    const classes = useStyles();
    return (
        <div> 
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.container}
            >
                <Grid item>
                    <img src={Logo} className={classes.logo}/>
                </Grid>
                <Grid item>
                    <Typography component="div">
                        <Box fontWeight={100} letterSpacing={4} m={1}>
                            welcome to the
                        </Box>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component="div">
                        <Box letterSpacing={10} fontWeight={100} m={1}>
                            JULIAVERSE
                        </Box>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography component="div">
                        <Box fontWeight={50} m={1} className={classes.exploreText}>
                            explore
                        </Box>
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton onClick={() => {onExplore()}} className={classes.exploreButton}>
                        <ArrowDropDownCircleTwoToneIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;