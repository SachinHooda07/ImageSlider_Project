import { useEffect, useState } from "react";
import "./ImageSlider.css";

const data = [
  "https://images.squarespace-cdn.com/content/v1/5e10bdc20efb8f0d169f85f9/09943d85-b8c7-4d64-af31-1a27d1b76698/arrow.png",
  "https://randomchoicegenerator.com/wp-content/uploads/2022/05/randomjet.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5UxyMBF1GtXzcl8lMNlH-Du-Q_tqTu-Npg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7NkCUiFeO1-XrHS0Cjpnl563nEP1pPDODyw&usqp=CAU",
  "https://4kwallpapers.com/images/wallpapers/man-led-mask-dope-night-anonymous-hoodie-amoled-black-1280x1280-132.jpg",
];

const ImageSlider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const PreviousClick = () => {
    // setActiveImage(!activeImage ? data.length - 1 : activeImage - 1);
    if (activeImage == 0) {
      setActiveImage(data.length - 1);
    } else {
      setActiveImage(activeImage - 1);
    }
  };

  const NextClick = () => {
    setActiveImage((activeImage + 1) % data.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      NextClick();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  return (
    <>
      <h2>Image Slider</h2>
      <div className="div1">
        <div className="btn1">
          <button onClick={PreviousClick}>Previous</button>
        </div>
        <div className="imgageSliderDiv">
          <img src={data[activeImage]} alt="Loading Wallpaper" />
        </div>
        <div className="btn2">
          <button onClick={NextClick}>Next</button>
        </div>
      </div>
    </>
  );
};
export default ImageSlider;
