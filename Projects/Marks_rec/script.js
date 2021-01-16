var ph_marks = []
var ch_marks = []
var ssc_marks = []
var mt_marks = []
var sc_marks = []

function addStudent() {

  // Name

  studentName = document.getElementById("name").value;
  var StudentValue = document.createElement('div')
  StudentValue.innerHTML = studentName
  document.getElementById('ShowName').append(StudentValue)

  // standard

  standard = document.getElementById("standard").value;
  var standardvalue = document.createElement('div')
  standardvalue.innerHTML = standard
  document.getElementById('Stan').append(standardvalue)

  // ----------------------------------------------------------------//
  // subjects//

  // physics 

  physics = Number(document.getElementById("phy").value);
  ph_marks.push(physics)
  var physicsvalue = document.createElement('div')
  physicsvalue.innerHTML = physics
  document.getElementById('Phys').append(physicsvalue)
  

  // Chemistry 
  
  chemistry = Number(document.getElementById("che").value);
  ch_marks.push(chemistry)
  var chemistryvalue = document.createElement('div')
  chemistryvalue.innerHTML = chemistry
  document.getElementById('Chem').append(chemistryvalue)
  

  // maths
  
  maths = Number(document.getElementById("mat").value);
  mt_marks.push(maths)
  var mathsvalue = document.createElement('div')
  mathsvalue.innerHTML = maths
  document.getElementById('Math').append(mathsvalue)
  

  // science
  
  science = Number(document.getElementById("sci").value);
  sc_marks.push(science)
  var sciencevalue = document.createElement('div')
  sciencevalue.innerHTML = science
  document.getElementById('Scie').append(sciencevalue)
  

  //socialscience
  
  socialscience = Number(document.getElementById("ssci").value);
  ssc_marks.push(socialscience)
  var socialsciencevalue = document.createElement('div')
  socialsciencevalue.innerHTML = socialscience
  document.getElementById('Sscie').append(socialsciencevalue)

  //total
  totalMarks();
  var totalvalue = document.createElement('div')
  totalvalue.innerHTML = sum
  document.getElementById('Tot').append(totalvalue)

  //average
  average = sum / 5;
  var averagevalue = document.createElement('div')
  averagevalue.innerHTML = average
  document.getElementById('Aver').append(averagevalue)

  //percentage
  percentage = (sum / 500) * 100 + "%";
  var percentagevalue = document.createElement('div')
  percentagevalue.innerHTML = percentage
  document.getElementById('Perc').append(percentagevalue)

}

function totalMarks() {
  sum = 0;
  for (var i = 0; i < ph_marks.length; i++) {
    sum = ph_marks[i] + ch_marks[i] + mt_marks[i] + sc_marks[i] + ssc_marks[i]
  }
}