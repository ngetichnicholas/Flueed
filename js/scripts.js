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

let john = new Member("John Doe", "johndoe@mail.com", "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");
let jane = new Member("Jane Doe", "janedoe@mail.com", "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=784&q=80");
let nicholas = new Member("Nicholas Ngetich", "johndoe@mail.com", "https://images.unsplash.com/photo-1612214070475-1e73f478188c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");
let peter = new Member("Peter Kennedy", "johndoe@mail.com", "https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");
let odero = new Member("Odero Oluoch", "odero@mail.com", "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");
let festus = new Member("Festus Mutie", "festus@mail.com", "https://images.unsplash.com/photo-1618018352910-72bdafdc82a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");
let samora = new Member("Samora Yommie", "samora@mail.com", "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");
let floice = new Member("Floice Nyoita", "floice@mail.com", "https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80");
let aspin = new Member("Aspin Isoe", "aspin@mail.com", "https://images.unsplash.com/photo-1562124638-724e13052daf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");

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
                for (let n = 0; n < teams[i].members.length; n++) {
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

    // Populate Tasks column with tasks.
    $('#teams').change(function () {
        let selectedTeam = $('#teams').val();
        $('#tasksList').empty();
        for (let i = 0; i < teams.length; i++) {
            if (selectedTeam.toUpperCase() == teams[i].name.toUpperCase()) {
                for (let m = 0; m < teams[i].tasks.length; m++) {
                    counter = m + 1;
                    $('#tasksList').append('<div class="row task"><div class="colmd-2 tick"><input type="checkbox" name="msg" id="mail' + counter + '" class="mail-choice" /><label for="mail' + counter + '"></label></div><div class="col-md-8 profile"><p>' + teams[i].tasks[m].title + '<br /><span class="date">27 Apr 2021</span></p> </div><div class="col-md-2"><img src="' + teams[i].tasks[m].assignee.picUrl + '" alt="" width="40px" height="40px" /></div></div>');
                }
                break;
            }
        }
    });
});