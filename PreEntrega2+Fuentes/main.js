var elP1=new Array();

for(var i=1;i<=1;i++)
{
    var nombre =prompt("Introduce el nombre del corredor 1");
    elP1.push(nombre);
    var edad =prompt("Introduce su edad");
    while(edad == null || /\D/.test(edad) || edad == "");
    elP1.push(edad);
    var equipo =prompt("Elige tu equipo: Mercedes--Ferrari--Red Bull");
    if( equipo === "Red Bull"){
        alert("Bienvenido equipo Red Bull!");
    }else if(equipo === "Mercedes"){
        alert("Bienvenido equipo Mercedes!");
    }else if(equipo === "Ferrari"){
        alert("Bienvenido equipo Ferrari!");
    }else{
        alert("Wow un nuevo equipo entro a la competencia!!!");
    }
    elP1.push(equipo);
}
var elP2=new Array();

for (var i = 1; i <= 1; i++) {
    var nombre = prompt("Introduce el nombre del corredor 2");
    elP2.push(nombre);
    var edad = prompt("Introduce su edad");
    while (edad == null || /\D/.test(edad) || edad == "");
    elP2.push(edad);
    var equipo = prompt("Elige tu equipo: Mercedes--Ferrari--Red Bull");
    if (equipo === "Red Bull") {
        alert("Bienvenido equipo Red Bull!");
    } else if (equipo === "Mercedes") {
        alert("Bienvenido equipo Mercedes!");
    } else if (equipo === "Ferrari") {
        alert("Bienvenido equipo Ferrari!");
    } else {
        alert("Wow un nuevo equipo entro a la competencia!!!");
    }
    elP2.push(equipo);


    console.log(elP1);
    console.log(elP2);


    const p1 = elP1.slice(0, 1);
    console.log(p1);

    const p2 = elP2.slice(0, 1);
    console.log(p2);


    const MIN_SPEED = 80;
    const MAX_SPEED = 130;

    let vuelta = 0;
    let ganA = 0;
    let ganB = 0;

    for (let i = 1; i <= 10; i++) {

        vuelta += 1;

        let VelocidadA = Math.ceil(Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED);
        let VelocidadB = Math.ceil(Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED);

        console.log('----- vueltas ' + vuelta + '-----');

        console.log("El corredor " + p1 + " va a " + VelocidadA + " Km/h hacia la vuelta " + vuelta);
        console.log("El corredor " + p2 + " va a " + VelocidadB + " Km/h hacia la vuelta " + vuelta);

        if (VelocidadA === VelocidadB) {
            console.log("empatan");
        } else if (VelocidadA > VelocidadB) {
            console.log("ganá la vuelta" + " " + vuelta + " Corredor " + p1 + "!!!");
            ganA += 1;
        }
        else {
            console.log("ganá la vuelta" + " " + vuelta + " Corredor " + p2 + "!!!");
            ganB += 1;
        }
    }

    console.log('----------- Ganador -------------');
    
    if(ganA === ganB){
    alert("Esperen un momento puede ser posible que ...!!")
    }else{
    alert("y el Ganador es ....")
    }
    

    if (ganA === ganB) {
        alert("Empataron!!!,Solo los genios hacen eso, hay que cerrar el estadio!!! Sera hasta la Proxima semana!!!");
        console.log("Empataron!!!,Solo los genios hacen eso, hay que cerrar el estadio!!! Sera hasta la Proxima semana!!!");
    } else if (ganA > ganB) {
        alert("Ganó " + p1 + "!!");
        console.log("Ganó " + p1 + "!!");
    } else {
        alert("Ganó " + p2 + "!!");
        console.log("Ganó " + p2 + "!!");
    }
}