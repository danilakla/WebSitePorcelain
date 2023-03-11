import React from 'react';
import ImageForDescription from "./ImageForDescription";
import TitleDescription from "./TitleDescription";

import  styles from "../../../../styles/ProductsDescription.module.css"
function ItemDescr(props) {
    if(props.Position){
        return (
            <div className={styles.itemContainer}>

                <ImageForDescription w={250} h={509}  img={require("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img_6.png")}/>
                <TitleDescription rot={props.Position}/>
            </div>
        );
    }else{
        return (
            <div className={styles.itemContainer}>
                <TitleDescription rot={props.Position}   />

                <ImageForDescription  w={417} h={350} img={require("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img_7.png")}/>
            </div>
        );
    }

}

export default ItemDescr;