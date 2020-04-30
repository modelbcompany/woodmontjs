# :dart: WoodmontJS

Component & Utility Function Library

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://storybook.js.org/)
[![emoji-log](https://cdn.rawgit.com/ahmadawais/stuff/ca97874/emoji-log/non-flat-round.svg)](https://github.com/ahmadawais/Emoji-Log/)

## Overview

[Getting Started](#getting-started)  
[Usage](#usage)  
[Contributing](docs/CONTRIBUTING.md)  
[Deployment](docs/DEPLOYMENT.md)  
[Built With](#built-with)  

## Getting Started

WoodmontJS is a component and utility function library developed in JavaScript,
originally built to support the development of a new Floor Plans page and online
scheduling feature on the 8001 Woodmont landing page.

The components were developed using [Storybook][1] and [Sass][2].

Storybook is a user interface development environment and documentation tool for
UI components. Storybook allows developers to create components independently
and showcase components interactively in an isolated development environment.

Sass is a CSS preprocessor that allows you to use use variables, nested rules,
mixins, functions within your stylesheets, making it easy to share styles across
your project, as well as organize projects of all sizes.

[1]: https://storybook.js.org/
[2]: https://sass-lang.com/

## Usage

Components are developed in [React][1]; stories and documentation are written in
[MDX][2] using [Storybook Docs][3].

The starter documentation can be [viewed here][4].

[1]: https://reactjs.org/
[2]: https://mdxjs.com/
[3]: https://github.com/storybookjs/storybook/tree/master/addons/docs
[4]: https://woodmontjs.modelb.now.sh/docs

### Architecture

Following the [Atomic Design Methodology][1], this starter has a heavy focus on
organization and documentation. The goal is to build a well organized,
appropriately documented component library that makes implementing,
testing, documenting, and maintaining production-grade UI components more
efficient.

[1]: https://atomicdesign.bradfrost.com/chapter-2/

### Sass

Stylesheets are written in [Sass][1]. Sass is a CSS preprocessor used
to add variables, functions, placeholders, mixins, and more to CSS development.

[1]: https://sass-lang.com/

### Development Environment

Copy the snippet below to get your development environment setup:

```bash
git clone https://github.com/modelbcompany/woodmontjs.git
npm install
npm run dev
```

Afterwards, the Storybook app will be available at `http://localhost:3000`.

## Built With

- [Storybook][1] - Development environment and documentation tool for UI components

[1]: https://storybook.js.org/
