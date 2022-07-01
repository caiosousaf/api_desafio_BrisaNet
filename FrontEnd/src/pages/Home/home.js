import Sidebar from "../../components/SideBar/SideBar";
import Card from "../../components/Card";

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
            <button className="new-project me-3">
              <img src={"../../assets/icons/new.svg"} />
            </button>

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

          <div className="col-4 ms-3">
            <div
              className="cardlateraldireito col-lg-3 col-md-12 p-4 mt-4"
              style={{ width: "100%" }}
            >
              <div className="cardLateralHome d-flex justify-content-around ">
                <div>
                    <div className="d-center">
                        <h1><span className="azulzinhoClaro">60</span></h1>
                    </div>
                    <div>
                        total de projetos
                    </div>

                </div>
                <div className="linhaVertical"></div>
                <div>
                    <div>
                        <div>
                        <h1><span className="">10</span></h1>
                        </div>
                        <div>
                            em desenvolvimento
                        </div>
                    </div>
                    <div>
                    <div>
                        <h1><span className="">50</span></h1>
                        </div>
                        <div>
                            concluidos
                        </div>
                    </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="CardBaixoHome">
            <div className="LeftOptions col-lg-2 mt-sm-2">
                <span className="me-2">Projetos</span>
            </div>
            <div className=" mt-4">
                <div className="d-flex justify-content-around">
                    <div>
                        id
                    </div>
                    
                    <div>
                        Titulo
                    </div>

                    <div>
                        barra progresso
                    </div>

                    <div>
                        Status
                    </div>
                </div>
                <div className="linha"></div>
                <div className="d-flex justify-content-around mt-4">
                    <div className="">
                        05
                    </div>
                    <div className="">
                        projeto API
                    </div>
                    <div className="">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                    </div>
                    <div className="">
                        Em andamento
                    </div>
                </div>
                <div className="linha"></div>
                <div className="d-flex justify-content-around mt-4">
                    <div className="">
                        35
                    </div>
                    <div className="">
                        projeto API-2
                    </div>
                    <div className="">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                    </div>
                    <div className="">
                        Em andamento
                    </div>
                </div>
                <div className="linha"></div>
                <div className="d-flex justify-content-around mt-4">
                    <div className="">
                        05
                    </div>
                    <div className="">
                        projeto API
                    </div>
                    <div className="">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                    </div>
                    <div className="">
                        Em andamento
                    </div>
                </div>
            </div>
            
        </div>
      </main>
    </div>
  );
}

export default Menu_index;
