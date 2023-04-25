import React, { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState("Thiago");

    return(
        <div>
            <h1>Isso deve aparecer?</h1>
            {x && <p>Isso deve aparecer</p>}
            {!x && <p>Agora x é falso</p>}

            <h1>If ternario</h1>
            {name === "Tiago" ? (
                <div>
                    <p>Nome é Tiago</p>
                </div>
            ):(
                <div>
                    <p>Nome não é Tiago</p>
                </div>
            )}
            <button onClick={() => setName("Tiago")} >Clique aqui!</button>
        </div>
    );
}

export default ConditionalRender;