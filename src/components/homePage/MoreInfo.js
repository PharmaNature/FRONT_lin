import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import global from '../../assets/global'

function MoreInfo(props) {
  const langue = global["global"]
  const texts = global[langue]["Other"]
  const myParagraphRef = useRef(null);
  const lineRef = useRef(null);
  const [paragraphSize, setParagraphSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (myParagraphRef.current) {
      setParagraphSize({
        width: myParagraphRef.current.offsetWidth,
        height: myParagraphRef.current.offsetHeight,
      });
    }
  }, []);

  const lineLength = paragraphSize.width + 30;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleMouseEnter = () => {
    if (lineRef.current) {
      lineRef.current.style.strokeDashoffset = "0";
    }
  };

  const handleMouseLeave = () => {
    if (lineRef.current) {
      lineRef.current.style.strokeDashoffset = "1000";
    }
  };

  return (
    <Link
      className="link-more-info"
      to={props.link}
      onClick={scrollToTop}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container-more-info">
        <p ref={myParagraphRef} className="text">
          {texts["txt0-0"]}
        </p>
        <div className="line-container">
          <svg width={lineLength} xmlns="http://www.w3.org/2000/svg">
            <line
              ref={lineRef}
              x1={(paragraphSize.width - paragraphSize.width) / 2}
              y1="0"
              x2={(paragraphSize.width + paragraphSize.width * 3) / 2}
              y2="0"
              stroke="black"
              strokeWidth="2"
              strokeDashoffset="0"
              className="line-svg"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default MoreInfo;
