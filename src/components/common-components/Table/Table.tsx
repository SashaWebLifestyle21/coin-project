import React, {Dispatch, SetStateAction} from 'react';
import {ICoin} from "../../../pages/Home/Home";
import BodyItem from "./BodyItem";
import './Table.scss'

interface ITable {
    coins: ICoin[] | []
    setCurrentCoin: Dispatch<SetStateAction<ICoin | null>>
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const Table = ({ coins, setCurrentCoin, setOpenModal }: ITable) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Название</th>
                    <th>Тикер</th>
                    <th>Цена (USD)</th>
                    <th>Объем (24ч)</th>
                </tr>
            </thead>
            <tbody>
                {coins?.map(coin => {
                    return <BodyItem
                        key={coin.name + coin.priceUsd}
                        item={coin}
                        setCurrentCoin={setCurrentCoin}
                        setOpenModal={setOpenModal}
                    />
                })}
            </tbody>
        </table>
    );
};

export default Table;