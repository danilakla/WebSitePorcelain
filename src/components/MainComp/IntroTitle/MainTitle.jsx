import React from 'react';
import styles from "../../../styles/Main.module.css"
import Container from "react-bootstrap/Container";
import TextTitleMain from "./TextTitleMain";

function MainTitle(props) {
    return (
        <div className={`${styles.bckImg}`}>
            <div className={`container ${styles.centerblock}`}>
                <div className={styles.blockContainer}>
                    <TextTitleMain/>
                    <img width={784} height={445}
                         src={require("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img_2.png")}/>

                </div>

            </div>
        </div>
    );
}

export default MainTitle;