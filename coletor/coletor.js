const WebSocket = require('ws')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const server = new WebSocket('ws://localhost:4000')

//Ao final, adicionar mais moedas, trade etc. levar em consideração 
const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin')


server.onopen = function() {
    console.log('Conectou ao servidor')
    
    pricesWs.onmessage = function(message) {

        server.send(message.data)
    }
    

}




