export const calcTime = time => {
    const hours = Math.floor(time / 60);
    const times = time % 60;
    return `${hours}h ${times}m`;
}

export const convertMoney = money => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    return formatter.format(money);
}

