import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        
        <CardContent className={classes.gap}>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Watch Keynote
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Jensen Huang</b>: Founder and CEO, NVIDIA
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Jensen Huang</b>: Founder and CEO, NVIDIA
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Jensen Huang</b>: Founder and CEO, NVIDIA
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 645,
    },
    media: {
      height: 140,
    },
    gap: {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2)
    }
  }));