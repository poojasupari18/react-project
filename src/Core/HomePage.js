import React,  {useContext} from "react";
import { Context } from '../Context/UserContext';

function HomePage (){
    const { state } = useContext(Context);
    console.log("state from context", state)

    return (<h1>HomePage</h1>)

}

export default HomePage