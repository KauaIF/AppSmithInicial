export default {
	async treyLogar(){
		let Tentativa = false
		Api1.data.forEach(credential => {// credential is the object = {username, password}
  		if (credential.name === Form1.data.Input1 && credential.password === Form1.data.Input2) {
    		Tentativa = true
  		}
		})
		if (Tentativa){
			navigateTo('Cadastro de Cão', {}, 'SAME_WINDOW');
		}
	}
}