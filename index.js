if('serviceWorker' in navigator){
  console.log("borwser supports sw")
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('./sw.js').then((e)=>console.log('service worker : Registered'))
    .catch((err)=>console.log(`service worker : ERROR : ${err}`))
})
}

Notification.requestPermission(status=>{
  console.log("Notification Permission status :",status)
})

// window.addEventListener('scroll',()=>{
// if(Notification.permission == "granted"){
//   console.log(Notification.permission)
//     Navigator.serviceWorker.getRegistration('http://127.0.0.1:5500/')
//     .then(reg=>{
//       console.log(reg)
//       reg.showNotification("HI This is vibhav")
//     })
//   }
// })
  

var skill_json = [
  {
    "img_src": "https://img.icons8.com/ultraviolet/2x/react.png",
    "name": "React"
  },
  {
    "img_src": "https://img.icons8.com/color/80/000000/redux.png",
    "name": "Redux"
  },
  {
    "img_src": "https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-5-1/512/38-512.png",
    "name": "HTML"
  },
  {
    "img_src": "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    "name": "CSS"
  },
  {
    "img_src": "https://freeiconshop.com/wp-content/uploads/edd/js-flat.png",
    "name": "Javascript"
  },
  {
    "img_src": "https://img.icons8.com/color/452/mongodb.png",
    "name": "Mongodb"
  }, {
    "img_src": "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    "name": "SQL"
  },
  {
    "img_src": "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/git-icon.png",
    "name": "GIT"
  },
  {
    "img_src": "https://img.icons8.com/color/80/000000/nodejs.png",
    "name": "Nodejs"
  },
  {
    "img_src": "https://img.icons8.com/color/80/000000/python.png",
    "name": "Python"
  },
  {
    "img_src": "https://cdn.iconscout.com/icon/free/png-128/aws-1869025-1583149.png",
    "name": "aws"
  },
  {
    "img_src": "https://img.icons8.com/color/452/google-cloud.png",
    "name": "GCP"
  },
  {
    "img_src": "https://img.icons8.com/color/452/jira.png",
    "name": "JIRA"
  },
  {
    "img_src": "https://as2.ftcdn.net/v2/jpg/04/66/88/81/1000_F_466888123_bS0jwH5WKDEcjIcz7sPwIBYn8RQsdSGl.jpg",
    "name": "ETL"
  }
]

var projects_json = [
  {
    img_src: "https://mishravibhav.github.io/Images/Todoist_clone.PNG",
    header: "DEVJOBS CLONE",
    tags: [
      { class: "badge badge-primary", name: "Reactjs" },{ class: "badge badge-success", name: "Theme Toggle" },{ class: "badge badge-danger", name: "Responsive UI" },{ class: "badge badge-primary", name: "API" }
    ],
    discription : "Tried to make pixel perfect clone of Devjobs .It has Theme change functionality and users can see full job description by clicking on job title at homepage.",
    source_code_link : "https://github.com/mishravibhav/Devjobs-clone",
    liave_app_link :"https://devjobs-clone-vibhav.netlify.app/"
  }
]




window.onload = () => {
  createSkillboard()
  projectCardhandler()
}

var createSkillboard = () => {
  var main_skills_bd = document.getElementById('skills-bd')
  var contailner_div = document.createElement("div")
  contailner_div.className = "container"
  var skill_board = document.createElement('div')
  skill_board.id = "techKnown"
  var div = document.createElement('div')
  var div2 = document.createElement('div')
  div2.id = "Skill-card"

  console.log(skill_json)

  for (var i = 0; i < skill_json.length; i++) {
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    div2.id = "Skill-card"

    var Img = document.createElement('img')
    Img.src = skill_json[i].img_src
    Img.style.height = "80px"

    var p = document.createElement('p')
    p.innerHTML = skill_json[i].name

    div2.append(Img, p)
    div.append(div2)

    skill_board.append(div)
    contailner_div.append(skill_board)
    main_skills_bd.append(contailner_div)
  }
}

const projectCardhandler = ()=>{
  console.log(projects_json)

  // var project_courosel_div = document.querySelector("#project_courosel")
  // var card_div =document.createElement('div')
  // card_div.className="card"

  // for(var i=0 ; i<projects_json.length; i++){
  //   var project_img = document.createElement('img')
  //   project_img.src=projects_json[i].img_src
  //   project_img.style.width="100%"
  //   project_img.style.height="10%"

  //   var card_body_div = document.createElement('div')
  //   card_body_div.className="card-body"

  //   var header = document.createElement('h5')
  //   header.className="card-title text-center"
  //   header.innerHTML=projects_json[i].header
  //   card_body_div.append(header)

  //   var tags_div = document.createElement('div')
  //   tags_div.className="my-3"

  //   for(var j=0;j<projects_json[i].tags.length; j++){
  //     var span = document.createElement('span')
  //     span.className=projects_json[i].tags[j].class
  //     span.innerHTML=projects_json[i].tags[j].name
  //     tags_div.append(span)
  //   }

  //   var para = document.createElement('p')
  //   para.className="card-text  pb-2"
  //   para.innerHTML = projects_json[i].discription


  //   var bottom_button_div = document.createElement('div')
  //   bottom_button_div.className="text-center"
  //   var bottom_button_a = document.createElement('a')
  //   bottom_button_a.href=""

  //   var live_app_button = document.createElement('button')
  //   live_app_button.className="btn btn-outline-danger m-2"
  //   var live_app_button_icon = document.createElement('i')
  //   live_app_button_icon.className="fas fa-broadcast-tower"
    

    
  //   live_app_button.append(live_app_button_icon,"Live App")
  //   bottom_button_a.append(live_app_button)
  //   bottom_button_div.append(live_app_button)


  //   card_body_div.append(header,tags_div,para,bottom_button_div)
  //   card_div.append(project_img,card_body_div)
  //   project_courosel_div.append(card_div)
  // }
}