import Sidebar from '../../components/SideBar/SideBar'
import Card from "../../components/Card"

function Menu_index() {
    return (
        <div>
            <Sidebar />
            <main className='col-11 offset-1 col-lg-11 offset-lg-1 px-5'>
                <div className='row mt-5 pb-3 main-header'>
                    <h1 className="col-lg-3 fs-2">Home - desafio 2.0</h1>
                    <input className="col-lg-3 offset-lg-6" type="search" name="main-search" id="main-search" placeholder="Search here..." />
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
                <div className="d-flex justify-content-between" style={{width:"100%"}}>
                    <div className="col-8">
                        <div className="row CardsContainer my-4">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>

                    <div className="col-4 ms-3">
                        <div className="cardlateraldireito col-lg-3 col-md-12 p-4 mt-4" style={{width:"100%"}}>
                            <div className=" " >
                               aaaaaaaaaaa
                            </div>
                            
                        </div>


                    </div>
                </div>
            </main>
        </div>
    )
}

export default Menu_index;