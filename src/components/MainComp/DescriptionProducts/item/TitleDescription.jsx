import React from 'react';
import CustomH1 from "../../../Common/CustomH1";
import Text from "../../../Common/Text";
import {motion} from "framer-motion";
const textAnimation={
    hidden:{
        y:200,
        opacity:0,

    },
    visible:{
        y:0,
        opacity: 1,
        transition:{
            duration: 1

        }
    }
}

function TitleDescription({rot}) {
    let stl={maxWidth:600}

    if(rot){
        stl.marginLeft=100


    }else{
        stl.marginRight=100

    }
    return (
        <motion.div style={stl} initial="hidden" whileInView="visible" variants={textAnimation}>
            <CustomH1>
                Gold & Black Pottery
            </CustomH1>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.
            </Text>

            <p>View Details</p>

        </motion.div>
    );
}

export default TitleDescription;