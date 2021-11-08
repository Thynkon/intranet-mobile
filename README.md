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
    <li><a href="#hacking-on-the-project">Hacking on the project</a></li>
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

* [PHP 8.0](https://www.php.net/releases/8.0/en.php)
* [Mariadb 10.6.4](https://mariadb.com/kb/en/mariadb-1064-release-notes/)
* [Composer 2.1.11](https://getcomposer.org/download/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
#### [Composer](https://getcomposer.org/)
- Archlinux
```sh
  $ sudo pacman -S composer
```

- NixOS
```sh
  $ nix-env -iA nixos php80Packages.composer
```

### Installation

1. Clone the repo
   ```sh
   $ git clone https://github.com/Thynkon/intranet-mobile.git
   ```
2. Install php packages
   ```sh
   $ cd intranet-mobile
   $ composer install
   ```
   
3. Compile scss files to css
```sh
$ composer build-css
```

4. Setup database connection
This projects uses PDO as the database connector. In order to connect to a database, you must
set the DSN, the username and his password in **.env.php**.

```php
<?php

DEFINE('DSN', 'mysql:dbname=<YOUR_DATABASE_NAME>;host=127.0.0.1');
DEFINE('USERNAME', '<USERNAME>');
DEFINE('PASSWORD', '<PASSWORD>');
```

5. Populate the database
```sh
$ composer populate-db
```

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

## Hacking on the project
### Tests
If you have added a feature and you want to test if everything is ok, you can run the unit tests we wrote
by typing the following:
```sh
$ php vendor/bin/phpunit tests
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Thynkon/intranet-mobile/issues) for a list of proposed features (and known issues).

## Documentation
The documentation about the routing system, class diagrams, database model and the state diagram can be found under the **doc/** folder:
- [routing system](doc/routes/routes.pdf)
- [class diagrams](doc/classes/classes.pdf)
- [database model](doc/db/diagram.pdf)
- [state diagram](doc/state_diagram.pdf)

We use the [same directory structure as laravel](https://laravel.com/docs/8.x/structure).

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

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email

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
