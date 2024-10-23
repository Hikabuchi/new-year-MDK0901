    const timer = 0;
    const money = 0;
    const dishesPrepared = 0;

    let ingredients = ['chocolate', 'dough', 'sugar',
        'rice', 'fish', 'salt', 'water', 'cocoa powder',
        'coffee', 'bread', 'cheese', 'sausage', 'lettuce leaves',
        'carrots', 'butter', 'apple', 'snowflakes', 'ginger',' Tea', 'cider'];

    let dishes = {
        'cookie' : 'Шоколадное печенье',
        'fishRice' : 'тарелку  рыбы с рисом',
        'cocoa' : 'стакан горячего какао',
        'coffee' : 'стакан горячего кофе',
        'water':  'стакан воды',
        'sandwich ': 'бутерброд',
        'saladCarrots':'салат с морковью',
        'pie' : 'кусочек пирога',
        'bowlOfSnowflakes' : 'миску снежинок',
        'gingerbread': 'имбирный пряник',
        'tea': 'чашку травяного чая',
        'cider': ' бокал игристого сидра'
    };

    let saladWithCarrots = ['Мне, пожалуйста, ', 'Мне ', 'Я ничего не хочу, но возьму ', 'Я с удовольствием съем ', 'Я возьму ', 'Я возьму только '];

    let namesOfTheBuyers = {
        1:{
            name : 'Эльф',
            url : 'путь',
            alt : 'character'
        },
        2:{
            name : 'Северный олень',
            url : 'путь',
            alt : 'character'
        },
        3:{
            name : 'Гринч',
            url : 'путь',
            alt : 'character'
        },
        4:{
            name : 'Снеговик Фрости',
            url : 'путь',
            alt : 'character'
        },
        5:{
            name : 'Просто олень',
            url : 'путь',
            alt : 'character'
        },
        6:{
            name : 'Незнокомец',
            url : 'путь',
            alt : 'character'
        }
    };

$(document).ready(function() {
    
    $('.start-button').on('click', function() {
        startGame();
    });

    $('#exit-button').on('click', function() {
        exitGame();
    });

    function startGame() {
        $('.field-of-play').css('display', 'block');
        $('.start-window').css('display', 'none');
        $('.end-window').css('display', 'none');
    }

    function exitGame() {
        $('.end-window').css('display', 'block');
        $('.field-of-play').css('display', 'none');
    }

    function recipes() {
        switch(expression) {
            case 'chocolate' && 'dough' && 'sugar':
                dishes.cookie;
              break;
            case 'rice' && 'fish' && 'salt':
                dishes.fishRice;
              break;
            default:
              // code block
          }
    }
    
});
