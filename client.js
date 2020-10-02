console.log('client.js loaded');
let favFoods = ['paella', 'sushi', 'mac & cheese', 'steak'];

$(document).ready(onReady);

function onReady () {
    
    console.log('hello from jquery');
    $('#clickMe').on('click', buttonClicked);
    $('#favoriteFoods').append('<li>Hello</li>');
}

function hello () {
    
    console.log('helooooooo');    
}

function goodbye () {
    
    console.log('goodbyeeeee');   
}

function buttonClicked () {

    console.log(`I've been clicked!`);
}