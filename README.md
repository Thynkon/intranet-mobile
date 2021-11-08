<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Thynkon/intranet-mobile">
    <img src="public/assets/img/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Intranet-mobile</h3>

  <p align="center">
    A small webapp written in PHP that follows the MVC pattern.<br/>
    Its goals are to create, manage and delete quizzes.<br/>
    Users can also get some statistics related to the answers.
    <br />
    <a href="https://github.com/Thynkon/intranet-mobile/doc"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Thynkon/intranet-mobile">View Demo</a>
    ·
    <a href="https://github.com/Thynkon/intranet-mobile/issues">Report Bug</a>
    ·
    <a href="https://github.com/Thynkon/intranet-mobile/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#documentation">Documentation</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started:
**To avoid retyping too much info. Do a search and replace with your text editor for the following:**
`github_username`, `repo_name`, `twitter_handle`, `email`, `project_title`, `project_description`


### Built With

* [Bulma 0.9.3](https://bulma.io/)
* [FullCalendar 5.10.0](https://fullcalendar.io/)
* [Fontawesome 5.15](https://fontawesome.com/v5.15/how-to-use/on-the-web/setup/hosting-font-awesome-yourself)
* [Figma](https://www.figma.com/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
#### [NPM](https://www.npmjs.com/)
- Archlinux
```sh
  $ sudo pacman -S npm
```

- NixOS
```sh
  $ nix-env -iA nixos.nodePackages.npm
```

- Windows
```sh
  $ choco install npm
```

### Installation

1. Clone the repo
   ```sh
   $ git clone https://github.com/Thynkon/intranet-mobile.git
   ```
2. Install dependencies
   ```sh
   $ cd intranet-mobile
   $ npm install
   $ npm install -g sass
   ```
   
3. Compile scss files to css
   ```sh
   $ npm run css
   ```

**NOTE** - This only works on unix-like operating systems because npm will run
a bash script. If you are using Windows, you can enable [WSL](https://docs.microsoft.com/en-us/windows/wsl/install).

<!-- USAGE EXAMPLES -->
## Usage
In case you want a live demo of this application, you can find it [here](https://intranet-mobile.thynkon.xyz/).

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Thynkon/intranet-mobile/issues) for a list of proposed features (and known issues).

## Documentation
The documentation about the routing system, class diagrams, database model and the state diagram can be found under the **doc/** folder:
- [attendance mockups](doc/ui/mockup/attendance)
- [time management mockups](doc/ui/mockup/time)
- [moodboard](doc/ui/moodboard/moodboard.pdf)
- [competitor analysis](doc/analysis/analysis.pdf)
- [fonts and colors](doc/fonts_colors/fonts_colors.pdf)

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Project Link: [https://github.com/Thynkon/intranet-mobile](https://github.com/Thynkon/intranet-mobile)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Nomeos/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/Thynkon/intranet-mobile/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Nomeos/repo.svg?style=for-the-badge
[forks-url]: https://github.com/Thynkon/intranet-mobile/network/members
[stars-shield]: https://img.shields.io/github/stars/Nomeos/repo.svg?style=for-the-badge
[stars-url]: https://github.com/Thynkon/intranet-mobile/stargazers
[issues-shield]: https://img.shields.io/github/issues/Nomeos/repo.svg?style=for-the-badge
[issues-url]: https://github.com/Thynkon/intranet-mobile/issues
[license-shield]: https://img.shields.io/github/license/Nomeos/repo.svg?style=for-the-badge
[license-url]: https://github.com/Thynkon/intranet-mobile/blob/master/LICENSE
