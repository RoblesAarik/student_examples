
# Select returns an array containing all elements of an array for which the given block returns a true value
p [1,2,3,4,5].select {|i| i > 3}

# Detect returns the first element of the array that returns true
p [1,2,3,4,5].detect {|i| i > 3}

# Reject returns array of all elements that are false
p [1,2,3,4,5].reject {|i| i > 3}

# Grep Returns an array of every element in the array for which Pattern === element / search element
p [1,2,5,10,15].grep (1..5)
p [0.3, "three", :three, "thirty-three"].grep /three/ #returns values with three, ^ in begining of value returns if value is first in string, $ at end of value returns if value is in the end of string


# Sort
p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort
p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort_by { |word| word.length}

p [2,5,1,3].sort

# Sorting with Strings and Integers
p [2, "hello", 1, "what"].sort_by(&:to_i) #["hello", "what", 1, 2]
p [2, "hello", 1, "what"].sort_by(&:to_s) #[1, 2, "hello", "what"]

#  Any 
# Any? - Passes each element of the collection to the given block. The method returns true if the block returns a value other than false or nil on at least one of the elements.
# %w() is a function that will return an array of the given "words"
p %w(mew pikachu).any? { |word| word.length <= 3 } #returns true

# All
# All? - Passes each element of the collection to the given block. The method returns true if the block returns a value other than false or nil on all of the elements.

p %w(mew pikachu).all? { |word| word.length <= 3 } #returns false
p %w(mew cat her the).all? { |word| word.length <= 3 } #returns true

# Reduce
# Reduce takes a collection and reduces it down to a single element. It applies an operation to each element, maintaining a running “total.”

p (5..10).reduce(:+) #returns 45
p (1..4).reduce(:*) #returns 24
p [5, 6, 7].reduce(5, :+) #returns 23