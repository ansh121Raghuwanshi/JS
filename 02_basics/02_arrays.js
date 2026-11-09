const marvel_heroes=["thor","iron man","spiderman"]
const dc_heroes=["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);
// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes);

// const allHeroes=marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const all_new_heroes=[...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArray = anotherArray.flat(Infinity)
console.log(realArray);

// console.log( Array.isArray("ansh"))
// console.log(Array.from("ansh"));
console.log(Array.from({name:"ansh"})); // gives empty array , batana padega ki keys ka arrays banau ya values ka array banau
 let score1=100
 let score2=200
 let score3=300
 console.log(Array.of(score1,score2,score3));
 



/* 

1. push() method in array simply add the array as an new single entity in the existing array.
2. concat() method help us achieving a desisered output, like merging the two array, but the problems with concat are, It complicated to concat more then one array simultaneously and also It takes extra space and do the merging operation.
3. Despite push and concat we should use spread operator.
4. Intresting methods, isArray(), from() and of()

*/



