function Reminder(title, priority, color, textArea) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.textArea = textArea;
}


let addReminderButton = document.querySelector("#btn-add");
let showRemindersButton = document.querySelector("#btn-show");
let body = document.querySelector('#body');

let arrayOfReminders = [];


addReminderButton.addEventListener("click", function () {
    let title = document.querySelector("#inputTitle").value;
    let priority = document.querySelector("input[type = radio]:checked").value

    let color = document.querySelector("#inputColor").value;
    let textArea = document.querySelector("#textArea").value;

    let reminder = new Reminder(title, priority, color, textArea);
    arrayOfReminders.push(reminder);

});

showRemindersButton.addEventListener("click", function () {
    let table = document.createElement("table");
    table.textContent = "Reminders"
    table.style.border = '2px solid blue';
    for (let obj of arrayOfReminders) {
        table.insertRow()
        let titleCell = table.rows[table.rows.length - 1].insertCell();
        titleCell.textContent = obj.title;
        titleCell.style.color = obj.color
        let priorityCell = table.rows[table.rows.length - 1].insertCell();
        priorityCell.textContent = obj.priority;
        let textAreaCell = table.rows[table.rows.length - 1].insertCell();
        textAreaCell.textContent = obj.textArea;
    }
    body.appendChild(table);
})