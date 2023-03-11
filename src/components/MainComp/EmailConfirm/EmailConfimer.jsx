import React, {useState} from 'react';
import styles from "../../../styles/EmailConfimer.module.css"
import CustomP from "../../Common/CustomP";
import CustomH1 from "../../Common/CustomH1";
import Text from "../../Common/Text";
function EmailConfimer(props) {
    const [email, setEmail]=useState('');
    return (
        <div className={`container-fluid ${styles.test}`}>

            <div>
                <img className={styles.imgPlane} src={require("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img_15.png")}/>

                <CustomP>
                    Latest news
                </CustomP>
                <CustomH1>
                    Latest news & New updates
                </CustomH1>
                <form action="">
                    <input className={styles.customInput} placeholder={"Enter your email"} type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <button className={styles.customButton}   >SUBSCRIBE</button>
                    <div style={{marginTop:50, marginBottom:100}}>
                        <input  type={"checkbox"} style={{marginRight:10}} id={"ch"}/>
                            <label style={{display:"inline-block"}} htmlFor="ch">Sign up for our newsletter</label>
                    </div>


                </form>
            </div>
        </div>
    );
}

export default EmailConfimer;