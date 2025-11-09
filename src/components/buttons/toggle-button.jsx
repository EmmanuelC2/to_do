import { useState } from "react";

function ToggleButton({data}) {

    // Keep a human readable label so the checkbox communicates the next action.
    const [labelText, setLabelText] = useState(!data.isDark ? "Dark Mode" : "Light Mode");

    function changeLabelText(){
        if(!data.isDark){
            setLabelText("Light Mode");
        }else{
            setLabelText("Dark Mode");
        }
    }

    // Flip the global theme flag and immediately sync the button label.
    function switchMode() {data.setIsDark(!data.isDark); changeLabelText();}

    return (
        <div className="toggle-container">
            <input
                type="checkbox"
                id="check"
                className="toggle"
                onChange={switchMode}
                checked={data.isDark}
            >
            </input>
            <label className="toggle-label" htmlFor="check">{labelText}</label>
        </div>
    )
}

export default ToggleButton;
