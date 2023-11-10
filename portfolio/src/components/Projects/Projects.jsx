import ProjectCard from './Card/ProjectCard';
import './projects.css';


const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h3 className="section__subtitle">My <span>Jobs</span></h3>
      <h2 className="section__title">Recent Projects</h2>
      <div className="projects__container container grid">
        <ProjectCard
          imgSrc="/src/assets/img/project1.png"
          altText="projects image"
          subtitle="MQTT"
          title="Domotics"
          codeLink="https://github.com/Willygap1572/Domotics"
        />
        <ProjectCard
          imgSrc="/src/assets/img/project2.png"
          altText="projects image"
          subtitle="Server"
          title="HTTP Server"
          codeLink="https://github.com/Willygap1572/HTTP-server"
        />
        <ProjectCard
          imgSrc="/src/assets/img/project3.png"
          altText="projects image"
          subtitle="DJANGO Web page"
          title="Kahoot Clone Server"
          codeLink="https://github.com/Willygap1572/kahootClone-DjangoServer"
        />
        <ProjectCard
          imgSrc="/src/assets/img/project3.png"
          altText="projects image"
          subtitle="VUE.js Web page"
          title="Kahoot Clone Client"
          codeLink="https://github.com/Willygap1572/kahootClone-vueClient"
          />
        <ProjectCard
            imgSrc="/src/assets/img/project5.png"
            altText="projects image"
            subtitle="Amazon simulator in Python and RabbitMQ"
            title="Saimazoom"
            codeLink="https://github.com/Willygap1572/Saimazoom"
        />
        <ProjectCard
            imgSrc="/src/assets/img/project6.png"
            altText="projects image"
            subtitle="This page!"
            title="Portfolio"
            codeLink="https://github.com/Willygap1572/portfolio"
        />

        
      </div>
    </section>
  );
}

export default Projects;
