console.log("Welcome Harish!!!")

//Call Back function is a function passed as a parameter to an other funciton

let arr=[1,2,3,4,5]

// arr.forEach((e)=>{
//     console.log(e)
// })

// let filtered= arr.filter((e)=> e%2==0)

// console.log(filtered)

// function power(a,b){
//     return a**b
// }


// function DisplayPower(a,b)
// {
//     //console.log(typeof fn)
//     console.log(power(a,b))
// }

// DisplayPower(2,3)


//

// function foreach(array,callback)
// {
//     for ( let i =0; i<array.length; i++)
//         {
//             //console.log(typeof callback)
//             callback(array[i])
//         }
// }

// foreach(arr,(e)=>{
//     console.log(e)
// })

//let result=[]
// function filter(array,callback)
// {
//     let res=[]
//     for ( let i =0; i<array.length; i++)
//         {
//             //console.log(typeof callback)
//             if(callback(array[i]))
//             {   
//                 console.log(array[i])       
//             }
//         }
// }

// filter(arr,(e)=>e%2===0)


//Map

// let numbers = [4, 9, 16, 25];
// let newArr = numbers.map(Math.sqrt)
// console.log(numbers)


// Call back Hell

setTimeout(()=>{
    console.log("Time-out 1")
    setTimeout(()=>{
        console.log("Time-out 2")
        setTimeout(()=>{
            console.log("Time-out 3")
            setTimeout(()=>{
                console.log("Time-out 4")
                setTimeout(()=>{
                    console.log("Time-out 5")
                    setTimeout(()=>{
                        console.log("Time-out 6")
                        setTimeout(()=>{
                            console.log("Time-out 7")
                            setTimeout(()=>{
                                console.log("Time-out 8")
                                setTimeout(()=>{
                                    console.log("Time-out 9")
                                    setTimeout(()=>{
                                        console.log("Time-out 10")
                                        setTimeout(()=>{
                                            console.log("Harish")
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)