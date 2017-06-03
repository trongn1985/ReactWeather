function getTempCallBack(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallBack('Philadephia', function(err, temp){
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise(loation) {
  return new Promise(function(resolve, reject){
    resolve(79);
    reject('City not found');
  });
}

getTempPromise('Philadephia').then(function(temp){
  console.log('promise success', temp);
}, function(err){
  console.log('promise error', err);
})


//Challenge Area
function addPromise(a,b) {
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A & b need to be numbers');
    }
  });
}

addPromise(2,3).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('Error', err);
});

addPromise('andrews', 9).then(function(){
  console.log('this should not show up');
}, function(err){
  console.log('this should not appear',err);
});
