import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Tiago", "Victor", "Oliveira"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Tiago", age:25},
        {id: 2, name: "Pedro", age:31},
        {id: 3, name: "Tobias", age:29},
        {id: 4, name: "Luffy", age:18},
        {id: 5, name: "Roger", age:55},
    ]);


    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 6);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

    return(
        <div>
            <ul>
                {list.map((item) => (
                    <li>
                        {item}
                    </li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom} >Delete random user</button>
        </div>
    );
};

export default ListRender;