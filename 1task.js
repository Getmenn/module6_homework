let mass =[1,2,3,4,5,6,"",null,0,0,4,23,2,4,"343"]
let massChet=[];
let massNechet=[];
let massNull=[];

function sortMass(massiv)
{
  massiv.forEach(elem => 
    {
    if(elem == 0 && typeof(elem)=="number")
    {
        massNull.push(elem);
    }
    else if(elem%2 != 1 && typeof(elem)=="number")
    {
        massChet.push(elem);
    }
    else if(elem%2 == 1)
    {
        massNechet.push(elem);
    }
    })
    console.log(
        `        Колличество четных элементов: ${massChet.length}
        Колличество нечетных элементов: ${massNechet.length}
        Колличество нулей: ${massNull.length}
    `);
}

sortMass(mass);