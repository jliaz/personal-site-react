import React from 'react';
import { Card, CardMedia, Typography, makeStyles, CardContent, Grid, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        border: 'white 1px solid',
        width: '100%'
    },
    cover: {
        width: '100%',
    },
    text: {
        color: 'white'
    }
}));

interface ImageBlockProps {
    image?: string;
    title: string;
    children: any;
}

const ImageBlock = (props: ImageBlockProps) => {
    const { image, title, children } = props;
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardContent>
                <Grid 
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    spacing={2}
                >
                    { image && 
                        <Grid item xs={12} sm={6}>
                            <CardMedia
                                className={classes.cover}
                                component="img"
                                image={require(`../../assets/nebula.jpg`)}
                                title="Head shot"
                            >
                            </CardMedia>
                        </Grid>
                    }
                    
                <Grid item xs={12} sm={6}>
                    <Grid 
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="flex-start"
                    >
                        <Grid item>
                            <Typography component="div" className={classes.text}>
                                <Box fontWeight={200} letterSpacing={4} m={1}>
                                    {title}
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography component="p" className={classes.text}>
                                <Box fontWeight={1} m={1} fontSize="small">
                                    {children}
                                </Box>
                            </Typography>
                        </Grid>
                        
                    </Grid>
                    
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default ImageBlock;