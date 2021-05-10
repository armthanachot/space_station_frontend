import React from 'react'
import clsx from 'clsx';
import {  Avatar, makeStyles, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton,  colors } from '@material-ui/core'
import { Favorite,Share,ExpandMore,MoreVert } from "@material-ui/icons"
import LifestyleForm from "./LifestyleForm"
export default function Lifestyle({accountFname,accountLname,email,image}) {
    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: colors.red[500],
        },
    }));
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} src={image}>
              </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={accountFname +" "+ accountLname}
                subheader={email}
            />
            <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Favorite />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMore />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <LifestyleForm/>
                </CardContent>
            </Collapse>
        </Card>
    );
}
