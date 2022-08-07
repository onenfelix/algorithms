// My personal forced solution for the two sums problem,
//You are required to return the index of the two numbers that add up to a given target

let nums = [1, 3, 7, 9, 2];

function findTwoSumsPairs(array = [], target = 11) {
  if (array.length <= 2) {
    return null;
  }

  let resultValue;

  let presumedFirstPairIndex = 0;
  let presumedSecondPairIndex = 1;

  while (
    array[presumedSecondPairIndex] !==
    (target - array[presumedFirstPairIndex])
  ) {
      console.log("first pair", presumedFirstPairIndex)
      console.log("seconed pair", presumedSecondPairIndex)
    if (presumedSecondPairIndex === (array.length - 1)) {
      presumedFirstPairIndex += 1;
      presumedSecondPairIndex = 1;
    } else {
      presumedSecondPairIndex += 1;
    }

    if (presumedFirstPairIndex === array.length - 1) {

      break;
    }
  }

  resultValue = array[presumedFirstPairIndex] + array[presumedSecondPairIndex];

  if (resultValue === target) {
    return [presumedFirstPairIndex, presumedSecondPairIndex];
  }
  console.log("failed to find value");
  return null;
}

console.log(findTwoSumsPairs(nums, 10));
