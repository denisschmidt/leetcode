/*
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

Сумма 4 подмножеств

O(n^3) сложность решения 

у нас есть циклы перебирающие все доступные указатели для формулы a + b + c + d

где i самый мелкий индекс 
*/

function getSum(nums, target) {
  const len = nums.length
  let result = []
  
  if(len < 4) {
    return result
  }
  nums.sort((a, b) => a - b)

  for (let i = 0; i < len - 3; i++) {
    // первый список самый большой поиск закончен 
    if (nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target) break
    // первое число маленькое 
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue
    if (i>0 && nums[i] === nums[i-1]) continue //убираем дубли
    for (let j=i+1; j < len-2; j++) {
      // второй кандидат слишком большой
      if (nums[i] + nums[j] + nums[j+1]+nums[j+2] > target) break 
      // второй кандидиат слишком мал
      if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue
      // убираем дубли
      if (j > i+1 && nums[j] === nums[j-1]) continue
      
      let low = j+1
      let high = len - 1
      
      while (low < high) {
        let sum = nums[i] + nums[j] + nums[low] + nums[high]
        
        if(sum < target) {
          low++
        } else if (sum > target) {
          high--
        }else {
          result.push([nums[i], nums[j], nums[low], nums[high]])
          do{low++;}while(nums[low]==nums[low-1] && low<high); //скипаем low дубли
          do{high--;}while(nums[high]==nums[high+1] && low<high); //скипаем high дубли
        }
      }
    }
  }
  return result
}

const res = getSum([0], 0)

console.log(res)
