# Shapes Test
# Richard Price
# @RichExperiences

#  PRROJECT PREP - - - - - - - - 
backgroundA = new BackgroundLayer backgroundColor: "00F"
	
# Import file "project" with assets from Sketch
projectLayers = Framer.Importer.load("imported/project@1x")

# SETUP myButton - - - - - - - - - 

# get button
myButton = projectLayers.button

# place it top center
myButton.centerX()           
myButton.states.add
	stateA:
		y: 121
		scale: .8

	stateB:
		scale: 1.2
		x: 279
		y: 374
		
	stateC:
		x: 503
		y: 199
		scale: 1.2
		width: 115
		height: 31
		
myButton.onTap -> myButton.states.next()
              
#  SETUP Square Layer - - - - - - - - -             
        
# Create a layer an position it in the center 
layerA = new Layer
    x: Align.center
    y: Align.center
    backgroundColor: "f00"
 
# Create a state in the bottom right corner 
layerA.states.add
    a:
        x: Align.right
        y: Align.bottom
    b:
        x: Align.left
        y: Align.top
 
layerA.onTap -> layerA.states.next()





