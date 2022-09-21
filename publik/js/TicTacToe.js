const content = document.getElementsByClassName('content')[0]

const checks = content.getElementsByClassName('x')

for (const iterator of checks) {
    iterator.addEventListener('click',function(e){
   if(content.classList.contains('0')){
        if(iterator.textContent === ''){
             iterator.innerHTML='X';
             if(!draw[iterator]){
                content.classList.toggle('0')
             }
        }
   }else{
    if(iterator.textContent === ''){
            iterator.innerHTML='O';
            if(!draw[iterator]){
                content.classList.toggle('0')
             }}

   }
})
}

const spans = document.getElementsByTagName('span')

function draw (data){
    const result = checks[data].textContent === 'X' || checks[data].textContent === 'O' ? true : false
    return result
}
 function restart(){
    for (const iterator of checks) {
        iterator.innerHTML=''
    }
}

    setInterval(()=>{
    if( draw(0) && draw(1) && draw(2)&& draw(3)&& draw(4)&& draw(5)&& draw(6)&& draw(7)&&draw(8)){
        alert('DRAW')
        restart()
    }

    },1000)


function tambah(e){
    let data = spans[0].textContent;
   let data1 = spans[1].textContent;
    if(e === 'X'){
        
        if( spans[0].textContent ===  ''){
          spans[0].textContent=1  
        }else{
            // console.log(parseInt(data))
            data = parseInt(data) + 1
            spans[0].textContent=data 
        }
        
    }else{
        if( spans[1].textContent ===  ''){
          spans[1].textContent=1  
        }else{
            // console.log(parseInt(data))
            data1 = parseInt(data1) + 1
            spans[1].textContent=data1 
        }

    }

}

function hasil(e){
    setInterval(()=>{
  if (checks[0].innerHTML ===e && checks[1].innerHTML === e  && checks[2].innerHTML ===e ){
        alert(` the winner is ${e}`)
        tambah(e)
        return restart()

     }else if(checks[3].innerHTML ===e && checks[4].innerHTML === e  && checks[5].innerHTML ===e ){
        alert(` the winner is ${e} `)
        tambah(e)
        return restart()
     }else if(checks[6].innerHTML ===e && checks[7].innerHTML === e  && checks[8].innerHTML ===e ){
        alert(` the winner is ${e} `)
        tambah(e)
        return restart()
     } else if(checks[0].innerHTML ===e && checks[3].innerHTML === e  && checks[6].innerHTML ===e ){
        alert(` the winner is ${e} `)
        tambah(e)
        return restart()
     } else if(checks[1].innerHTML ===e && checks[4].innerHTML === e  && checks[7].innerHTML ===e ){
        alert(` the winner is ${e} `)
        tambah(e)
        return restart()
     } else if(checks[2].innerHTML ===e && checks[5].innerHTML === e  && checks[8].innerHTML ===e ){
        alert(` the winner is ${e} `)
        tambah(e)
        return restart()
     } else if(checks[0].innerHTML ===e && checks[4].innerHTML === e  && checks[8].innerHTML ===e ){
        alert(` the winner is ${e} `)
        tambah(e)
        return restart()
     } else if(checks[2].innerHTML ===e && checks[4].innerHTML === e  && checks[6].innerHTML ===e ){
        alert(` the winner is ${e} `)
        tambah(e)
        return restart()
     } 
},100) 
}

hasil('O')
hasil('X')
