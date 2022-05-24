var saldoTotal=10;
var totalAmmount= parseInt(saldoTotal)

function back(){
    var exp=document.getElementById('forms').textview.value
    
    exp = exp.substring(0,exp.length - 1);

    document.getElementById('forms').textview.value=exp;
};



function cardcheck(){
    document.getElementById('msg').innerHTML="Procesando...";
    var textv=document.getElementById('textview').value;

    if(textv==""){
        document.getElementById('msg').innerHTML="Numero de cliente no ingresado";
    }
    else{
        if(textv==1111)
        {
            document.getElementById('msg').style.color="green";
            document.getElementById('msg2').innerHTML="BIENVENIDO MALI";
            document.getElementById('msg').innerHTML="Ingresa tu contraseña";
            document.getElementById('textview').value="";
            document.getElementById('btnproced').setAttribute("onclick","passcheck()");
        }
        else{
            document.getElementById('msg').innerHTML="Numero de cuenta incorrecto";
            document.getElementById('msg').style.color="red";
            
        }
        if(textv==1112)
        {
            document.getElementById('msg').style.color="green";
            document.getElementById('msg2').innerHTML="BIENVENIDO GERA";
            document.getElementById('msg').innerHTML="Ingresa tu contraseña";
            document.getElementById('textview').value="";
            document.getElementById('btnproced').setAttribute("onclick","passcheck()");
        }
        else{
            document.getElementById('msg').innerHTML="Numero de cuenta incorrecto";
            document.getElementById('msg').style.color="red";
            
        }
        if(textv==1113)
        {
            document.getElementById('msg').style.color="green";
            document.getElementById('msg2').innerHTML="BIENVENIDO MARIU";
            document.getElementById('msg').innerHTML="Ingresa tu contraseña";
            document.getElementById('textview').value="";
            document.getElementById('btnproced').setAttribute("onclick","passcheck()");
        }
        else{
            document.getElementById('msg').innerHTML="Numero de cuenta incorrecto";
            document.getElementById('msg').style.color="red";
            
        }
    }
};



function passcheck(){
    var textv=document.getElementById('textview').value;
    if(textv==""){
        document.getElementById('msg').innerHTML="contraseña no ingresada";
    }
    else{
        if(textv==1234){
        document.getElementById('msg').style.color="blue";
        document.getElementById('msg2').innerHTML="CONTRASEÑA CORRECTA";
        document.getElementById('msg').innerHTML="Elija una opcion";
        document.getElementById('textview').value="";
        document.getElementById('menu').style.display="block";
        document.getElementById('textview').style.display="none";
        document.getElementById('btnproced').setAttribute("onclick","");
        }
        else{
            document.getElementById('msg2').innerHTML="";
            document.getElementById('msg').innerHTML="contraseña incorrecta";

        }
    }
};




//Funcion para hace rel calculo cuando se retira dinero

function withdraw() {
    document.getElementById('msg').innerHTML="Ingresa la cantidad a retirar"
    document.getElementById('menu').style.display="none"
    document.getElementById('menuback').style.display="block"
    document.getElementById('btnproced').setAttribute("onclick","calculation1()")
    document.getElementById('textview').style.display="block"
}



function calculation1() {
    var textview=document.getElementById('textview').value;
    var textv=parseInt(textview);
    if(textv=="" || textv==0)
        {
            document.getElementById('msg2').innerHTML="No se ingreso ningun monto";
            document.getElementById('msg').innerHTML=""; 
        }
    else{
        if(totalAmmount>10 && textv<totalAmmount){
            totalAmmount=totalAmmount-textv;
            document.getElementById('msg2').innerHTML="Tu saldo es: ";
            document.getElementById('msg').innerHTML=totalAmmount;
            document.getElementById('textview').value="";
        }
        else{
            document.getElementById('msg').innerHTML="SALDO INSUFICIENTE";
        }
    }
};




function credit() {
    document.getElementById('msg').innerHTML="Ingresa el monto a ingresar";
    document.getElementById('menu').style.display="none";
    document.getElementById('menuback').style.display="block";
    document.getElementById('msg2').innerHTML="";
    document.getElementById('btnproced').setAttribute("onclick","calculation2()");
    document.getElementById('textview').style.display="block";
};



function calculation2() {
    var textv=document.getElementById('textview').value;
    if(textv=="" || textv==0)
        {
        document.getElementById('msg2')="No se ingreso ningun monto";
        document.getElementById('msg').innerHTML=""; 
        }
    else{
        if(textv>980 || totalAmmount>=990){
            document.getElementById('msg2').innerHTML="Tu cuenta no debe de tener más de $990";
            document.getElementById('msg').innerHTML=totalAmmount;
            document.getElementById('textview').value="";
        }
        else{
        totalAmmount=totalAmmount+parseFloat(textv);
        document.getElementById('msg2').innerHTML="Tu saldo es: ";
        document.getElementById('msg').innerHTML=totalAmmount;
        document.getElementById('textview').value="";   
    }
    }
};


function menuback(){
    document.getElementById('menu').style.display="block";
    document.getElementById('menuback').style.display="none";
    document.getElementById('btnproced').setAttribute("onclick","");
    document.getElementById('consult2').style.display="none";
    document.getElementById('msg').innerHTML="SELECCIONA UNA OPCION";
    document.getElementById('msg2').innerHTML="";

};



function consult(){
    var textv=document.getElementById('textview').value;
    document.getElementById('consult2').style.display="block";
    document.getElementById('textview').style.display="none";
    document.getElementById('msg').innerHTML="";
    document.getElementById('msg2').innerHTML="";
    document.getElementById('main-balance').innerHTML=totalAmmount;
    document.getElementById('menuback').style.display="block";
    document.getElementById('credit').innerHTML=textv;
    document.getElementById('debit').innerHTML=textv;
    document.getElementById('menu').style.display="none";
};




    
    function exit(){
        document.getElementById('msg').innerHTML="Ingresa tu numero de cuenta";
        document.getElementById('btnproced').setAttribute("onclick","cardcheck()");
        document.getElementById('msg2').innerHTML="";
        document.getElementById('menu').style.display="none";
        document.getElementById('textview').value="";
        document.getElementById('textview').style.display="block";
    }






       