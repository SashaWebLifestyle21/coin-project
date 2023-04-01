import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../../../containers/Header/Header";
import {ICoin} from "../../../pages/Home/Home";

interface ILayout {
    popularCoins: ICoin[] | []
}

const Layout = ({ popularCoins }: ILayout) => {
    return (
        <>
            <Header popularCoins={popularCoins} />
            <Outlet/>
        </>
    )
};

export default Layout;