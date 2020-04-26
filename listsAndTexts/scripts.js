let listOfNames = ['Mark', 'Bence', 'Botond', 'Lajos'];

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

listOfNames.forEach(item => {
    if (item == 'Bence') {
        $('ul').append('<li><strong>' + item + '</strong></li>');
    } else {
        $('ul').append('<li>' + item + '</li>');
    }
});

$('title').text(additionalBlock.title);

$('main').append('<p>' + additionalBlock.text + '</p>');