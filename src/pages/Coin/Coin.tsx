import React, { useCallback, useEffect, useState } from 'react';
import './Coin.scss'
import { ICoin } from "../Home/Home";
import Title from "../../components/common-components/Title/Title";
import Button from "../../components/common-components/Button/Button";
import Chart from "../../components/Chart/Chart";
import { convertToDate } from "../../api/convertData/convertToDate";

interface ICoinProp {
    coin: ICoin
}

export interface ICoinHistory{
    priceUsd: string
    data: string
    time: number
}

const Coin = ({ coin }: ICoinProp) => {

    const [coinsHistory, setCoinsHistory] = useState<ICoinHistory[] | []>([])

    const fetchCoinsHistory = useCallback(async (coin: ICoin) => {
        const data = await fetch(`https://api.coincap.io/v2/assets/${coin.id}/history?interval=d1`)
            .then(res => res.json())
        setCoinsHistory(data.data)
    }, [])

    useEffect(() => {
        fetchCoinsHistory(coin)
    },[])

    const labelsChart = coinsHistory?.map(coin => convertToDate(coin.time))
    const dataChart = coinsHistory?.map(coin => Number(coin.priceUsd).toFixed(2))


    return (
        <div className='coin__wrapper'>
            <Title>{coin.name}</Title>
            <img
                src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                alt={coin.symbol}
                className={'coin__img'}
            />
            <p className='coin__text'>Полная информация: </p>
            <p className='coin__main-text'>#{coin.rank}</p>
            <p className='coin__main-text'>{coin.name} ({coin.symbol})</p>
            <p className='coin__main-text'>
                Цена:
                &nbsp;
                <span className='coin__price'>{Number(coin.priceUsd).toFixed(2)}$</span>
                &nbsp;
                <span className='coin__price'>({Number(coin.changePercent24Hr).toFixed(2)}%)</span>
            </p>
            <p className='coin__main-text'>
                Market Cap:
                &nbsp;
                <span className='coin__price'>{Number(coin.marketCapUsd).toFixed(2)}$</span>
            </p>
            <p className='coin__main-text'>
                Supply:
                &nbsp;
                <span className='coin__price'>{Number(coin.supply).toFixed(2)}$</span>
                &nbsp;
                {coin.symbol}
            </p>
            <Button>Добавить в портфель</Button>
            <Chart labelsChart={labelsChart} dataChart={dataChart} name={coin.name} />
        </div>
    );
};

export default Coin;