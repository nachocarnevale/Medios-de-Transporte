var distancia,pie,bicicleta,colectivo,auto,avion;


distancia=prompt('Ingrese la distancia:','');

if (distancia <= 1000){
    document.write('tendrias que ir a pie');

  }else
        if (distancia<=10000)  {
      document.write('tendrias que ir en bicicleta');

    }else 
        if (distancia<=30000) {
      document.write('tendrias que ir en colectivo');

    }else 
        if (distancia<=100000) {
    document.write('tendrias que ir en auto');

    }else
        if (distancia>=100000)
    document.write('tendrias que ir en avion');
