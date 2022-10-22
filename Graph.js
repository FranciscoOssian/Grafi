class Graph {
    constructor() {
        this.graphList = []
        this.v = []
        this.e = []
    }

    addVertex(v){
        if( this.v.indexOf(v) === -1 ){
            this.v.push(v)
        }
    }

    addEdge([u,v,w]){
        if (!this.graphList[u]) {
            this.graphList[u] = []
        }
        this.graphList[u].push([v,w])

        if (!this.graphList[v]) {
            this.graphList[v] = []
        }
        this.graphList[v].push([u,w])

        this.addVertex(u)
        this.addVertex(v)
    }
}