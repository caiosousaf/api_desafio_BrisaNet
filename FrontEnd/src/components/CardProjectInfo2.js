import CardMembers from "./CardMembers"

function CardProjectInfo2({progresso}) {

    return (
        <div>
            <CardMembers 
                foto="./assets/icons/Profile.svg"
            />
            <div>
                <h6>Progresso</h6>
                <span>{progresso}</span>
            </div>
        </div>
    )
}

export default CardProjectInfo2