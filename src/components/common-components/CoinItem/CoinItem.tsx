import React from 'react';
import {ICoin} from "../../../pages/Home/Home";
import './CoinItem.scss'
import Text from "../Text/Text";

interface ICoinItem {
    coin: ICoin
}

const CoinItem = ({ coin }: ICoinItem) => {
    return (
        <div className='coin-item__wrapper'>
            <Text>{coin.rank}</Text>
            <Text>{coin.name}</Text>
            <Text>{coin.symbol}</Text>
            <Text>{Number(coin.priceUsd).toFixed(2)}</Text>
            <Text>{Number(coin.volumeUsd24Hr).toFixed(2)}</Text>
        </div>
    );
};

export default CoinItem;