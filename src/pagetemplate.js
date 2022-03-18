const generateTeam = team => {
    var html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://kit.fontawesome.com/efce4d6ddb.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header class="bg-red-500 p-8">
            <h1 class="font-mono font-semibold text-white text-center text-3xl">
               Deadlist Bounty Hunters on the Development Team
            </h1>
        </header>
        <section class = "bg-gray-300 w-full min-h-screen gap-5 flex-wrap flex justify-center items-center">`
        
        team.forEach(teamMember => {
            if(teamMember.getRole() === 'Manager'){
                html += generateManager(teamMember)
            } else if(teamMember.getRole() === 'Engineer'){
                html += generateEngineer(teamMember)
            } else if(teamMember.getRole() === 'Intern'){
                html += generateIntern(teamMember)
            }
        })

    html+=`</section>
</body>
</html>
`
return html
}



const generateManager = manager => {
    return `
    <!-- Project Manager Profile Card -->
         <section class="w-60 p-2 bg-white rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            
            <!-- Profile Image -->
            <img class="h-40 object-cover rounded-xl" src="../assets/boba fett.jpg">
            
            <!-- Heading -->
            <h1 class="font-bold text-2xl text-center"> ${manager.getName()} </h1>
            <h2 class="font-bold text-2xl text-center"> Project Manager </h2>
            <!-- Description-->
            <ul class="text-l text-gray-600 font">  
            <li>ID:${manager.getId()} </li>  
            <li>Email:${manager.getEmail()} </li>
            <li>Office Number: ${manager.getOfficeNumber()} </li>
                </ul>
            </p>
        </section>
`;
};

const generateEngineer = engineer => {
    return `
    <!-- Engineer #1 Profile Card -->
        <section class="w-60 p-2 bg-white rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

             <!-- Profile Image -->
             <img class="h-40 object-cover rounded-xl" src="../assets/blackkrrsantan.jpg">

            <!-- Heading-->
            <h1 class="font-bold text-2xl text-center"> ${engineer.getName()}</h1>
            <h2 class="font-bold text-2xl  text-center"> Engineer </h2>
            <!-- Description-->
            <p class="text-m text-gray-600"> 
               <ul>       
                    <li>ID:${engineer.getId()}</li>
                    <li>Email:${engineer.getEmail()} </li>       
                    <li>Github:${engineer.getGithub()} </li>
                </ul>
            </p>
        </section>    
    `
}


const generateIntern = intern => {
    return `
    <!-- Intern Profile Card -->
    <section class="w-60 p-2 bg-white rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        
         <!-- Profile Image -->
         <img class="h-40 object-cover rounded-xl" src="../assets/Fennec-Shand-Bad-Batch.jpeg">
        <!-- Header and Subheader -->
        <h1 class="font-bold text-2xl text-center"> ${intern.getName()}  </h1>
        <h3 class="font-bold text-xl text-center"> Intern </h3>
        <!-- Description-->
        <ul class="text-l text-gray-600 font">   
            <li>ID:${intern.getId()}</li>
            <li>Email:${intern.getEmail()}</li>       
            <li>School:${intern.getSchool()}</li>
        </ul>
    </section>
    `
}

module.exports = generateTeam;