export function formatCurrency(amount: number, currencyCode: string = 'EUR') : string {
    try {
         return new Intl.NumberFormat('en-US', {
             style: 'currency',
             currency: currencyCode.toUpperCase()
         }).format(amount)
    } catch (e) {
        console.log("Invalid currency code: ", currencyCode, e);
        return `${currencyCode.toUpperCase()} ${amount.toFixed(2)}`

    }
}