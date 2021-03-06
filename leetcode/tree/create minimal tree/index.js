const { TreeNode } = require('../../algorithms/treeNode');

/*

Чтобы создаваемое дерево имело минимальную высоту, количество узлов левого
и правого поддеревьев должны максимально (насколько это возможно) приближать­
ся друг к другу. Это означает, что корень дерева должен располагаться в середине
массива, потому что одна половина элементов должна быть меньше корня, а другая половина - больше.

Построим дерево по этому принципу. Середина каждого подраздела массива ста­новится корнем узла. 

Левая половина массива превращается в левое поддерево, а правая - в правое поддерево.

Можно действовать иначе: исключить дополнительные обходы, рекурсивно ис­пользуя метод createMinimalBST.
Данный метод получает только фрагмент массива и возвращает его корень минимального дерева.

Алгоритм выглядит так:
  1. Вставить средний элемент массива в дерево.
  2. Вставить элементы левого подмассива (в левое поддерево).
  3. Вставить элементы правого подмассива (в правое поддерево).
  4. Повторить рекурсивно.

 */

function createMinimalBST(arr = []) {
  const create = (A, start, end) => {
    if (end < start) {
      return null;
    }

    let mid = (start + end) / 2;
    let node = new TreeNode(arr[mid]);

    node.left = createMinimalBST(arr, start, mid - 1);
    node.right = createMinimalBST(arr, mid + 1, end);
  };

  return create(arr, 0, arr.length - 1);
}

createMinimalBST([1, 2, 3]);
