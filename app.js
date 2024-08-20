// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

//**Refractord
const filterOutOdds = (...arguments) => arguments.filter((v) => v % 2 === 0);

const findMin = (...arguments) => Math.min(...arguments);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...arguments) => [
  ...arr,
  ...arguments.map((v) => v * 2),
];

const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.lentgh);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

const extend = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

function removeKey(obj, key){
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

function combine (obj1, obj2){
    return {...obj1, ...obj2};
}

function update(obj, key, val){
    let newObj = {...obj};
    newObj[key] = val;
  return newObj;
}