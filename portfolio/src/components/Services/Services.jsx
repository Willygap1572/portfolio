import ServiceCard from './ServiceCard';
import './Services.css';

function Services() {
  return (
    <section className="services section" id="services">
      <h3 className="section__subtitle">
        My <span>Services</span>
      </h3>
      <h2 className="section__title">What I Do</h2>

      <div className="services__container container grid">
        <ServiceCard
          iconURL="/src/assets/code.svg"
          title="Data Analyst"
          description="I learned data analysis during my artificial intelligence course at university. I use python as my main language but I also know how to use excel and a bit of R for statistical analysis."
        />

        <ServiceCard
          iconURL="/src/assets/code.svg"
          title="DJANGO Developer"
          description="Probably one of the skills that I focused on the most during my degree, as there were many Django projects such as Domotics, KahootClone and many others."
        />

        <ServiceCard
          iconURL="/src/assets/code.svg"
          title="3D Model"
          description="Completely self-taught with tutorials and internet courses. Having a 3D printer did not suit me just to print parts created by other people, although I still have a lot to learn and I keep improving day by day."
        />
      </div>
    </section>
  );
}

export default Services;
