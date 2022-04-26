function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.Value == 0 || fim.value == 0 || passo.value == 0){
        res.innerHTML = 'Impossivel contar'
       // window.alert('[ERROR] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        
        if (i < f){
            // Contagem cresente
            for (let c = i; c <= f; c += p){
                res.innerHTML += `😂${c}`
            }
        }else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} 😁`
            }
        }
        res.innerHTML += `🤔`
        
    
    }
}