import faker from 'faker';

const cartText = `You have ${faker.datatype.number()} in your cart.`;

document.querySelector('#dev-cart').innerHTML = cartText;
