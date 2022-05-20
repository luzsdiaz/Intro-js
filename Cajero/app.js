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
        document.getElementById('msg').innerHTML="Numero de cliento no ingresado";
    }
    else{
        if(textv=1111)
        {
            document.getElementById('msg').style.color="blue";
            document.getElementById('msg2').innerHTML="Numero de cuenta correcto";
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
        document.getElementById('msg2').innerHTML="contraseña correcta";
        document.getElementById('msg').innerHTML="Elija una opcion";
        document.getElementById('textview').value="";
        document.getElementById('menu').style.display="block";
        document.getElementById('textview').style.display="none";
        document.getElementById('btnproced').setAttribute("onclick","");
        }
        else{
            document.getElementById('msg2').innerHTML="";
            document.getElementById('msg').innerHTML="contraseña icorrecta";

        }
    }
};

//Esta funcion se agrego para que te pida un token y poder realizar la operacion
function withdraw(){
    document.getElementById('msg2').innerHTML="Digita tu token temporal que esta en pantalla";
    document.getElementById('menu').styledisplay="none";
    document.getElementById('menuback').styledisplay="block";
    document.getElementById('btnproced').setAttribute("onclick","tokenVerification()");
    document.getElementById('textview').styledisplay="block";
    captcha();
};


//Funcion para hace rel calculo cuando se retira dinero
function calculation1() {
    var textview=document.getElementById('textview').value;
    var textv=parseInt(textview);
    if(textv=="" || textv==0)
        {
            document.getElementById('msg2').innerHTML="No se ingreso ningun monto";
            document.getElementById('msg').innerHTML=""; 
        }
    else{
        if(totalAmmount>1 && textv<totalAmmount){
            totalAmmount=totalAmmount-textv;
            document.getElementById('msg2').innerHTML="Tu saldo es: ";
            document.getElementById('msg').innerHTML=totalAmmount;
            document.getElementById('textview').value="";
        }
        else{
            document.getElementById('msg').innerHTML="Saldo insuficiente";
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
        totalAmmount=totalAmmount+parseFloat(textv);
        document.getElementById('msg2').innerHTML="Tu saldo es: ";
        document.getElementById('msg').innerHTML=totalAmmount;
        document.getElementById('textview').value="";   
    }
};


function menuback(){
    document.getElementById('menu').style.display="block";
    document.getElementById('menuback').style.display="none";
    document.getElementById('btnproced').setAttribute("onclick","");
    document.getElementById('consult2').style.display="none";
    document.getElementById('msg').innerHTML="choose option";
    document.getElementById('msg2').innerHTML="";
    document.getElementById('captcha').style.display="none";
};



function consult(){
    var textv=document.getElementById('textview').value;
    document.getElementById('consult2').style.display="block";
    document.getElementById('textview').style.display="none";
    document.getElementById('msg').innerHTML="Tu credito es de:-";
    document.getElementById('msg2').innerHTML="";
    document.getElementById('main-balance').innerHTML=totalAmmount;
    document.getElementById('menuback').style.display="block";
    document.getElementById('credit').innerHTML=textv;
    document.getElementById('debit').innerHTML=textv;
    document.getElementById('menu').style.display="none";
};



function captcha(){

    var captcha1=Math.random()*9999;
    captcha1=Math.floor(captcha1);       
    var ra=document.getElementById('msg').innerHTML=captcha1;
     document.getElementById('captcha').style.display="block";
    
    };
    
    
    function tokenVerification() {
        var varifycaptcha=document.getElementById('msg').textContent;
        document.getElementById('msg2').innerHTML="";
        var textview=document.getElementById('textview').value;
        if(varifycaptcha==textview)
        {
            document.getElementById('msg2').innerHTML="Codigo corrrecto"
            document.getElementById('btnproced').setAttribute("onclick","calculation1()");
            document.getElementById('textview').value="";
            document.getElementById('msg').innerHTML="Ingresa el monto";
            document.getElementById('captcha').style.display="none";
    
    
         }
        else{
            document.getElementById('msg2').innerHTML="captcha not match. Try again";
            document.getElementById('btnproced').setAttribute("onclick","tokenVerification()");
            document.getElementById('textview').value="";
            document.getElementById('msg1').innerHTML="Ingresa el token nuevamente";
        }
    
    };
    
    

    
    function exit(){
        document.getElementById('msg').innerHTML="Ingresa tu numero de cuenta";
        document.getElementById('btnproced').setAttribute("onclick","cardcheck()");
        document.getElementById('msg2').innerHTML="";
        document.getElementById('menu').style.display="none";
        document.getElementById('textview').value="";
        document.getElementById('textview').style.display="block";
    }






       