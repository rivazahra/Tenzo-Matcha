
const email = document.getElementById('email')
const btn = document.getElementById('klik')


btn.addEventListener('click' ,()=>{
    if(email.value){
        alert('Selamat Kupon 40% telah diambil')
        email.value = ''
    }else{
        alert("Masukkan Email terlebih dahulu")
    }
})

// alert ('halo')