/*
Suppose we abstract our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

dir
    subdir1
    subdir2
        file.ext
The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext

The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext
and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system.

For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext",
 and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to file in the abstracted file system.
If there is no file in the system, return 0.

Note:
  The name of a file contains at least a . and an extension.
  The name of a directory or sub-directory will not contain a ..
  Time complexity required: O(n) where n is the size of the input string.

Notice that a/aa/aaa/file1.txt is not the longest file path, if there is another path aaaaaaaaaaaaaaaaaaaaa/sth.png.

 */
// Time O(N)
const lengthLongestPath = input => {
  let stack = [];
  const symbol = '\\';
  let maxLen = 0;
  let count = 0;
  for (let i = 3; i < input.length; i++) {
    let char = input[i];
    if (char === symbol) {
      let char = input.slice(i, i + 4);
      if (char === '\\n\\t') {
        if (input[i + 4] === symbol) {
          i = i + 5;
          count++;
        } else {
          i = i + 3;
          if (stack.length > maxLen && stack.indexOf('.')) {
            maxLen = stack.length + 3 + count;
          }
          count = 1;
          stack = [];
        }
      }
    } else {
      stack.push(char);
    }
  }

  if (stack.length > maxLen) {
    maxLen = stack.length + 3 + count;
  }

  return maxLen;
};

const res = lengthLongestPath('dir\\n\\tsubdir1\\n\\tsubdir2\\n\\t\\tfile.ext');
console.log('---', res);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
const lengthLongestPath2 = input => {
  const stack = [];
  return input.split('\n').reduce((max, p) => {
    let level = p.lastIndexOf('\t') + 1;
    stack[level] = p.length - level + (level ? stack[level - 1] : 0);
    return p.indexOf('.') === -1 ? max : Math.max(max, stack[level] + level);
  }, 0);
};

const res2 = lengthLongestPath2('dir\\n\\tsubdir1\\n\\tsubdir2\\n\\t\\tfile.ext');
console.log('---', res2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
const lengthLongestPath3 = input => {
  const files = input.split('\\n');
  const fs = {};

  let currentPath = [];
  for (let file of files) {
    let level = file.lastIndexOf('\\t') + 1;

    console.log('---', file);
  }

  return fs;
};

const res3 = lengthLongestPath3('dir\\n\\tsubdir1\\n\\tsubdir2\\n\\t\\tfile.ext');
console.log('---', res2);