import React, {useState} from 'react';
import './Home.scss'
import Table from "../../components/common-components/Table/Table";
import Button from "../../components/common-components/Button/Button";
import Modal from "../../components/common-components/Modal/Modal";
import {IPortfolio} from "../../context/portfolioContext";

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

    const [openModal, setOpenModal] = useState(false)
    const [countCoin, setCountCoin] = useState(1)
    const [currentCoin, setCurrentCoin] = useState<ICoin | null>(null)

    const handleAddPortfolio = () => {
        console.log('currentCoin ',currentCoin)
        console.log('count ', countCoin)
        setOpenModal(false)
    }

    return (
        <div className='home__wrapper _container'>
            <Table
                coins={coins}
                setCurrentCoin={setCurrentCoin}
                setOpenModal={setOpenModal}
            />
            <Modal isOpen={openModal} setIsOpen={setOpenModal}>
                <input
                    type='number'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountCoin(Number(e.target.value))}
                    value={countCoin}
                />
                <Button onClick={handleAddPortfolio}>Добавить</Button>
            </Modal>
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