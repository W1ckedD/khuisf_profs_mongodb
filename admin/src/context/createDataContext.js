import React, { useReducer } from 'react';

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();
    const Provider = props => {
        const [state, dispatch] = useReducer(reducer, defaultValue);
        const boundActions = {};
        for (const i in actions) {
            boundActions[i] = actions[i](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {props.children}
            </Context.Provider>
        );
    };
    return { Context, Provider };
};
