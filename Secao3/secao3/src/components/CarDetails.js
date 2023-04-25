const CarDetails = ({id, brand, km, color, newCar}) => {
    return (
        <div>
            <h1>Desctructing</h1>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
            {newCar && <p>Esse carro é zero!</p>}

        </div>
    );
};

export default CarDetails