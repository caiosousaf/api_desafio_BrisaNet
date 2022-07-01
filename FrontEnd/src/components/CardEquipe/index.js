import { Link } from "react-router-dom";
import aim from '../../assets/icons/aim.svg'
import profile from '../../assets/icons/Profile.svg'

function CardEquipe({linkUrl}) {
    return (
      <>
        <Link to={linkUrl} className="Link text-reset text-decoration-none col-lg-3 col-md-12 Card p-4">
            <div>
              <div className="card-part1 mb-3">
                  <h2 class="fs-4">Komanda</h2>
                </div>
                <div className="card-part2 d-flex justify-content-between">
                  <div className="card-members">
                    <h6>Membros</h6>
                    <div className=''>
              
                    </div>
                  </div>
                  <div className="card-progress">
                    <h6>Total: 8</h6>
                  </div>
              </div>
              <div>aaaaaaa</div>
            </div>
        </Link>
      </>
    )
}

export default CardEquipe;