import React from 'react';
import ImageBlock from '../image-block/image-block.component';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Grid, makeStyles, Typography, Box, Paper } from '@material-ui/core';

// Image imports
import PinkMountains from '../../assets/pink mountains.jpg';
import Cranes from '../../assets/Cranes.jpg';
import Forest from '../../assets/Forest.png';
import Building from '../../assets/Building.jpg';
import Deer from '../../assets/Deer.jpg';
import Cliff from '../../assets/Cliff.jpg';
import Stars from '../../assets/Stars.jpg';
import Island from '../../assets/Island.jpg';
import Waves from '../../assets/Waves.jpg';
import Blossoms from '../../assets/blossoms.png';

const tileData = [
    {
        img: PinkMountains,
        title: 'Pink Mountains',
        cols: 2,
    },
    {
        img: Cranes,
        title: 'Paper Cranes',
        cols: 1,
    },
    {
        img: Deer,
        title: 'Fawn & Flora',
        cols: 1,
    },
    {
        img: Forest,
        title: 'Fuzhou',
        cols: 1,
    },
    {
        img: Cliff,
        title: 'Scarborough Bluffs',
        cols: 2
    },
    {
        img: Stars,
        title: 'Starry Sky',
        cols: 1,
    },
    {
        img: Island,
        title: 'Thousand Islands',
        cols: 1
    },
    {
        img: Waves,
        title: 'Waves',
        cols: 1,
    },
    {
        img: Blossoms,
        title: 'Blossoms',
        cols: 2
    }
];


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        padding: theme.spacing(10),
        paddingTop: theme.spacing(5),
        color: 'white',
    }, 
    blockGrid: {
        width: '60%'
    },
    gallery: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'none',
    },
    gridList: {
        maxWidth: '450px',
        overflow: 'hidden',
    },
}));


const Art = (): React.ReactElement => {
    const classes = useStyles();
    return(
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            className={classes.root}
        >
            <Grid item xs={12}>
                <Typography component="div" align="center">
                    <Box fontWeight={100} letterSpacing={10} m={1}>
                        a peek of my art.
                    </Box>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.gallery}>
                    <GridList cellHeight={160} className={classes.gridList} cols={4}>
                        {tileData.map((tile) => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </Grid>
        </Grid>
    )
}

export default Art;