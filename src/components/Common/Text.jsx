import React from 'react';
const stl={
    color:"#6C6C6C",
    fontsize:14,
    fontstyle:"Regular",


}
function Text(props) {
    return (
        <div>
            <p style={stl}>
                {props.children}
            </p>
        </div>
    );
}

export default Text;