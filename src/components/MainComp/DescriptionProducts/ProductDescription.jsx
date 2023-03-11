import React from 'react';
import styles from "../../../styles/ProductsDescription.module.css"
import ItemDescr from "./item/ItemDescr";
function ProductDescription(props) {
    return (
        <div style={{marginTop:300}} className="container">
            <ItemDescr Position={true}/>
            <ItemDescr Postition={false}/>

        </div>
    );
}

export default ProductDescription;