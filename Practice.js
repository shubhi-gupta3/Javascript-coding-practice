function print1ToN(N) {
	if (N <= 0) return;
	console.log(N);
	print1ToN(N - 1);
}

// print1ToN(5);

function sumOfSeries(n) {
	if (n == 0 || n == 1) {
		return 1;
	}
	return n * sumOfSeries(n - 1);
}

// console.log(sumOfSeries(5));

var arr = [1, 2, 3, 4, 5];
function reverseArray(index) {
	let rightIndex = arr.length - index - 1;
	if (index == rightIndex) {
		return;
	}
	let temp = arr[index];
	arr[index] = arr[rightIndex];
	arr[rightIndex] = temp;
	reverseArray(index + 1);
}
// reverseArray(0);
// console.log(arr);

s = "A man, a plan, a canal: Panama";
// console.log(''.concat(s.split(' ')));

function hashingNumbers() {
	let arr = [1, 3, 2, 3, 1];
	let n = 5;
	hashArray = [];
	for (i = 0; i < 5; i++) {
		hashArray[i] = 0;
	}
	for (let i = 0; i < arr.length; i++) {
		hashArray[arr[i]] += 1;
	}
	console.log(hashArray);
}

// hashingNumbers();

function hashingNumbers() {
	let s = "ehbgvkjwebnlgkeqnfjkwengionwegbvjwenfnwkvjqkwbfwnfw";
	let n = 5;
	hashArray = [];
	for (i = 0; i < 26; i++) {
		hashArray[i] = 0;
	}
	for (let i = 0; i < s.length; i++) {
		hashArray[s[i].charCodeAt() - "a".charCodeAt()] += 1;
	}
	console.log(hashArray);
}

// hashingNumbers()

function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let min = 10 ** 9;
		let indexOfMinElement = 0;
		for (let j = i; j < arr.length; j++) {
			if (min >= arr[j]) {
				min = arr[j];
				indexOfMinElement = j;
			}
		}
		let temp = arr[i];
		arr[i] = arr[indexOfMinElement];
		arr[indexOfMinElement] = temp;
	}
	console.log(arr);
}

// selectionSort([13,46,24,52,20,9]);

function bubbleSort(arr) {
	let n = arr.length;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < n - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
		n--;
	}
	console.log(arr);
}

// bubbleSort([13,46,24,52,20,9,0,-1]);

function insertionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j - 1] > arr[j] && j > 0) {
				let temp = arr[j - 1];
				arr[j - 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	console.log(arr);
}

// insertionSort([13,46,24,52,20,9,0,-1]);

function isArraySorted(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}
	return true;
}

// console.log(isArraySorted([-1, 0, 9, 13, 20, 24, 46, 52]));

function reverseArrayIn2Min(arr) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
	console.log(arr);
}

// reverseArrayIn2Min([1,2,3,4,5])

function convertDecimalToBinary(num) {
	let res = [];
	while (num != 0) {
		res.unshift(num % 2);
		num = Math.floor(num / 2);
	}
	console.log(res.join(""));
}

// convertDecimalToBinary(446733544);

function convertBinaryToDecimal(binaryString) {
	let power = binaryString.length - 1;
	let res = 0;
	for (let str of binaryString) {
		res += 2 ** power * +str;
		power--;
	}
	console.log(res);
}

// convertBinaryToDecimal('000111');

function bitManipulation(num, i) {
	let binary = convertDecimalToBinary(num);
	let firstAns = binary[binary.length - i];
	binary[binary.length - i] = 1;
	let secondAns = convertBinaryToDecimal(binary);
	binary[binary.length - i] = 0;
	let thirdAns = convertBinaryToDecimal(binary);
	console.log(firstAns, secondAns, thirdAns);
}

// bitManipulation(446733544,30);

function singleNumber(nums) {
	//code here
	let res = [];
	let hashMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (!hashMap[nums[i]]) {
			hashMap[nums[i]] = 1;
		} else {
			hashMap[nums[i]]++;
		}
	}
	for (let entry in hashMap) {
		if (hashMap[entry] == 1) {
			res.push(+entry);
		}
	}
	// console.log(res);
}

