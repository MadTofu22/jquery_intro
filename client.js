console.log('client.js loaded');

$(document).ready(onReady);

function onReady () {
    
    console.log('hello from jquery');
    $('#clickMe').on('click', buttonClicked);
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