import React, {useState} from 'react';
import  styles from "../../.././styles/Shop.module.css";
import Text from "../../Common/Text";
import {observer} from "mobx-react-lite";
import Store from "../../../Store/Store";

function ShopItem({img,titel,price}) {
    let  [anim, setAnim]=useState(styles.hoverFirst);
    const animationEnterMouse=()=>{
        setAnim(styles.hoverItem);
    }
    const animationLeftMouse=()=>{
        setAnim(styles.hoverFirst);
    }
    const  addItem=()=>{
        Store.addProduct({img, titel,price})
        Store.incrCount();
    }
    return (
        <div className={styles.itemSh}>
            <div style={{position:"relative"}}>
            <div   onMouseLeave={animationLeftMouse} className={` ${anim}`}>
               <div className={styles.contentPart}>
                    <h1 style={{color:'white'}}>text</h1>
                   <p>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I
                   </p>
                   <button className={styles.btn} onClick={addItem} >buy</button>

               </div>
            </div>
            <img className={styles.imgShopTitle} src={img} alt="" onMouseEnter={animationEnterMouse}/>
            </div>
            <Text>
                {titel}
            </Text>
            <p>$ {price} USD</p>

        </div>
    );
}

export default  ShopItem;