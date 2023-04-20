const TemplateExpression = () => {    
    const name = "Tiago"
    const data = {
        age: 25,
        job: "Developer"
    }
    
    return(
        <div>
            <h1>Olá meu nome é {name}!</h1>
            <p>Profissão: {data.job}</p>
            <p>Idade: {data.age}</p>
        </div>
    );
}

export default TemplateExpression;