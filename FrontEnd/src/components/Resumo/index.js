function Resumo() {
    <>
        <div className="Resumo col-md-12 col-lg-6">
            <div className="TotColaboradores row d-flex align-items-center justify-content-center">
                <h6 className="col-3 d-flex justify-content-end">11</h6>
                <p className="col-5">Total de Colaboradores</p>
            </div>
            <div className="row">
                <div className="TotTarefas col d-flex flex-column align-items-center justify-content-center">
                    <h6 className="col">60</h6>
                    <p className="text-center col">Total de Tarefas</p>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <div className="TarefasAnd row d-flex align-items-center justify-content-center">
                        <h6 className="col-4">12</h6>
                        <p className="col-7">Tarefa em Andamento</p>
                    </div>
                    <div className="TarefasConc row d-flex align-items-center justify-content-center">
                        <h6 className="col-4">48</h6>
                        <p className="col-7">Tarefas Concluídas</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Resumo