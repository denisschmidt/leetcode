/*
609. Find Duplicate File in System

Given a list of directory info including directory path, and all the files with contents in this directory, 
you need to find out all the groups of duplicate files in the file system in terms of their paths.

A group of duplicate files consists of at least two files that have exactly the same content.

A single directory info string in the input list has the following format:

"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"

It means there are n files (f1.txt, f2.txt ... fn.txt with content f1_content, f2_content ... fn_content, respectively) 
in directory root/d1/d2/.../dm. Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.

The output is a list of group of duplicate file paths. 

For each group, it contains all the file paths of the files that have the same content. 

A file path is a string that has the following format:

"directory_path/file_name.txt"

Example 1:
  Input: ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
  Output:  [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
 

Note:
  No order is required for the final output.
  You may assume the directory name, file name and file content only has letters and digits, and the length of file content is in the range of [1,50].
  The number of files given is in the range of [1,20000].
  You may assume no files or directories share the same name in the same directory.
  You may assume each given directory info represents a unique directory. Directory path and file info are separated by a single blank space.
   

Follow-up beyond contest:

  If the file content is very large (GB level), how will you modify your solution?
  If you can only read the file by 1kb each time, how will you modify your solution?
  What is the time complexity of your modified solution? What is the most time-consuming part and memory consuming part of it? How to optimize?
  How to make sure the duplicated files you find are not false positive?

Вопросы:

1) Представьте, что у вас есть настоящая файловая система, как вы будете искать файлы? DFS или BFS?

   ВАЖНО !!!!
   В общем, BFS будет использовать больше памяти, чем DFS.
   Память BFS определяется шириной поиска. Память DFS определяется глубиной. Обычно в среднем BFS занимает больше памяти.

   Однако BFS может использовать преимущества локальности файлов во внутренних каталогах и, следовательно, будет быстрее

   Просто для файловой системы, более часто бывает, если в одной папке хранится 100 файлов вместо 100 каталогов уровня
   В общем случае DFS занимает то же пространство, что и BFS, оба из которых O (n), независимо от того, n является высотой или шириной.

2) Если содержимое файла очень большое (уровень в ГБ), как вы будете изменять свое решение

  В реальном решении мы не будем хэшировать весь контент файла, так как это не практично.
  Вместо этого мы сначала отобразим все файлы в соответствии с размером.
  Файлы с разными размерами гарантированно будут разными.
  Затем мы хэшируем небольшую часть файлов одинакового размера (например, с использованием MD5).
  Только если md5 одинаковый, мы будем сравнивать файлы побайтно

3) Если вы можете только прочитать файл размером 1 Кб каждый раз, как вы будете изменять свое решение?

  Это не изменит решение. Мы можем создать хеш из блоков размером 1 Кб,
  а затем прочитать весь файл, если требуется полное побайтное сравнение.

4) Какова временная сложность вашего модифицированного решения? Что является наиболее трудоемкой частью и частью памяти?
   Как оптимизировать?

   Сложность по времени равна O(N^2 * K).
   Поскольку в худшем случае нам может потребоваться сравнить каждый файл со всеми остальными k - размер файла

5) Как убедиться, что найденные вами дубликаты файлов не являются ложноположительными?

   Мы будем использовать несколько фильтров для сравнения: размер файла, хэш и байтовое сравнение.

 */

// Time O(N * K) где K - кол-во файлов в пути
// Space O(N * K)

const findDuplicate = paths => {
  const map = paths.reduce((acc, item) => {
    let map = acc;

    const allItems = item.split(' ');
    let prefix = allItems[0];

    const chars = allItems.slice(1);

    for (let char of chars) {
      let index = char.indexOf('(');
      let path = prefix + '/' + char.substring(0, index);

      let key = '';
      index++;
      while (chars[index] !== ')' && index < char.length - 1) {
        key += char[index];
        index++;
      }

      if (map.has(key)) {
        map.set(key, [...map.get(key), path]);
      } else {
        map.set(key, [path]);
      }
    }

    return map;
  }, new Map());

  const ans = [];
  for (let value of map.values()) {
    if (value.length > 1) ans.push(value);
  }

  return ans;
};
