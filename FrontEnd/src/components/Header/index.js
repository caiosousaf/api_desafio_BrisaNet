function Header({titulo}) {
    return (
        <>
            <div className='row mt-5 pb-3 main-header'>
                <h1 className="Titulo col-lg-3 fs-2">{titulo}</h1>
                <input className="col-lg-3 offset-lg-6" type="search" name="main-search" id="main-search" placeholder="Search here..."/>
            </div>
        </>
    )
}

export default Header