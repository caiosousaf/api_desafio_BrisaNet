import Sidebar from "../../components/SideBar/SideBar";
import Card from "../../components/Card";
import BasicModal from '../../components/NewProject'

function Menu_index() {
  return (
    <div>
      <Sidebar />
      <main className="col-11 offset-1 col-lg-11 offset-lg-1 px-5">
        <div className="row mt-5 pb-3 main-header">
          <h1 className="col-lg-3 fs-2">Home - desafio 2.0</h1>
          <input
            className="col-lg-3 offset-lg-6"
            type="search"
            name="main-search"
            id="main-search"
            placeholder="Search here..."
          />
        </div>

        <div className="Options row align-items-center my-lg-4">
          <div className="LeftOptions col-lg-2 mt-sm-2">
            <span className="me-2">Projetos recentes</span>
          </div>
          <div className="RightOptions col-lg-2 offset-lg-8 mt-sm-2">
            <BasicModal />

            <select className="ps-1 me-3" name="order-select" id="order-select">
              <option value="crescente">A - Z</option>
              <option value="decrescente">Z - A</option>
            </select>

            <button className="filter px-2 py-1">
              <span>Filter</span> <img src={"../../assets/icons/filter.svg"} />
            </button>
          </div>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%" }}
        >
          <div className="col-8 mt-4">
            <div className="row CardsContainer my-4 mt-4 d-flex">
              <div className="d-flex">
                <a href={"projeto/:id"} className="text-reset text-decoration-none">
                  {" "}
                  <Card />
                </a>
                <a href={"projeto/:id"} className="text-reset text-decoration-none">
                  {" "}
                  <Card />
                </a>
                <a href={"projeto/:id"} className="text-reset text-decoration-none">
                  {" "}
                  <Card />
                </a>
              </div>
            </div>
          </div>


          <div
            className="cardLateralHome d-flex justify-content-center col-lg-4 col-md-12 p-4 mt-5 "
          >
            <div className="d-flex align-items-center justify-content-center">
              <div className="Resumo col-md-12 col-lg-12 justify-content-center ">
                <div className="TotColaboradores d-flex align-items-center justify-content-center col-12">
                  <h6 >11</h6>
                  <strong>
                    <p className="ms-4 ">Total de <br /> Equipes</p>
                  </strong>
                </div>
                <div className="row col-12">
                  <div className="TotTarefas col-6 d-flex flex-column align-items-center justify-content-center">
                    <h6 className="col">60</h6>
                    <strong>
                      <p className="text-center col">Total de <br /> Projetos</p>
                    </strong>
                  </div>
                  <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                    <div className="TarefasAnd d-flex align-items-center justify-content-center">
                      <h6 className="col-4 md-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>13</h6>
                      <strong>
                        <p className="ms-2">Projetos em Andamento</p>
                      </strong>
                    </div>
                    <div className="TarefasConc d-flex align-items-center justify-content-center">
                      <h6 className="col-4 md-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>47</h6>
                      <strong>
                        <p className=" ms-2">Projetos Concluídos</p>
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="CardBaixoHome pt-1">
          <div className="LeftOptions col-lg-2 mt-sm-2">
            <span className="me-2 ms-4 mt-3">Projetos</span>
          </div>
          <table class="table table-hover" style={{color:'white'}}>
          <thead>
            <tr className="LeftOptions">
              <th scope="col">#</th>
              <th scope="col" style={{width:'20%'}}>Titulo</th>
              <th scope="col">Progresso</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>projeto API</td>
              <td>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
              </td>
              <td>@mdo</td>
              <td>butao</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>projeto API-2</td>
              <td>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
                
              </td>
              <td>@fat</td>
              <td>butao</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>projeto API-3</td>
              <td>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
              </td>
              <td>@twitter</td>
              <td>butao</td>
            </tr>
          </tbody>

        </table>

        </div>
      </main>
    </div>
  );
}

export default Menu_index;
