
const turnos=document.querySelector('#turnos');
const modalTurno=document.querySelector("#modal-turno");
let turnoAgregado=[];
console.log(modalTurno)
eventLisener();
function eventLisener() {
    turnos.addEventListener('click',agregarTurno);
    
}


function agregarTurno(e){
    e.preventDefault();
   if(e.target.classList.contains("agregar-turno")){
        const infoDoc=e.target.parentElement.parentElement;
        console.log(infoDoc)
        turnoSeleccionado(infoDoc)
   }
}

function turnoSeleccionado(turno){
    const objTurno={
        imagen:turno.querySelector("img").src,
        nombre:turno.querySelector("h5").textContent,
        especialidad:turno.querySelector("p").textContent
    }
    turnoAgregado=[objTurno];
    mostrarTurno();
    console.log(turnoAgregado)
}


function mostrarTurno() {
    turnoAgregado.map(turno=>{
        const{imagen,nombre,especialidad}=turno
        modalTurno.querySelector("h5").textContent=nombre;
        modalTurno.querySelector("p").textContent=especialidad;
        modalTurno.querySelector("img").src=imagen
    })
    
}

function llamarAlerta() {
    
    swal({
        title: "Exelente",
        text: "Su turno se creo correctamente",
        icon: "success",
        button: "Descargar comprobante",
        
      });
}
function llamarCancelar(){
    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });
}
document.getElementById('alerta-turno').addEventListener('click',(e)=>{
    e.preventDefault()
    llamarAlerta()
})

document.getElementById('cancelar-turno').addEventListener('click',(e)=>{
    e.preventDefault();
    llamarAlerta()
    llamarCancelar()
    console.log("se cancelo turno")
    
})