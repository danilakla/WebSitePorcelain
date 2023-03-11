import React from 'react';
import styles from "../../../styles/SubFooter.module.css"
function SubFooter(props) {
    return (
        <div className={`container-fluid ${styles.Container}`}>
            <p><span className={styles.customSpan}>Template design by</span> Dorian Hoxha - Image License Info <span  className={styles.customSpan}> Powered by</span> Webflow</p>
        </div>
    );
}

export default SubFooter;