import React, {useContext, useState} from 'react';
import './Header.scss'
import {ICoin} from "../../pages/Home/Home";
import CoinItem from "../../components/common-components/CoinItem/CoinItem";
import Title from "../../components/common-components/Title/Title";
import {PortfolioContext, PortfolioContextType} from "../../context/portfolioContext";
import Text from "../../components/common-components/Text/Text";
import Modal from "../../components/common-components/Modal/Modal";
import MyCoinItem from "../../components/common-components/CoinItem/MyCoinItem";

interface IHeader {
    popularCoins: ICoin[]
}

const Header = ({ popularCoins }: IHeader) => {

    const {portfolioList, total, addPortfolioItem} = useContext(PortfolioContext) as PortfolioContextType

    const [openHeaderModal, setOpenHeaderModal] = useState(false)

    const [difference, setDifference] = useState(0)
    const [percent, setPercent] = useState(0)

    return (
        <header className='header'>
            <div className='header-container _container'>
                <div className='header-popular__block'>
                    {popularCoins?.map(coin => {
                        return <CoinItem key={coin.priceUsd + coin.symbol} coin={coin} />
                    })}
                </div>
                <div
                    className='header-portfolio__block'
                    onClick={() => setOpenHeaderModal(true)}
                >
                    <Title className='header-portfolio__title'>Ваш портфель</Title>
                    <Text>Total: {Number(total).toFixed(2)} USD + {difference} ({percent} %)</Text>
                </div>
            </div>
            <Modal
                isOpen={openHeaderModal}
                setIsOpen={setOpenHeaderModal}
            >
                {portfolioList.length ?
                    portfolioList.map(item => {
                    return <MyCoinItem myCoin={item} setOpenHeaderModal={setOpenHeaderModal} />
                })
                : <Title>Ваш портфель пустой</Title>}
            </Modal>
        </header>
    );
};

export default Header;