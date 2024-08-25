import React from 'react';

const Top = () => {
    const handleTop = () => {
        window.scrollTo ({
            top: 0,
            behavior: "smooth"
        });
    }

  return (
    <button className="topBtn" onClick={handleTop}>˄</button>
  );
}

export default Top;
