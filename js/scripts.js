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


let john = new Member("John Doe", "johndoe@mail.com", "https://");
let jane = new Member("Jane Doe", "janedoe@mail.com", "https://");
let nicholas = new Member("Nicholas Ngetich", "johndoe@mail.com", "https://");
let peter = new Member("Peter Kennedy", "johndoe@mail.com", "https://");
let odero = new Member("Odero Oluoch", "odero@mail.com", "https://");
let festus = new Member("Festus Mutie", "festus@mail.com", "https://");
let samora = new Member("Samora Yommie", "samora@mail.com", "https://");
let floice = new Member("Floice Nyoita", "floice@mail.com", "https://");
let aspin = new Member("Aspin Isoe", "aspin@mail.com", "https://");

let marketing = new Team("Marketing", [floice, odero]);
let design = new Team("Design", [aspin, peter]);
let development = new Team("Development", [nicholas, festus, john]);
let management = new Team("Management", [samora, jane]);

let teams = [marketing, design, development, management]


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
                for(let n = 0; n < teams[i].members.length; n++){
                    $('#memberAssigned').append('<option value="' + teams[i].members[n].name.split(" ", 1).toString().toLowerCase() + '">' + teams[i].members[n].name + '</option>');
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
        let date = new Date();
        let memberAssigned = $('#memberAssigned').val();

        let newTask = new Task(taskTitle, taskDescription, date, memberAssigned);

        for (let i = 0; i < teams.length; i++) {
            if (teamAssigned.toUpperCase() == teams[i].name.toUpperCase()) {
                teams[i].tasks.push(newTask);
                break;
            }
        }
        $(this).prev().click();
        event.preventDefault();
    });
});
