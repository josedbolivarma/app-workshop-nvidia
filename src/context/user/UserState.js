import { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import axios from "axios";

const UserState = () => {
    const initialState = {
        users: [],
        selectedUser: null
    };
    
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getUsers = async () => {
     const res = await axios.get('https://app-sessions-nvidia.herokuapp.com/sessions');
     console.log(res);
    }
    
    const getProfile = async (id) => {
        const res = await axios.get('https://app-sessions-nvidia.herokuapp.com/sessions/' + id);
        console.log(res);
    }

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserState;