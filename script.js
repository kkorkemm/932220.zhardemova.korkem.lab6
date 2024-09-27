function ButtonClick(num) {
    var leftColumn = document.querySelector('.cat__block');
    var rightColumn = document.querySelector('.dog__block');

    if (num == 1) {
        leftColumn.style.width = '95%';
        rightColumn.style.width = '5%';
    }

    else if (num == 2) {
        leftColumn.style.width = '50%';
        rightColumn.style.width = '50%';
    }

    else {
        leftColumn.style.width = '5%';
        rightColumn.style.width = '95%';
    }
}