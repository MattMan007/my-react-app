import React, {useState, useEffect, createContext} from "react";
import Component2 from "./Component2";

export const UserContext = createContext();

function Component1(){

    const [user, setUser] = useState("Mattman")

    return(
        <div className="box">
            <h1>Component1</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <Component2></Component2>
            </UserContext.Provider>
        </div>
    );
}

export default Component1