import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import ResumeSection from "./components/ResumeSection";
import VideoBackground from "./components/VideoBackground";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import layer7 from "/home/shubh/Desktop/React/portfolio/src/images/video1.mp4";
import layer6 from "/home/shubh/Desktop/React/portfolio/src/images/rocket.gif";
import layer5 from "/home/shubh/Desktop/React/portfolio/src/images/origami.png";
import layer4 from "/home/shubh/Desktop/React/portfolio/src/images/happy-hacker.gif";
import layer3 from "/home/shubh/Desktop/React/portfolio/src/images/opener-loading.gif";
import layer2 from "/home/shubh/Desktop/React/portfolio/src/images/listening-music.gif";
import layer1 from "/home/shubh/Desktop/React/portfolio/src/images/atom-loader.gif";
import Typed from "typed.js";

function App() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hi, I am Shubh....",
        "Passionate about creating meaningful web experiences.",
        "Checkout My Profile...",
      ], // Replace with your desired content strings
      typeSpeed: 50, // Adjust typing speed (in milliseconds)
      loop: false, // Set to true if you want the typing effect to repeat
    };

    if (typedRef.current && typedRef.current.tagName) {
      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy(); // Cleanup when component is unmounted
      };
    }
  }, []);

  const [pages, setPages] = useState(2.44);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   const calculatePages = () => {
  //     // Calculate the number of pages based on the viewport height or width
  //     const viewportHeight = window.innerHeight;
  //     const viewportWidth = window.innerWidth;
  //     // const pageHeight = 1000; // Set your desired page height
  //     // const pageWidth = 1000; // Set your desired page width

  //     setWindowHeight(viewportHeight);

  //     if(viewportHeight < 700){
  //       setPages(3.1);
  //     }

  //   };

  //   // Call the calculatePages function initially and on window resize
  //   calculatePages();
  //   // window.addEventListener('resize', calculatePages);

  //   // Clean up the event listener on component unmount
  //   // return () => {
  //   //   window.removeEventListener('resize', calculatePages);
  //   // };
  // }, [windowHeight]);

  return (
    <div>
      {/* <Parallax pages={1.45}>
        <ParallaxLayer
          offset={0}
          speed={2}
          factor={2}
          style={{
            backgroundImage: `url(${layer7})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></ParallaxLayer>
        </Parallax> */}

      {/* <Parallax pages={2.44}> */}
      {/* <ParallaxLayer
    offset={0}
    speed={0.1}
    factor={2}
    style={{
      // position: 'absolute',
      // width: '100%',
      // height: '100%',
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
      backgroundSize: 'auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat-y'
    }}
  className="back-video">
    <video autoPlay loop muted style={{ width: '100%', height: '100%' }}>
      <source src={layer7} type="video/mp4" />
    </video>
  </ParallaxLayer> */}
      {/* <ParallaxLayer offset={0} speed={1.3}> */}
      {/* <ResumeSection/> */}
      {/* </ParallaxLayer> */}
      {/* <ParallaxLayer
          offset={0}
          speed={0.8}
          factor={2}
          style={{
            backgroundImage: `url(${layer5})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: '250px',    // Adjust the top position to create space from the top border
            left: '1350px',
            width: '30px', // Adjust the width to your desired size
            height: '30px',
          }}
></ParallaxLayer> */}
      {/* 
   <ParallaxLayer
          offset={1}
          speed={0.8}
          factor={2}
          style={{
            backgroundImage: `url(${layer5})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: '250px',    // Adjust the top position to create space from the top border
            left: '1250px',
            width: '50px', // Adjust the width to your desired size
            height: '50px',
          }}
></ParallaxLayer> */}
      {/* <ParallaxLayer
          offset={0}
          speed={0.8}
          factor={2}
          style={{
            backgroundImage: `url(${layer6})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: '0px',    // Adjust the top position to create space from the top border
            left: '0px',
            width: '300px', // Adjust the width to your desired size
            height: '300px',
          }}
></ParallaxLayer>  */}
      {/* <ParallaxLayer
          offset={0}
          speed={1.9}
          factor={2}
          style={{
            backgroundImage: `url(${layer4})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: '900px',    // Adjust the top position to create space from the top border
            left: '900px',
            width: '400px', // Adjust the width to your desired size
            height: '400px',
          }}
></ParallaxLayer>  */}
      {/* <ParallaxLayer
          offset={0}
          speed={0.8}
          factor={2}
          style={{
            backgroundImage: `url(${layer3})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: '1463px',    // Adjust the top position to create space from the top border
            left: '970px',
            width: '300px', // Adjust the width to your desired size
            height: '300px',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
></ParallaxLayer>  */}
      {/* <ParallaxLayer
          offset={0}
          speed={0.8}
          factor={2}
          style={{
            backgroundImage: `url(${layer2})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: '2463px',    // Adjust the top position to create space from the top border
            left: '970px',
            width: '400px', // Adjust the width to your desired size
            height: '400px',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
></ParallaxLayer>  */}

      {/* </Parallax> */}
      {/* <ResumeSection1/> */}

      {/* <VideoBackground /> */}
      {/* <ResumeSection /> */}

      {/* //  New code  */}
      <Parallax>
        {/* Parallax layers */}
        {/* <ParallaxLayer offset={0} speed={0} style={{ backgroundColor: 'black' }} /> */}
        {/* <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: 'red' }} /> */}
        <ParallaxLayer
          offset={0}
          speed={-0.8}
          factor={2}
          style={{
            backgroundSize: "auto",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
          }}
          className="back-video"
        >
          <video autoPlay loop muted style={{ width: "100%", height: "100%" }}>
            <source src={layer7} type="video/mp4" />
          </video>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={-1}
          factor={3}
          style={{
            backgroundImage: `url(${layer6})`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
            position: "absolute",
            top: "30px", // Adjust the top position to create space from the top border
            left: "-80px",
            width: "300px", // Adjust the width to your desired size
            height: "300px",
          }}
        ></ParallaxLayer>

        {/* Scrollable content */}
        <div className="content">
          <ResumeSection />
        </div>
      </Parallax>
    </div>

    // <div>
    //   <Parallax>
    //     <VideoBackground/>
    //    <ResumeSection />
    //   </Parallax>
    // </div>
  );
}

export default App;