// singleNumber([2, 1, 3, 2]);

// let n = 16
// let s1 = (n & (n-1))
// console.log(s1);

function countSetBits(n) {
	let count = 0;
	for (let i = 1; i <= n; i++) {
		let temp = i;
		while (temp != 0) {
			if (temp % 2 != 0) {
				count++;
			}
			temp = Math.floor(temp / 2);
		}
		return count;
	}
}

// console.log(countSetBits(4));

function findXOR(l, r) {
	// your code here
	let res = 0;
	for (let i = l; i <= r; i++) {
		res ^= i;
	}
	console.log(res);
}

// findXOR(76,95)

function merge(nums1, m, nums2, n) {
	let i = 0,
		j = 0,
		res = [];

	while (i < m && j < n) {
		if (nums1[i] <= nums2[j]) {
			res.push(nums1[i]);
			i++;
		} else if (nums2[j] < nums1[i]) {
			res.push(nums2[j]);
			j++;
		}
	}

	while (i < m) {
		res.push(nums1[i]);
		i++;
	}

	while (j < n) {
		res.push(nums2[j]);
		j++;
	}

	console.log(res);
}

// merge([1,2,3,0,0,0], 3, [2,5,6], 3);

function singleNumber3(nums) {
	let xor = 0;
	for (let num of nums) {
		xor ^= nums;
	}

	let rightMost = xor & (xor - 1);
	console.log(rightMost);
	let b1 = 0,
		b2 = 0;
	for (let num of nums) {
		if (num & rightMost) {
			b1 ^= num;
		} else {
			b2 ^= num;
		}
	}
	console.log(b1, b2);
}

// singleNumber3([1,2,1,3,2,5]);

function findTwoElement(arr, n) {
	//your code here
	let hashMap = new Map();
	let res = [];

	for (let i = 1; i <= n; i++) {
		hashMap[i] = 0;
	}

	for (let num of arr) {
		hashMap[num]++;
	}

	for (let hash in hashMap) {
		if (hashMap[hash] >= 2) {
			res.push(hash);
		}
		break;
	}

	for (let hash in hashMap) {
		if (hashMap[hash] == 2) {
			res.push(hash);
		}
		break;
	}
	return res;
}

// findTwoElement([2, 2], 2);

function findTwoElementAlternate(arr, n) {
	arr.sort();
	let res = [];
	let sum = 0;

	let temp = [...new Set(arr)];
	for (let num of temp) {
		sum += num;
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == arr[i + 1]) {
			res.push(arr[i]);
			break;
		}
	}

	res.push(n * 0.5 * (n + 1) - sum);
	console.log(res);
}

// findTwoElementAlternate([3, 1, 3], 3);

function twoSum(nums, target) {
	let hashMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (hashMap[target - nums[i]] != undefined) {
			console.log([i, hashMap[target - nums[i]]]);
		}
		hashMap[nums[i]] = i;
	}

	console.log(hashMap);
}

// twoSum([2,7,11,15], 9);

function findMaxK(nums) {
	nums.sort(function (a, b) {
		return b - a; // Descending
	});
	console.log(nums);
	let temp = new Set(nums);
	for (let num of nums) {
		if (temp.has(num * -1)) {
			console.log(num);
			return num;
		}
	}
	console.log(-1);
	return -1;
}

// findMaxK([-37,37,-9,2,47,18,13,-11,9,-28]);

var rotateString = function (s, goal) {
	let rotations = 0;
	while (rotations <= s.length) {
		let rotated = rotateStringOnce(s).join("");
		if (rotated == goal) {
			return true;
		}
		rotations++;
	}
	return false;
};

function rotateStringOnce(s) {
	s = s.split("");
	let temp = s[0];
	for (let i = 1; i < s.length; i++) {
		s[i - 1] = s[i];
	}
	s[s.length - 1] = temp;
	return s;
}

// console.log(rotateString("abcde", "cdeab"));

// 1. How will you modify a linked list of integers so that all even numbers appear before all odd numbers in the modified linked list? Also, keep the even and odd numbers in the same order.

