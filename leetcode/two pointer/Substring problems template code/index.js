/* eslint-disable */
/*
For most substring problem, we are given a string and need to find a substring of it which satisfy some restrictions.
A general way is to use a hashmap assisted with two pointers.

The template is given below.

*/

const findSubstring = (s) => {
  let counter; // check whether the substring is valid
  let begin=0, end=0; //two pointers, one point to tail and one  head
  let asn; //the length of substring

  for() { /* initialize the hash map here */ }

  while(end<s.size()){

    if(map[s[end++]]-- ?){  /* modify counter here */ }

    while(/* counter condition */){

      /* update d here if finding minimum*/

      //increase begin to make it invalid/valid again

      if(map[s[begin++]]++ ?){ /*modify counter here*/ }
    }

    /* update d here if finding maximum*/
  }
  return ans;
}

/*
================================================================================================================

One thing needs to be mentioned is that when asked to find maximum substring,
We should update maximum after the inner while loop to guarantee that the substring is valid.

On the other hand, when asked to find minimum substring.
We should update minimum inside the inner while loop.

================================================================================================================

 */

function findSubstring(s) {
  let map = [];
  let counter = 0, begin = 0, end = 0, len = 0;

  while (end < s.length) {
    if (map[s[end++]]--) { /* modify counter here */
    }

    while (/* counter condition */) {
      /* update len here if finding minimum*/

      //increase begin to make it invalid/valid again

      if (map[s[begin++]]++ ?) { /*modify counter here*/
      }
    }
    /* update len here if finding maximum*/
  }
  return len;
}
