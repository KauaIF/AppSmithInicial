export default {
	myVar1: '2022-01-10',
	myVar2: '2023-11-23T17:50:07.077Z',
	dateTransform (receivedDate) {
		//const currentDate = new Date();
		const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
		const monthsOfYear = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

		const dayOfWeek = daysOfWeek[receivedDate.getDay()];
		const month = monthsOfYear[receivedDate.getMonth()];
		const day = receivedDate.getDate();
		const year = receivedDate.getFullYear();

		return `${day} de ${month} de ${year}`;
	},
	datePadrao(receivedDate) {
		//const currentDate = new Date();
		const month = receivedDate.getMonth()+1;
		const day = receivedDate.getDate();
		const year = receivedDate.getFullYear();

		return `${year}-${month}-${day}`;
	}
}