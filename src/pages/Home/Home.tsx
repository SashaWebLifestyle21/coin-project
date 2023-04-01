import React from 'react';
import './Home.scss'
import Table from "../../components/common-components/Table/Table";

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
            <Table coins={coins} />
        </div>
    );
};

export default Home;