let input = document.querySelector('.input');
let convert = document.getElementById('convert');
let reset = document.getElementById('reset');
let result = document.querySelector('.result');
let from_dropdown = document.getElementById('from-dropdown');
let to_dropdown = document.getElementById('to-dropdown');

currencies.forEach((currency)=>{
    const option = document.createElement('option');
    option.value = currency;
    option.text = currency;
    from_dropdown.add(option);
});
currencies.forEach((currency)=>{
    const option = document.createElement('option');
    option.value = currency;
    option.text = currency;
    to_dropdown.add(option);
});
from_dropdown.value = 'USD';
to_dropdown.value = 'PKR';
let api_key = 'ba4ac8ccc84c6b22a7cba1ab';
let api = `https://v6.exchangerate-api.com/v6/${api_key}/latest/USD`;
const appending = (append)=>{
    result.innerHTML = '';
    let text = document.createElement('p');
    text.innerText = append;
    result.appendChild(text);
}

const convert_currency = ()=>{
    let from_currency = from_dropdown.value;
    let to_currency = to_dropdown.value;
    if(input.value.lenght != 0){
        fetch(api)
        .then((response) => response.json())
        .then((data)=>{
          let from_rate = data.conversion_rates[from_currency];
          let to_rate = data.conversion_rates[to_currency];
          const convert_amount = ((input.value)/from_rate) * to_rate;
          appending(convert_amount);
        })
        };

};
convert.addEventListener('click',convert_currency);
reset.addEventListener('click',()=>{
    input.value = '';
    result.innerHTML = '';
});
