// TODO: Create a function that returns a license badge based on which license is passed in
let link, badgeIcon, licenseInfo;
// If there is no license, return an empty string


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  switch (data.license){
    case "Apache License 2.0":
    link = `https://opensource.org/licenses/Apache-2.0`;
    badgeIcon = `https://img.shields.io/badge/License-Apache_2.0-blue.svg`;
    break;
  case "MIT License":
    link = `https://opensource.org/licenses/MIT`;
    badgeIcon = `https://img.shields.io/badge/License-MIT-yellow.svg`;
    break;
  case "Boost Software License 1.0":
    link = `https://www.boost.org/LICENSE_1_0.txt`;
    badgeIcon = `https://img.shields.io/badge/License-Boost_1.0-lightblue.svg`;
    break;
  case "Creative Commons Zero v1.0 Universal":
    link = `http://creativecommons.org/publicdomain/zero/1.0/`;
    badgeIcon = `https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg`;
    break; 
  case "Eclipse Public License 1.0":
    link = `https://opensource.org/licenses/EPL-1.0`;
    badgeIcon = `https://img.shields.io/badge/License-EPL_1.0-red.svg`;
    break; 
  case "Mozilla Public License 2.0":
    link = `https://opensource.org/licenses/MPL-2.0`;
    badgeIcon = `https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg`;
    break;
  case "The Unlicense":
    link = `http://unlicense.org/`; 
    badgeIcon = `https://img.shields.io/badge/license-Unlicense-blue.svg`;
    break;
  default:
    link = "";
    badgeIcon = "";
}

licenseInfo = `### [![${data.license}](${badgeIcon})](${link})`;
return licenseInfo;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseSection(data);
  return `# ${data.project_title}\n
  ${licenseInfo}\n
## Project Description\n\n${data.project_description}\n
### Table of Contents\n
 - [Installation](#installation)\n
 - [Usage Information](#usage-information)\n
 - [Contribution Guidelines](#contribution-guidelines)\n
 - [Test Instructions](#test-instructions)\n
 - [License](#license)\n
 - [Questions](#questions)\n
## Installation\n\n${data.installation}\n
## Usage Information\n\n${data.usage_information}\n
## Contribution Guidelines\n\n${data.contribution_guidelines}\n
## Test Instructions\n\n${data.test_instructions}\n
## License\n\n${data.license}\n
## Questions\n\n
### You can reach me here:\n
 - [Click here to email me](mailto:${data.email})\n
 - [Click here to visit my Github](https://github.com/${data.username})\n`;
}

module.exports = generateMarkdown;
