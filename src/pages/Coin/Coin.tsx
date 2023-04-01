import React from 'react';
import './Coin.scss'
import {ICoin} from "../Home/Home";
import Title from "../../components/common-components/Title/Title";
import Text from "../../components/common-components/Text/Text";

interface ICoinProp {
    coin: ICoin
}

const Coin = ({ coin }: ICoinProp) => {
    return (
        <div className='coin__wrapper'>
            <Title>{coin.name}</Title>
            <Text className='coin__text'>Полная информация: </Text>
            <Text className='coin__main-text'>#{coin.rank}</Text>
            <Text className='coin__main-text'>{coin.name} {coin.symbol}</Text>
            <Text className='coin__main-text'>
                Цена:
                <Text className='coin__price'>{Number(coin.priceUsd).toFixed(2)}$</Text>
            </Text>

        </div>
    );
};

export default Coin;