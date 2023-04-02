import React, {Dispatch, SetStateAction, useState} from 'react';
import { ICoin } from "../../../pages/Home/Home";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

interface IBodyItem {
    item: ICoin
    setCurrentCoin: Dispatch<SetStateAction<ICoin | null>>
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const BodyItem = ({ item, setCurrentCoin, setOpenModal }: IBodyItem) => {

    const navigate = useNavigate()

    const handleAddCoin = () => {
        console.log('open')
        setOpenModal(true)
        setCurrentCoin(item)
    }

    return (
        <>
            <tr
                className='table__item'
                key={item.id + item.volumeUsd24Hr}
            >
                <td
                    className='table__td'
                    onClick={() => navigate(`/coin/${item.name}`)}
                >
                    {item.rank}
                </td>
                <td
                    className='table__td'
                    onClick={() => navigate(`/coin/${item.name}`)}
                >
                    <div>
                        <img
                            src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                            alt={item.symbol}
                            className="table__img"
                        />
                    </div>
                    <p>{item.name}</p>
                </td>
                <td
                    className='table__td'
                    onClick={() => navigate(`/coin/${item.name}`)}>{item.symbol}</td>
                <td
                    className='table__td'
                    onClick={() => navigate(`/coin/${item.name}`)}>{Number(item.priceUsd).toFixed(2)}</td>
                <td
                    className='table__td'
                    onClick={() => navigate(`/coin/${item.name}`)}>{Number(item.volumeUsd24Hr).toFixed(2)}</td>
                <td className='table__td'>
                    <Button onClick={handleAddCoin}>+</Button>
                </td>
            </tr>
        </>
    );
};

export default BodyItem;