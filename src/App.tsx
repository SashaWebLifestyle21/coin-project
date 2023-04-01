import React, {useCallback, useEffect, useState} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home, { ICoin } from "./pages/Home/Home";
import Coin, {ICoinHistory} from "./pages/Coin/Coin";
import Layout from "./components/common-components/Layout/Layout";

function App() {

    const [coins, setCoins] = useState<ICoin[] | []>([])
    const [limit, setLimit] = useState(15)

    const fetchCoins = useCallback(async () => {
        const data = await fetch(`https://api.coincap.io/v2/assets?limit=${limit}`)
            .then(res => res.json())
        setCoins(data.data)
    }, [limit])

    const fetchNextCoins = () => {
        setLimit(limit + 15)
    }

    useEffect(() => {
        fetchCoins()
    },[limit])
  return (
    <Routes>
        <Route element={<Layout popularCoins={coins.slice(0,3)} />}>
            <Route path='/' element={<Navigate replace to='/home' />} />
            <Route path='/home' element={<Home coins={coins} nextCoins={fetchNextCoins} />} />
            <Route path='coin/*'>
                {coins.map(coin => {
                    return <Route key={coin.id + coin.name} path={coin.name} element={<Coin coin={coin} />}/>
                })}
            </Route>
        </Route>
    </Routes>
  );
}

export default App;
