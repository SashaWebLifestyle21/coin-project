import React, {Dispatch, SetStateAction, useContext} from 'react';
import {IPortfolio, PortfolioContext, PortfolioContextType} from "../../../context/portfolioContext";
import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";

interface IMyCoinItem {
    myCoin: IPortfolio
    setOpenHeaderModal: Dispatch<SetStateAction<boolean>>
}

const MyCoinItem = ({ myCoin, setOpenHeaderModal }: IMyCoinItem) => {

    const navigate = useNavigate()

    const { removePortfolioItem } = useContext(PortfolioContext) as PortfolioContextType

    const handleNavigateToCoin = () => {
        navigate(`/coin/${myCoin.name}`)
        setOpenHeaderModal(false)
    }

    return (
        <div
            className='coin-item__wrapper'
            onClick={handleNavigateToCoin}
        >
            <div>
                <img
                    src={`https://assets.coincap.io/assets/icons/${myCoin.symbol.toLowerCase()}@2x.png`}
                    alt={myCoin.symbol}
                    className="coin-item__img"
                />
            </div>
            <div>
                <h3 className='coin-item__title'>{myCoin.name}</h3>
                <p className='coin-item__text'>{Number(myCoin.priceUsd).toFixed(2)}$</p>
            </div>
            <div>
                <p className='coin-item__text'>Сумма: {Number(myCoin.amount).toFixed(2)}</p>
            </div>
            <div>
                <Button onClick={() => removePortfolioItem(myCoin.id, myCoin.amount)}>Удалить</Button>
            </div>
        </div>
    );
};

export default MyCoinItem;