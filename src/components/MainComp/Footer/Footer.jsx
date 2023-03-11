import React from 'react';
import Text from "../../Common/Text";
import  styles from "../../../styles/Footer.module.css"
import ItemListFooter from "./ItemListFooter";
function Footer(props) {
    const data=[
        {img:require("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img_16.png"),title:"EMAIL",email:"pompeopotery@gmail.com"},
        {img:require("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img_17.png"),title:"FIND",email:"Central Park, Manhattan"},
        {img:require("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img_18.png"),title:"CALL",email:"+1 292 345 678"}
    ]
    return (
        <div className={styles.containerFooter}>
            <div >
                <p className={styles.titelFooter} >Pompeo</p>
                <Text>
                    I have always striven to fix beauty in wood, stone,<br/>
                    glass or pottery, that has been my creed.
                </Text>
            </div>

<ItemListFooter data={data}/>
        </div>
    );
}

export default Footer;