// disparando evento com a ação do click no button verificar

var resultado  = ''
document
  .querySelector("#btn_verificar")
  .addEventListener("click", (e) => calcular());

function calcular() {
  let grauEsferico1 = document.querySelector("#ged").value; // valor do grau eferico do olho direito
  let grauEsferico2 = document.getElementById("gee").value; // valor do grau eferico do olho esquerdo
  let grauCilindrico1 = document.getElementById("gcd").value; // valor do grau cilindrico do olho direito
  let grauCilindrico2 = document.getElementById("gce").value; // valor do grau cilindrico do olho esquerdo

    if (grauCilindrico1  >= -2 && grauCilindrico2  >= -2 && grauCilindrico1  <= -1 && grauCilindrico2  <= -1 ) {
        if (grauEsferico1  >= -10 && grauEsferico2 >= -10 && grauEsferico1  <= -3 && grauEsferico2 <= -3 ) {
            resultado = "Lente Primer"
            
        } else {
        resultado = "nao"
            
        }
    }else if (grauCilindrico1  >= -5 && grauCilindrico2  >= -5 && grauCilindrico1  <= -1 && grauCilindrico2  <= -1 ) {
        if (grauEsferico1  >= -15 && grauEsferico2 >= -15 && grauEsferico1  <= 0 && grauEsferico2 <= 0 ) {
            resultado = "Lente Vision"
            
        } else {
        resultado = "nao"
            
        }
    } else {
        resultado = ""
    }

    var DivResultado = document.getElementById("resultado")
    DivResultado.innerHTML =resultado
}
//