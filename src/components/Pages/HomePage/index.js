import { useEffect, useState } from "react";

import AnimatedLetters from "../../AnimatedLetters";
import TextShpere from "../../TextSphere";
// {/* <div className="box-2">
            //   <div className="rectangle-purple"></div>
             //  <div className="circle-pink">
               // <div className="circle-mask">
               // <img src={selfie} alt="selfie"/>
               // </div>
              // </div>
           // </div> */}
//const WebDev = `Your Web Developer`;
const HomePage =()=>{
    //trying sloboban animation technique
   const [letterClass, setLetterClass]=useState("text-animate");
   const nameArray = [ "r", 'y', 'n', 'e', 'l', 'l', 'i'];
   const jobArray = ['W', 'e', 'b', '  ',' ', ' D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'] 
   useEffect(()=>{
    const timeout =  setTimeout(()=>{
        setLetterClass('text-animate-hover')
    },1500)
    return ()=> clearTimeout(timeout)
   },[])
   
   

    return <div className="container-hp-g">
               <div className="welcome-text text-zone">
                 <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className="name">
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <span className={`${letterClass} _15`}> </span>
                    <span className={`${letterClass} _15`}> </span>
                    <span className={`${letterClass} _16 name-first-letter`}>F</span>
                    <AnimatedLetters 
                    letterClass={letterClass} 
                    strArray={nameArray}
                    idx={17}
                    /></span>
                    <br/>
                    <span className="web-dev">
                    <AnimatedLetters 
                    letterClass={letterClass} 
                    strArray={jobArray}
                    idx={18}
                    />
                    </span>
                 </h1>
                 <span className="paragraph">
                   <p>
                     Junior Front End Developer & Wordpress    
                  </p>
                    <hr/>
                 </span>
                 
               </div>
               
            <div className="box-2">
            
                <TextShpere/>
                
            </div>
    </div>
}

export default HomePage;


