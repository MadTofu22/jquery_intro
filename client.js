console.log('client.js loaded');
let favFoods = ['paella', 'sushi', 'mac & cheese', 'steak'];
let employees = [];
let count = 0;

$(document).ready(onReady);

function onReady () {
    
    console.log('hello from jquery');
    $('#clickMe').on('click', buttonClicked);
    $('#favoriteFoods').append('<li>Hello</li>');
    $('#favoriteFoods').on('click', '.deleteButton', deleteFunction);
    $('#favoriteFoods').on('click', '.changeColor', changeColor);
    $('#submitForm').on('click', submitForm);
    $('#counter').on('click', countUp);
}

function countUp () {

    console.log('up');
    $('#count').text(count);
    count++;
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

    let ulFoods = $('#favoriteFoods');
    ulFoods.empty();
    
    for (let food of favFoods) {
        ulFoods.append(`
            <li>
                ${food} 
                <button class="deleteButton">Delete</button>
                <button class="changeColor">Change Color</button>
            </li>`);
    }
}

function changeColor () {

    console.log('Change color has been clicked!');
    $(this).parent().toggleClass('pinkColor');
}

function submitForm () {

    console.log('Submitted!');

    let name = $('#nameInput').val();
    console.log('name:', name);

    let title = $('#titleInput').val();
    console.log('title:', title);

    let newEmployee = {name, title};
    employees.push(newEmployee);

    $('#nameInput').val('');
    $('#titleInput').val('');
    
}