function contar() {
    var inc = document.getElementById('txtinc')
    var fm = document.getElementById('txtfm')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (inc.value.length == 0 || fm.value.length == 0 || passo.value.length == 0 ) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!' 
    } else {
        res.innerHTML = ('Contando: <br>')
        var i = Number(inc.value)
        var f = Number(fm.value)
        var p = Number(passo.value)

        if (p <= 0){
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for (var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        } else {
            // contagem regressiva
            for (var c = i; c <= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}