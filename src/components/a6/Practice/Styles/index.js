import React from "react";
const Styles = () => {
    const colorBlack = {
        color: "black"
    }
    const padding10px = {
        padding: "10px"
    }
    const bgBlue = {
        "background-color": "lightblue",
        "color": "black",
        ...padding10px
    };
    const bgRed = {
        "background-color": "lightcoral",
        ...colorBlack,
        ...padding10px
    };
    return(
        <div>
            <h1>Styles</h1>
            <div style={{"background-color": "lightyellow",
                "color": "black", padding: "10px"}}>
                Yellow background</div>
            <div style={bgRed}>
                Red background</div>
            <div style={bgBlue}>
                Blue background</div>
        </div>
    );
};
export default Styles;

