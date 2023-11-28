export default {
	pegaJson(){
	//let aux = listaIdentificada;
	let answer = Read_vacinas_do_dia.data.map((objeto) => objeto);
	if(answer.length==0){
		return Array([])
	}
	return answer
	},
	pegaDados(content){
		//let content = [{"tipo_vacina": 'V10', "nome_de_registro": 'Luna'}]
		if (content.length == 0){
			return "Não há avisos"
		}
		return 'Vacina: ' + content["tipo_vacina"] + '\nPara o cão: ' + content["nome_de_registro"]
	}
}