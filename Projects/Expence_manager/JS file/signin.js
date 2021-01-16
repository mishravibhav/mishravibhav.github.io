window.onload = function(){
    var form = document.querySelector('form')
    form.addEventListener("submit",handleLogin)
}

var message = ""

function handleLogin(){
    event.preventDefault()

    var form = new FormData(event.target)
    let payload={}
    

    var allusers=JSON.parse(localStorage.getItem("allusers")) || []

    payload.Email=form.get('Email')
    payload.Password=form.get('Password')

    var message=""
    console.log(payload)
    
    
    loginresponse(payload,allusers)
    
}

function loginresponse(payload,allusers){
     for(var i=0; i<allusers.length; i++){
        // console.log(allusers[i].Name)
         if(payload.Email===allusers[i].Email && payload.Password===allusers[i].Password){
             var logindata={}

             logindata.Name=allusers[i].Name
             logindata.Email=allusers[i].Email

            localStorage.setItem("logindata",JSON.stringify(logindata))

            window.location.href = "Dash.html"
         }
         else{
            message = "Invalid Credentials! OR Not Registered Yet"
         }
     }
     var Signindisplay = document.getElementById("Signindisplay")
     Signindisplay.innerHTML=message
}

