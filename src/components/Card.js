import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, Navigate, useNavigate } from 'react-router-dom';




export default function MediaCard(el) {
  const classes = useStyles();
  const data = el.data;
  const navigate = useNavigate();

  const setProfile = (id) => {
    console.log('My id is', id);
    localStorage.setItem('product', JSON.stringify(data));
    navigate(`/product/${id}`);
  }

  return (
    <Card className={classes.root}
    >
      <CardActionArea>
        
        <CardContent className={classes.gap}>
        <Typography variant='h4' component="h2" className={classes.navLink} onClick={() => {setProfile(data.id)}}>
        <Typography gutterBottom variant="h5" component="p" className={classes.title}>
            {data.title}
          </Typography>
        </Typography>
          
          <Typography gutterBottom variant="h6" component="h2" className={classes.title}>
            {data.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {data.audience_level}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b className={classes.mark}>Jensen Huang</b>: Founder and CEO, NVIDIA
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Industry segment</b>: {data.industry_segment}
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
      maxWidth: '100%',
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2)
    },
   
    gap: {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2)
    },
    title: {
        color: "rgb(118, 185, 0)"
    },
    mark: {
        color: "#B3D871"
    },
    navLink: {
        textDecoration: 'none'
    }
 
  }));