# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: "Animations"
	author: "Benjamin den Boer"
	twitter: "benjaminnathan"
	description: """
		An animation will tween between a start and end value, with a curve. The start value is determined when the animation starts, and the end value is defined by properties. If the start values equal to end values, they won't animate.
	
		More info:
		http://framerjs.com/docs/#animation.animation
	"""


# Set background color
Screen.backgroundColor = "#877DD7"

checkage = (age, country) ->
	if age >= 16
		print "carry on"
	else 
		print "get out of the car please"
		
		

# checkage(17, "usa")

fruits = ["apples","oranges","bananas"]
fruits.push("kiwis")

for fruit in fruits
	print fruit.toUpperCase()	
		

book =
	title: "Slauterhouse 5"
	pages: 255
	genre: ["SciFi","satire"]
	read: -> print "all this happened, more or less"

book.read()






























