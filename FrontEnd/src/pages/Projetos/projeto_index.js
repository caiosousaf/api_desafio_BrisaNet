import Header from "../../components/Header"
import Card from "../../components/Card"
import NewProject from '../../assets/icons/new.svg'
import filter from '../../assets/icons/filter.svg'
import BasicModal from '../../components/NewProject'

function ProjetoIndex() {
    return (
        <>
            <main className='col-11 offset-1 col-lg-11 offset-lg-1 px-5'>
                <Header titulo="Projetos" />

                <div className="Options row my-lg-4 my-3">
                    <div className="LeftOptions col-lg-2 mt-sm-2">
                        <span className="me-2">Show:</span>
                        <input type="" name="txt-show" id="txt-show" size="1" />
                    </div>
                    <div className="RightOptions col-lg-2 offset-lg-8 offset-md-8 mt-sm-2 mt-2">
                        <BasicModal />

                        <select className="ps-1 me-3" name="order-select" id="order-select">
                            <option value="crescente">A - Z</option>
                            <option value="decrescente">Z - A</option>
                        </select>

                        <button className="filter px-2 py-1">
                            <span>Filter</span> <img src={filter} alt="" />
                        </button>
                    </div>
                </div>

                <div className="row CardsContainer my-4">
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
                        <a href={"projeto/:id"} className="text-reset text-decoration-none">
                            {" "}
                            <Card />
                        </a>
                    </div>
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
                        <a href={"projeto/:id"} className="text-reset text-decoration-none">
                            {" "}
                            <Card />
                        </a>
                    </div>
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
                        <a href={"projeto/:id"} className="text-reset text-decoration-none">
                            {" "}
                            <Card />
                        </a>
                    </div>
                </div>

            </main>
        </>
    )
}

export default ProjetoIndex