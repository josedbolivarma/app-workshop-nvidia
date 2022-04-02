import { useReducer } from "react";
import  CardReducer from "./CardReducer";
import axios from "axios";
import CardContext from "./CardContext";

const CardState = (props) => {
    const initialState = {
        cards: [],
        category: [],
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
        const res = await axios.get('https://app-sessions-nvidia.herokuapp.com/sessions/');
        const data = res.data;
        console.log(data);
        console.log("target name", id);
        const elemento = data.filter(el => el.title.toLocaleLowerCase().includes(id.toLocaleLowerCase()));
        console.log(elemento);
        dispatch({
            type: 'GET_CARDS',
            payload: elemento
        })
    }

    const getCategory = async (category = "creative") => {
        const res = await axios.get('https://app-sessions-nvidia.herokuapp.com/sessions/');
        const data = res.data;
        console.log(data);
        console.log("target name");
        const elemento = data.filter(el => el.industry_segment.toLocaleLowerCase().includes(category.toLocaleLowerCase()));
        console.log(elemento);
        dispatch({
            type: 'GET_CATEGORY',
            payload: data
        })
       }

    return (
        <CardContext.Provider value={{
            cards: state.cards,
            selectedCard: state.selectedCard,
            category: state.category,
            getCards,
            getProfile,
            getCategory
        }}>
            { props.children }
        </CardContext.Provider>
    )
}

export default CardState;