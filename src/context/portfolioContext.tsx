import React, {useState} from "react";
import {ICoin} from "../pages/Home/Home";
import coin from "../pages/Coin/Coin";

export interface IPortfolio extends ICoin{
    amount: number
}

export interface PortfolioContextType {
    portfolioList: IPortfolio[]
    total: number
    addPortfolioItem: (coin: ICoin) => void
    removePortfolioItem: (id: string) => void
}

interface IPortfolioContextProvider {
    children: React.ReactNode
}

export const portfolioContext = React.createContext<PortfolioContextType | null>(null)

export const PortfolioContext = ({ children }: IPortfolioContextProvider) => {

    const localPortfolioList = localStorage.getItem('portfolioList') || null
    const localTotal = localStorage.getItem('portfolioTotal') || null

    const defaultValuePortfolioList = localPortfolioList ? JSON.parse(localPortfolioList) : []
    const defaultValuePortfolioTotal = localTotal ? JSON.parse(localTotal) : 0

    const [portfolioList, setPortfolioList] = useState<IPortfolio[]>(defaultValuePortfolioList)
    const [total, setTotal] = useState(defaultValuePortfolioTotal)

    const addPortfolioItem = (coin: IPortfolio) => {

        const isCoinExist = portfolioList.findIndex(item => item.id === coin.id)

        if(isCoinExist !== -1) {
            const newPortfolioList = portfolioList.map((item, index) => {
                if(index === isCoinExist) {
                    return {...item, amount: item.amount + coin.amount}
                } else {
                    return item
                }
            })
            setPortfolioList(newPortfolioList)
            setTotal(total + coin.amount)
        } else {
            setPortfolioList([...portfolioList, coin])
            setTotal(total + coin.amount)
        }


    }
}