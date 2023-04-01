import React from 'react';
import './Home.scss'
import Table from "../../components/common-components/Table/Table";
import Button from "../../components/common-components/Button/Button";

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
    nextCoins: () => void
}

const Home = ({ coins, nextCoins }: IHome) => {
    return (
        <div className='home__wrapper _container'>
            <Table coins={coins} />
            <Button
                className='home__btn'
                onClick={nextCoins}
            >
                Еще...
            </Button>
        </div>
    );
};

export default Home;