
var reduce = function(nums, fn, init) {
    result =init;
    for(let i=0;i<nums.length;i++){
        result=fn(result,nums[i]);
    }
    return result;
};