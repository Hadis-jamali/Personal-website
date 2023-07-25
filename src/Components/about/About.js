import "./About.css";
import aboutImage from "../../assets/images/about.jpg";

function About() {
  return (
    <>
      <section id="about">
        <div class="about">
          <h2 class="title">About Me</h2>
          <img class="about-img" src={aboutImage} alt="John" />
          <p class="info">
            I'm hadis. I'm from Iran and live in Denmark,aarhus. I'm 27 years old and I'm happily
            married. I'm Passionate Junior Frontend Developer with expertise in HTML, CSS,
            JavaScript and ongoing learning in React JS. Leveraging a psychology background, I bring
            a unique perspective to create user-centric interfaces that intuitively cater to user
            needs, optimize cognitive load, and drive positive user engagement
          </p>
        </div>
      </section>
    </>
  );
}
export default About;
