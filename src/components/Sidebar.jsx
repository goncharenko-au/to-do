import React from "react";
import Date from "./Date";
import Geo from "./Geo";
import Time from "./Time";

const Sidebar = React.memo(function () {
    return (
        <div className="sidebar">
            <Date />
            <Time />
            <Geo />
        </div>
    )
});
export default Sidebar;