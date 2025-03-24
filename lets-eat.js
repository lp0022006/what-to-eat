

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  };

  const whatToEat = {
    expensive: ['Capital Grille', 'The Pub', 'Tap 42'],
    casualDining: ['Chilis', 'Applebees', 'Olive Garden', 'Outback Steakhouse', 'Texas Roadhouse'],
    fastFood: ['Taco Bell', 'McDonalds', 'Burger King', 'Wendys', 'Subway', 'Panda Express'],
    eatIn: ['Salad', 'Soup', 'Sandwiches', 'Cereal', 'Pasta', 'Tacos', 'Stir Fry', 'Pizza']
  };

let iAmHungry = []

for(let prop in whatToEat) {
    let optionIdx = generateRandomNumber(whatToEat[prop].length)
    switch(prop) {
        case 'expensive' :
            iAmHungry.push(`Fancy spending some bands? Try ${whatToEat[prop][optionIdx]}!`)
            break;
        case 'casualDining' :
            iAmHungry.push(`I want to sit down for a bit. Let's go to ${whatToEat[prop][optionIdx]}.`)
            break;
        case 'fastFood' :
            iAmHungry.push(`Too lazy to cook but don't want to spend an arm and a leg? ${whatToEat[prop][optionIdx]} it is!`)
            break;
        case 'eatIn' :
            iAmHungry.push(`I'm tired, let's just eat in. How about some ${whatToEat[prop][optionIdx]}?`)
            break;
    }
}

function formatFood(food) {
    const formatted = iAmHungry.join('\n')
    console.log(formatted)
}


formatFood(iAmHungry);