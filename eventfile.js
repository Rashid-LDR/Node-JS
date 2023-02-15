// var fs=require('fs');
// rs=fs.createReadStream('./demo.txt');

// rs.on('open',function(){console.log("file is open")})




// const { emit } = require('process');
//  var eventemiter=new events.EventEmitter();

//  eventemiter.on("speak",function(name){
//     console.log(name," is speaking");
//  });

//  eventemiter.emit("speak","Rashid");



// var em=new events.EventEmitter();

// var eventHandler=function(val_string){
//     console.log(val_string," is the Event call");
// }

// em.on("Play",eventHandler)

// em.emit("Play","Cricket");



// var eventCall=new  events();

// eventCall.on("Play",()=>{
//     console.log("Hello Event");
// });

// eventCall.emit("Play");

var {events, errorMonitoring}=require('events');

const en=new events();

// en.on("check",()=>{
//     setImmediate(()=>{
//        console.log("Hello")
//     })
// })

// en.emit("check");

// let n=0;
// en.on(errorMonitoring,(err)=>{
//     MyMonitoringTool.log(err);
// })

// en.emit("error",new Error("Hay New Error"));

// en.emit("play",n);
