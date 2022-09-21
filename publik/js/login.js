// const tombol = document.getElementsByTagName('button')[1]

// tombol.addEventListener('click',()=>{
//     alert('berhasil')
// })

const login = document.getElementsByClassName('login')[0]
const register = document.getElementsByClassName('register')[0]
const slider = document.getElementsByClassName('container-3')[0]
const masuk = document.getElementsByClassName('masuk')[0]
const daftar = document.getElementsByClassName('daftar')[0]
window.addEventListener('load', function () 
{
   
    slider.style.marginLeft = '0%';
    slider.style.width = '100%';
    login.style.display='none';
    register.style.display='inline'
}, false)

masuk.addEventListener('click',()=>{
    slider.style.marginLeft = 0;
    slider.style.width = '100%';
    register.style.display='none'
    login.style.display='inline'
    
})


daftar.addEventListener('click',()=>{
    slider.style.marginLeft = '0%';
    slider.style.width = '100%';
    login.style.display='none';
    register.style.display='inline'

    
})


