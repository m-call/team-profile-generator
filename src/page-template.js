// The base HTML that will be created once the user is done building their team
const startHTML = (team) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">${team.manager[0].name}</h2>
                    <h3 class="card-text"><i class="fas fa-mug-hot"></i>Manager</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${team.manager[0].id}</li>
                        <li class="list-group-item">Email: <a href= "mailto: ${team.manager[0].email}">${team.manager[0].email}</a></li>
                        <li class="list-group-item">Office Number: ${team.manager[0].officeNumber}</li>
                    </ul>
                </div>
            </div>`;

const engineerHTML = (team) =>
            `<div class="card">
                <div class="card-header">
                    <h2 class="card-title">${team.engineers[0].name}</h2>
                    <h3 class="card-text"><i class="fas fa-glasses"></i> Engineer</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${team.engineers[0].id}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${team.engineers[0].email}"> ${team.engineers[0].email}</a></li>
                        <li class="list-group-item">GitHub: <a href= "https://github.com/${team.engineers[0].github}" target="_blank">${team.engineers[0].github}</a></li>
                    </ul>
                </div>
            </div>`;

const internHTML = (team) =>
            `<div class="card">
                <div class="card-header">
                    <h2 class="card-title">${team.interns[0].name}</h2>
                    <h3 class="card-text"><i class="fas fa-user-graduate"></i> Intern</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${team.interns[0].id}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${team.interns[0].email}"> ${team.interns[0].email}</a></li>
                        <li class="list-group-item">School: ${team.interns[0].school}</li>
                    </ul>
                </div>
            </div>`;

const endHTML = () =>
       `</main>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    </body>
    </html>`

module.exports = {
    startHTML,
    engineerHTML,
    internHTML,
    endHTML
}