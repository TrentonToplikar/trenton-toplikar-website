import { useState } from "react";
import { enable, disable, isEnabled } from "cursor-flashlight";
import './styles/Flashlight.css'

export const Mouselight = () => {
  const [isFlashlightEnabled, setIsFlashlightEnabled] = useState(isEnabled());

  const handleToggleFlashlight = () => {
    if (isEnabled()) {
      disable();
      setIsFlashlightEnabled(false);
    } else {
      enable({ size: "20vmax" });
      setIsFlashlightEnabled(true);
    }
  };

  const background = isFlashlightEnabled
    ? "linear-gradient(112deg, #444, #384e61); cursor: none"
    : "linear-gradient(112deg, #444, #384e61)";


  return (
    <div className="App-mouselight" style={{ background }}>
      <div className="mouselight-content">
        {/* <button onClick={ (e) => handleToggleFlashlight(e)}>Toggle flashlight</button> */}
        <div className="flashlight">
        <button className="flashlight-button" onMouseDown={ (e) => handleToggleFlashlight(e) }><img className="flashlight-content"src="https://cdn4.iconfinder.com/data/icons/basic-ui-set-2-1/64/Basic_ui_2-19-512.png" alt="" /></button>
        </div>
      </div>
    </div>
  );
}

export default Mouselight;
