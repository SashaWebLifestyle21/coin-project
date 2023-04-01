import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home, { ICoin } from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import Layout from "./components/common-components/Layout/Layout";

function App() {
    const [coins, setCoins] = useState<ICoin[] | []>([])

    const fetchCoins = async () => {
        const data = await fetch('https://api.coincap.io/v2/assets')
            .then(res => res.json())
        setCoins(data.data)
    }

    useEffect(() => {
        fetchCoins()
    },[])
  return (
    <Routes>
        <Route element={<Layout popularCoins={coins.slice(0,3)} />}>
            <Route path='/' element={<Navigate replace to='/home' />} />
            <Route path='/home' element={<Home coins={coins}/>} />
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
