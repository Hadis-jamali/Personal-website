import "./About.css";
import hadisImage from "../../assets/images/hadis.jpg";

function About() {
  return (
    <>
      <section id="section2">
        <h2 className="title">About Me</h2>
        <div className="about">
          <div className="about-me">
            <img className="about-img" src={hadisImage} alt="hadis jamali" />
          </div>
          <div className="about-me">
            <p className="info">
              I'm Hadis. I'm from Iran and I live in Denmark,Aarhus. I have bachelor dgree in
              psychology. I'm Passionate Junior Frontend Developer with expertise in HTML, CSS,
              JavaScript and ongoing learning in React JS. Leveraging a psychology background, I
              bring a unique perspective to create user-centric interfaces that intuitively cater to
              user needs,optimize cognitive load, and drive positive user engagement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
