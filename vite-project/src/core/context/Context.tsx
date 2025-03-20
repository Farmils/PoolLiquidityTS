import {createContext, FC, ReactNode, useState} from "react";

const Context = createContext({});

const ContextProvider: FC<{children:ReactNode}> = ({ children }) => {
    const [wallet,setWallet]=useState("")
    const values={
        wallet,
        setWallet
    }

    return <Context.Provider value={values}>{children}</Context.Provider>;
}
export {Context,ContextProvider};