function showUbicacion(){
    document.getElementById(`ubicacion`).style.display="";
    document.getElementById(`datoDireccion`).style.display="none";
    document.getElementById(`direccion`).disabled=false;
    document.getElementById(`numero`).disabled=false;
    document.getElementById(`localidad`).disabled=false;
}
function showDireccion(){
    document.getElementById(`ubicacion`).style.display="none";
    document.getElementById(`datoDireccion`).style.display="";
    document.getElementById(`direccion`).disabled=true;
    document.getElementById(`numero`).disabled=true;
    document.getElementById(`localidad`).disabled=true;
}
