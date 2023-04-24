const Challenge = () => {
    const a = 2;
    const b = 3;

    const sum = (x, y) => {
        console.log(x + y)
    }
    
    return(
        <div>
            <p>{a}</p>
            <p>{b}</p>
            <button onClick={() => sum(a,b)}> Teste </button>
        </div>
    );
};

export default Challenge;