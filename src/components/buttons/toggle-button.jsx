import { useState } from "react";

function ToggleButton({data}) {

    const [labelText, setLabelText] = useState(!data.isDark ? "Dark Mode" : "Light Mode");

    function changeLabelText(){
        if(!data.isDark){
            setLabelText("Light Mode");
        }else{
            setLabelText("Dark Mode");
        }
    }

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