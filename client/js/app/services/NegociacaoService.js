class NegociacaoService {

    constructor(){
        this._http = new HttpService()
    }



    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {
            console.log(this._http.get('negociacoes/semana'));
            
            this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana');
                })
    })};
    
    obterNegociacoesDaSemanaAnterior() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/anterior')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana anterior');
                })
    })};

    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana retrasada');
                })
    })};
}
    


    


  



//     obterNegociacoesDaSemanaAnterior(){
        
//         return new Promise((resolve, reject) => {
//             let xhr = new XMLHttpRequest()

//         xhr.open('GET', 'negociacoes/anterior');
        
//         xhr.onreadystatechange = () => {
//             if(xhr.readyState == 4) {
//                 if(xhr.status == 200) {
                
//                     resolve(JSON.parse(xhr.responseText)
//                 .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                
//                 } else {
//                     reject('Não foi possível importar as negociações da semana anterior')
//             }
//         }   
//     }
//         xhr.send()   
//         }
// )}



   

