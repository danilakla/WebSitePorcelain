import React from 'react';
import CustomP from "../../Common/CustomP";
import CustomH1 from "../../Common/CustomH1";
import  styles from "../../../styles/Category.module.css"
import ListItem from "./ListItem";
import Item from "./Item";
import {motion} from "framer-motion"
import Text from "../../Common/Text";
const textAnimation1={
    hidden:{
        x:-200,
        opacity:0,

    },
    visible:{
        x:0,
        opacity: 1,
        transition:{
            duration: 1

        }
    }
}

const textAnimation2={
    hidden:{

        x:0,
        opacity:0
    },
    visible:{
        x:0,
        opacity: 1,
        transition:{
            duration: 1

        }
    }
}
function ProductCategory(props) {

    const mockData=[{img:require("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img_3.png"),title:"VASES", bk:"#E4B366", cl:"#b9945a"},
        {img:require("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img_4.png"),title:"MUGS",bk:"#F05B10", cl:"#b44b16"},
        {img:require("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img_5.png"),title:"PLATES",bk:"#A21010", cl:"#8a1212"},]
    return (
        <div className="container">
            <div className={styles.title}>  <CustomP>
                Product Categories
            </CustomP>
                <CustomH1>
                    Porcelain & Pottery
                </CustomH1>
            </div>
            <ListItem items={mockData}/>

<div className={styles.textBlock} >
    <motion.div initial="hidden" whileInView="visible" variants={textAnimation1}   className={styles.itemTitleCategoryFirst}>
        <CustomH1>
            Hand Grafted <br/> Pottery since 1990
        </CustomH1>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
        </Text>
    </motion.div>
    <motion.div initial="hidden" whileInView="visible" variants={textAnimation2} className={styles.itemTitleCategorySecond}>
        <CustomH1>
            Hand Grafted <br/> Pottery since 1990
        </CustomH1>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
        </Text>
    </motion.div>


</div>
        </div>
    );
}

export default ProductCategory;