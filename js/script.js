// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById('addForm');
const employeeTable = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const newRow = employeeTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const idCell = newRow.insertCell(0);
    const nameCell = newRow.insertCell(1);
    const extensionCell = newRow.insertCell(2);
    const emailCell = newRow.insertCell(3);
    const departmentCell = newRow.insertCell(4);
    const deleteCell = newRow.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    idCell.appendChild(document.createTextNode(id));
    nameCell.appendChild(document.createTextNode(name));
    extensionCell.appendChild(document.createTextNode(extension));
    emailCell.appendChild(document.createTextNode(email));
    departmentCell.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.addEventListener('click', () => {
        // Implement delete functionality
    });
    deleteCell.appendChild(deleteButton);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++;
    document.getElementById('empCount').textContent = employeeCount;
});

// DELETE EMPLOYEE
deleteButton.addEventListener('click', () => {
    employeeTable.deleteRow(newRow.rowIndex);
    employeeCount--;
    document.getElementById('empCount').textContent = employeeCount;
});