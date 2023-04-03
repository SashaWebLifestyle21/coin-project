export const calculatePercent = (prevTotal: number, nextTotal: number) => {
    if(!prevTotal && !nextTotal) {
        return 0
    } else if (prevTotal && !nextTotal) {
        return 100
    } else if (!nextTotal) {
        return 0
    } else {
        return (prevTotal / nextTotal - 1) * 100
    }
}