const estado = {
  aguardando:"aguardando chute",
  ganhou:"ganhou",
  perdeu:"perdeu",  
}

class Forca {

  constructor(palavra, vidas = 6){
    this.vidas = vidas;
    this.estado_atual  = estado.aguardando
    this.palavra_forca = palavra
    this.palavra = Array(palavra.length).fill("_");
    this.letrasChutadas = []
  }
  chutar(letra) {

    if (letra.length > 1 || letra.length  < 0 ) return ;

    

    if (this.palavra_forca.includes(letra)){
      // se a letra existe na palavra_forca

      var array_palavra = this.palavra_forca.split("")

      for (var i = 0; i < array_palavra.length; i++){
        if (array_palavra [i] == letra){
          this.palavra[i] = letra;
        }
      }

      this.letrasChutadas.push(letra)
      var palavra_verificada = this.palavra.join("")
      if(palavra_verificada == this.palavra_forca){
        this.estado_atual = estado.ganhou
        return ;
      }
      

    }else {

      // pegar um valor e subtir 1 desse valor
      this.vidas--;
      if (this.vidas == 0){
        this.estado_atual = estado.perdeu
        return; 
      }

      // verificar se ja foi chutada
      if(this.letrasChutadas.includes(letra)){
        // a letra ja foi chutada
        return;
      }else {
        //a letra não foi chutada
        this.letrasChutadas.push(letra)
      }

    }


   }

  buscarEstado() { return this.estado_atual; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return this;
      // return {
      //     letrasChutadas: this.letras_chutadas, // Deve conter todas as letras chutadas
      //     vidas: 6, // Quantidade de vidas restantes
      //     palavra: [] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      // }
  }
}

module.exports = Forca;
