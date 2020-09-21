import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ImageBlock from '../image-block/image-block.component';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        paddingTop: theme.spacing(10),
        color: 'white',
      },
}));

const Fun = (): React.ReactElement => {
    const classes = useStyles();
    return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography component="div">
                <Box fontWeight={100} letterSpacing={4} m={1}>
                    more.
                </Box>
            </Typography>
        </Grid>
       
      </Grid>
    </div>
    )
}

export default Fun;