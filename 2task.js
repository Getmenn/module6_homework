function analizNum(num)
{
    if (num > 1000)
    {
        console.log('Данные не верны');
    }
    else if (num%2 < 0 && num%2 != 0 && num%2 != 1)
    {
        console.log('Не простое число');
    }
    else if(num%2 == 0 || num%2 == 1)
    {
        console.log('Число простое');
    }
    
}
let number = 100;
analizNum(number);