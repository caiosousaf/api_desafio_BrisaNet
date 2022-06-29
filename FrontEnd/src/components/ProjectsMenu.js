import './ProjectsMenu.modules.css'

function ProjectsMenu() {
    return (
        <div class="options row align-items-center my-lg-4">
          <div className='OptionsCol'>
            <span>Show:</span>
            <input type="" name="txt-show" id="txt-show" size="1"/>
          </div>
          <div class="right-options col-lg-2 offset-lg-8">
            <button className="NewBtn">
              <img src="./assets/icons/new.svg" alt=""/>
            </button>
            
            <select class="me-3" name="order-select" id="order-select">
              <option value="crescente">A - Z</option>
              <option value="decrescente">Z - A</option>
            </select>

            <button className="Filter">
              <span>Filter</span> <img src="./assets/icons/settings-sliders 1.svg" alt=""/>
            </button>
          </div>
        </div>
    )
}

export default ProjectsMenu