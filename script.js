// variaveis do cadrasto
alert("--- Cadastro de Usuário ---")
let nomeCadrastro = prompt("Qual o seu nome?").toLowerCase()
let idadeCadrasto = parseInt(prompt("qual sua idade"))
let senhaCadrasto = prompt("qual sua senha?").toLowerCase()

// testa se é na idade correta
if(idadeCadrasto > 0 && idadeCadrasto >= 13){
    alert(`
        Cadastro realizado com sucesso!
        `)

        //se caso for, vai para a parte do login
    alert("--- Login ---")
    //variaveis do login
    let nomeLogin = prompt("digite seu nome!").toLowerCase()
    let senhaLogin = prompt("digite sua senha!").toLowerCase()
    //teste para ver se os dado foram inseridos corretamente
    if(nomeLogin === nomeCadrastro && senhaLogin === senhaCadrasto){
        alert(`
            Login realizado com sucesso! Bem-vindo, ${nomeCadrastro}.
            `)
    } else {
        //mensegem q mostra se errar o login
        alert("Nome ou senha incorretos. Tente novamente.")
    }
// caso se a idade foi invalida
} else {
    alert(`
        --- Cadastro de Usuário ---
        Você não pode se cadastrar. Idade mínima: 13 anos.
        `)
}
