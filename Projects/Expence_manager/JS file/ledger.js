window.onload=()=>{

    var logindata=JSON.parse(localStorage.getItem('logindata'))
    Handlelogin(logindata)

    var form = document.querySelector('form')
    form = document.addEventListener('submit',HandleAllTransaction)
}

function Handlelogin(logindata){
    
    var alluser = JSON.parse(localStorage.getItem('allusers'))

    var Transaction_details= document.getElementById('Transaction_details')
    
    for (var j = 0; j < alluser.length; j++) {
        if (logindata.Email == alluser[j].Email) {
            if (alluser[j].transactions != null) {
                var transaclen = alluser[j].transactions.length
                // console.log(transaclen)

                    for (var k = 0; k < transaclen; k++) {
                        if (alluser[j].Email == logindata.Email) {
                            var div1 = document.createElement('div')
                            var div2 = document.createElement('div')
                            var div3 = document.createElement('div')
                            var div4 = document.createElement('div')

                            var Title = alluser[j].transactions[k].Title
                            var Type = alluser[j].transactions[k].Type
                            var Amount = alluser[j].transactions[k].Amount
                            var Time = alluser[j].transactions[k].Time

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

function HandleAllTransaction(){
    event.preventDefault()

    var form = new FormData(event.target)
    var sort = form.get("Sort")

    // console.log(sort)

    var alluser = JSON.parse(localStorage.getItem('allusers'))

    var Transaction_details= document.getElementById('Transaction_details')
    Transaction_details.innerHTML=""

    var logindata=JSON.parse(localStorage.getItem('logindata'))

    if(sort=="ALL"){
        for (var j = 0; j < alluser.length; j++) {
            if (logindata.Email == alluser[j].Email) {
                if (alluser[j].transactions != null) {
                    var transaclen = alluser[j].transactions.length
                    // console.log(transaclen)

                    for (var k = 0; k < transaclen; k++) {
                        if (alluser[j].Email == logindata.Email) {
                            var div1 = document.createElement('div')
                            var div2 = document.createElement('div')
                            var div3 = document.createElement('div')
                            var div4 = document.createElement('div')

                            var Title = alluser[j].transactions[k].Title
                            var Type = alluser[j].transactions[k].Type
                            var Amount = alluser[j].transactions[k].Amount
                            var Time = alluser[j].transactions[k].Time

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

    for (var j = 0; j < alluser.length; j++) {
        if (logindata.Email == alluser[j].Email) {
            if (alluser[j].transactions != null) {
                var transaclen = alluser[j].transactions.length
                // console.log(transaclen)

                for (var k = 0; k < transaclen; k++) {
                    if (alluser[j].transactions[k].Type == sort) {
                        var div1 = document.createElement('div')
                        var div2 = document.createElement('div')
                        var div3 = document.createElement('div')
                        var div4 = document.createElement('div')

                        var Title = alluser[j].transactions[k].Title
                        var Type = alluser[j].transactions[k].Type
                        var Amount = alluser[j].transactions[k].Amount
                        var Time = alluser[j].transactions[k].Time

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