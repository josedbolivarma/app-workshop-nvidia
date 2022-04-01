import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import Card from '../components/Card'
import Nav from '../components/Nav';
import { url } from '../helpers/helpers';

import UserState from '../context/user/UserState';
import UserContext from '../context/user/UserContext';

const CardContainer = () => {
  const [data, setData] = useState([])
  const { getUsers } = useContext(UserContext);

    const getData = () => {
        axios.get(url)
            .then(response => {
              setData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        getData();
    },[]);

  return (
    <div>
      <Nav />
      {
        data.map((el) => (
          <Card key={el.id} data={el}/>
        ))
      }
    </div>
  )
}

export default CardContainer