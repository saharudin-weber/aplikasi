//////////cards 
const layoutCard = document.querySelector(' .rigth-Button .cards .card .cards-layout')

// const layoutCards1 = layoutCard.style.marginLeft = '-100%'
// const layoutCards2 = layoutCard.style.marginLeft = '-200%'
// const layoutCards3 = 
// const layoutCards4 = layoutCard.style.marginLeft = '0%'

// const layoutCards = layoutCard.style.marginLeft
// let data1 = 0

//  let data1 = 0
let data1=0
setInterval(() => { 

  layoutCard.style.marginLeft = `-${data1}00%`
    data1++
    if(data1 >3){
        data1 =0
    }
  
}, 2500);
