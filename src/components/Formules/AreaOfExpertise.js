import React from 'react';
function TextGroup({ title1, title2 }) {
  return (
    <div className="text-group">
      <div className="title">{title1}</div>
      <hr className="separator" />
      <div className="title">{title2}</div>
    </div>
  );
}

export default TextGroup;
