import React, {useState} from "react";
import {ICoin} from "../pages/Home/Home";
import {calculatePercent} from "../api/calculate/calculatePercent";

export interface IPortfolio extends ICoin{
    amount: number
    count: number
}

export interface PortfolioContextType {
    portfolioList: IPortfolio[]
    total: number
    addPortfolioItem: (coin: IPortfolio) => void
    removePortfolioItem: (id: string, amount: number) => void
    updatePortfolio: (coins: ICoin[]) => void
    handleTotal: (total: number) => void
    difference: number
    percent: number
}

interface IPortfolioContextProvider {
    children: React.ReactNode
}

export const PortfolioContext = React.createContext<PortfolioContextType | null>(null)

export const PortfolioProvider = ({ children }: IPortfolioContextProvider) => {

    const localPortfolioList = localStorage.getItem('portfolioList') || null
    const localTotal = localStorage.getItem('portfolioTotal') || null

    const defaultValuePortfolioList = localPortfolioList ? JSON.parse(localPortfolioList) : []
    const defaultValuePortfolioTotal = localTotal ? JSON.parse(localTotal) : 0

    const [portfolioList, setPortfolioList] = useState<IPortfolio[]>(defaultValuePortfolioList)
    const [total, setTotal] = useState<number>(defaultValuePortfolioTotal)
    const [difference, setDifference] = useState(0)
    const [percent, setPercent] = useState(0)

    const addPortfolioItem = (coin: IPortfolio) => {

        const isCoinExist = portfolioList.findIndex(item => item.id === coin.id)

        if(isCoinExist !== -1) {
            const newPortfolioList = portfolioList.map((item, index) => {
                if(index === isCoinExist) {
                    return {...item, amount: item.amount + coin.amount, count: item.count + coin.count}
                } else {
                    return item
                }
            })
            setPortfolioList(newPortfolioList)
            setTotal(total + coin.amount)
            setDifference(difference + coin.amount)
            setPercent(calculatePercent(total, 0))
            localStorage.setItem('portfolioList', JSON.stringify(newPortfolioList))
            localStorage.setItem('portfolioTotal', JSON.stringify(total + coin.amount))
        } else {
            setPortfolioList([...portfolioList, coin])
            setTotal(total + coin.amount)
            setDifference(difference + coin.amount)
            setPercent(calculatePercent(total + coin.amount, 0))
            localStorage.setItem('portfolioList', JSON.stringify([...portfolioList, coin]))
            localStorage.setItem('portfolioTotal', JSON.stringify(total + coin.amount))
        }
    }

    const removePortfolioItem = (id: string, amount: number) => {
        const newPortfolioList = portfolioList.filter(item => item.id !== id)
        setPortfolioList(newPortfolioList)
        setPercent(calculatePercent(total - amount, total))
        setTotal(total - amount)
        setDifference(difference - amount)
        localStorage.setItem('portfolioList', JSON.stringify(newPortfolioList))
        localStorage.setItem('portfolioTotal', JSON.stringify(total - amount))
    }

    const updatePortfolio = (coins: ICoin[]) => {

        const tempPortfolioList = [...portfolioList]

        const newPortfolioList = tempPortfolioList.map((item, index) => {
            return {...item, amount: item.count * Number(coins[index].priceUsd), priceUsd: coins[index].priceUsd}
        })

        const newTotal = newPortfolioList.reduce((prev, next) => prev + +next.priceUsd * next.count, 0)

        setDifference(newTotal - total)
        setPercent(calculatePercent(newTotal, total))
        setTotal(newTotal)
        setPortfolioList(newPortfolioList)
        localStorage.setItem('portfolioList', JSON.stringify(newPortfolioList))
        localStorage.setItem('portfolioTotal', JSON.stringify(newTotal))
        localStorage.setItem('portfolioDifference', JSON.stringify(newTotal - total))
    }

    const handleTotal = (total: number) => {
        setTotal(total)
    }

    return <PortfolioContext.Provider
        value={{
            portfolioList,
            total,
            addPortfolioItem,
            removePortfolioItem,
            updatePortfolio,
            handleTotal,
            difference,
            percent
    }}
    >
        {children}
    </PortfolioContext.Provider>
}