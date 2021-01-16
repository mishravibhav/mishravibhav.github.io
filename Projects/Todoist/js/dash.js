window.onload = () => {
	var addtask = document.getElementById("Add");
	addtask.addEventListener("click", Addtask);
	var tasks = JSON.parse(localStorage.getItem("currentUser")).taskDetail;
	var total = tasks.length;
	console.log(total);
	showTasks(total);
};
var users = JSON.parse(localStorage.getItem("users"));
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
var total = 0;
var completed = 0;

function Addtask() {
	total++;
	var Active_Tasks = document.getElementById("Active_Tasks");
    Active_Tasks.innerHTML = "";
    
    var input_task = document.getElementById("Add_Task").value;
    
	var radiobox = document.createElement("input");
	radiobox.type = "radio";
	radiobox.id = "Task";
    radiobox.value = input_task;
    
	var label = document.createElement("label");
	label.htmlFor = "Task";
    label.style.marginLeft = "10px";
    
	var description = document.createTextNode(input_task);
    label.appendChild(description);
    
	var div = document.createElement("div");
    var p = document.createElement("p");
    
	p.append(radiobox);
	p.append(label);
	div.append(p);
    Active_Tasks.append(div);
    
	HandleTasks.call(radiobox);
	showTasks(total);
	// console.log(radiobox);
}
function HandleTasks() {
	var users = JSON.parse(localStorage.getItem("users"));
	var currentUser = JSON.parse(localStorage.getItem("currentUser"));
	for (var i = 0; i < users.length; i++) {
		// console.log(users[i].email)
		if (currentUser.email == users[i].email && currentUser.password == users[i].password) {
			var task = currentUser.taskDetail;
			task.push(this.value);
			// console.log(users[i].email);
			localStorage.setItem("currentUser", JSON.stringify(currentUser));
		}
	}
	console.log(users);
}

function showTasks(initialTasks) {
	var users = JSON.parse(localStorage.getItem("users"));
	var currentUser = JSON.parse(localStorage.getItem("currentUser"));
	var Active_Tasks = document.getElementById("Active_Tasks");
	Active_Tasks.innerHTML = "";
	for (var i = 0; i < users.length; i++) {
		// console.log(users[i].email)
		if (currentUser.email == users[i].email && currentUser.password == users[i].password) {
			var task = currentUser.taskDetail;
			// total = task.length
			for (var j = 0; j < task.length; j++) {
				var input_task = task[j];
				var radiobox = document.createElement("input");
				radiobox.type = "radio";
				radiobox.id = "Task";
				radiobox.value = j;
				radiobox.addEventListener("change", function () {
					completed++;
					deleteTask(event);
				});
				var label = document.createElement("label");
				label.htmlFor = "Task";
                label.style.marginLeft = "10px";
                
				var description = document.createTextNode(input_task);
                label.appendChild(description);
                
				var div = document.createElement("div");
                var p = document.createElement("p");
                
				p.append(radiobox);
				p.append(label);
				div.append(p);
                Active_Tasks.append(div);
                
				console.log();
				status(completed, (total = initialTasks));
			}
		}
	}
}
function status(completed, total) {
	var status = document.getElementById("status")
	status.style.marginLeft = "10px"
	status.innerHTML = " " + completed + "/" + total
}

function deleteTask(event, index) {
	console.log(event.target.value);
	var users = JSON.parse(localStorage.getItem("users"));
	var currentUser = JSON.parse(localStorage.getItem("currentUser"));
	for (var i = 0; i < users.length; i++) {
		// console.log(users[i].email)
		if (currentUser.email == users[i].email && currentUser.password == users[i].password) {
			var task = currentUser.taskDetail;
			console.log(task, "before");
			task.splice(Number(event.target.value), 1);
			console.log(task);
			console.log(users[i].email);
			localStorage.setItem("currentUser", JSON.stringify(currentUser));
		}
	}
	console.log(users);
	console.log(completed, total, "deleted");
	status(completed, total);
	showTasks(total);
}