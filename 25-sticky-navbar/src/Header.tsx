import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [offSet, setOffSet] = useState(false);
  const heightRef = useRef<HTMLDivElement>(null)
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    
    if(position > heightRef!.current!.offsetHeight + 150){
      setOffSet(true)
    }
    else{
      setOffSet(false)
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav ref={heightRef} className={`nav ${offSet ? 'active' : ''}`} >
      <div className="container">
        <h1 className="logo">My website</h1>
        <ul>
          <li className="current">Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
