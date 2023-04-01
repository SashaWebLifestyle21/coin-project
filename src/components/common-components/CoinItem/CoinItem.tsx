import React from 'react';
import './CoinItem.scss'
import { ICoin } from "../../../pages/Home/Home";
import { useNavigate } from "react-router-dom";

interface ICoinItem {
    coin: ICoin
}

const CoinItem = ({ coin }: ICoinItem) => {
    const navigate = useNavigate()
    return (
        <div
            className='coin-item__wrapper'
            onClick={() => navigate(`/coin/${coin.name}`)}
        >
            <div>
                <img
                    src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                    alt={coin.symbol}
                    className="coin-item__img"
                />
            </div>
            <div>
                <h3 className='coin-item__title'>{coin.name}</h3>
                <p className='coin-item__text'>{Number(coin.priceUsd).toFixed(2)}$</p>
            </div>
        </div>
    );
};

export default CoinItem;