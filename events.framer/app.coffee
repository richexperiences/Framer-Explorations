# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "Richard Price"
	twitter: ""
	description: ""

square = new Layer
	width: 300
	height: 100

square.backgroundColor = "green"

square.on Events.Click, ->
	square.animate
		properties: 
			opacity: .25
			x: 100
			y: 100
		rotation: 45
		time: 1.2
		curve: "ease-out"
		repeat: 2
		

width = Framer.Device.screen.width
height = Framer.Device.screen.height

print width
print height



















