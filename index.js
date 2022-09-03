var skill_json = [
  {
    "img_src": "https://img.icons8.com/ultraviolet/2x/react.png",
    "name" : "React"
},
{
    "img_src": "https://img.icons8.com/color/80/000000/redux.png",
    "name" : "Redux"
},
{
    "img_src": "https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-5-1/512/38-512.png",
    "name" : "HTML"
},
{
    "img_src": "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    "name" : "CSS"
},
{
    "img_src": "https://freeiconshop.com/wp-content/uploads/edd/js-flat.png",
    "name" : "Javascript"
},
{
  "img_src": "https://img.icons8.com/color/452/mongodb.png",
  "name" : "Mongodb"
},{
  "img_src": "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  "name" : "SQL"
},
{
  "img_src": "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/git-icon.png",
  "name" : "GIT"
},
{
  "img_src": "https://img.icons8.com/color/80/000000/nodejs.png",
  "name" : "Nodejs"
},
{
  "img_src": "https://img.icons8.com/color/80/000000/python.png",
  "name" : "Python"
},
{
  "img_src": "https://cdn.iconscout.com/icon/free/png-128/aws-1869025-1583149.png",
  "name" : "aws"
},
{
  "img_src": "https://img.icons8.com/color/452/google-cloud.png",
  "name" : "GCP"
},
{
  "img_src": "https://img.icons8.com/color/452/jira.png",
  "name" : "JIRA"
},
{
  "img_src": "https://as2.ftcdn.net/v2/jpg/04/66/88/81/1000_F_466888123_bS0jwH5WKDEcjIcz7sPwIBYn8RQsdSGl.jpg",
  "name" : "ETL"
}
]



  
window.onload = ()=>{
  createSkillboard()
}

var createSkillboard = ()=>{
  var main_skills_bd = document.getElementById('skills-bd')
  var contailner_div = document.createElement("div")
  contailner_div.className = "container"
  var skill_board = document.createElement('div')
  skill_board.id="techKnown"
  var div = document.createElement('div')
  var div2 = document.createElement('div')
  div2.id="Skill-card"

  console.log(skill_json)

  for(var i=0 ;i<skill_json.length;i++){
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    div2.id="Skill-card"

    var Img = document.createElement('img')
    Img.src=skill_json[i].img_src
    Img.style.height="80px"

    var p = document.createElement('p')
    p.innerHTML=skill_json[i].name

    div2.append(Img,p)
    div.append(div2)

    skill_board.append(div)
    contailner_div.append(skill_board)
    main_skills_bd.append(contailner_div)
  }
}