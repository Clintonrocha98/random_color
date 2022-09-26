const btn = document.querySelector('#btn')
const area_color = document.querySelector('#color')
    
document.body.style.backgroundColor = hexCorCodigo()
area_color.textContent = hexCorCodigo()

function hexCorCodigo(){
    let chars = "0123456789abcdef";
    let cor = ""

    for (let i = 0; i < 6 ; i++){
        let corAleatoria = Math.floor(Math.random() * chars.length)
        cor += chars.substring(corAleatoria,corAleatoria+1)
    }
    return '#' + cor
}

btn.addEventListener('click', ()=>{
    document.body.style.backgroundColor = hexCorCodigo()
    area_color.textContent = hexCorCodigo()
})
