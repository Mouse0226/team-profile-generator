
const generateEmployees = EmployeesArr => {

}

module.exports = templateData => {
    // input from app will go here

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
                    <h1 class="page-title">My Team</h1>
                </div>
            </header>
            <main class="container">
                ${generateEmployees()}
            </main>
        </body>
        </html>
    `;
};