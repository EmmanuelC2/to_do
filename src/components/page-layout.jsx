import React from "react";
import PageFooter from "./page-footer";

function PageLayout ({data, children}) {

    return (
        // Theme attribute lets CSS flip palettes without re-rendering components.
        <div className="page-layout" data-theme={data.isDark ? "dark" : "light"}>
            <div className="page-layout__content">{children}</div>
            <PageFooter data={data}/> 
        </div>
    )
}

export default PageLayout;
