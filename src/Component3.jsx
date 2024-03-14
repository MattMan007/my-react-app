import React, {useState, useEffect, useContext} from "react";
import { UserContext } from "./Component1";
import Component4 from "./Component4";

function Component3(){

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>Component3</h1>
            <h2>{`Hello again ${user}`}</h2>
            <Component4></Component4>
        </div>
    );
}

export default Component3