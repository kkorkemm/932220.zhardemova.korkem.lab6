document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.getElementById('leftButton');
    const centerButton = document.getElementById('centerButton');
    const rightButton = document.getElementById('rightButton');
    const leftColumn = document.querySelector('.cat__block');
    const rightColumn = document.querySelector('.dog__block');

    leftButton.addEventListener('click', function() {
        leftColumn.style.width = '95%';
        rightColumn.style.width = '5%';
    });

    centerButton.addEventListener('click', function() {
        leftColumn.style.width = '50%';
        rightColumn.style.width = '50%';
    });

    rightButton.addEventListener('click', function() {
        leftColumn.style.width = '5%';
        rightColumn.style.width = '95%';
    });
});