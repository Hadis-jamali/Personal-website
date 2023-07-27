import "./Service.css";
import "./ServiceItem";
import ServiceIteam from "./ServiceItem";
function Service() {
  let Services = [
    { serviceIcon: "bi bi-briefcase", serviceTitle: "WEB DESIGN" },
    { serviceIcon: "bi bi-card-checklist", serviceTitle: "WEB DEVELOPMENT" },
    { serviceIcon: "bi bi-bar-chart", serviceTitle: "PHOTOGRAPHY" },
    { serviceIcon: "bi bi-binoculars", serviceTitle: "RESPONSIVE DESIGN" },
    { serviceIcon: "bi bi-brightness-high", serviceTitle: "GRAPHIC DESIGN" },
    { serviceIcon: "bi bi-calendar4-week", serviceTitle: "MARKETING SERVICES" },
  ];
  return (
    <section id="services">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="row">
          <ServiceIteam {...Services[0]}></ServiceIteam>
          <ServiceIteam {...Services[1]}></ServiceIteam>
          <ServiceIteam {...Services[2]}></ServiceIteam>
          <ServiceIteam {...Services[3]}></ServiceIteam>
          <ServiceIteam {...Services[4]}></ServiceIteam>
          <ServiceIteam {...Services[5]}></ServiceIteam>
        </div>
      </div>
    </section>
  );
}
export default Service;
