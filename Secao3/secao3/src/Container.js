const Container = ({children, myProp}) => {
    return (
        <div>
            <h1>Titulão</h1>
            {children}
            {myProp}
        </div>
    )
}

export default Container