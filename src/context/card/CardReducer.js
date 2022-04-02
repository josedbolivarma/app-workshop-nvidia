import { GET_CARDS, GET_CATEGORY, GET_PROFILE } from "../types";

export default (state, action) => {
    const {payload, type} = action;

    switch(type) {
        case GET_CARDS:
            return {
                ...state,
                cards: payload
            }
            case GET_CATEGORY:
                return {
                    ...state,
                    category: payload
                }
        case GET_PROFILE:
            return {
                ...state,
                selectedCard: payload
            }
        default: 
        return state;
    }

}