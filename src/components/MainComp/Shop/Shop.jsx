import React from 'react';
import CustomP from "../../Common/CustomP";
import CustomH1 from "../../Common/CustomH1";
import  styles from "../../../styles/Shop.module.css";
import ListShopItem from "./ListShopItem";
import CustomButton from "../../Common/CustomButton";

function Shop(props) {
    const data=[
        {img:require("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img_8.png"),titel:"Decor Plate",price:65.00},
        {img:require("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img_9.png"),titel:"Mint Pottery",price:75.00},
        {img:require("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img_10.png"),titel:"Set Of Potterys",price:125.00},
        {img:require("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img_11.png"),titel:"Orange Ceramic",price:65.00},
        {img:require("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img_12.png"),titel:"Dark Bowl",price:115.00},
        {img:require("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img_13.png"),titel:"Square Pottery",price:75.00},
    ]
    return (
        <div className="container">

            <div className={styles.title}>
                <CustomP>
                Our online store
            </CustomP>
                <CustomH1>
                    Pottery Collection
                </CustomH1>
            </div>

        <ListShopItem data={data}/>
            <div style={{textAlign:"center", marginBottom:200}}><CustomButton >View All Products</CustomButton>
            </div>
        </div>
    );
}

export default Shop;