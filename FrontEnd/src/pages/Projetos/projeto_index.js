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

                <div className="Options row d-flex my-lg-4 my-3">
                    <div className="LeftOptions col mt-sm-2">
                        <span className="me-2">Show:</span>
                        <input type="" name="txt-show" id="txt-show" size="1" />
                    </div>
                    <div className="RightOptions d-flex justify-content-end align-items-center flex-wrap gap-3 col-lg-2 offset-lg-8 offset-md-8 mt-sm-2 mt-2">
                        <BasicModal />

                        <select className="ps-1" name="order-select" id="order-select">
                            <option value="crescente">A - Z</option>
                            <option value="decrescente">Z - A</option>
                        </select>

                        <button className="filter px-2 py-1">
                            <span>Filter</span> <img src={filter} alt="" />
                        </button>
                    </div>
                </div>

                <div className="row CardsContainer my-4">
                    <Card linkUrl={"../projeto/:id"}/>
                    <Card linkUrl={"../projeto/:id"}/>
                    <Card linkUrl={"../projeto/:id"}/>
                    <Card linkUrl={"../projeto/:id"}/>
                    <Card linkUrl={"../projeto/:id"}/>
                    <Card linkUrl={"../projeto/:id"}/>
                </div>

            </main>
        </>
    )
}

export default ProjetoIndex