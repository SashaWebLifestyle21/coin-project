import React from 'react';
import CoinItem from "../../components/common-components/CoinItem/CoinItem";
import './Home.scss'
import Text from "../../components/common-components/Text/Text";
import {Link} from "react-router-dom";

export interface ICoin {
    id: string
    rank: string
    symbol: string
    name: string
    supply: string
    maxSupply: string
    marketCapUsd: string
    volumeUsd24Hr: string
    priceUsd: string
    changePercent24Hr: string
    vwap24Hr: string
}


interface IHome {
    coins: ICoin[] | []
}

const Home = ({ coins }: IHome) => {
    return (
        <div className='home__wrapper _container'>
            <div className='home-head'>
                <Text className={'home-head__text'}>#</Text>
                <Text className={'home-head__text'}>Название</Text>
                <Text className={'home-head__text'}>Тикер</Text>
                <Text className={'home-head__text'}>Цена(USD)</Text>
                <Text className={'home-head__text'}>Обьем(24ч)</Text>
            </div>
            {coins?.map(coin => {
                return <Link to={`/coin/${coin.name}`}>
                    <CoinItem coin={coin} />
                </Link>
            })}
        </div>
    );
};

export default Home;