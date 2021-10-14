import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [key, setKey] = useState<String>("");
  const [keyCode, setKeyCode] = useState<Number>(null!);
  const [code, setCode] = useState<String>("");
  const getInfo = (e: KeyboardEvent) => {
    e.key === " " ? setKey("Space") : setKey(e.key);
    setCode(e.code);
    setKeyCode(e.keyCode);
  };

  useEffect(() => {
    window.addEventListener("keydown", getInfo);
    return () => {
      window.removeEventListener("keydown", getInfo);
    };
  });
  return key !== "" ? (
    <>
      <div className="key">
        {key} <small>event.key</small>
      </div>
      <div className="key">
        {keyCode} <small>event.keyCode</small>
      </div>
      <div className="key">
        {code}
        <small>event.code</small>
      </div>
    </>
  ) : (
    <div className="key">Press any key to to get the keycode</div>
  );
}

export default App;
