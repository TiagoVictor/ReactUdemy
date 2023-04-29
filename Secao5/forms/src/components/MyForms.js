import './MyForm.css'
import {useState} from 'react'

const MyForm = ({user}) => {
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState("");

    const handleName = (e) => {
        setName(e.target.value)
    }
    
    // console.log(name);
    // console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Evento de submit");
        console.log(name, email, bio);

        setEmail("");
        setName("");
        setBio("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name}></input>
                </div>
                <label>
                    <span>E-mail:</span>
                    <input type="text" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail((e.target.value))} value={email}></input>
                </label>
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Digite sua bio' onChange={(e) => setBio((e.target.value))} value={bio}></textarea>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default MyForm