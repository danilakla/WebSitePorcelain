import React from 'react';
const stl={
    color:"white",
    backgroundColor:"#AC1313",
    fontsize:12,
    textAlign:"center",
    width:200,
    height:62,
    marginTop:61
}
function CustomButton(props) {
    return (
        <>
        <button style={stl}>
            {props.children}
        </button>
        </>
    );
}

export default CustomButton;