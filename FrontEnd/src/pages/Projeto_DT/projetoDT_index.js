import Header from "../../components/Header"

const projetoDT_index = () => {
    return(
        <>
            <main className='col-11 offset-1 col-lg-11 offset-lg-1 px-5'>
                <Header />
                <div className="row gap-3">
                    <div className="CardDT InfoProjeto row">
                        <div className="col-5">
                            <h4>Descrição</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                        </div>
                        <div className="col-6">
                            <div>
                                <div>
                                    <h4 className="text-center">Funções</h4>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6>Gerente de Projeto</h6>
                                            <ul>
                                                <li>Fulano de Tal</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h6>Dev. BackEnd</h6>
                                            <ul>
                                                <li>Fulano de Tal</li>
                                                <li>Fulano de Tal</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h6>Dev. FrontEnd</h6>
                                            <ul>
                                                <li>Fulano de Tal</li>
                                                <li>Fulano de Tal</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h6>Tester</h6>
                                            <ul>
                                                <li>Fulano de Tal</li>
                                                <li>Fulano de Tal</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>                        
                    </div>
                <div className="row gap-3">
                    <div className="CardDT ProjetoEquipe col-5">

                    </div>
                    <div className="CardDT ProjetoTarefas col-5">

                    </div>
                </div>
                </div>
            </main>
        </>
    );
}

export default projetoDT_index;