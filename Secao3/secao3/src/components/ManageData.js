import {useState} from 'react'

const ManageData = () => {
    let val = 10;

    const [number, setNumber] = useState(15);

    return(
        <div>
            <div>
                <p>Valor:{val}</p>
                <button onClick={() => (val = 15)}>Alterar val</button>
            </div>
            <div>
                <p>Valor state:{number}</p>
                <button onClick={() => (setNumber(25))} >Alterar state</button>
            </div>
        </div>
    );
};

export default ManageData;
