let countdown = document.getElementById("countdown")
let bd = document.querySelector("body")
let h4=document.querySelector("h4")
let spin= document.getElementById("spinner")

bd.setAttribute('style','background-color: antiquewhite')


console.log(countdown.innerText)


setTimeout(()=>{
    countdown.innerText="10"
    setTimeout(()=>{
        countdown.innerText="9"
        setTimeout(()=>{
            countdown.innerText="8"
            setTimeout(()=>{
                countdown.innerText="7"
                setTimeout(()=>{
                    countdown.innerText="6"
                    setTimeout(()=>{
                        countdown.innerText="5"
                        setTimeout(()=>{
                            countdown.innerText="4"
                            setTimeout(()=>{
                                countdown.innerText="3"
                                setTimeout(()=>{
                                    countdown.innerText="2"
                                    setTimeout(()=>{
                                        countdown.innerText="1"
                                        setTimeout(()=>{
                                            bd.setAttribute('style','background-image: linear-gradient(to right, #eec5dd, #e5c3e2, #dac1e6, #cdc0ea, #bec0ec, #afc5f3, #9ecbf7, #8cd0f7, #7bdcf5, #76e6ec, #84eedc, #9ff4c8);')
                                            spin.remove()
                                            h4.innerText=""
                                            countdown.setAttribute('style','font-size: 50px;margin-top: 100px;')
                                            bd.setAttribute('style','background-image: linear-gradient(to right, #FF671F, #FFFFFF, #046A38);')
                                            countdown.innerHTML="Happy Independence Day"
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