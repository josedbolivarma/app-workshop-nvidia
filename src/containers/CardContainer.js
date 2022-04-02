import React, { useEffect, useContext } from 'react'
import Card from '../components/Card'
import Nav from '../components/Nav';

import CardContext from '../context/card/CardContext';

const CardContainer = () => {

  const { cards, getCards, getProfile } = useContext(CardContext);
    useEffect(() => {
      getCards();
    },[]);

  return (
    <div>
      <Nav />
      {
        cards.map((el) => (
            <Card key={el.id} data={el} />
        ))
      }
    </div>
  )
}

/*

*/

export default CardContainer