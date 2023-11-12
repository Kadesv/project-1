# New Project
My project is a personal blog site;
<!-- This is how you would show a photo -->
<!-- ![App hero image](/public/assets/img/readme/app.png) -->

## Description

My site allows me to upload a picture with a text area and a title.


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

Here you can describe what creates your front end (react using Vite) and highlight bits of code you're proud of

&NewLine;
&NewLine;

#### Feature You Like
I don't really have any amazing parts to this. I do like how well the css handles on my browser but the css is a mess to say the least.

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

I have a lot to add and tweak. Css items could be better. I think I would have to mess with it for a while to know more bugs it might have.(im certain there are a bunch)

### Future Development

I want to turn this into more of a disscussion site in the future obviously far out of my skill range but still.

### Resources

If you use any 3rd party resources, list them here

### Contact

If you have any feedback our questions, please reach me by [email](example@outlook.com), [GitHub](https://github.com/MyUserName), or [LinkedIn](https://www.linkedin.com/)!