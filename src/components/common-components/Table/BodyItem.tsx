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
                <td className='table__td'>
                    <div>
                        <img
                            src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                            alt={item.symbol}
                            className="table__img"
                        />
                    </div>
                    <p>{item.name}</p>
                </td>
                <td className='table__td'>{item.symbol}</td>
                <td className='table__td'>{Number(item.priceUsd).toFixed(2)}</td>
                <td className='table__td'>{Number(item.volumeUsd24Hr).toFixed(2)}</td>
                <td className='table__td'></td>
            </tr>

    );
};

export default BodyItem;