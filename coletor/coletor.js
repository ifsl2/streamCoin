const net = require('net')
const WebSocket = require('ws')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const client = new net.Socket()

const pricesWs1 = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin');

client.connect(4000, '127.0.0.1', () => {
    console.log('Conectou')
    rl.addListener('line', line => {
        pricesWs1.onmessage = function (msg) {
            console.log(msg.data)
            client.write(msg.data)
        } 
        
    })
    client.on('data', data => {
        const str = data.toString()
        console.log(str)
    })

})





