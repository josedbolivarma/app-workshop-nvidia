import { useReducer } from "react";
import  CardReducer from "./CardReducer";
import axios from "axios";
import CardContext from "./CardContext";

const CardState = (props) => {
    const initialState = {
        cards: [],
        selectedCard: null
    };
    
    const [state, dispatch] = useReducer(CardReducer, initialState);

    const getCards = async () => {
     const res = await axios.get('https://app-sessions-nvidia.herokuapp.com/sessions');
     dispatch({
         type: 'GET_CARDS',
         payload: res.data
     })
    }
    
    const getProfile = async (id) => {
        const res = await axios.get('https://app-sessions-nvidia.herokuapp.com/sessions/' + id);
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data
        })
    }

    return (
        <CardContext.Provider value={{
            cards: state.cards,
            selectedCard: state.selectedCard,
            getCards,
            getProfile
        }}>
            { props.children }
        </CardContext.Provider>
    )
}

export default CardState;