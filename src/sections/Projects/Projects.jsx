import styles from './ProjectsStyles.module.css';
import crypto from '../../assets/crypto.png';
// import tictactoe from '../../assets/tictactoe.png';
import amazon from '../../assets/amazon.png';
// import rps from '../../assets/rps.png';
import ProjectCard from '../../common/ProjectCard';
// import Calculator from '../../assets/Calculator.png';
import TaskManager from '../../assets/TaskManager.png';
// import spotify from '../../assets/spotify-1.png';
import planner from '../../assets/planner.png';
import act from '../../assets/act.png';
import ise from '../../assets/ise.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={crypto}
          link="https://cryptoplace0app.netlify.app/"
          h3="Crypto Price Tracker"
          p="Web App"
        />
        <ProjectCard
          src={ise}
          link="https://imagessearc.netlify.app/"
          h3="Image Search Engine"
          p="Web Page"
        />
        <ProjectCard
          src={act}
          link="https://act-assesment-task.netlify.app/#solutions"
          h3="Avyukt Core Technologies Website"
          p="Web App"
        />
        
        <ProjectCard
          src={planner}
          link="https://happiness-assessment.netlify.app/"
          h3="The Happiness Planner"
          p="Web App"
        />
        {/* <ProjectCard
          src={tictactoe}
          link="https://github.com/aneeka026/Tic-Tac-Toe"
          h3="Tic Tac Toe"
          p="Web App"
        /> */}
        <ProjectCard
          src={amazon}
          link="https://github.com/aneeka026/Amazon-Clone"
          h3="Amazon Clone"
          p="Web Page"
        />
        {/* <ProjectCard
          src={rps}
          link="https://github.com/aneeka026/Rock-Paper-Scissors"
          h3="Rock Paper Scissors"
          p="Web App"
        />  */}
        {/* <ProjectCard
          src={Calculator}
          link="https://github.com/aneeka026/CODSOFT/tree/main/Level-1%20Task-3%20Calculator"
          h3="Calculator"
          p="Web App"
        /> */}
        <ProjectCard
          src={TaskManager}
          link="https://tasklist0.netlify.app/"
          h3="Task Manager"
          p="Web App"
        />
        {/* <ProjectCard
          src={spotify}
          link="https://github.com/aneeka026/spotify-clone-ui"
          h3="Spotify Clone"
          p="Web Page"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
