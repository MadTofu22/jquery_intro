console.log('client.js loaded');
let favFoods = ['paella', 'sushi', 'mac & cheese', 'steak'];

$(document).ready(onReady);

function onReady () {
    
    console.log('hello from jquery');
    $('#clickMe').on('click', buttonClicked);
    $('#favoriteFoods').append('<li>Hello</li>');
    
    for (let food of favFoods) {
        $('#favoriteFoods').append(`<li>${food} <button class="deleteButton">Delete</button></li>`);
    }

    $('.deleteButton').on('click', deleteFunction);
}

function deleteFunction () {

    console.log('delete');
    $(this).parent().remove();
    
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