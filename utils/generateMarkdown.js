// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title}\n
## Project Description\n\n${data.project_description}\n
## Usage Information\n\n${data.usage_information}\n
## Contribution Guidelines\n\n${data.contribution_guidelines}\n
## Test Instructions\n\n${data.test_instructions}\n
## License\n\n${data.license}
`;
}

module.exports = generateMarkdown;
