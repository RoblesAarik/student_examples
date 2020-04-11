# Get Name
def get_name (name)
    puts "My name is #{name}"
end

get_name('Aarik')

# Reverse
def reverse_it(string)
    reverse = ""
    for i in 0...string.length do
        reverse = reverse + string[string.length - (i+1)]
    end
    return reverse
end
p reverse_it("example")

# Swap

def swap 
    a = 10
    b= 30
    temp = ""

    temp = b
    b = a
    a = temp

    puts ("a is now #{a}, and b is now #{b}")

end

swap

# Multipy array
def multiply_array (ary)
    total = 1
    if ary.length == 0
        return 1
    else
        for i in ary do
            total = total * i
        end
    end 
    p total
end

array1 = [1,2,3,4,5,6]
multiply_array(array1)

# FizzBuzz

def fizzbuzz (x)
    if x % (3*5) == 0
        puts 'fizzbuzz'
    elsif x % 3 == 0
        puts 'fizz'
    elsif x % 5 == 0
        puts 'buzz'
    else 
        puts x
    end
end

fizzbuzz(10)

#Nth Fibonacci
def nth_fibonacci_number 
    fibs = [1, 1]
    num = gets.chomp.to_i
    while fibs.length < num do
        length = fibs.length
        nextFib = fibs[-2] + fibs[-1]
        fibs.push(nextFib)
    end
    puts "#{fibs[-1]} is the next number"
end

nth_fibonacci_number

#Search Array

# def search_array (array, value)
#     for i in array do
#        if i == value 
#         return true
#     else
#         return -1
#     end 
# end

# array2 = [1,2,3,4]
# search_array(array2, 2)