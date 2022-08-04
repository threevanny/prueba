function numeroPerfecto(n, rango){
  let aux = 0
  for (let i = 1; rango < 7; i++) {
    if(i % 2 == 0){
      for (let j = i/2; j >= 1; j--){
        if(i % j == 0){
          aux = aux + j
        }
        if(aux == j){
          console.log(n, " Es Perfecto")
        }
      }
      aux = 0
    }
  }
}