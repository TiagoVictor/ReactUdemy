const EventsT = () => {

    const handleMyEvent = (e) => {
        console.log("Ativou o evento")
        console.log(e)
    };

    const renderSomething = (x) =>{
        if(x) {
            return <h1>Renderiza isso!</h1>
        } else {
            return <h1>Renderiza aquilo</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent} >Clique Aqui!</button>
            </div>
            <div>
                <button onClick={ () => console.log("Clicado") } >Clique aqui também!</button>
                <button onClick={ () => {
                    if (true){
                        console.log("Isso não deveria existir")
                    }
                }} >Clique aqui por gentileza</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default EventsT;