# New Project
My project is a personal blog app.
<!-- This is how you would show a photo -->
<!-- ![App hero image](/public/assets/img/readme/app.png) -->

## Description

My app allows me to upload a picture with a text area and a title. When you first open the app you are given the option to add a post, and edit or delete an existing post. When you click the edit button it brings up a form that has existing values in the input. You cabxcbxcbn delete the entire post when you click the delete button. New posts will appear at the top blank and will need to be edited to appear how you would like. In the form there is an input that allows you to put in an image URL and that will appear in the middle of the post.


&NewLine;
&NewLine;

## How To Use

## Table of Contents

- [New Project](#new-project)
  - [Description](#description)
  - [How To Use](#how-to-use)
  - [Table of Contents](#table-of-contents)
  - [Development](#development)
    - [Technology Overview](#technology-overview)
    - [Dependencies/Packages](#dependenciespackages)
      - [Dev Dependencies](#dev-dependencies)
    - [Client](#client)
      - [Persisting User Data](#persisting-user-data)
      - [Setting and Updating State](#setting-and-updating-state)
    - [Bugs](#bugs)
- [Future Development](#future-development)
- [Resources](#resources)
- [Contact](#contact)

## Development

- [Technology Overview](#technology-overview)
- [Dependencies/Packages](#dependenciespackages)
- [Client](#client)

### Technology Overview

&NewLine;
&NewLine;

```sh
Frontend – Vite React, CSS3 
Backend – Node, Express
```

&NewLine;
&NewLine;

### Dependencies/Packages
 "dependencies": {
    "axios": "^1.6.1",
    "express": "^4.18.2",
    "morgan": "^1.10.0",
    "nodemon": "^3.0.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "vite-express": "^0.11.0"
  },

&NewLine;
&NewLine;


<!-- This is how you make a table -->

| | | |
| ------ | ------ | ------ |
| [express](https://www.npmjs.com/package/express) | [vite-express](https://www.npmjs.com/package/vite-express) | [morgan](https://www.npmjs.com/package/morgan) |

&NewLine;
&NewLine;

#### Dev Dependencies

&NewLine;
&NewLine;

| | |
| ------ | ------ |
| [vite](https://www.npmjs.com/package/vite) | [nodemon](https://www.npmjs.com/package/nodemon) |

&NewLine;
&NewLine;

> [Back To Development](#development) || [Back To Table of Contents](#table-of-contents)

### Client

My site is quite simple as of right now and has a lot of room to grow with that. Over time I would like to build off of this more.

&NewLine;
&NewLine;

#### Feature You Like
I like the simplicity of it right now but that also means there aren't any cool features worth noting.

<!-- this is how you make coding snippets -->

``` js
import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';

const app = express();
const port = '8000';

// app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

ViteExpress.config(
    { printViteDevServerHost: true }
);


ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));
```

> [Back To Client](#client) || [Back To Development](#development)



### Bugs

I have a lot to add and tweak. I think I would have to mess with it for a while to know more bugs it might have.(im certain there are a bunch)

### Future Development

I want to turn this into more of a disscussion site in the future. Although I do have a lot of techniques to learn before that is possible

### Resources

If you use any 3rd party resources, list them here

### Contact

If you have any feedback our questions, please reach me by [email](kade.sv6@gmail.com), [GitHub](https://github.com/Kadesv), or [LinkedIn](https://www.linkedin.com/)!
