const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here



let totalBatteries = batteryBatches.reduce(function(total, element){
    console.log(`Total: ${total}, Element: ${element}`)
        return total + element
    }
    ,0 )
    
