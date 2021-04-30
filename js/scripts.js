// Business Logic
function Team(name, members) {
	this.name = name;
	this.tasks = [];
	this.members = members;
}

function Member(name, email, picUrl) {
	this.name = name;
	this.email = email;
	this.picUrl = picUrl;
}

function Task(title, description, dateCreated, assignee) {
	this.title = title;
	this.description = description;
	this.dateCreated = dateCreated;
	this.assignee = assignee;
}
var date = new Date();

let john = new Member(
	"John Doe",
	"johndoe@mail.com",
	"../img/john.jpeg"
);
let jane = new Member(
	"Jane Doe",
	"janedoe@mail.com",
	"./img/jane.jpeg"
);
let nicholas = new Member(
	"Nicholas Ngetich",
	"johndoe@mail.com",
	"../img/nicholas.jpeg"
);
let peter = new Member(
	"Peter Kennedy",
	"johndoe@mail.com",
	"../img/peter.jpeg"
);
let odero = new Member(
	"Odero Oluoch",
	"odero@mail.com",
	"../img/odero.jpeg"
);
let festus = new Member(
	"Festus Mutie",
	"festus@mail.com",
	"../img/festus.jpeg"
);
let samora = new Member(
	"Samora Yommie",
	"samora@mail.com",
	"../img/samora.jpeg"
);
let floice = new Member(
	"Floice Nyoita",
	"floice@mail.com",
	"/img/floice.jpeg"
);
let aspin = new Member(
	"Aspin Isoe",
	"aspin@mail.com",
	"../img/aspin.jpeg"
);

let marketing = new Team("Marketing", [floice, odero]);
let design = new Team("Design", [aspin, peter]);
let development = new Team("Development", [nicholas, festus, john]);
let management = new Team("Management", [samora, jane]);

// Testing Objects
let lorem =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan commodo lectus gravida dictum.Aliquam a dui eu arcu hendrerit porta sed in velit.Fusce eu semper magna.Aenean porta facilisis neque, ac dignissim magna vestibulum eu.Etiam id ligula eget neque placerat ultricies in sed neque.Nam vitae rutrum est.Etiam non condimentum ante, eu consequat orci.Aliquam a dui eu arcu hendrerit porta sed in velit.Fusce eu semper magna.";

let marketingTask1 = new Task(
	"Marketing Task 1",
	"This is a test object for the marketing team. " + lorem,
	date,
	floice
);
let marketingTask2 = new Task(
	"Marketing Task 2",
	"This is a test object for the marketing team. " + lorem,
	date,
	odero
);

let designTask1 = new Task(
	"Design Task 1",
	"This is a test object for the design team. " + lorem,
	date,
	aspin
);
let designTask2 = new Task(
	"Design Task 2",
	"This is a test object for the design team. " + lorem,
	date,
	peter
);

let devTask1 = new Task(
	"Development Task 1",
	"This is a test object for the development team. " + lorem,
	date,
	john
);
let devTask2 = new Task(
	"Development Task 2",
	"This is a test object for the development team. " + lorem,
	date,
	festus
);

let mgtTask1 = new Task(
	"Management Task 1",
	"This is a test object for the management team. " + lorem,
	date,
	samora
);
let mgtTask2 = new Task(
	"Management Task 2",
	"This is a test object for the management team. " + lorem,
	date,
	jane
);

marketing.tasks.push(marketingTask1);
marketing.tasks.push(marketingTask2);

design.tasks.push(designTask1);
design.tasks.push(designTask2);

development.tasks.push(devTask1);
development.tasks.push(devTask2);

management.tasks.push(mgtTask1);
management.tasks.push(mgtTask2);

// Teams array.
let teams = [marketing, design, development, management];
// Members array
let membersArray = [
	john,
	jane,
	nicholas,
	peter,
	odero,
	festus,
	samora,
	floice,
	aspin,
];

