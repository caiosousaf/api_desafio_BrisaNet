import CardProjectInfo1 from "./CardProjectInfo1"
import CardProjectInfo2 from "./CardProjectInfo2";

import styles from "./ProjectCard.module.css"
import Divider from 'rsuite/Divider';

function ProjectCard() {

    return (
        <div className={styles.Card}>
              <CardProjectInfo1 
                nome="API - REST"
                descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                equipe="Komanda"
              />
              <Divider />
              <CardProjectInfo2 
                progresso="70%"
              />
        </div>
    )

}

export default ProjectCard