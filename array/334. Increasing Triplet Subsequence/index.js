/*
Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

Return true if there exists i, j, k 
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

Example 1:
  Input: [1,2,3,4,5]
  Output: true

Example 2:
  Input: [5,4,3,2,1]
  Output: false

*/

// Отслеживаем нижние границы для первого и второго элемента подпоследовательности

// Time O(N)
// Space O(1)
const increasingTriplet = function(nums) {
  let a = Number.MAX_VALUE;
  let b = Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > b) return true;

    // обновляем нажние границы
    if (nums[i] < a) {
      a = nums[i];
    } else if (nums[i] !== a && nums[i] < b) {
      b = nums[i];
    }
  }

  return false;
};

/*
  Алгоритм:

    Отслеживаем нижние границы для первого и второго элемента подпоследовательности
    
    Cначала у нас будет first = MAX_VALUE и second = MAX_VALUE. 
    
    Тестовый пример [1,0,2,0, -1,3] 
    
    Итерация первая first = 1 second = MAX_VALUE 
    
    Вторая итерация first = 0 second = MAX_VALUE 
    
    Третья итерация first = 0 second = 2 
    
    Четвертая итерация (ничего не меняется) first = 0 second = 2 
    
    Итерация пятая (запутанная часть) first = -1 second = 2 
    
    Итерация шестая вернуть истину; 
    
    Так как 3 > 2 && 3> -1 
    
    Установка first = -1 важна, но не меняет ответ, 
    
    Так как second = 2 подразумевает, что существует значение, которое ранее было меньше двух
    Если найти любое значение больше 2 мы знаем, что они существуют в возрастающей подпоследовательности 
    
    Однако, если бы у нас был такой тест [1,0,2,0, -1,0,1], нам нужна обновленная нижняя граница для первого, 
    поэтому мы знаем, чтобы обновить нижнюю границу для второго.

*/

// Time O(N)
// Space O(1)
const increasingTriplet_II = function(nums) {
  let first = Number.MAX_VALUE;
  let second = Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    if (first >= nums[i]) {
      first = nums[i];
    } else if (second >= nums[i]) {
      second = nums[i];
    } else {
      return true;
    }
  }

  return false;
};
