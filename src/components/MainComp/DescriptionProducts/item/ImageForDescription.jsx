import React from 'react';
import styles from "../../../../styles/ProductsDescription.module.css"

function ImageForDescription({img,w,h}) {
    const stl={
        maxWidth:w,
        minHeight:h,
    }
    return (
        <div className={styles.imgContainer}>
            <div className={styles.squareBlock}>

                <img  style={stl} className={styles.imgDesc} src={img} alt=""/>
            </div>
        </div>
    );
}

export default ImageForDescription;