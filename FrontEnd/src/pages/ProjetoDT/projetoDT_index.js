import HeaderDt from "../../components/HeaderDt"
import Divider from '@mui/material/Divider';
import CircularProgressWithLabel from '../../components/CircularProgressWithLabel'
import Table from "../../components/Table";

const projetoDT_index = () => {
    return(
        <>
            <main className='col-11 offset-1 col-lg-11 offset-lg-1 px-5'>
                <HeaderDt nomeProjeto="API Rest"/>
                <div className="row gap-3">
                    <div className="CardDT InfoProjeto row py-4">
                        <div className="col-12 col-lg-5 me-4">
                            <h4>Descrição</h4>
                            <p style={{textAlign: 'justify', fontWeight: 300, lineHeight: '1.6em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                        </div>
                        <div className="col-12 col-lg-6 ms-5">
                            <div>
                                <div>
                                    <h4 className="text-center">Funções</h4>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 style={{color: "#F46E27"}}>Gerente de Projeto</h6>
                                            <ul style={{ fontWeight: 300}}>
                                                <li>Fulano de Tal</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h6 style={{color: "#F46E27"}}>Dev. BackEnd</h6>
                                            <ul style={{ fontWeight: 300}}>
                                                <li>Fulano de Tal</li>
                                                <li>Fulano de Tal</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h6 style={{color: "#F46E27"}}>Dev. FrontEnd</h6>
                                            <ul style={{ fontWeight: 300}}>
                                                <li>Fulano de Tal</li>
                                                <li>Fulano de Tal</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h6 style={{color: "#F46E27"}}>Tester</h6>
                                            <ul style={{ fontWeight: 300}}>
                                                <li>Fulano de Tal</li>
                                                <li>Fulano de Tal</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                    <h6>Progresso</h6>
                                    <CircularProgressWithLabel value="20" />
                                    </div>
                                    <div className="Resumo col-md-12 col-lg-9 offset-lg-4 justify-content-center ">
                                        <div className="TotColaboradores d-flex align-items-center justify-content-center col-12">
                                            <h6 >11</h6>
                                            <strong>
                                            <p className="ms-4 ">Total de <br/> Equipes</p>    
                                            </strong>    
                                        </div>
                                        <div className="row col-12">
                                            <div className="TotTarefas col-6 d-flex flex-column align-items-center justify-content-center">
                                                <h6 className="col">60</h6>
                                                <strong>
                                                <p className="text-center col">Total de <br/> Projetos</p>
                                                </strong>
                                            </div>
                                            <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                                                <div className="TarefasAnd d-flex align-items-center justify-content-center">
                                                    <h6 className="col-4 md-5" style={{fontFamily: "'Roboto Mono', monospace"}}>13</h6>
                                                    <strong>
                                                    <p className="ms-2">Projetos em Andamento</p>
                                                    </strong>
                                                </div>
                                                <div className="TarefasConc d-flex align-items-center justify-content-center">
                                                    <h6 className="col-4 md-5" style={{fontFamily: "'Roboto Mono', monospace"}}>47</h6>
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
                    </div>

                    <div className="row d-flex gap-4">
                        <div className="CardDT col">
                            <Table />
                        </div>
                        <div className="CardDT col">
                            <Table />
                        </div>
                    </div>
                       
                </div>
            </main>
        </>
    );
}

export default projetoDT_index;