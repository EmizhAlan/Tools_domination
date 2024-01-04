const dog_name = [{ name: 'Baunty', age: 2 }, { name: 'amir', age: 8 }];

function makeGreen(){
    const p = document.querySelector('p');
    p.lastElementChild.color = '#BADA55';
    p.style.fontsize = '50px';
}

console.log('hello');

console.log('Hello Iam A %s string!', '🤙');

console.warn('OH YEESSS');

console.error('Shit!');

console.info('Tiger is a crazyyy animal');

const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!');

console.clear();

console.log(p);
console.dir(p);

console.clear();

dog_name.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

console.count('Alan');
console.count('Alan');
console.count('Alan');
console.count('Ilyas');
console.count('Steve');
console.count('Alan');
console.count('Ilyas');
console.count('Alan');
console.count('Ilyas');
console.count('Ilyas');
console.count('Ilyas');
console.count('Ilyas');

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')//Thank you!!!
.then(data => data.json())
.then(data => {
  console.timeEnd('fetching data');
  console.log(data);
});

console.table(dog_name);