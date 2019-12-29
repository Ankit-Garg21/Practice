// const linearSearch = require('./search/linear_search');
import linearSearch from './dsa/search/linear_search';
import binarySearch from './dsa/search/binary_search';
import quickSort from './dsa/sort/quick_sort';
import Stack from './dsa/stack/stack';
import RainWaterTrap from './dsa/practice/rain_water_trap';
import LNRS from './dsa/practice/lnrs';
import FNRC from './dsa/practice/fnrc';
import FLN from './dsa/practice/fln';
import MaxWaterBottles from './dsa/practice/max_water_bottles';
import MinNumberOfMoves from './dsa/practice/min_number_of_moves';
import BiggestNumber from './dsa/practice/biggest_number';
import MaxConsecutiveRepeatingChar from './dsa/practice/max_consecutive_repeating_char';
import RunLengthEncoding from './dsa/practice/run_length_encoding';
import CountWaysForStairs from './dsa/practice/count_ways_stairs';

// console.log("***************Linear Search*************");
// const items = [1, 2, 3, 12];
// const indices = linearSearch(items, 12);
// console.log(indices);

// console.log("***************Binary Search*************");
// const indices = binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 22);
// console.log(indices);

// console.log("*****************Quick Sort****************");
// const res = quickSort([93,31,27,65,90,12,14,56], 0, 7);
// console.log(res);

// console.log("******************Stack*****************");
// let obj = new Stack();
// obj.push(93); obj.push(31); obj.push(27); obj.push(65);
// console.log(obj);
// console.log(obj.pop());
// console.log(obj.peek());

// console.log("*****************Rain Water Trap*****************");
// const arr = [3,0,0,2,0,4];
// const quantity = RainWaterTrap(arr);
// console.log(quantity);

// console.log("*****************Longest substring without repeating characters*****************");
// const str = "GEEKSFORGEEKS";
// const len = LNRS(str);
// console.log(len);

// console.log("*****************First Non Repeating Character****************");
// const str = "abcdrfghjabcdrfghjk";
// const char = FNRC(str);
// console.log(char);

// console.log("************FLN (Incomplete)**********");
// const arr = [10, 12, 19, 4, 9, 8];
// const res = FLN(arr);
// console.log(res);

// console.log("**********Water bottle that can be bought");
// const res = MaxWaterBottles(15, 2, 4, 2);
// console.log(res);

// console.log("************Minimum number of moves to reach the end (Incomplete)************");
// let arr = [1, 2, 3, 4, 1, 5];
// const res = MinNumberOfMoves(arr);
// console.log(res);

// console.log("**************Arrange number to form the biggest number**************");
// let arr = [1, 34, 3, 98, 9, 76, 45, 4];
// const res = BiggestNumber(arr);
// console.log(res);

// console.log("************Maximum consecutive repeating character**************");
// let str = "aaaabbcbbb";
// const res = MaxConsecutiveRepeatingChar(str);
// console.log(res);

// console.log("************Run length encoding**************");
// let str = "aaabbcddddde";
// const res = RunLengthEncoding(str);
// console.log(res);

// console.log("************Count ways to reach nth stair**************");
// let noOfStairs = 4, maxSteps = 3;
// const res = CountWaysForStairs(noOfStairs, maxSteps);
// console.log(res);