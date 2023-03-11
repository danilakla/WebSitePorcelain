import React from 'react';
import  styles from "../../../styles/Advertising.module.css"
import CustomP from "../../Common/CustomP";
import CustomH1 from "../../Common/CustomH1";
import Text from "../../Common/Text";
import CustomButton from "../../Common/CustomButton";
function Advertising(props) {
    return (
        <div className={styles.bckImg}>
<div className={`container ${styles.cont}`}>
        <CustomP>
            Pompeo POttery
        </CustomP>
        <CustomH1>
            Unique Porcelain & <br/> Stone Collection
        </CustomH1>
        <Text>Unique & modern pottery made by our master in porcelain & stones</Text>
        <CustomButton>Shop Collection</CustomButton>
</div>
        </div>
    );
}

export default Advertising;