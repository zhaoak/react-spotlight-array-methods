// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  return brands.reduce((brandList, brand) => brandList.concat(brand.shoes), []);
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {
  return dogs.reduce((avgAge, dog) => (avgAge += dog.age), 0) / dogs.length;
};
