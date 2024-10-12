import { useState } from "react";
import "./Carousel.css";
// import Arrows from "./Arrows";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Decrements currCardIdx state by 1
  function goBackwards() {
    setCurrCardIdx(currCardIdx - 1);
  }

  //Increments currCardIdx state by 1
  function goForwards() {
    setCurrCardIdx(currCardIdx + 1);
  } 

  // only show right arrow at beginning of carousel
  if (currCardIdx === 0) {
    return (
      <div className="Carousel">
        <h1>{title}</h1>
        <div className="Carousel-main">        
          <Card
            caption={currCard.caption}
            src={currCard.src}
            currNum={currCardIdx + 1}
            totalNum={total}
            />
          <i
            className="bi bi-arrow-right-circle"
            onClick={ goForwards }
          />
        </div>
      </div>
    );    
  }

  // only show left arrow at end of carousel
  if (currCardIdx === photos.length - 1 ) {
    return (
      <div className="Carousel">
        <h1>{title}</h1>
        <div className="Carousel-main">        
          <i
            className="bi bi-arrow-left-circle"
            onClick={ goBackwards }
          />
          <Card
            caption={currCard.caption}
            src={currCard.src}
            currNum={currCardIdx + 1}
            totalNum={total}
            />
        </div>
      </div>
    );
  }

  // show both arrows otherwise
  if ((currCardIdx !== photos.length - 1) && (currCardIdx !== 0)) {
      return (
        <div className="Carousel">
          <h1>{title}</h1>
          <div className="Carousel-main">        
            <i
              className="bi bi-arrow-left-circle"
              onClick={ goBackwards }
            />
            <Card
              caption={currCard.caption}
              src={currCard.src}
              currNum={currCardIdx + 1}
              totalNum={total}
              />
            <i
              className="bi bi-arrow-right-circle"
              onClick={ goForwards }
            />
          </div>
        </div>
      );
    }
  } 

export default Carousel;