// UI logic.
$(document).ready(function () {
	$(".mail-detail").hide();
	$(".mail-choice").change(function () {
		if ($(this).is(":checked")) {
			$(this).parents().addClass("selected-bg");
		} else {
			$(this).parents().removeClass("selected-bg");
		}
	});

	// Dropdown  selection on the modal to display members only in the selected team.
	$("#teamAssigned").change(function () {
		let teamAssigned = $("#teamAssigned").val();
		$("#memberAssigned").empty();

		for (let i = 0; i < teams.length; i++) {
			if (teamAssigned.toUpperCase() == teams[i].name.toUpperCase()) {
				for (let j = 0; j < teams[i].members.length; j++) {
					$("#memberAssigned").append(
						'<option value="' +
							teams[i].members[j].name.split(" ", 1).toString().toLowerCase() +
							'">' +
							teams[i].members[j].name +
							"</option>"
					);
				}
				break;
			}
		}
	});

	function refreshList() {}

	// Add new task.
	$("#add").click(function (event) {
		let taskTitle = $("#taskTitle").val();
		let taskDescription = $("#taskDescription").val();
		let teamAssigned = $("#teamAssigned").val();
		let memberAssigned = $("#memberAssigned").val();

		for (let a = 0; a < membersArray.length; a++) {
			if (
				memberAssigned.toLowerCase() ==
				membersArray[a].name.split(" ", 1).toString().toLowerCase()
			) {
				let newTask = new Task(
					taskTitle,
					taskDescription,
					date,
					membersArray[a]
				);

				for (let k = 0; k < teams.length; k++) {
					if (teamAssigned.toUpperCase() == teams[k].name.toUpperCase()) {
						teams[k].tasks.push(newTask);
						break;
					}
				}
				break;
			}
		}

		refreshList();
		$(this).prev().click();
		event.preventDefault();
	});

	function refreshList() {
		let selectedTeam = $("#teams").val();
		$("#tasksList").empty();
		for (let n = 0; n < teams.length; n++) {
			if (selectedTeam.toUpperCase() == teams[n].name.toUpperCase()) {
				for (let m = 0; m < teams[n].tasks.length; m++) {
					let index = m + 1;
					$("#tasksList").append(
						'<div class="row task"><div class="colmd-2 tick"><input type="checkbox" name="msg" id="mail' +
							index +
							'" class="mail-choice" /><label for="mail' +
							index +
							'"></label></div><div class="col-md-8 profile"><p class="title" id="' +
							index +
							'">' +
							teams[n].tasks[m].title +
							'<br /><span class="date">' +
							date.toDateString() +
							'</span></p> </div><div class="col-md-2"><img src="' +
							teams[n].tasks[m].assignee.picUrl +
							'" alt="" width="40px" height="40px" /></div></div>'
					);
				}
				break;
			}
		}
	}

	// Populate Tasks column with tasks.
	$("#teams").on("change", refreshList);

	// Display clicked task details
	$("#tasksList").on("click", ".title", function () {
		$(".mail-detail").fadeIn();
		let id = $(this).attr("id");
		let idIndex = parseInt(id) - 1;
		let selectedTeam = $("#teams").val();

		for (let x = 0; x < teams.length; x++) {
			if (selectedTeam.toUpperCase() == teams[x].name.toUpperCase()) {
				$(".mail-detail-name").html(teams[x].tasks[idIndex].assignee.name);
				
                $(".mail-choice").change(function () {
                    if ($(this).is(":checked")) {
                        $("#userCompleted").html(
                            teams[x].tasks[idIndex].assignee.name.split(" ", 1) +
                            " completed this task."
                        );
                    } else {
                        $("#userCompleted").html(
                            teams[x].tasks[idIndex].assignee.name.split(" ", 1) +
                            " has not completed this task."
                        );
                    }
                });
                
				$(".task-title").html(teams[x].tasks[idIndex].title);
				$(".mail-inside").html(teams[x].tasks[idIndex].description);
				$("#dp").empty();
				$("#dp").prepend(
					'<img src="' +
						teams[x].tasks[idIndex].assignee.picUrl +
						'" alt="Profile Picture" class = "members inbox-detail" / > '
				);
				$(".mail-time, .mail-checklist-date").html(date.toDateString());
				break;
			}
		}
	});

	    // comments apending Jquery
		$('.send-message').click(function() {
			var comment = $('.commentBox').val();
			if (comment.length === 0) {
				alert("Enter a comment in the textarea below!!!")
				throw new Error;
			}
			$('<li>').text(comment).appendTo('.comments');
			$('send-message').attr('disabled', 'true');
			let form = document.getElementsByName("comments")[0];
			form.reset();
			return false;
		});
});
