//import styles from "./CardProjectInfo1.modules.css"

function CardProjectInfo1({nome, descricao, equipe}) {

    return (
        <div>
            <h2>{nome}</h2>
            <p>{descricao}</p>
                <div>
                  <img src="./assets/icons/aim.svg" alt="aim"/> <span>{equipe}</span>
                </div>
        </div>
    )
}

export default CardProjectInfo1