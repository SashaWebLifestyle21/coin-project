import React from 'react';
import './Header.scss'
import {ICoin} from "../../pages/Home/Home";
import CoinItem from "../../components/common-components/CoinItem/CoinItem";

interface IHeader {
    popularCoins: ICoin[]
}

const Header = ({ popularCoins }: IHeader) => {
    return (
        <header className='header'>
            <div className='header-container _container'>
                <div className='header-popular__block'>
                    {popularCoins?.map(coin => {
                        return <CoinItem key={coin.priceUsd + coin.symbol} coin={coin} />
                    })}
                </div>
            </div>
        </header>
    );
};

export default Header;