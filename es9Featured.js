//1.Async iterators
//Asynchronous iteration allow us to iterate over data that comes asynchronously, on-demand.

const asyncItr = () => {
  const arr = [1, 2, 3];
  return {
    next: () => {
      if (arr.length) {
        return Promise.resolve({
          value: arr.shift(),
          done: false,
        });
      } else {
        return Promise.resolve({
          done: true,
        });
      }
    },
  };
};

const itr = asyncItr();

const asyncFun = async () => {
  await itr.next().then(console.log);
  await itr.next().then(console.log);
  await itr.next().then(console.log);
  await itr.next().then(console.log);
};
asyncFun();

//2.Rest properties for object destructuring assignment.
const fruits = { kiwi: 10, bananas: 20, apple: 30, pineapples: 40 };
const { apple, ...rest } = fruits;
console.log(apple);
console.log(rest);

//3. Spread properties for object destructuring assignment.
const someFruits = { apple, ...rest };
console.log(someFruits);
