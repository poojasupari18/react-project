
import axios from "axios";
import CreateDataContext from "./CreateDataContext";

const userReducer = (state , action) => {
    switch (action.type){
        case 'users' :
            return {...state , users : action.payload} ;
        case 'profile' : 
            return {...state , profile : action.payload} ;
        default :  
            return state;
    }

}

const login = (dispatch) => {
    return  (profile) => {
        console.log("profile from context", profile)
        dispatch({type: "profile", payload : profile})
    }  
}

const fetchUsers = (dispatch) => {
  return async ()=>{
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({type : "users" , payload : response.data })

    } catch(e){
        console.log (e, "Got Error");
    }
  }
}
export const{Provider , Context} = CreateDataContext(
    userReducer , {fetchUsers , login}
)
