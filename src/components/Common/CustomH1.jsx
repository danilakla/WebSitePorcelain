import React from 'react';
const stl={
fontsize:48,
    color:"black",
fontstyle:"Bold"
}
function CustomH1(props) {
    return (
        <>
        <h1 style={stl}>{props.children}</h1>
        </>
    );
}

export default CustomH1;