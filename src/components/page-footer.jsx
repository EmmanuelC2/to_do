import React from "react";
import ToggleButton from "./buttons/toggle-button";

function PageFooter({data}) {

    return(
        <footer className="page-footer">
            <div className="page-footer-grid">
                <div className="page-footer-grid__info">
                    <ToggleButton data={data} />
                </div>
            </div>
        </footer>
    )
}

export default PageFooter;
