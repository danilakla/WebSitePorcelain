import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import  styles from "../styles/NaviBar.module.css"
import {Link} from "react-router-dom";
import Store from "../Store/Store";
import {useEffect, useMemo, useState} from "react";
import {observer} from "mobx-react-lite";
function NaviBar(props) {
    return (
        <div className={styles.navBar}>
            <Navbar bg="light" >
                <Container fluid className={styles.containerMargin}>

                    <Navbar.Brand href="#"><span className={styles.brandTitle}>Pompeo</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav  className="justify-content-end flex-grow-1 pe-3">
                                <Link to={'/'}>   <p className={`${styles.firstItem} ${styles.item}`}>Home</p></Link>



                                <p className={` ${styles.item}`}>About</p>
                                <p className={`${styles.item}`}>Shop</p>
                                <p className={` ${styles.border}`}>Contact</p>

                                    <img width={20} height={20} className={styles.imgBorder} src={require ("D:\\webstromProject\\ts\\web-app-react\\src\\img\\img.png")}/>
                                   <Link to={'/basket'}> <p>Cart</p></Link>
                                <div style={{width:20, height:20, background:"red", borderRadius:10, textAlign:"center", fontSize:14, marginLeft:10, color:"white"}}>
                                   <p>{Store.count}</p>
                                </div>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export default  observer(NaviBar);