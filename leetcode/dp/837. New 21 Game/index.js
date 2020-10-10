/*
Alice plays the following game, loosely based on the card game "21".

Alice starts with 0 points, and draws numbers while she has less than K points.
During each draw, she gains an integer number of points randomly from the range [1, W], where W is an integer.
Each draw is independent and the outcomes have equal probabilities.

Alice stops drawing numbers when she gets K or more points.  What is the probability that she has N or less points?

Example 1:
  Input: N = 10, K = 1, W = 10
  Output: 1.00000
  Explanation:  Alice gets a single card, then stops.

Example 2:
  Input: N = 6, K = 1, W = 10
  Output: 0.60000
  Explanation:  Alice gets a single card, then stops.
    In 6 out of W = 10 possibilities, she is at or below N = 6 points.

Example 3:
  Input: N = 21, K = 17, W = 10
  Output: 0.73278

Note:
  0 <= K <= N <= 10000
  1 <= W <= 10000
  Answers will be accepted as correct if they are within 10^-5 of the correct answer.
  The judging time limit has been reduced for this question.

Случай: N = 3, K = 2, W = 10
 i = 1 (вытянутая карта 1)
    P (draw = 1) = 0.1 [назовите это A], то же самое событие, мы не останавливаемся, теперь мы можем взять 1 или 2, так как i <K,
    для рисования 1 или 2, P( 1 или 2) = 0,1 + 0,1 = 0,2 [назовите это B],
    P (полное) = P (A) * P (B) = 0,1 * 0,2 = 0,02

 i = 2 (вытянутая карта-2):
  вы выигрываете, когда получаете 2 (2 <= N), и вы останавливаетесь при 2> = K,
  P (полное) = 1/10 = 0,1

 i = 3 (вытянутая карта-3):
  вы выигрываете, когда получаете 3 (3 <= N), и вы останавливаетесь при  2> = K,
  P (i = 3) = 1/10 = 0,1

  Все события независимы: Конечная вероятность = 0.02 + 0.1 + 0.1 = 0.22



 Если W == 3 и мы хотим найти вероятность получить 5
 - Вы можете получить карту со значением 1, 2 или 3 с равной вероятностью (1/3)
 - Если у вас было 4, и вы получаете 1: prob (4) * (1/3)
 - Если у вас 3 и вы получаете 2: prob (3) * (1/3)
 - Если у вас 2 и вы получаете 3: prob (2) * (1/3)
 - Если у вас было 1, вы не сможете достичь 5 в следующем розыгрыше

 - prob (5) = prob (4) / 3 + prob (3) / 3 + prob (2) / 3

 Обобщим:
 Вероятность получить точку К равна p(K) = p(K-1) / W + p(K-2) / W + p(K-3) / W + ... p(K-W) / W
 Пусть sum = p(K-1) + p(K-2) + ... + p(K-W)  тогда p(K) = sum / W

 */

// Time O(N)
// Space O(N)
/**
 * @param {number} N - вероятность что у нас очки меньше либо равны N
 * @param {number} K - Выбираем пока у нас очков меньше K
 * @param {number} W - Диапозон числе [1, .....W]
 * @return {number}
 */
const new21Game = (N, K, W) => {
  if (K === 0 || N >= K + W) return 1;

  let sum = 1;
  let ans = 0;
  const dp = [];
  dp[0] = 1;

  /* 
   dp[i] представляет общую вероятность получить сумму i

   dp[i] = dp[1] * 1/W + dp[2] * 1/W + dp[3] * 1/W + ... dp[i-2] * 1/W + dp[i-1] * 1/W

   Тогда dp[i] = (dp[1] + dp[2] + ... + dp[i - 1]) / W = sum / W

    Условная вероятность: оставить окно с размером K (предположим, K = 10),
    вероятность получения точки i является суммой * вероятности от точки i - 10 до i, от точки i - 9 до i, ..., i -1 до i.

    Поскольку каждая карта имеет равную вероятность, * вероятность получить одну из карт составляет 1/10.

    Таким образом, полная вероятность dp[i] является суммой всех условных * вероятностей.
    Когда i больше или равен K, мы можем накапливать вероятность до конечного результата

   */

  for (let i = 1; i <= N; i++) {
    dp[i] = sum / W;

    if (i < K) {
      sum = sum + dp[i];
    } else {
      ans = ans + dp[i];
    }

    // когда i больше чем W, тогда нам нужно переместить окно
    if (i - W >= 0) {
      sum = sum - dp[i - W];
    }
  }

  return ans;
};
