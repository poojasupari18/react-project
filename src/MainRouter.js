import {Route , Switch} from "react-router-dom";
import Login from "./Login/Login";
import HomePage from "./Core/HomePage";
import Users from "./Users/Users"

const MainRouter  = () => (

    
         <div>
             <Switch>
                 <Route exact path="/" component={HomePage}/>
                 <Route exact path ="/login" component={Login}/>
                 <Route exact path ="/users" component={Users}/>
             </Switch>
         </div>

    

)
export default MainRouter