// Example:
// Input: 17->15->8->12->10->5->4->1->7->6->NULL
// Output: 8->12->10->4->6->17->15->5->1->7->NULL

//find mistakes in this approach
function orderLinkedList(head) {
	let temp = head;
	let odd = [];
	while (temp) {
		if (temp.val % 2 != 0) {
			odd.push(temp.val);
			if (temp == head) {
				head = head.next;
				temp = head;
			} else {
				temp.next = temp.next.next;
			}
		} else {
			temp = temp.next;
		}
	}

	for (let num of odd) {
		let newNode = new Node(num);
		newNode.next = null;
		temp.next = newNode;
		temp = temp.next;
	}
}

// 1. How will you modify a linked list of integers so that all even numbers appear before all odd numbers in the modified linked list? Also, keep the even and odd numbers in the same order.
// Example:
// Input: 17->15->8->12->10->5->4->1->7->6->NULL
// Output: 8->12->10->4->6->17->15->5->1->7->NULL

function orderLinkedList(head) {
	let oddLL = newNode(null);
	let evenLL = newNode(null);
	tempEven = evenLL;
	tempOdd = oddLL;
	let temp = head;
	while (temp) {
		if (temp.val % 2 == 0) {
			let newNode = new Node(temp.val);
			tempEven.next = newNode;
		} else {
			let newNode = new Node(temp.val);
			tempOdd.next = newNode;
		}
		temp = temp.next;
	}

	tempEven.next = oddLL;
	return tempEven;
}

// Given two arrays arr1[] and arr2[], the task is to find the number of elements in the union between these two arrays.

// The Union of the two arrays can be defined as the set containing distinct elements from both arrays. If there are repetitions, then only one element occurrence should be there in the union.
// Note: Elements are not necessarily distinct.

// Examples

// Input: arr1[] = [1, 2, 3, 4, 5], arr2[] = [1, 2, 3]
// Output: 5

// Input: arr1[] = [85, 25, 1, 32, 54, 6], arr2[] = [85, 2]
// Output: 7

function union(arr1, arr2) {
	let unionSet = new Set();
	let i = 0,
		j = 0;
	let m = arr1.length;
	let n = arr2.length;

	// while(i<m && j<n) {
	// 	if(arr1[i] <= arr2[j]) {
	// 		unionSet.add(arr1[i]);
	// 		i++;
	// 	} else if(arr2[j] < arr1[i]) {
	// 		unionSet.add(arr2[j]);
	// 		j++;
	// 	}
	// }

	while (i < m) {
		unionSet.add(arr1[i]);
		i++;
	}

	while (j < n) {
		unionSet.add(arr2[j]);
		j++;
	}

	return unionSet.size;
}

// console.log(union([85, 25, 1, 32, 54, 6], [85, 2] ));

sortArray = function (nums) {
	console.log(nums.length);
	mergeSort(nums, 0, nums.length - 1);
	return nums;
};

function mergeSort(arr, low, high) {
	if (low >= high) {
		return;
	}
	let mid = (low + high) >> 2;
	mergeSort(arr, low, mid);
	mergeSort(arr, mid + 1, high);
	merge1(arr, low, mid, high);
}

function merge1(arr, low, mid, high) {
	let temp = [];
	let left = low,
		right = mid + 1;
	while (left <= mid && right <= high) {
		if (arr[left] <= arr[right]) {
			temp.push(arr[left]);
			left++;
		} else {
			temp.push(arr[right]);
			right++;
		}
	}

	while (left <= mid) {
		temp.push(arr[left]);
		left++;
	}

	while (right <= high) {
		temp.push(arr[right]);
		right++;
	}

	for (let i = low; i <= high; i++) {
		arr[i] = temp[i - low];
	}
}

// console.log(sortArray([1,3,4,5]));

pivotInteger = function (n) {
	let pivot = 0;
	let sum1 = 0,
		sum2 = 0;

	if (n === 1) return 1;

	let i = 1,
		j = n;

	while (i <= n && j > 0) {
		sum1 += i;
		i++;
		if (sum1 >= n) {
			sum2 += j;
			j--;
		}
		if (sum1 === sum2 && i === j) {
			return i;
		}
	}

	return -1;
};

