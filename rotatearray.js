//Objective is to rotate an array around index k

let nums = [1,2,3,4,5,6,7], k = 3


//O(n) solution that reverses the array, then reverses the two
//halves of the pivot

k %= nums.length
    
reverse(0, nums.length - 1)
reverse(0, k - 1)
reverse(k, nums.length - 1)

function reverse(left, right) {
    while (left < right) {
        let temp = nums[left]
        nums[left++] = nums[right]
        nums[right--] = temp
    }
}