import React from "react";
import { useState, useEffect } from "react";
import "./Slider.css";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  backgroundColor: "transparent",
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  backgroundColor: "transparent",
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  paddingTop: "1em",
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  backgroundColor: "#323b45",
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "1em",
  width: "0.4em",
  height: "0.4em",
  borderRadius: "0.4em",
  transition: ".2s ease-out"
};

const currentDotStyle = {
  backgroundColor: "#2daaed",
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "1em",
  width: "1.2em",
  height: "0.4em",
  borderRadius: "0.4em",
  transition: ".2s ease-in"
}

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
    opacity: "1",
    visibility: "visible",
    transition: "0s",
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const nextIndex =
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);
    }, 3000); // delay of 3 seconds

    return () => clearTimeout(timeoutId);
  }, [currentIndex, slides]);

  return (
    <div style={sliderStyles} className="slider-container">
      <div className="arrow">
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div
        style={slideStylesWidthBackground}
      //className={`autoskip-item ${currentIndex === currentIndex ? "show" : ""}`}
      ></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) =>
          {if (slideIndex === currentIndex)
              return (
                <div
                  className="content"
                  style={currentDotStyle}
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                >
                </div>)
            else
              return (
                <div
                  className="content"
                  style={dotStyle}
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                >
                </div>)
          }
        )}
      </div>
    </div>
  );
};

export default Slider;
