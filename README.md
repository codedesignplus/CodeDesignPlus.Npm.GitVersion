<!-- PROJECT LOGO -->

<br />
<p align="center">
  <a href="https://github.com/codedesignplus/CodeDesignPlus.Npm.GitVersion/README">
    <img src="https://i.imgur.com/PwbGy0o.png" alt="Logo">
  </a>

  <h3 align="center">CodeDesignPlus.Npm.GitVersion</h3>

  <p align="center">
    Semver versioning based on the git history and commit messages of your repository.
    <br />
    <a href="https://codedesignplus.com">
      <strong>Explore the docs »</strong>
    </a>
    <br />
    <br />
    <a href="https://github.com/codedesignplus/CodeDesignPlus.Npm.GitVersion/issues">
      <img src="https://img.shields.io/github/issues/codedesignplus/CodeDesignPlus.Npm.GitVersion?color=0088ff&style=for-the-badge&logo=github" alt="codedesignplus/CodeDesignPlus.Npm.GitVersion's issues"/>
    </a>
    <a href="https://github.com/codedesignplus/CodeDesignPlus.Npm.GitVersion/pulls">
      <img src="https://img.shields.io/github/issues-pr/codedesignplus/CodeDesignPlus.Npm.GitVersion?color=0088ff&style=for-the-badge&logo=github"  alt="codedesignplus/CodeDesignPlus.Npm.GitVersion's pull requests"/>
    </a>
    <br />    
    <br />
    <img alt="sonarcloud" src="https://sonarcloud.io/images/project_badges/sonarcloud-white.svg" width="100">
    <br />
    <img alt="Quality Gate Status" src="https://sonarcloud.io/api/project_badges/measure?project=CodeDesignPlus.Npm.GitVersion.Key&metric=alert_status" />    
    <img alt="Security Rating" src="https://sonarcloud.io/api/project_badges/measure?project=CodeDesignPlus.Npm.GitVersion.Key&metric=security_rating"/>
    <img alt="Reliability Rating" src="https://sonarcloud.io/api/project_badges/measure?project=CodeDesignPlus.Npm.GitVersion.Key&metric=reliability_rating" />
    <img alt="Vulnerabilities" src="https://sonarcloud.io/api/project_badges/measure?project=CodeDesignPlus.Npm.GitVersion.Key&metric=vulnerabilities" />
    <img alt="Bugs" src="https://sonarcloud.io/api/project_badges/measure?project=CodeDesignPlus.Npm.GitVersion.Key&metric=bugs" />
    <img alt="Code Smells" src="https://sonarcloud.io/api/project_badges/measure?project=CodeDesignPlus.Npm.GitVersion.Key&metric=code_smells" />
    <img alt="Coverage" src="https://sonarcloud.io/api/project_badges/measure?project=CodeDesignPlus.Npm.GitVersion.Key&metric=coverage" />
  </p>
