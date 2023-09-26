import React, { useEffect, useRef, useState } from "react";

function MoreInfo(props) {
  const myParagraphRef = useRef(null);
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

  return (
    <div className="container-text">
      <p
        ref={myParagraphRef}
        className="text text-with-margin"
      >
        EN SAVOIR +
      </p>
      <div className="line-container">
        <svg
          width={lineLength}
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1={(paragraphSize.width - paragraphSize.width) / 2}
            y1="0"
            x2={(paragraphSize.width + paragraphSize.width * 3) / 2}
            y2="0"
            stroke="black"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
}

export default MoreInfo;
