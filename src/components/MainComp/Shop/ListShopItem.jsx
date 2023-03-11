import React from 'react';
import ShopItem from "./ShopItem";
import  styles from "../../../styles/Shop.module.css"
function ListShopItem({data}) {
    console.log(data)
    return (
        <div className={styles.listContainer} >
            {data.map(e=>{

                return <ShopItem img={e.img} price={e.price} titel={e.titel}/>
            })}
        </div>
    );
}

export default ListShopItem;