</p>


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Commands Npm](#commands-npm)
* [Usage](#usage)
  * [Detailed Steps](#detailed-steps)
  * [Example](#practical-example)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- About The Project -->
## About The Project

This project centers on version management within a Git repository, particularly determining previous and new versions based on commit history and tags. It utilizes the semver library for semver-related operations.

Key features include:

- Determining the previous version based on Git tags.
- Calculating the new version based on commits since the last tag and certain predefined rules.
- Accounting for different branches like `release`, `release candidate`, and `beta` to determine version type (e.g., `prerelease`).
- Fetching the current commit hash.
- Executing Git commands and fetching results.

This project is an essential tool for those seeking automated version management in their repositories, ensuring that each change, whether it's a major feature, a minor enhancement, or a simple patch, is properly reflected in the project's version.


<!-- Prerequisites -->
## Prerequisites

1. **Node.js Environment**: As the code is in TypeScript/JavaScript, you'll need to have [Node.js](https://nodejs.org/es) installed on your machine to run and develop the project.

2. **Libraries and Modules**: The following libraries and modules are necessary:
   - `semver`: A library for working with semantic version numbers.
   - `child_process`: This native Node.js module is used to execute shell commands, in this case, Git commands.

3.  **Git Repository**: Since this project is designed to work with Git tags and commits, you'll need a Git repository where you intend to apply the version management.

4. **Git Installed**: As the code utilizes Git commands via child_process, it's essential to have Git installed in the environment where the code is run.

5. **Appropriate Permissions**: To fetch tags, commit history, and other information, as well as possibly set new tags, the environment running this code should have the proper permissions to interact with the Git repository.


<!-- Getting Started -->
## Getting Started

To kickstart your journey with our project, begin by cloning the repository to your local machine. Once you've secured a copy, ensure you have the necessary prerequisites installed a list can be found in our "Prerequisites" section. Open the project using your preferred IDE (we recommend Visual Studio Code for optimal compatibility). Follow the installation steps detailed in the "Installation" segment to set up your development environment. After completing these foundational steps, you're all set to dive into the code, experiment with its features, and contribute to our growing community. Happy coding!


### Installation

1. Clone the repo
    ```powershell
    git clone https://github.com/codedesignplus/CodeDesignPlus.Npm.GitVersion.git
    ```
2. Retore Packages
    ```powershell
    npm install
    ```
3. Build Project
    ```powershell
    npm run bundle
    ```
4. Run test
    ```powershell
    npm run test
    ```

### Commands NPM

The following table provides an overview of the available npm scripts for this project, detailing their purpose and respective commands. These scripts assist in tasks ranging from formatting and linting to testing and packaging.

| Name            | Description                                                                                                                | Command                 |
|-----------------|----------------------------------------------------------------------------------------------------------------------------|-------------------------|
| `bundle`        | First, it formats the files and then runs the packaging.                                                                   | `npm run bundle`        |
| `ci-test`       | Runs tests using Jest.                                                                                                     | `npm run ci-test`       |
| `format:write`  | Formats the TypeScript (`*.ts`) files and overwrites any non-standard formatting.                                          | `npm run format:write`  |
| `format:check`  | Checks the format of the TypeScript (`*.ts`) files but doesn't make changes.                                                | `npm run format:check`  |
| `lint`          | Runs `eslint` on the entire project with a specific configuration.                                                         | `npm run lint`          |
| `package`       | Packages the `src/index.ts` file and sets the license file.                                                                | `npm run package`       |
| `package:watch` | Packages `src/index.ts` and repackages if there are changes (monitoring mode).                                              | `npm run package:watch` |
| `test`          | Runs tests with Jest and creates a coverage badge. If tests fail, it will still generate the badge.                         | `npm run test`          |
| `all`           | Runs several commands in sequence: formats files, checks linting, runs tests, and packages the project.                     | `npm run all`           |

<!-- Usage -->
## Usage

The key function of this project is to calculate versions based on certain criteria and configurations. This project looks at the commit history and, based on specific identifiers and configurations, determines the appropriate version for the next release.

### Detailed Steps:

1. **Repository Checkout**: Ensure that you've checked out the code in your repository before running any version calculation.
2. **Configuring Version Calculation**:

   The tool can be configured to determine versions based on various parameters, including:

   - Directory to run the command in.
   - The name of branches like main, rc, and dev.
   - Identifiers for major and minor releases, such as breaking and feat.
   - Prefixes like v to be added before the version number.
   - Directories affected inside a monorepo to calculate changes.
   - Flags to determine whether to return the previous version or calculate a new one.
- **Accessing the results**: After the version calculation process, the results can be utilized in various ways, such as tagging the repository, printing them, or integrating them into other tools or systems.

### Options

Below is a table outlining the various configuration options available when utilizing the GitVersion class. These options determine how the class calculates and interprets versions based on Git commit history, tags, and branch specifics.

| Configuration Option       | Description                                                                                           | Default Value  |
|----------------------------|-------------------------------------------------------------------------------------------------------|----------------|
| `folder`                   | Directory in which the Git commands will run.                                                          | `'./'`         |
| `releaseBranch`            | Primary branch for releasing stable versions.                                                         | `'main'`       |
| `releaseCandidateBranch`   | Branch used for release candidates, undergoing final tests before becoming a stable release.          | `'rc'`         |
| `betaBranch`               | Branch for beta releases, meant for early feedback or testing.                                        | `'dev'`        |
| `majorIdentifier`          | Keyword in commit messages to signal major changes.                                                   | `'breaking'`   |
| `minorIdentifier`          | Keyword in commit messages to signal minor feature additions.                                         | `'feat'`       |
| `prefix`                   | Prefix added before version numbers.                                                                  | `'v'`          |
| `dirAffected`              | Specifies which directory inside a monorepo should be considered for version calculation.              | `'./'`         |

### Example:

Once you have set up and executed the `Calculate Version` step, you can print its results or use them in subsequent actions:

```typescript
import { GitVersion } from './git-version';

const gitVersion = new GitVersion({
    folder: './path-to-your-git-repo',  // Point this to your repository's local path
    releaseBranch: 'main', 
    releaseCandidateBranch: 'rc',
    betaBranch: 'dev',
    majorIdentifier: 'breaking',
    minorIdentifier: 'feat',
    prefix: 'v',
    dirAffected: './'
});

// Fetch the previous version from Git tags
const previousVersion = await gitVersion.getPreviousVersion();
console.log(`Previous Version: ${previousVersion}`);

// Calculate the new version based on commit messages since the last Git tag
const newVersion = await gitVersion.getNewVersion();
console.log(`New Version: ${newVersion}`);

// Get the last commit's hash
const lastCommit = await gitVersion.getLastCommit();
console.log(`Last Commit Hash: ${lastCommit}`);
```


<!-- ROADMAP -->
## Roadmap

Refer to [issues](https://github.com/codedesignplus/CodeDesignPlus.Npm.GitVersion/issues) for a list of proposed features and known issues.

<!-- CONTRIBUTING -->
## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b features/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](LICENSE.md) for more information.


<!-- CONTACT -->
## Contact

CodeDesignPlus - [@CodeDesignPlus](https://www.facebook.com/Codedesignplus-115087913695067) - codedesignplus@outlook.com

Project Link: [CodeDesignPlus.Core](https://github.com/codedesignplus/CodeDesignPlus.Core)



## Acknowledgements

- https://github.com/codacy/git-version