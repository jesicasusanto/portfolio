import React from "react"
import Wrapper from "./Wrapper";

function About() {
  return (
        <Wrapper>
            <h1 className="font-chakra text-soft sm:text-4xl text-2xl my-5">
            &lt;About me&gt;
            </h1>
            <div className="w-full rounded-2xl my-3. p-5 shadow-soft my-4 hoverBox">
                
                <p className="font-chakra text-soft sm:text-lg text-s m-1.5">
                I am a 3rd year student at University of Toronto specializing in Computer Science. 
                I'm currently working as a Software Developer at Husky where I buid user-centric softwares.
                <br />
                <div className="my-5">
                    Here are some technologies I've been working with:
                    <li>Python</li>
                    <li>React.js</li>
                    <li>C#</li>
                    <li>Java</li>
                    <li>TypeScript</li>
                </div>
                Outside of school and work, I’m passionate about keeping up with the latest trends in technology and design. I enjoy connecting with new people and playing PC games
                </p>
            </div>
        </Wrapper>
  )
}

export default About
