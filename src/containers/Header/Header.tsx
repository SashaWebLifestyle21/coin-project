import React from 'react';
import './Header.scss'
import {ICoin} from "../../pages/Home/Home";

interface IHeader {
    popularCoins: ICoin[]
}

const Header = ({ popularCoins }: IHeader) => {
    return (
        <header className='header'>
            <div className='header-container _container'>
                <div className='header-popular__block'>
                    {popularCoins?.map(coin => {
                        return <p
                            className='header-popular__text'
                            key={coin.rank + coin.symbol}
                        >
                            {`${Number(coin.priceUsd).toFixed(2)}$ (${coin.symbol})`}
                        </p>
                    })}
                </div>
            </div>
        </header>
    );
};

export default Header;