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

let john = new Member("John Doe", "johndoe@mail.com", "../img/profile-pics/john.jpeg");
let jane = new Member("Jane Doe", "janedoe@mail.com", "../img/profile-pics/jane.jpeg");
let nicholas = new Member("Nicholas Ngetich", "johndoe@mail.com", "../img/profile-pics/nicholas.jpeg");
let peter = new Member("Peter Kennedy", "johndoe@mail.com", "../img/profile-pics/peter.jpeg");
let odero = new Member("Odero Oluoch", "odero@mail.com", "../img/profile-pics/odero.jpeg");
let festus = new Member("Festus Mutie", "festus@mail.com", "../img/profile-pics/festus.jpeg");
let samora = new Member("Samora Yommie", "samora@mail.com", "../img/profile-pics/samora.jpeg");
let floice = new Member("Floice Nyoita", "floice@mail.com", "../img/profile-pics/floice.jpeg");
let aspin = new Member("Aspin Isoe", "aspin@mail.com", "../img/profile-pics/aspin.jpeg");


let marketing = new Team("Marketing", [floice, odero]);
let design = new Team("Design", [aspin, peter]);
let development = new Team("Development", [nicholas, festus, john]);
let management = new Team("Management", [samora, jane]);

// Testing Objects

let marketingTask1 = new Task("Marketing Task 1", "This is a test object for the marketing team.", date, floice);
let marketingTask2 = new Task("Marketing Task 2", "This is a test object for the marketing team.", date, odero);

let designTask1 = new Task("Design Task 1", "This is a test object for the design team.", date, aspin);
let designTask2 = new Task("Design Task 2", "This is a test object for the design team.", date, peter);

let devTask1 = new Task("Development Task 1", "This is a test object for the development team.", date, john);
let devTask2 = new Task("Development Task 2", "This is a test object for the development team.", date, festus);

let mgtTask1 = new Task("Management Task 1", "This is a test object for the management team.", date, samora);
let mgtTask2 = new Task("Management Task 2", "This is a test object for the management team.", date, jane);

marketing.tasks.push(marketingTask1);
marketing.tasks.push(marketingTask2);

design.tasks.push(designTask1);
design.tasks.push(designTask2);

development.tasks.push(devTask1);
development.tasks.push(devTask2);

management.tasks.push(mgtTask1);
management.tasks.push(mgtTask2);

// Teams array.
let teams = [marketing, design, development, management]
// Members array
let membersArray = [john, jane, nicholas, peter, odero, festus, samora, floice, aspin];

// UI logic.
$(document).ready(function () {
    $('.mail-choice').change(function () {
        if ($(this).is(":checked")) {
            $(this).parents().addClass('selected-bg');
        } else {
            $(this).parents().removeClass('selected-bg');
        }
    });

    // Dropdown  selection on the modal to display members only in the selected team.
    $('#teamAssigned').change(function () {
        let teamAssigned = $('#teamAssigned').val();
        $('#memberAssigned').empty();

        for (let i = 0; i < teams.length; i++) {
            if (teamAssigned.toUpperCase() == teams[i].name.toUpperCase()) {
                for (let j = 0; j < teams[i].members.length; j++) {
                    $('#memberAssigned').append('<option value="' + teams[i].members[j].name.split(" ", 1).toString().toLowerCase() + '">' + teams[i].members[j].name + '</option>');
                }
                break;
            }
        }
    });

    // Add new task.
    $('#add').click(function (event) {
        let taskTitle = $('#taskTitle').val();
        let taskDescription = $('#taskDescription').val();
        let teamAssigned = $('#teamAssigned').val();
        let memberAssigned = $('#memberAssigned').val();

        for (let a = 0; a < membersArray.length; a++) {
            if (memberAssigned.toLowerCase() == membersArray[a].name.split(" ", 1).toString().toLowerCase()) {
                let newTask = new Task(taskTitle, taskDescription, date, membersArray[a]);

                for (let k = 0; k < teams.length; k++) {
                    if (teamAssigned.toUpperCase() == teams[k].name.toUpperCase()) {
                        teams[k].tasks.push(newTask);
                        break;
                    }
                }
                break;
            }
        }

        $(this).prev().click();
        event.preventDefault();
    });

    // Populate Tasks column with tasks.
    $('#teams').change(function () {
        let selectedTeam = $('#teams').val();
        $('#tasksList').empty();
        for (let n = 0; n < teams.length; n++) {
            if (selectedTeam.toUpperCase() == teams[n].name.toUpperCase()) {
                for (let m = 0; m < teams[n].tasks.length; m++) {
                    index = m + 1;
                    $('#tasksList').append('<div class="row task"><div class="colmd-2 tick"><input type="checkbox" name="msg" id="mail' + index + '" class="mail-choice" /><label for="mail' + index + '"></label></div><div class="col-md-8 profile"><p>' + teams[n].tasks[m].title + '<br /><span class="date">' + date.toDateString() + '</span></p> </div><div class="col-md-2"><img src="' + teams[n].tasks[m].assignee.picUrl + '" alt="" width="40px" height="40px" /></div></div>');
                }
                break;
            }
        }
    });
});