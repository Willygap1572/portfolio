import './Services.css';

function ServiceCard({ iconURL, title, description }) {
  return (
    <article className="services__card">
      <img src={iconURL} alt="icon" className="services__icon" />
      <h2 className="services__title">{title}</h2>
      <p className="services__description">{description}</p>
    </article>
  );
}

export default ServiceCard;
