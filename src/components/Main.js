import React from "react"
import Timeline from "./Timeline"
export default function Main() {
    const scrollToSecondPage = () => {
        document.getElementById('second-page').scrollIntoView({ behavior: 'smooth' });
      };
    
    return (
    <>
    <div className="first-page">Happy Birthday!</div>


    <svg class="arrows" onClick={scrollToSecondPage}>
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
     </svg>
     <div id="second-page"><Timeline /></div>

    </>)
}


