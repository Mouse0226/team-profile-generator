
function generateEmployees(employeesArr) {
    let variableItem;
    let employeeCards = [];
    for (const employeesObj of employeesArr) {
        if (employeesObj.getRole() === 'Manager') {
            variableItem = `<li class="list-group-item">Office Number: ${employeesObj.officeNumber}</li>`;
        } else if (employeesObj.getRole() === 'Engineer') {
            variableItem = `<li class="list-group-item">GitHub: <a href="https://github.com/${employeesObj.github}" target="_blank">${employeesObj.github}</a></li>`;
        } else {
            variableItem = `<li class="list-group-item">School: ${employeesObj.school}</li>`;
        }
        employeeCards.push(`
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${employeesObj.name}</h5>
                    <p class="card-text">${employeesObj.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employeesObj.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employeesObj.email}">${employeesObj.email}</a></li>
                    ${variableItem}
                </ul>
            </div>
        `);
    }
    return employeeCards.join('');
};

module.exports = templateData => {
    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
            <link rel="stylesheet" href="style.css">
            <title>Team Profile</title>
        </head>

        <body>
            <header>
                <div class="container flex-row align-center">
                    <h1 class="page-title p-4">My Team</h1>
                </div>
            </header>
            <main class="container">
                <div class="row">
                    ${generateEmployees(templateData)}
                </div>
            </main>
        </body>
        </html>
    `;
};