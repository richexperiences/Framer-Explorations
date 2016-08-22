# Import file "example2_dropdown"
file = Framer.Importer.load("imported/example2_dropdown@1x")
# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "Richard Price"
	twitter: ""
	description: ""



oWidth = file.menu_content.width
oHeight = file.menu_content.height	

file.menu_content.width = 0
file.menu_content.heigt = 0	
	
file.menu_content.states.add
	open: 
		width: oWidth
		heigt: oHeight
	closed:
		width: 0
		heigt: 0	
		
file.menu_content.states.animationOptions = 
	time:.2
	curve: "ease-out"
		
file.menu_icon.on Events.Click, ->
	file.menu_content.states.next()	
