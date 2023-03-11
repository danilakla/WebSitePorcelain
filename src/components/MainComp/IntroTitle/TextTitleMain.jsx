import React from 'react';
import CustomP from "../../Common/CustomP";
import CustomH1 from "../../Common/CustomH1";
import Text from "../../Common/Text";
import CustomButton from "../../Common/CustomButton";
import styles from "../../../styles/Main.module.css"
function TextTitleMain(props) {
    return (
        <div className={styles.container}>
            <CustomP>
                Pompeo POttery
            </CustomP>
            <CustomH1>
                Unique Porcelain & <br/> Stone Collection
            </CustomH1>
            <Text>Unique & modern pottery made by our master in porcelain & stones</Text>
        <CustomButton>Shop Collection</CustomButton>
        </div>
    );
}

export default TextTitleMain;