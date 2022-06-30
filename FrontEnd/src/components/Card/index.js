function Card() {
    return (
        <div className="col-lg-3 col-md-12 Card p-4">
            <div className="card-part1 mb-3">
                <h2 class="fs-4">API-Rest</h2>
                <p className="description overflow-hidden">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="mb-3">
                  <img src="./assets/icons/aim.svg" alt=""/> <span>Komanda</span>
                </div>
              </div>
              <div className="card-part2 d-flex justify-content-between">
                <div className="card-members">
                  <h6>Membros</h6>
                  <img src="./assets/icons/Profile.svg" alt=""/>
                  <img src="./assets/icons/Profile.svg" alt=""/>
                </div>
                <div className="card-progress">
                  <h6>Progresso</h6>
                  70%
                </div>
            </div>
        </div>
    )
}

export default Card