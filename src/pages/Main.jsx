import React from 'react';
import NaviBar from "../components/NaviBar";
import MainTitle from "../components/MainComp/IntroTitle/MainTitle";
import ProductCategory from "../components/MainComp/Category/ProductCategory";
import ProductDescription from "../components/MainComp/DescriptionProducts/ProductDescription";
import Shop from "../components/MainComp/Shop/Shop";
import Advertising from "../components/MainComp/Advertising/Advertising";
import EmailConfimer from "../components/MainComp/EmailConfirm/EmailConfimer";
import Footer from "../components/MainComp/Footer/Footer";
import SubFooter from "../components/MainComp/SubFooter/SubFooter";
import Store from "../Store/Store";
import {observable} from "mobx";
import {observer} from "mobx-react-lite";

function Main(props) {
    return (
        <div>
            <MainTitle/>
            <ProductCategory/>
<ProductDescription/>
            <Shop/>
            <Advertising/>
            <EmailConfimer/>
            <Footer/>
            <SubFooter/>
        </div>
    );
}

export default observer(Main);