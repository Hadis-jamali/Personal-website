import "./Blog.css";
import codeImage from "../../assets/images/code.png";
import codeThreeImage from "../../assets/images/codeThree.png";
import codeTwoImage from "../../assets/images/codeTwo.png";
import codeFourImage from "../../assets/images/codeFour.png";
import codeFiveImage from "../../assets/images/codeFive.png";
import codeSixImage from "../../assets/images/codeSix.png";


function Blog() {
 
  return (
    <section id="section3" className="pro">
      <h2 className="head-project">My Projects</h2>
      <div className="card-project">
        <div className="cards">
          <img className="img-project" src={codeImage} />
          <p className="title-project">Submit-Form Web Page</p>
          <a href="https://github.com/Hadis-jamali/Submit-Form">
            <button className="btn-project">Click here</button>
          </a>
        </div>
        <div className="cards">
          <img className="img-project" src={codeThreeImage} />
          <p className="title-project">To Do List</p>
          <a href="https://github.com/Hadis-jamali/To-Do-List">
            <button className="btn-project">Click here</button>
          </a>
        </div>
        <div className="cards">
          <img className="img-project" src={codeTwoImage} />
          <p className="title-project">Company Web Site</p>
          <a href="https://github.com/Hadis-jamali/Company-website">
            <button className="btn-project">Click here</button>
          </a>
        </div>
      </div>
      <div className="card-project">
        <div className="cards">
          <img className="img-project" src={codeFourImage} />
          <p className="title-project">Kaospilot Toolbox</p>
          <a href="https://github.com/Hadis-jamali/Kaospilot-toolbox">
            <button className="btn-project">Click here</button>
          </a>
        </div>
        <div className="cards">
          <img className="img-project" src={codeFiveImage} />
          <p className="title-project">Favorite Movie list</p>
          <a href="https://github.com/Hadis-jamali/Favorite-Movie-List">
            <button className="btn-project">Click here</button>
          </a>
        </div>
        <div className="cards">
          <img className="img-project" src={codeSixImage} />
          <p className="title-project">Online Shop</p>
          <a href="https://github.com/Hadis-jamali/Online-Shop">
            <button className="btn-project">Click here</button>
          </a>
        </div>
      </div>
      <div className="div-cv">
        <a href="https://www.linkedin.com/in/hadisjamali/">
          <button className="btn-cv">Download CV</button>
        </a>
      </div>
    </section>
  );
}
export default Blog;
