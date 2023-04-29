import './MyForm.css'

const MyForm = () => {
    return(
        <div>
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite seu nome"></input>
                </div>
                <label>
                    <span>E-mail:</span>
                    <input type="text" name="email" placeholder="Digite seu e-mail"></input>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default MyForm