// console.log(pivotInteger(49));

pivotIndex = function (nums) {
	let sumLeft = 0,
		sumRight = 0;
	let n = nums.length;
	for (let i = 0; i < nums.length; i++) {
		if (
			summation(nums.slice(i, n - i + 1)) ===
			summation(nums.slice(n - i + 1, n))
		) {
			return i;
		}
	}
	return -1;
};

function summation(arr) {
	let sum = 0;
	for (let i of arr) {
		sum += i;
	}
	return sum;
}

// console.log(pivotIndex([2,1,-1]));

subarraySum = function (nums, k) {
	let hashMap = new Map();
	let preSum = 0,
		count = 0;
	hashMap[0] = 1;

	for (let num of nums) {
		preSum += num;
		let remove = preSum - k;
		count += hashMap[remove];
		if (!hashMap[preSum]) {
			hashMap[preSum] = 1;
		} else {
			hashMap[preSum] += 1;
		}
	}

	return count;
};

// console.log(subarraySum([1,1,1],2));

searchRange = function (nums, target) {
	let lowerBound = lowerBoundFunc(nums, target, 0, nums.length - 1);
	if (nums[lowerBound] != target) {
		return [-1, -1];
	}
	let upperBound = upperBoundFunc(nums, target, 0, nums.length - 1);

	return [lowerBound, upperBound - 1];
};

