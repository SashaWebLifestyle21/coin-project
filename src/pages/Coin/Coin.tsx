import React from 'react';
import './Coin.scss'
import {ICoin} from "../Home/Home";

interface ICoinProp {
    coin: ICoin
}

const Coin = ({ coin }: ICoinProp) => {
    return (
        <div className='coin__wrapper'>
            {coin.name}
        </div>
    );
};

export default Coin;