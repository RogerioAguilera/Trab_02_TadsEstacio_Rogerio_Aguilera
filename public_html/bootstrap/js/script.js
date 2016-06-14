
//mascaras cpf, cep, telefone 
$(document).ready(function () {
    $("#telefone").mask('(00) 0000-0000');
    $("#cpf").mask('000.000.000-00');
    $("#cep").mask('00000-000');
});

// testando e validando Cpf
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
	if (strCPF == "00000000000") return false;
    
	for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
	Resto = (Soma * 10) % 11;
	
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
	
	Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
	
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
var strCPF = "12345678909";
alert(TestaCPF(strCPF));


    function Editar(){
        
		tabelaCliente[posicao] = JSON.stringify({
			cpf: $("#cpf").val(), 
			nome: $("#nome").val(), 
			estadoCivil: $("#estadoCivil").val(),
			sexo: $("#sexo").val(),
			telefone: $("#telefone").val(),
			cep: $("#cep").val(),
			endereco: $("#endereco").val(),
			bairro: $("#bairro").val(),
			estado: $("#estado").val(),
			cidade: $("#cidade").val(),
			email: $("#email").val(),
			senha: $("#senha").val(),
			obs: $("#obs").val()
			
		});
		localStorage.setItem("Dados", JSON.stringify(tabelaCliente));
		alert("Registro adicionado");
		return true;
                
    }
    function adicionar() {
		var cliente = JSON.stringify({
			cpf: $("#cpf").val(), 
			nome: $("#nome").val(), 
			estadoCivil: $("#estadoCivil").val(),
			sexo: $("#sexo").val(),
			telefone: $("#telefone").val(),
			cep: $("#cep").val(),
			endereco: $("#endereco").val(),
			bairro: $("#bairro").val(),
			estado: $("#estado").val(),
			cidade: $("#cidade").val(),
			email: $("#email").val(),
			senha: $("#senha").val(),
			obs: $("#obs").val()
		
		});
		tabelaCliente.push(cliente);
		localStorage.setItem("Dados", JSON.stringify(tabelaCliente));
		alert("Registro adicionado");
		return true;
	}
        
        function Excluir(){
	tabelaCliente.splice(indice_selecionado, 1);
	localStorage.setItem("tabelaClientes", JSON.stringify(tabelaClientes));
	alert("Registro excluído.")

        }





