var canvas = document.querySelector("canvas")

var rectangle = canvas.getContext("2d")
rectangle.beginPath()
rectangle.moveTo(85,302)
rectangle.lineTo(184,302)
rectangle.lineTo(184,401)
rectangle.lineTo(85,401)
rectangle.lineTo(85,302)
rectangle.fillStyle = "yellow"
rectangle.strokeStyle = "black"
rectangle.lineWidth = 5
rectangle.fill()
rectangle.stroke()
rectangle.closePath()

var shape = canvas.getContext("2d")

shape.beginPath()
shape.moveTo(557,308)
shape.lineTo(667,283)
shape.lineTo(725,380)
shape.lineTo(650,465)
shape.lineTo(548,421)
shape.lineTo(557,308)
shape.fillStyle = "#ff00ff"
shape.strokeStyle = "#00ffff"
shape.lineWidth = 5 
shape.fill()
shape.stroke()
shape.closePath()


var circle = canvas.getContext("2d")

circle.beginPath()
circle.arc (385,441,66,0,2 * Math.PI)
circle.fillStyle = "#ffff00"
circle.strokeStyle = "red"
circle.lineWidth = 5
circle.fill()
circle.stroke()
circle.closePath()

var star = canvas.getContext("2d")

star.beginPath()
star.moveTo(635,496)
star.lineTo(668,554)
star.lineTo(733,567)
star.lineTo(689,615)
star.lineTo(696,681)
star.lineTo(635,654)
star.lineTo(575,681)
star.lineTo(583,615)
star.lineTo(538,567)
star.lineTo(603,554)
star.lineTo(635,496)
star.fillStyle = "#ffff00"
star.strokeStyle = "rgb(32,32,32)"
star.lineWidth = 5
star.fill()
star.stroke()
star.closePath()

var line = canvas.getContext("2d")

line.beginPath()
line.moveTo(85,682)
line.lineTo(278,549)
line.strokeStyle = "rgb(255, 0, 0)"
line.lineWidth = 5
line.stroke()
line.closePath()