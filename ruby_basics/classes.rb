
class Muppet
    def initialize name
        @name = name
        @color = color
    end

    def name 
        @name
    end

    def color
       color = ['red', 'green', 'blue', 'purple', 'yellow']
       color.sample
    end

    def honk
        puts "#{name} is making a honking sound!"
    end

    def flail 
       puts "#{name} is flailing its arms!"
    end


end

muppet1 = Muppet.new 'Loki'

p muppet1.name
p muppet1.color

# p muppet1.honk

q = Muppet.new("K-Rad")
q.honk
q.flail

# Create Birds

class Birds
    attr_accessor :name
    attr_accessor :adjective
    def initialize adjective, name
       @name = name
       @adjective = adjective
        @species = species
    end

    def name=value
        @name = value
    end

    def adjective
        @adjective
    end


    def species
        species =   ['Belted Kingfisher', 'Yellow-Billed Cuckoo', 'White-Cheeked Pintail', 'Cinnamon Teal', 'Lesser Scaup', 'Bufflehead', 'Common Goldeneye', 'Fulvous Whistling Duck', 'Hooded Merganser', 'White-Winged Scoter', 'Chimney Swift', 'Rufous Hummingbird', 'Chuck-Wills-Widow', 'Whip-Poor-Will', 'Albatross', 'Ruddy Turnstone', 'Piping Plover', 'Killdeer', 'Laughing Gull', 'Marbled Godwit', 'Least Tern', 'New World Warbler']
        species.sample
    end

    def hungry
        p "#{name} wants some regurgitated worms!"
    end

    def fly
        p "Flap! #{name} is taking flight!"
    end

end

bird1 = Birds.new 'fun','Aarik'

p bird1.species

bird1.hungry

bird1.fly

bird1.name = 'Loki'

p bird1.name

class Dessert
    def initialize name, sugar_content
        @name = name
        @sugar_content = sugar_content
    end

    def eat
        p "Yum! This #{name} is sooooo delicious!"
    end
end

class Pie < Dessert
    def initialize name
     @name = name 
    end

    def name 
        @name
    end
end

class DeepFriedDessert < Dessert
    def initialize name
        @name = name
    end

    def name 
        @name
    end

    
    def eat
       p "Yum! This #{name} is sooo...ack! ugh! *heart-attack*"
    end 
end

class IceCream < Dessert
    def initialize name, sugar_content
        @toppings = toppings
        super
    end

    def name 
        @name
    end

    def toppings
        @toppings
    end
end


a = IceCream.new 'Cherry', '15g'

p a.name

a.eat

