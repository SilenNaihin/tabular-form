import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [slideshow, setSlideshow] = useState(true);
  const [title, setTitle] = useState("A shot at redemption...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideshow(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return(
    <>
      { slideshow ? (
            <div id="slideContainer">
              <div id="firstSlide">My apologies for the poor performance on Friday</div>
              <div id="secondSlide">{title}</div>
            </div>
          ) : (
          <Component {...pageProps} />
          )
      }
    </>
  )
}
export default MyApp
