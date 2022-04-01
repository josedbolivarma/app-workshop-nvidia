import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//
import { useParams, useNavigate } from 'react-router-dom';
import { GetCardById } from '../selectors/GetCardById';

const Product = () => {

    const navigate = useNavigate();

   

    const handleReturn = () =>{
       navigate(-1);
    }

    const { id } = useParams();
    console.log(id);
    const card = GetCardById(id);
    console.log("My card", card);

   

    return (
        <div>
            <Card>
      <CardActionArea>
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              xasxdas
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </div>
    )
}

export default Product;
