window.onload = function(){
    var form = document.querySelector('form')
    form.addEventListener("submit",handleRegister)
}

function handleRegister(){
    event.preventDefault()

    var form = new FormData(event.target)
    let payload={}

    var Signupdisplay=document.getElementById("Signupdisplay")

    var allusers=JSON.parse(localStorage.getItem("allusers")) || []
    var Name=form.get('Name')
    var Email=form.get('Email')
    var Password=form.get('Password')

    var message=""

    var flag=true
    
    

    if(flag==true){

        if(allusers.length>0){
             console.log(allusers)
            for(var i=0; i<allusers.length; i++){
                if(allusers[i].Email===Email){
                     message="Email already exist please register with another email account"
                    flag=false
                }
            }
        }

        if(Name.length < 4){
            message="Name should contain min 4 character,"
            flag=false
        }
        if(Password.length<=6 && flag==true){
            message= message + "  Password should contain min 6 character "
            flag=false
        }
        
        if(Password.length>6 && flag==true){
            payload.Name=Name
            payload.Password=Password
            payload.Email=Email
            payload.transactions=[]
            localStorage.setItem("currentusr",JSON.stringify(payload))
            
            allusers.push(payload)
            localStorage.setItem("allusers",JSON.stringify(allusers))

            setTimeout(()=>{ 
                document.querySelector("form").reset()
                alert("Registered successfully. Click OK to Login")
                window.location.href = "signin.html"
             }, 1000)

            

            
        }
        
        

    }

    Signupdisplay.innerHTML=message
    
}

