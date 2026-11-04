var twoSum = function(numbers, target) {

    var left = 0;
    var right = numbers.length -1;

    while( left < right ){

        let sum = numbers[left] + numbers[right];

        if(sum == target){
            return [left , right];
        }
        else if (sum > target){
            right--;
        }
        else{
            left++;
        }
    }
};

numbers = [1,2,3,5,6];
target = 5

let res = twoSum(numbers,target);
console.log(res);
