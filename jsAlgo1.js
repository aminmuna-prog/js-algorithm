// give an array of integers, replace all the occurrences of elementToReplace with subtraction
// for inputArray = [1, 2, 1], elementToReplace = 1, and subtractionElem =3, the output should be
// arrayReplace(inputArray, elementToReplace, substractionElem) = [3, 2, 3]

function arrayReplace(inputArray, elementToReplace, substractionElem) {
  inputArray.forEach((element, index) => {
    if (element === elementToReplace) {
      inputArray[index] = substractionElem;
    }
  });
  console.log(inputArray);
}

arrayReplace([3, 2, 4], 3, 8);
