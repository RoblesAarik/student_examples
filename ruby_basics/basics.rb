# single comment
# long_variable_name = 1

# puts "hi"

# some_var = gets
# puts some_var

# command_line = gets
# puts commande_line

# puts "ruby".length #gets string length

# puts "ruby".upcase #uppercase string

# puts 23.to_s # number to string

# foo = 'bar'

# puts "oh hai #{foo}"
# puts 'oh hai #{foo}'

#multi line strings use a different syntax
# long_string = <<-EOF
# asdfkajsdf;alsdf
# asdfkajsdfsdf
# asdfjkasdfa
# sdfjasdf
# EOF
# puts long_string


 # Booleans

#  a = false
#  b = true

#  p a && b 

#  p a || b 


#  Integers
#  puts 5 / 2 #rounds
# puts 122 #normal
# puts 0x7a #hex value
# puts 0172 #octal
# puts 0b1111010 #binary
# puts 23_482_345_629 #long numbers: substitute _ for ,

#Floats show decimals

# p 5.0 / 2 #force a float
# p 5.fdiv 2 #float division
# p 12.to_f #convert to float
# p sprintf "%.4f" % (1/3.0) #format a value
# p 1.2e-3 #scientific notation

#  Methods
# puts 1.2 - 1.0
# require 'bigdecimal'

# puts BigDecimal('1.2') - BigDecimal("1.0")

# Rational Numbers
# p 2.to_r 
# p Rational 0.5

# nil - same as null

# a = nil
# puts a


# Arrays
# a = [1,4,6]
# b = Array(1..6) # 1-6 - called a range
# c = Array(1...6) # 1-5 (all numbers up to, but **not including** the second one)
# p a
# p b
# p c


# Hashes are like JS objects but without methods

# domains = { 'location' => "United States" } #could do this
# domains = { :location => "United States" } #better to do this

# domains = { 'de' => "Germany", 1 => "Slovakia", :us => "United States" }
# p domains
# p domains['de']
# p domains[1]
# p domains[:us]

# Everything in Ruby is an object. Type of in JS
# p true.class, false.class
# p "Ruby".class
# p 1.class
# p 4.5.class
# p 3_463_456_457.class # like 3,463,456,457
# p :age.class
# p [1, 2, 3].class
# p({ :name => "Jane", :age => 17 }.class)

# Conversions
# p '4'.to_i #to integer
# p 4.to_s #to string
# p 5.to_f #to float
# p 0.5.to_r #to rational
# p "Jane".to_sym #to symbol


# Methods
# def h
# 	puts 'Hello World!'
# end
# h()
# h # also calls the function
# h.class # NilClass

# Control Flow

# If/Else
# a = 5
# if a > 1
# 	p 'greater than 1'
# elsif a == 1
# 	p 'equals 1'
# else
# 	p 'less than 1'
# end

# a = 5
# unless a >= 1
# 	p "less than 1"
# end

# a = 1
# puts 'equals 1' if a == 1
# puts 'not greater than 1' unless a > 1

# While
# a = 0
# while a < 5 do
# 	p a
# 	a+=1 # ++ does not exist. must do +=1 or another increment number
# end

# For loop (..) == up to, (...) == up to but not including
# for i in 0...5 do
# 	puts i
# end

# exercises

# If/Else
word = 'Loki'

if word.length > 10
    puts "too long"
elsif word.length < 10 && word.length > 5
    puts "just right"
else 
    puts "too short"
end

#  For Loop
i = 1
for i in 1 .. 10 do
    puts "#{i} times through"
end

#  For Loop

a = 20

for a in 20 .. 40 do
    puts a 
end