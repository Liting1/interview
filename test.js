// 在本轮宏任务事件循环执行完毕后执行
process.nextTick(()=>{
	console.log('nextTick'); // 2
});
// 在执行微任务事件循环时执行
Promise.resolve().then(()=>{
	console.log('then'); // 3
});
// 在下一轮宏任务事件循环时执行
setTimeout(()=>{
	console.log('setTimeout1'); // 4
})
// 下一轮宏任务执行完毕后执行
setImmediate(()=>{
	console.log('setImmediate'); // 5
});
// 
console.log('end'); // 1