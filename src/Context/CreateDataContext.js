import React, { useReducer} from "react";

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext()

    const Provider = ({children}) =>{
        const [state , dispatch] = useReducer(reducer, defaultValue)
        const boundActions = {}
        for (let key in actions) {
            console.log("key", key)
            console.log("dispatch",dispatch)

            boundActions[key] = actions[key](dispatch)
        }
        console.log("actions",actions)
        console.log("bound",boundActions)
        return (
           <Context.Provider value = {{state,...boundActions}} >
               {children}
           </Context.Provider>
        )

    }
    return {Context , Provider}
}







