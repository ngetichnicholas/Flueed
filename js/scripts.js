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
            if (teamAssigned === "marketing") {
                let i = 0;
                for (i = 0; i <= marketing.members.length; i++) {
                    $('#memberAssigned').append('<option value="' + marketing.members[i].name.split(" ", 1).toString().toLowerCase() + '">' + marketing.members[i].name + '</option>');
                }
            } else if (teamAssigned === "design") {
                let i = 0;
                for (i = 0; i <= design.members.length; i++) {
                    $('#memberAssigned').append('<option value="' + design.members[i].name.split(" ", 1).toString().toLowerCase() + '">' + design.members[i].name + '</option>');
                }
            } else if (teamAssigned === "development") {
                let i = 0;
                for (i = 0; i <= development.members.length; i++) {
                    $('#memberAssigned').append('<option value="' + development.members[i].name.split(" ", 1).toString().toLowerCase() + '">' + development.members[i].name + '</option>');
                }
            } else if (teamAssigned === "management") {
                let i = 0;
                for (i = 0; i <= management.members.length; i++) {
                    $('#memberAssigned').append('<option value="' + management.members[i].name.split(" ", 1).toString().toLowerCase() + '">' + management.members[i].name + '</option>');
                }
            }
        });

        // Create new task.
        
});