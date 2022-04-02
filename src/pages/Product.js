import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//
import { useEffect, useContext } from 'react'

import { useParams, useNavigate } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { BackButton } from '../styled/styledcomponents';
import CardContext from '../context/card/CardContext';




/*
const AppRouter = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    if (!user) return
    localStorage.setItem('user', JSON.stringify(user))
  }, [user]);

*/

const Product = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleReturn = () =>{
       navigate(-1);
    }
    
    const product = JSON.parse(localStorage.getItem('product'));
    
    console.log(product);
    
    return (
        <div className={classes.root}>
            <BackButton onClick={() => handleReturn()} width="240px">BACK TO SESSION CATALOG</BackButton>
        <div className={classes.cardFlex}>
            <Card className={classes.cardStyled}>
      <CardActionArea>
      
        <CardContent className={classes.cardContentStyled}>
        <Typography  variant="h5" component="h2">
            {product.title}
          </Typography>
            <div className={classes.bannerFrame}>
            <Typography  variant="body2" component="h2">
              Login to view this video
          </Typography>
                <BackButton className={classes.linkColor} type='button' width='80px'>
                    Login
                </BackButton>
            </div>
         
          <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b className={classes.mark}>Industry segment</b>: {product.industry_segment}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                <b className={classes.mark}>Jensen Huang</b>: Founder and CEO, NVIDIA
             </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </div>
 </div> 
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        height: '100vh',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    cardStyled: {
        width: '100%',
        marginTop: '1rem'
    },
    cardContentStyled: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    bannerFrame: {
        backgroundColor: '#76b900',
        padding: '1rem 1.8rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#FFF'
       
    },
    mark: {
        color: "green",
        fontWeight: '800'
    },
    linkColor: {
        color: '#3e82e0'
    }
}));

export default Product;
