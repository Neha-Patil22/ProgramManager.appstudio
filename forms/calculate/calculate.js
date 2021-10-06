/*Create a program that either adds all the numbers in an array or multiplies all the numbers in an array
with a number from the user. */
let sum = 0 
let nums = [34,115,347,872,580,164,339,204,396,279,550,782,947,109,323,418,593,376,711, 984,1052]
let multiplyer = Number(prompt('multiplyer:'))
function addNumbers(nums)
  let nums = [34,115,347,872,580,164,339,204,396,279,550,782,947,109,323,418,593,376,711, 984,1052]
  for (i = 0; i<nums.length;i ++)
  sum = sum+nums[i]
  console.log(`${sum}`)
  
function multiplyArray(nums,multiplyer)
   for (i = 0; i<nums.length;i ++)
  sum = sum*nums[i]
  console.log(`${sum}`)
 