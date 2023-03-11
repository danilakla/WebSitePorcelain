import React from 'react';
import Item from "./Item";
import styles from "../../../styles/Category.module.css"

function ListItem({items}) {
    console.log(items)
    return (
        <div className={styles.list}>
            {items.map(e => {
                return <Item data={e}/>
            })}
        </div>
    );
}

export default ListItem;