function lowerBoundFunc(nums, target, low, high) {
	let mid = 0,
		lower = -1;

	while (low <= high) {
		mid = Math.floor(low + (high - low) / 2);
		if (nums[mid] >= target) {
			lower = mid;
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return lower;
}

function upperBoundFunc(nums, target, low, high) {
	let mid = 0,
		upper = -1;

	while (low <= high) {
		mid = Math.floor(low + (high - low) / 2);
		if (nums[mid] > target) {
			upper = mid;
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return upper;
}

// console.log(searchRange([1],1));

function count(arr, n, x) {
	//code here
	let count = 0,
		low = 0,
		high = n - 1,
		mid = 0;

	while (low <= high) {
		mid = Math.floor(low + (high - low) / 2);
		if (arr[mid] == x) {
			count++;
		} else if (arr[mid] < x) {
			low = mid + 1;
		} else if (arr[mid] > x) {
			high = mid - 1;
		}
	}
	return count;
}

// console.log(count([1,1,2,2,2,2,3],7,2));

findMin = function (arr) {
	let low = 0,
		high = arr.length - 1,
		mid = 0,
		min = arr[0];
	while (low <= high) {
		mid = Math.floor(low + (high - low) / 2);
		if (arr[low] < arr[mid]) {
			if (arr[low] <= min && min <= arr[mid]) {
				min = arr[low];
				high = mid - 1;
			} else {
				low = mid + 1;
			}
		} else if (arr[mid] < arr[high]) {
			if (arr[mid] <= min && min <= arr[high]) {
				min = arr[mid];
				low = mid + 1;
			} else {
				high = mid - 1;
			}
		}
	}
	return min;
};

// console.log(findMin([11,13,15,17]))

function NthRoot(n, m) {
	//code here
	let low = 1,
		high = m,
		mid = 0;

	while (low <= high) {
		mid = Math.floor(low + (high - low) / 2);
		if (mid ** n == m) {
			return mid;
		} else if (mid ** n < m) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return -1;
}

// console.log(NthRoot(2,9));

function rowWithMax1s(arr) {
	// code here
	let n = arr.length;
	let m = arr[0].length;
	let max = { index: -1, value: arr[0][0] };
	for (let i = 0; i < n; i++) {
		let noOfOnes = 0;
		if (firstOccurence(arr[i]) === -1) {
			noOfOnes = 0;
		} else {
			noOfOnes = m - firstOccurence(arr[i]);
		}

		if (noOfOnes > max.value) {
			max.value = noOfOnes;
			max.index = i;
		}
	}
	return max.index;
}

function firstOccurence(arr) {
	let low = 0,
		high = arr.length - 1,
		mid = 0,
		ans = -1;
	while (low <= high) {
		mid = Math.floor(low + (high - low) / 2);
		if (arr[mid] >= 1) {
			ans = mid;
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return ans;
}

// console.log(rowWithMax1s([[0],[0]]))

/**
 * Definition for singly-linked list.
 *
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
function reverseLL(newHead) {
	if (!newHead || !newHead.next) {
		return newHead;
	}
	let currentNode = newHead;
	let prevNode = null;

	while (currentNode) {
		let temp = currentNode.next;
		currentNode.next = prevNode;
		prevNode = currentNode;
		current = temp;
	}
	return newHead;
}

var isPalindrome = function (head) {
	let fast = head,
		slow = head,
		firstHalf = head;
	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	let newHead = reverseLL(slow.next);
	let secondHalf = newHead;
	while (secondHalf) {
		if (secondHalf.val != firstHalf.val) {
			reverseLL(secondHalf);
			return false;
		}

		secondHalf = secondHalf.next;
		firstHalf = firstHalf.next;
	}

	reverseLL(newHead);
	return true;
};

function oddEvenList(head) {
	let odd = head,
		even = head.next;
	if (!head || !head.next) {
		return head;
	}

	while (odd && even) {
		odd = odd.next.next;
		even = even.next.next;
	}

	odd.next = even;
	return head;
}

// console.log(oddEvenList([2,1,3,5,6,4,7]));

checkRecord = function (s) {
	let absent = 0,
		late = 0;
	for (let el of s) {
		if (el === "A") {
			absent++;
			if (absent >= 2) {
				return false;
			}
		} else if (el === "L") {
			late++;
			if (late >= 3) {
				return false;
			}
		} else {
			late = 0;
		}
	}
	return true;
};

// console.log(checkRecord("LALL"));

longestCommonPrefix = function (strs) {
	let shortestWord = "",
		lengthOfShortest = 0;
	for (let str of strs) {
		if (lengthOfShortest >= str.length) {
			shortestWord = str;
			lengthOfShortest = str.length;
		}
	}
	let output = "";
	while (shortestWord) {
		for (let str of strs) {
			if (str.includes(shortestWord)) {
				output = str;
			} else {
				break;
			}
		}
		shortestWord = shortestWord.split("").pop();
		shortestWord.join("");
	}
	return output;
};

// console.log(longestCommonPrefix(["flower","flow","flight"]))

function infixToPostfix(s) {
	// code here
	let ans = "",
		i = 0,
		stack = [],
		n = s.length;

	while (i < n) {
		let char = s[i];
		if (
			(char >= "a" && char <= "z") ||
			(char >= "A" && char <= "Z") ||
			(char >= "0" && char <= "9")
		) {
			ans += char;
		} else if (char === "(") {
			stack.push(char);
		} else if (char === ")") {
			while (stack.length) {
				let top = stack[stack.length - 1];
				if (top === "(") {
					stack.pop();
					break;
				}
				ans += top;
				stack.pop();
			}
		} else {
			while (
				stack.length &&
				priorityOfOperator(char) <=
					priorityOfOperator(stack[stack.length - 1])
			) {
				ans += stack.pop();
			}
			stack.push(char);
		}
		i++;
	}
	while (stack.length) {
		ans += stack.pop();
	}
	return ans;
}

function priorityOfOperator(operator) {
	switch (operator) {
		case "^":
			return 3;
		case "*":
		case "/":
			return 2;
		case "+":
		case "-":
			return 1;
		default:
			return 0;
	}
}

// console.log(infixToPostfix('(a*b)-(c*d)+(e/f)'));

lengthOfLongestSubstring = function (s) {
	let substr = "";
	let maxSize = 0;

	for (let str of s) {
		if (!substr.includes(str)) {
			substr += str;
		} else {
			if (substr.length > maxSize) {
				maxSize = substr.length;
				substr = str;
			}
		}
	}
	if (maxSize < substr.length) {
		return substr.length;
	}
	return maxSize;
};

// console.log(lengthOfLongestSubstring("dvdf"));

subArrayRanges = function (nums) {
	let res = 0;
	for (let i = 0; i < nums.length; i++) {
		let min = nums[i],
			max = nums[i];
		for (j = i; j <= nums.length; j++) {
			if (min > nums[j]) {
				min = nums[j];
			}
			if (max < nums[j]) {
				max = nums[j];
			}
			res += max - min;
		}
	}
	return res;
};

// console.log(subArrayRanges([1,2,3]));

lengthOfLongestSubstring = function (s) {
	let maxLen = 0;

	for (let i = 0; i < s.length; i++) {
		for (let j = i + 1; j < s.length; j++) {
			let temp = s.split("").slice(i, j);
			if (temp.length === new Set(temp).size) {
				if (maxLen <= temp.length) {
					maxLen = temp.length;
				}
			} else {
				break;
			}
		}
	}
	return maxLen;
};

// console.log(lengthOfLongestSubstring("au"));

totalFruit = function (fruits) {
	let maxFruits = 0;

	for (let i = 0; i < fruits.length; i++) {
		for (let j = i + 1; j < fruits.length; j++) {
			let temp = fruits.slice(i, j);
			if (new Set(temp).size <= 2) {
				if (maxFruits <= temp.length) {
					maxFruits = temp.length;
				}
			} else {
				break;
			}
		}
	}
	return maxFruits;
};

// console.log(totalFruit([1, 2, 1]));

merge = function (nums1, m, nums2, n) {

    let i = 0, j = 0;
    while (i < m) {
        if (nums1[i] <= nums2[j]) {
            i++;
        } else {
            let temp = nums1[i];
            nums1[i] = nums2[j];
            nums2[j] = temp;
            i++;
        }
    }

    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[i - m];
    }

};

// console.log(merge([1],1,[],0))

checkIfExist = function(arr) {
    let temp = new Set(arr);
    
    for(let ele of arr) {
        if(temp.has(ele * 2) || temp.has(ele / 2)) {
            return true;
        }
    }
    return false;
};

// console.log(checkIfExist([-2,0,10,-19,4,6,-8]));

isUgly = function (n) {
	n = Math.abs(n);
    if (n === 1) return true;
    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else if (n % 3 === 0) {
            n = n / 3;
        } else if (n % 5 === 0) {
            n = n / 5;
        } else {
            return false;
        }
    }
    return true;
};

// console.log(isUgly(-2147483648));

characterReplacement = function (s, k) {
    let n = s.length, left = 0, right = 0, maxFreq = 0, maxLen = 0, hashMap = new Array(26).fill(0);

    while (right < n) {
        hashMap[s[right].charCodeAt(0) - 'A'.charCodeAt(0)]++;
        if (maxFreq <= hashMap[s[right].charCodeAt(0) - 'A'.charCodeAt(0)]) {
            maxFreq = hashMap[s[right].charCodeAt(0) - 'A'.charCodeAt(0)];
        }

        while (right - left + 1 - maxFreq > k) {
            hashMap[s[left].charCodeAt(0) - 'A'.charCodeAt(0)]--;
            maxFreq = 0;
            for (let i = 0; i < 26; i++) {
                if (maxFreq <= hashMap[i]) {
                    maxFreq = hashMap[i];
                }
            }
            left++;
        }

        if (right - left + 1 - maxFreq <= k) {
            if (maxLen <= right - left + 1) {
                maxLen = right - left + 1;
            }
        }
        right++;
    }
    return maxLen;
};

// console.log(characterReplacement("ABAB",2));

numSubarraysWithSum = function (nums, goal) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if (sum === goal) {
                res++;
            }
        }
    }
    return res;
};

// console.log(numSubarraysWithSum([0,0,0,0,0], 0));

validMountainArray = function(arr) {
    if(arr.length < 3) return false;
    let peak = Math.max(...arr);
    let peakIndex = arr.indexOf(peak);
    if(peakIndex === 0 || peakIndex === arr.length-1) return false;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === arr[i+1]) {
            return false;
        }
    }
    
    for(let i=0; i<peakIndex; i++) {
        if(arr[i] > peak) {
            return false;
        }
    }
    
    for(let i=peakIndex+1; i<arr.length; i++) {
        if(arr[i] > peak) {
            return false;
        }
    }
    
    return true;
};

// console.log(validMountainArray([0,1,2,1,2]));

function minCoins(coins, V)
    {
        //your code here
        let res = [];
        coins.sort((a,b) => b-a);
        for(let coin of coins) {
            while(coin<=V) {
                res.push(coin);
                V-=coin;
            }
        }
        console.log(res);
    }
// console.log(minCoins([9,6,5,1], 11));

myAtoi = function (s) {
    let res = '';
    s = s.trim();
    let i = 0;
    if (s[0] === '-' || s[0] === '+') {
        res += s[0];
        i++;
    }
    for (; i < s.length; i++) {

        if (s[i] >= '0' && s[i] <= '9') {
            res += s[i];
        } else if (s[i] >= 'a' && s[i] <= 'z' || s[i] === '-' || s[i] === '+' || s[i] === '.' || s[i] === '') {
            break;
        }
    }
    if(+res > (2**31)-1) return (2**31)-1;
    if(+res < -(2**31)) return -(2**31);
    return +res;
};

// console.log(myAtoi("+-12"));

var subsets = function (nums) {
    res = [];
    powerset(0, nums, [], res);
    return res;
};

function powerset(index, nums, currentSubset, res) {
    res.push([...currentSubset]);
    for (let i = index; i < nums.length; i++) {
        currentSubset.push(nums[i]);
        powerset(i + 1, nums, currentSubset, res);
        currentSubset.pop();
    }
}

// console.log(subsets([1,2,3]));

var construct2DArray = function (original, m, n) {
    let res = [];
    if (m * n < original.length) {
        return res;
    }
    construct2DArrayWithZeroes(res, m, n);
     
    for (let i = 0; i < original.length; i++) {
        let row = Math.floor(i / n);
        let col = Math.floor(i % m);
        res[row][col] = original[i];
    }

    return res;
};

function construct2DArrayWithZeroes(res, m, n) {
    for (let i = 0; i < m; i++) {
        let temp = [];
        for (let j = 0; j < n; j++) {
            temp.push(0);
        }
        res.push(temp);
    }
}

// console.log(construct2DArray([1,2,3],1,3));

function selectionSortUsingLibraries(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let min = Math.min(...(arr.slice(i, arr.length)));
		let indexOfMinElement = arr.indexOf(min);
		let temp = arr[i];
		arr[i] = arr[indexOfMinElement];
		arr[indexOfMinElement] = temp;
	}
	console.log(arr);
}

// selectionSortUsingLibraries([13,46,24,52,20,9]);


function bubbleSortTest(arr) {
	for(let i=0; i< arr.length; i++) {
		for(let j=i; j<arr.length; j++) {
			if(arr[i] > arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	console.log(arr);
}

// bubbleSortTest([13,46,24,52,20,9]);


function sumOfDivisors(N)
    {
        //your code here
        let finalTotal = 0;
        for(let i=1; i<=N; i++) {
            finalTotal += getFactors(i);
            console.log(finalTotal);
        }
        return finalTotal;
    }
    
function getFactors(i) {
        let factorsSum = 0;
        for(let j=1; j<=i; j++) {
            if(i%j === 0) {
                factorsSum += j;
            }
        }
        return factorsSum;
    }

// console.log(sumOfDivisors(2));

var canArrange = function (arr, k) {
    let noOfpairs = arr.length / 2;
    let pairs = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                if ((arr[i] + arr[j]) % k === 0) {
                    pairs++;
                }
            }
        }
    }

    return pairs >= noOfpairs;
};

// console.log(canArrange([5,5,1,2,3,4,3,7], 10));

var addSpaces = function(s, spaces) {
    s = s.split('');
    let newString = '';
    let startIndex = 0;
    for(let index of spaces) {
        newString += s.slice(startIndex, index) + ' ';
        startIndex = index;
    }
    return newString;
};

console.log(addSpaces('LeetcodeHelpsMeLearn', [8,13,15]));