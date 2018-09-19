/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences= []){
  	var count = 0;
  	for(let i = 0; i < preferences.length; i++){
  		let A = preferences[i] - 1;
  		if (A == i) continue;
  		let B = preferences[A] - 1;
  		let C = preferences[B] - 1;
  		count += i == C;
  	}
	return count/3;
};
//console.log(getLoveTrianglesCount([2, 3, 1]));