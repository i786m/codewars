// Please research the following string methods:
// Give a short description of what the method does, how it works, it's time complexity (if appropriate), and give three examples of it in action!

// charAt : This is used to see what character is at the index passed in as a parameter

// charCodeAt : Like charAt this method accepts an index as a parameter but rather than returning the character it returns the character code (unicode)

// concat: This method simply appends the parameter passed in to the string that it is called upon

// includes : This method checks the string to see if the parameter passed in is present in the string that it is called upon. It returns a Boolean indicating the presence of the parameter

// indexOf :  This method looks for the first occurrence of the parameter passed in i.e traverses the string from left to right and returns the index at which the parameter is/begins, and if no match is found -1 is returned

// match : This method forms an array of all instances in the string that       'match' the parameter passed in

// repeat : This method simply repeats the string it is called on as many times as the number passed in as a parameter

// replace This method takes two parameters; a value to be replaced and the value to replace it. the string is traversed left to right, and the first instance of the value to be replaced(the first parameter) is replaced by the value of the second parameter. Regex methods can also be used as the first parameter and the second parameter can also be a function

// search : This method operates similar to the index of but is used with Regex  as the parameter to be found. If there is a match found based on the expression passed in, the index of the first instance of a match, and if no match is found -1 is returned

// slice : This method provides a portion of the string between two indices. the function can accept two parameters; a start index and an end index and provides a smaller string  that includes the start index but excludes the letter at the end index. If no end index is passed than the string portion from the start index to the end of the string is given

// split : This method 'splits' a string into an array by the character passed in as a parameter(often called the delimiter)

// substr : This method returns a portion of the string similar to the string.slice() method, however it accepts a start index(first parameter) and the number of characters(second parameter) from that index that will form the substring returned. Again if no second parameter is passed it will return a portion of the string from the start index to the end of the string

// toLowerCase :  This method transforms the string it is called upon into a string with only lower case letters

// toUpperCase : This method transforms the string it is called upon into a string with only upper case letters

// trim : This method when called will remove any whitespace at the start and the end of the string that it is called upon
