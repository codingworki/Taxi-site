function calc() {
    wherefrom  = document.getElementById('wherefrom').value;
    switch (wherefrom) {
       case "1":
          cena = 0;
          break
       case "2":
          cena = 0;
          break   
    }

    whereto  = document.getElementById('whereto').value;
    switch (whereto) {
       case "11":
          cena = 0;
          break
       case "22":
          cena = 0;
          break   
    }

    address  = document.getElementById('address').value;
    switch (address) {
       case "3":
          cena = 600;
          break
       case "4":
          cena = 800;
          break  
        case "5":
            cena = 600;
        break 
        case "6":
            cena = 600;
        break         
    }

   if(wherefrom == 2){
      price = 800;
      document.getElementById('price').innerHTML = "Итоговая стоимость поездки равна: "+ price +" рублей";
    }

    else if(wherefrom == whereto){
        price = "";
        document.getElementById('price').innerHTML = "Вы не правильно указали город";
    } 
    else if(wherefrom == 1){
        price = 600;
        document.getElementById('price').innerHTML = "Итоговая стоимость поездки равна: "+ price +" рублей";
    }
      else{
        price = parseFloat (wherefrom)+ parseFloat (address);
        document.getElementById('price').innerHTML = "Итоговая стоимость поездки равна: "+ price +" рублей";
  
}
}
