// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

const generateReadMeContent = (data, licenseBadgeId, licenseInfo) =>

`${data.title}                    ![alt text](images/${licenseBadgeId}.svg)

Description
    - ${data.motivation} 
    - ${data.problem} 
    - ${data.learn} 

Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [Questions](#questions)
    - [License](#license)

##Installation
${data.installation}

##Usage
${data.usage}

##Credits
${data.credits}

##Questions
If you have any questions, please contact me at my GitHub account: ${data.github} or my email: ${data.email}

##License
${licenseInfo}
`


inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the repository',  
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was the motivation behind this project',
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem does this project solve',
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation steps for this project',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions on how to use the application',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Who are the contributors to this project',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license do you want to use',
            choices: ["MIT license", "BSD 3-clause license", "ISC license"],
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name',
        },
        {
            type: 'input',
            name: 'year',
            message: 'What is the current year',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub account',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email',
        },

    ])
    .then((data) => {
        var licenseBadgeId = undefined;
        var licenseInfo = undefined;
        if(data.license === "BSD 3-clause license"){
            licenseBadgeId = "BSD3";
            licenseInfo = `Copyright ${data.year} ${data.name} \nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
        } else if(data.license === "MIT license"){
            licenseBadgeId = "MIT";
            licenseInfo = `Copyright ${data.year} ${data.name} \nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software./n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
        } else if(data.license === "ISC license"){
            licenseBadgeId = "ISC";
            licenseInfo = `Copyright ${data.year} ${data.name} \nPermission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.\n THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;
        }
        const readMeContent = generateReadMeContent(data, licenseBadgeId, licenseInfo);
        fs.writeFile(`README.md`, readMeContent, (err) =>
            err ? console.log(err) : console.log("Success")
        );
        
        console.log(data);
        console.log(licenseBadgeId)
        
        
    });
    
// TODO: Create a function to write README file
function writeToFile(data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
