import style from './Cars.module.css'

const Cars = ({marca, modelo, km, preco, cor}) => {
    return(
        <div className={style.caixa}>
            <h2>{marca}</h2>
            <p className={style.p_modelo} >{modelo}</p>
            <p className={style.p_modelo} >{km}</p>
            <p className={style.p_modelo} >{preco}</p>
            <p className={style.p_modelo} >{cor}</p>
        </div>
    );
}

export default Cars;