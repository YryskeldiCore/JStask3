// // let number=5;
// // console.log(number);
// var num = 5;
// var sym = Symbol();
// var boolean = true;
// // var obj = {};
// // let string = "Hello , world!";

// console.log(4/0);
// // console.log(string);
// // console.log(string);

// let terra = ['key','lock','galaxy'];

// console.log(terra);

// let number = 100;
// let string = "acer";
// console.log(number + string);
// console.log(4%3);
// let isChecked = false;
// let isVariable = true;
// console.log(isChecked && isVariable);
// let number1 = 12;
// const pi = 3.14;
// console.log(number1 / pi);
// const isValue = 3;
// let isObject = 5;
// console.log(isValue + isObject);

let money , time ;

function start(){
    let money = +prompt("Ваш бюджет на месяц ?" , ''),
    time = prompt('Введите дату в формате YYYY-MM-DD' , '');

    while(isNaN(money) || money == '' || money == null ) {
        money = +prompt("Ваш бюджет на месяц ?" , '');
    }

}
start ();

let appData = {
    budget : money ,
    expenses : {} ,
    optionalExpenses : {} ,
    income : [] ,
    timeData : time ,
    savings : true
};

    function chooseExpenses () {
        for (let i = 0 ; i < 2; i++){
            a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?" , '');
            
            if ( (typeof(a) )=== 'string' && (typeof(a) ) != 'null' && (typeof(b) ) != 'null' && a != '' && b != '' && a.length < 50) {
                console.log("done!");
                appData.expenses[a] = b;
        } else {
            console.log("Unusual result!");
            i--;
        }
    }
}

chooseExpenses();

    // The cycle do-while;
    // let i = 0;
    //     do {
    //     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    //         b = prompt("Во сколько обойдется?" , '');
            
    //         if ( (typeof(a) )=== 'string' && (typeof(a) ) != 'null' && (typeof(b) ) != 'null' && a != '' && b != '' && a.length < 50) {
    //             console.log("done!");
    //             appData.expenses[a] = b;
    //     } else {
    //             console.log("Unusual result!");
    //             i--;
    //         }
    //         i++;
    //     }
    //     while(i < 2);

    // We are using while!
    // let i = 0;
    //     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    //         b = prompt("Во сколько обойдется?" , '');
    //         while (i < 2){
    //             if ( (typeof(a) )=== 'string' && (typeof(a) ) != 'null' && (typeof(b) ) != 'null' && a != '' && b != '' && a.length < 50) {
    //                     console.log("done!");
    //             appData.expenses[a] = b;
    //                 } else {
    //                     console.log("Unusual result!");
    //                     i--;
    //                 }
    //                     i++;
    //             }
                

 function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Daily Expenses : " + appData.moneyPerDay );

 }
 detectDayBudget();
    


function detectLevel () {
    if (appData.moneyPerDay < 1000){
        console.log("Minimum level of wealth");
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000){
        console.log("Middle level of wealth!");
    } else if (appData.moneyPerDay > 5000 && appData.moneyPerDay < 100000){
        console.log("High level of wealth!!!");
    } else {
        console.log("Error!?")
    }
}
detectLevel();

function checkSavings () {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений ?"),
            percent = +prompt("Под какой процент вы кладете деньги?");

        appData.monthIncome = save/100/12 * percent;
        alert ("Сумма вашего депозита в месяц!" + appData.monthIncome);

        
    }
}
checkSavings ();

function chooseOptExpenses (){
    for (let x=1 ; x<=3 ; x++) {
        let questionOptExpenses = prompt("Статься необязательных расходов?");
        appData.optionalExpenses[i]= questionOptExpenses;
        console.log (appData.questionOptExpenses);
    }
}
chooseOptExpenses ();

// if (8*9 == 9*8) {
//         console.log("Correct!")
// } else {
//     console.log("Uncorrect!")
// };


// let num = 101;

// (num==50) ? console.log("Correct!"):console.log("Uncorrect!");

// switch (num) {
//     case num < 49:
//         console.log("чЕ ТО НЕ ОЧЕНЬ)")    
//         break;
//     case num > 70:
//         console.log("It's much!")
//         break;
//     case num > 100:
//         console.log("It's sooo much!");
//         break;
//     default:
//         console.log("Correctly!") ;
//         break;   
//     }

// let a = 100;

// while (a < 150){
//     console.log(a);
//     a++;
// }

// do {
//     console.log(a);
//     a++
// }
// while( a < 110)

// for (let k = 1; k <  30; k=k+2 ) {
//     console.log(k)
// }
