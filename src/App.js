import "./App.css";
import { useEffect, useRef } from "react";
import ResumeSection from "./components/ResumeSection";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import layer7 from "./images/video1.mp4";
import layer6 from "./images/rocket.gif";
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

  return (
    <div>
      {/* //  New code  */}
      <Parallax>
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
  );
}

export default App;
