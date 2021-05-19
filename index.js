const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(function(total, batches){
    console.log(batches)
    console.log(total)   
    return batches + total
    })