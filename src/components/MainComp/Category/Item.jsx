import React from 'react';
import style from "../../../styles/Category.module.css"
function Item({data}) {
    const stl={
        backgroundColor:data.bk,
        borderColor:data.cl,
    }
    return (
        <div  className={style.circle} style={stl}>
            <div>
                <img width={70} height={70} src={data.img} alt=""/>
            </div>
            <div>
                <p>{data.title}</p>
            </div>
        </div>
    );
}

export default Item;