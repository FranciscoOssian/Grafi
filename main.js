const canvas = document.getElementsByTagName('canvas')[0]
const context = canvas.getContext('2d')

const grafiCanvas = new GrafiCanvas(canvas)

grafiCanvas.addEdge( [1,6,2] )
grafiCanvas.addEdge( [4,6,2] )

console.log(grafiCanvas.graphList)
console.log(grafiCanvas.graphList[3])

grafiCanvas.drawGraphCircle()

canvas.style.backgroundColor = 'red'
