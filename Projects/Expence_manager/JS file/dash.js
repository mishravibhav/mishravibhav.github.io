window.onload = ()=>{

    var logindata = JSON.parse(localStorage.getItem("logindata"))
    loginresponse(logindata)

    var form = document.querySelector("form")
    form.addEventListener('submit',HandleInput)

    
}

function loginresponse(logindata){
   const DisplayName=document.getElementById("Displayname")
    DisplayName.innerHTML=logindata.Name

    const DisplayEmail = document.getElementById("DisplayEmail")
    DisplayEmail.innerHTML = logindata.Email

    var totalexp = document.getElementById("totalexpence")
    var totalincome = document.getElementById("totalincome")
    var totalbalance = document.getElementById("totalbalance")

     var userdata = JSON.parse(localStorage.getItem("allusers"))

    for(var j=0; j<userdata.length; j++){
        if(logindata.Email==userdata[j].Email){
            if(userdata[j].transactions!=null){
                var transaclen=userdata[j].transactions.length
                console.log(transaclen)
                
                var exp=0
                var wall=0
                var inc=0

                for(var l=0; l<transaclen; l++){
                    var type=userdata[j].transactions[l].Type
                    var amount=Number(userdata[j].transactions[l].Amount)

                    // console.log(amount)

                    if(type=="Debit"){
                        exp=exp+amount
                    }

                    if(type=="Credit"){
                        inc=inc+amount
                    }
                    
                }
                wall=inc-exp
                console.log(wall)

                totalincome.innerHTML="₹ " + inc
                totalexp.innerHTML="₹ " + exp
                totalbalance.innerHTML="₹ " + wall

                if(transaclen>5){
                    for(var k=transaclen-5; k<transaclen; k++){
                        
                        var div1 =document.createElement('div')
                        var div2 =document.createElement('div')
                        var div3 =document.createElement('div')
                        var div4 =document.createElement('div')

                        var Title=userdata[j].transactions[k].Title
                        var Type=userdata[j].transactions[k].Type
                        var Amount=userdata[j].transactions[k].Amount
                        var Time=userdata[j].transactions[k].Time

                        div1.append(Title)
                        div2.append(Type)
                        div3.append(Amount)
                        div4.append(Time)
                        // console.log(div1)

                        Transaction_details.append(div1)
                        Transaction_details.append(div2)
                        Transaction_details.append(div3)
                        Transaction_details.append(div4)
                    }
                }
                else{
                    for(var k=0; k<transaclen; k++){
                        
                        var div1 =document.createElement('div')
                        var div2 =document.createElement('div')
                        var div3 =document.createElement('div')
                        var div4 =document.createElement('div')

                        var Title=userdata[j].transactions[k].Title
                        var Type=userdata[j].transactions[k].Type
                        var Amount=userdata[j].transactions[k].Amount
                        var Time=userdata[j].transactions[k].Time

                        

                        div1.append(Title)
                        div2.append(Type)
                        div3.append(Amount)
                        div4.append(Time)
                        // console.log(div1)

                        Transaction_details.append(div1)
                        Transaction_details.append(div2)
                        Transaction_details.append(div3)
                        Transaction_details.append(div4)
                    }
                }   
            }
        }
    }

}

function HandleInput(){
    event.preventDefault()
    var form =new FormData(event.target)
    
    var payload={}

    payload.Title= form.get('Title')
    payload.Amount= form.get("Amount")
    payload.Type = form.get("Type")
    payload.Time=new Date().toLocaleString()

    console.log(payload)

    document.querySelector('form').reset()

    HandleTransactions(payload)

    
}

function HandleTransactions(payload){
    
    
    var allusers=JSON.parse(localStorage.getItem("allusers"))
    var logindata = JSON.parse(localStorage.getItem("logindata"))

    var totalexp = document.getElementById("totalexpence")
    var totalincome = document.getElementById("totalincome")
    var totalbalance = document.getElementById("totalbalance")
    var Transaction_details = document.getElementById("Transaction_details")
    Transaction_details.innerHTML=""
    
   

    for(var i=0; i<allusers.length; i++){
        if(logindata.Email==allusers[i].Email){
            if(allusers[i].transactions!=null){
                allusers[i].transactions.push(payload)
            }
        }
    }
    localStorage.setItem("allusers",JSON.stringify(allusers))
    console.log(allusers)

    
    var userdata = JSON.parse(localStorage.getItem("allusers"))

    for(var j=0; j<userdata.length; j++){
        if(logindata.Email==userdata[j].Email){
            if(userdata[j].transactions!=null){
                var transaclen=userdata[j].transactions.length
                console.log(transaclen)

                var exp=0
                var wall=0
                var inc=0

                for(var l=0; l<transaclen; l++){
                    var type=userdata[j].transactions[l].Type
                    var amount=Number(userdata[j].transactions[l].Amount)

                    // console.log(amount)

                    if(type=="Debit"){
                        exp=exp+amount
                    }

                    if(type=="Credit"){
                        inc=inc+amount
                    }
                    
                }
                wall=inc-exp
                console.log(wall)

                totalincome.innerHTML="₹ " + inc
                totalexp.innerHTML="₹ " + exp
                totalbalance.innerHTML="₹ " + wall

                if(transaclen>5){
                    for(var k=transaclen-5; k<transaclen; k++){
                        
                        var div1 =document.createElement('div')
                        var div2 =document.createElement('div')
                        var div3 =document.createElement('div')
                        var div4 =document.createElement('div')

                        var Title=userdata[j].transactions[k].Title
                        var Type=userdata[j].transactions[k].Type
                        var Amount=userdata[j].transactions[k].Amount
                        var Time=userdata[j].transactions[k].Time

                        div1.append(Title)
                        div2.append(Type)
                        div3.append(Amount)
                        div4.append(Time)
                        // console.log(div1)

                        Transaction_details.append(div1)
                        Transaction_details.append(div2)
                        Transaction_details.append(div3)
                        Transaction_details.append(div4)
                    }
                }
                else{
                    for(var k=0; k<transaclen; k++){
                        
                        var div1 =document.createElement('div')
                        var div2 =document.createElement('div')
                        var div3 =document.createElement('div')
                        var div4 =document.createElement('div')

                        var Title=userdata[j].transactions[k].Title
                        var Type=userdata[j].transactions[k].Type
                        var Amount=userdata[j].transactions[k].Amount
                        var Time=userdata[j].transactions[k].Time

                        

                        div1.append(Title)
                        div2.append(Type)
                        div3.append(Amount)
                        div4.append(Time)
                        // console.log(div1)

                        Transaction_details.append(div1)
                        Transaction_details.append(div2)
                        Transaction_details.append(div3)
                        Transaction_details.append(div4)
                    }
                }   
            }
        }
    }
}