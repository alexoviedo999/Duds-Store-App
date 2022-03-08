export default function formatMoney(amount) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }
  
  if(amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }
  
  const formatter = new Intl.NumberFormat('en-US', options);

  const dollars = amount / 100;
  return formatter.format(dollars);
}