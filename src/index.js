const menu = {
    burger: [
        {
            name: '🍔',
            time: 3000,
        },
        {
            name: '🍟',
            time: 2000,
        },
        {
            name: '🥤',
            time: 1000,
        },
    ],
    pizza: [
        {
            name: '🍕',
            time: 2500
        },
        {
            name: '🥤',
            time: 1000
        },
    ]
};

function order(orderMenu, callback) {
    const result = [];
    result.length = orderMenu.length;
    orderMenu.forEach((item, index) => {
        setTimeout(() => {
            result[index] = { value: item.name };
            const emptyIndex = result.findIndex(element => typeof element === 'undefined');
            const falseIndex = -1;
            if (emptyIndex === falseIndex) {
                callback(result);
            }
        }, item.time);
    });
}

function showOrder(orderResult) {
    const result = orderResult.reduce((accumulator, currentValue) => accumulator + currentValue.value, '');
    alert(`Order ${result} is done`);
}

order(menu.burger, showOrder);