const config = {
    locale: 'pl',
    currency: 'PLN',
    minimumFractionDigits: 2
};

const amount = 5.436;
const currency = new Intl.NumberFormat(
    config.locale,
    {
        style: "currency",
        currency: config.currency,
        minimumFractionDigits: config.minimumFractionDigits,
        currencyDisplay: "code"
    
    }
);

console.log(currency.format(amount));