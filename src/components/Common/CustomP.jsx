import React from 'react';
const stl={
    color:"#D77474",
fontsize:14,
    fontstyle:"Bold"

}
function CustomP(props) {
    return (
<>
<p style={stl}>
    {props.children}
</p>
</>
    );
}

export default CustomP;