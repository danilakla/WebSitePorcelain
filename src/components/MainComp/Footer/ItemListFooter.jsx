import React from 'react';
import FooterItem from "./FooterItem";
import  styles from "../../../styles/Footer.module.css"
function ItemListFooter(props) {
    return (
        <div className={styles.listFooterContainer}>
            {props.data.map(e=>{

                return <FooterItem data={e}/>
            })}

        </div>
    );
}

export default ItemListFooter;