import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Tiago", "Victor", "Oliveira"]);

    const [users] = useState([
        {id: 1, name: "Tiago", age:25},
        {id: 2, name: "Pedro", age:31},
        {id: 3, name: "Tobias", age:29},
        {id: 4, name: "Luffy", age:18},
        {id: 5, name: "Roger", age:55},
    ]);

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
        </div>
    );
};

export default ListRender;