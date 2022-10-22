class GrafiCanvas extends Graph{
    constructor(canvas){
        super()
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
    }

    draw(){
    
    }

    nodeFrabric(label){

    }

    drawGraphCircle(){
        const ctx = this.ctx
        let i = 0
        let j = 360 / this.v.length

        let middleW = this.canvas.width / 2
        let middleH = this.canvas.height / 2

        let raio = 100
        let nodeSize = 40

        function toRadians (angle) {
            return angle * (Math.PI / 180);
        }

        for (let n of this.v){
            ctx.beginPath();
            let xMove = raio * Math.cos(toRadians(i))
            let yMove = raio * Math.sin(toRadians(i))
            let pos = [middleW + yMove, middleH + xMove]
            ctx.arc(pos[0], pos[1], nodeSize, 0, 2 * Math.PI);
            ctx.font = "20px Arial";
            ctx.fillText(`${n}`, pos[0], pos[1]);
            ctx.stroke();
            i = i + j
        }
    }

    addEdge( [u,v,w] ){
        super.addEdge( [u,v,w] )
    }
}