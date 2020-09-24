import React from 'react';

import { Timeline, TimelineContent, TimelineDot, TimelineItem as MuiTimelineItem, TimelineSeparator, TimelineConnector } from '@material-ui/lab';
import { Grid, IconButton, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        top: '50%',
        width: '100%',
        height: '100%',
        right: theme.spacing(1),
    },
    timeline: {
        transform: 'translate(0, -60%)',
       
    },
    downArrow: {
        color: 'white',
    },
    upArrow: {
        color: 'white',
    }
}));

const TimelineItem = withStyles({
    missingOppositeContent: {
      "&:before": {
        display: "none"
      }
    }
  })(MuiTimelineItem);

interface NavigatorProps {
    moveUp: Function,
    moveDown: Function,
    move: Function,
    items: Array<string>,
    currentItem: string
}


const Navigator = (props: NavigatorProps): React.ReactElement => {
    const { moveUp, moveDown, move, items, currentItem } = props;
    const [ showItems, setShowItems ] = React.useState(false);
    const classes = useStyles();

    const getTimeline = (content: Array<string>): React.ReactElement => {
        const len = content.length;
        const timeline = content.map((item, i) =>
            <div onClick={() => {move(i)}}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color={item === currentItem ? 'primary' : 'grey'} />
                        {i === len - 1 ? null : <TimelineConnector/>}
                    </TimelineSeparator>
                    { showItems ? <TimelineContent style={{color: "white"}}>{`${item.toLowerCase()}`}</TimelineContent> : null}
                    
                </TimelineItem>
            </div>
            
        );
        return (
            <Grid 
                container
                direction="column"
                justify="center"
                alignItems="flex-end"
                className={classes.timeline}
            >
                <Grid item
                    onMouseEnter={() => setShowItems(true)}
                    onMouseLeave={() => setShowItems(false)}>
                    <IconButton onClick={()=>{moveUp()}}>
                        <KeyboardArrowUpIcon className={classes.upArrow}/>
                    </IconButton>
                </Grid>
                <Grid 
                    item 
                    onMouseEnter={() => setShowItems(true)}
                    onMouseLeave={() => setShowItems(false)}>
                    <Timeline align="right">
                        {timeline}
                    </Timeline>
                </Grid>
                <Grid item
                    onMouseEnter={() => setShowItems(true)}
                    onMouseLeave={() => setShowItems(false)}>
                    <IconButton onClick={()=>{moveDown()}} style={{marginTop:'-45px'}}>
                        <KeyboardArrowDownIcon className={classes.downArrow}/>
                    </IconButton>
                </Grid>            
            </Grid>
        );
    }
    
    return (
        <div className={classes.root}>
            { getTimeline(items) }
        </div>
    );
}

export default Navigator;