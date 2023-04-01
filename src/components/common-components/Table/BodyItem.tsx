import React from 'react';
import { ICoin } from "../../../pages/Home/Home";
import { useNavigate } from "react-router-dom";

interface IBodyItem {
    item: ICoin
}

const BodyItem = ({ item }: IBodyItem) => {
    const navigate = useNavigate()
    return (
            <tr
                className='table__item'
                key={item.id + item.volumeUsd24Hr}
                onClick={() => navigate(`/coin/${item.name}`)}
            >
                <td className='table__td'>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item.symbol}</td>
                <td>{Number(item.priceUsd).toFixed(2)}</td>
                <td>{Number(item.volumeUsd24Hr).toFixed(2)}</td>
            </tr>

    );
};

export default BodyItem;