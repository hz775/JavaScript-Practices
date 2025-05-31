var twosum=function(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target)
                return[i,j]
        }
    }

}
let nums=[2,7,8,3]
let target=9
console.log(twosum(nums,target))