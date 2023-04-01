import React from 'react';
import {ICoin} from "../../../pages/Home/Home";
import BodyItem from "./BodyItem";
import './Table.scss'

interface ITable {
    coins: ICoin[] | []
}

const Table = ({ coins }: ITable) => {
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
                    return <BodyItem item={coin} />
                })}
            </tbody>
        </table>
    );
};

export default Table;