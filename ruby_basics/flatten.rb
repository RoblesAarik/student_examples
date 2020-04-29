# Flatten Method
# Returns a new array that is a one-dimensional flattening of self, For every element that is an array, extract its elements into the new array.

array = ["An", "Todd", "Mark", "Jim",]

array2 = ["Cathleen", "Ky", "Biren", "Geraldine", "Hanna",]

students = [array2, array,  "Dylan", "Sheila", "Charles", "Soniya", "Jerrica", "Ellen", "Lenin", "Adam", "Stanley", "Matthew", "Anthony", "Joe", "Emily", "Amanda"]

# print students.flatten

#flatten! Method
# Flattens self in place. Returns nil if nothing changed


array3 = [1,2,3,[4,5,[6,7,8],9,10], 11, 12 ]

print array3.flatten!(1)