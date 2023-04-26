const UserDetail = ({name, age,job}) => {
    return(
        <div>
            <h1>Pessoa</h1>
            <li>{name}</li>
            <li>{age}</li>
            <li>{job}</li>
            {age >= 18 && <p>Pode tirar habilitação</p>}
        </div>
    );
}

export default UserDetail;