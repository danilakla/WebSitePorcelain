import React, {useEffect, useMemo, useState} from 'react';
import Store from "../Store/Store";
import {observe} from "mobx";
import {observer} from "mobx-react-lite";
import {Button} from "react-bootstrap";

function Basket(props) {
    const [prod,setProd]=useState(Store.products)
    function deleteItems(){
        Store.dicrCount()
        Store.delete();
        setProd([])
    }

    return (
        <div >
   <h1 style={{textAlign:"center", border:"1px solid gray"}}>BASKET</h1>
<div style={{display:"flex", justifyContent:"center"}}>
    <div>
        < Button style={{marginBottom:100, marginTop:100}} onClick={deleteItems}>DELETE ALL ITEM</Button>

        {prod.map(e=>{
                return <div><img width={200} height={300} src={e.img} alt=""/> <p>{e.title}</p> <p>{e.price}</p></div>
            })}

            <div>
                <p>{Store.fullPrice}</p>
            </div>
    </div>
</div>

        </div>
    );
}

export default Basket;