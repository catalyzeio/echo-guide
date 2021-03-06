# Echo II Styleguide - Built with Foundation 6

This is the **modified** basic starter project for [Foundation for Sites 6](http://foundation.zurb.com/sites). It includes a Sass compiler and a starter HTML file for you.

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

This template can be installed with the Foundation CLI (recommended - @allanwhite), or downloaded and set up manually.

### Notes by @allanwhite

* The above install notes will need revision; they're based on the foundation sites template, which we have customized. You should be able to download this repo and run the dependency installs (`npm install`, `bower install`). New packages should be added to the `bower.json` file by adding the `--save` flag when installing.
* The customized version uses `svg-inject` to inline SVGs; the JS won't work locally unless it's run with a webserver.


### Using the Foundation CLI

Install the Foundation CLI with this command:

```bash
npm install foundation-cli --global
```

Use this command to set up a blank Foundation for Sites project with this template:

```bash
foundation new --framework sites --template basic
```

The CLI will prompt you to give your project a name. The template will be downloaded into a folder with this name.

### Manual Setup

To manually set up the template, first download it with Git:

```bash
git clone https://github.com/zurb/foundation-sites-template projectname
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
npm install
bower install
```

Finally, run `npm start` to run the Sass compiler. It will re-run every time you save a Sass file.

Allan says: Running `foundation watch` runs `gulp` and compiles the sass. It should also run any other tasks specified in the `gulpfile`. 
