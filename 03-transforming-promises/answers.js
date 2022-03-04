/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    promise.then(data => {
      try{
        resolve(transformer(data));
      }
      catch(err)
      {
        reject(err);
      }
    }).catch(err => reject(err));
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then(data => {
      if(typeof(data) == 'number'){
        return Promise.resolve(data*data);
      }
      else if(typeof(data) == 'string')
      {
        if(isNaN(data))
          return Promise.reject(`Cannot convert '${data}' to a number!`);
        else
          return Promise.resolve(data*data);
      }
    }).catch(err => Promise.reject(err));
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(err => {return Promise.resolve(0);});
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(data =>{
    return Promise.reject(data);
  }, err =>{
    return Promise.resolve(err);
  });
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};