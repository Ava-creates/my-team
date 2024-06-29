import React from "react"
import Timeline from "./Timeline"
export default function Main() {
    const scrollToSecondPage = () => {
        document.getElementById('second-page').scrollIntoView({ behavior: 'smooth' });
      };
    
    return (
    <>
    <div className="first-page">Happy Birthday Mummy!</div>


    <svg class="arrows" onClick={scrollToSecondPage}>
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
     </svg>
     <div id="second-page"><Timeline /></div>
     <div id="third-page">   
        <div className="photo-grid">
            <img src={require("./images/a.JPG")} alt="Photo 1" className="photo"/>
            <img src={require('./images/IMG_0354 Small.jpeg')} className="photo"/>
            <img src={require("./images/IMG_0969 Medium.jpeg")} alt="Photo 3" className="photo"/>
            <img src={require("./images/n.jpeg")} alt="Photo 1" className="photo"/>
            <img src={require("./images/w.jpeg")} alt="Photo 1" className="photo"/>
            <img src={require("./images/hi.jpeg")} alt="Photo 1" className="photo"/>
        </div>
    </div>

    </>)
}


