const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// const totalBatteries = (array) => {
//     // return array.reduce(function(total, batch) {return batch + total}, 0)
//     // return array.reduce((total,batch) => batch + total, 0)
// }

const totalBatteries = batteryBatches.reduce(function(total, batch){
    return batch + total}, 0)


console.log(totalBatteries)