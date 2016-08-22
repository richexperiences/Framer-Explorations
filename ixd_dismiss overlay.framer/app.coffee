# Import file "example1_popup"
file = Framer.Importer.load("imported/example1_popup@1x")
# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "Richard Price"
	twitter: ""
	description: ""


layerHeight = file.popup.height

file.close.on Events.Click, ->
	
	file.popup.animate
		properties: 
			opacity: 0	
			y: 0 - layerHeight
		time: .4
		curve: "ease-in"

file.mustache.scale = 0

file.popup.on Events.AnimationEnd, ->
	
	file.mustache.animate
		properties: 
			scale: 1
		curve: "spring(200,15,0)"


