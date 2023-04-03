import React, {useCallback, useContext, useEffect, useState} from 'react';
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

    const { portfolioList, total, updatePortfolio, percent, difference } = useContext(PortfolioContext) as PortfolioContextType

    const portfolioItemsIds = portfolioList.map(item => item.id).join(',')

    const [openHeaderModal, setOpenHeaderModal] = useState(false)

    const fetchPortfolioList = useCallback(async () => {
        const data = await fetch(`https://api.coincap.io/v2/assets?&ids=${portfolioItemsIds}`)
            .then(res => res.json())
        updatePortfolio(data.data)
    }, [updatePortfolio])

    useEffect(() => {
        fetchPortfolioList()
    }, [])


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
                    <Text className='header-portfolio__text'>
                        Total: {Number(total).toFixed(2)} USD + {difference.toFixed(2)} ({percent.toFixed(2)} %)
                    </Text>
                </div>
            </div>
            <Modal
                isOpen={openHeaderModal}
                setIsOpen={setOpenHeaderModal}
            >
                {portfolioList.length ?
                    portfolioList.map(item => {
                    return <MyCoinItem key={item.priceUsd + item.id} myCoin={item} setOpenHeaderModal={setOpenHeaderModal} />
                })
                : <Title>Ваш портфель пустой</Title>}
            </Modal>
        </header>
    );
};

export default Header;