let number = 0;
let eventButtons = $('.event-listener > button').toArray();

function randomColor() {
    return "#000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
    });
};

$('.inc').click(() => {
    $('.num').text(++number);
});

$('.dec').on('click', () => {
    $('.num').text(--number);
});

$('.button1').on('click', () => {
    console.log('Yeah, you clicked me');
});

$('.button2').on('click', () => {
    $('.button1').text('Oh my!');
});

$('.button3').on('click', () => {
    //$('.event-listener > button').css({ background: randomColor() });
    eventButtons.forEach(button => {
        $(button).css({ background: randomColor() });
    });
});

$('.button4').on('click', () => {
    let textValue = $('#colorInput').val();
    eventButtons.forEach(button => {
        $(button).css({ background: textValue});
    })
});