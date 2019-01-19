#include <iostream>
#include <stdlib.h>
#include <stdio.h>


// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
void merge(int arr[], int left, int middle, int right) {
  int i, j, k;
  int n1 = middle - left + 1;
  int n2 = right - middle;

  int L[n1], R[n2];

  for(i=0; i < n1; i++) {
    L[i] = arr[left + i];
  }
  for(j=0; j < n2; j++) {
    R[j] = arr[middle + 1 + j];
  }

  /*
    Перебор массива.
    Сравниваем левую и правую половины
    Копируем меньший элемент из двух половин в исходный массив
  */
  i = 0;
  j = 0;
  k = left;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  /* Остаток левой стороны массива копируется в целевой массив */
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  /* Остаток правой стороны массива копируется в целевой массив */
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }

}

void mergeSort(int arr[], int left, int right) {
  if (left < right) {
    int middle = left + (right - left) / 2;

    mergeSort(arr, left, middle); // Сортировка левой половины
    mergeSort(arr, middle+1, right); // Сортировка правой половины

    merge(arr, left, middle, right); // Слияние
  }
}


/* Function to print an array */
void printArray(int A[], int size)
{
  int i;
  for (i=0; i < size; i++)
    printf("%d ", A[i]);
  printf("\n");
}


int main() {
  int arr[] = {12, 11, 13, 5, 6, 8 };
  int arr_size = sizeof(arr)/sizeof(arr[0]);

  printf("Given array is \n");
  printArray(arr, arr_size);

  mergeSort(arr, 0, arr_size - 1);

  printf("\nSorted array is \n");
  printArray(arr, arr_size);

  return 0;
}
