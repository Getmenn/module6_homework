function getSumFunction(a,func)
{
    return function sumFunction(b)
    {
        return a+b;
    }
}

const sumFunction = getSumFunction(2);

const sum = sumFunction(3);

console.log(sum);