<div id="top"></div>

<div align="center">
  <a href="https://github.com/OxyProgrammer/manext">
    <img src="Banner.png" alt="Logo" width="790">
  </a>
  <br/>
  <h1 align="center"><u>Manext</u></h1>

  <p align="center">
    A scaffold to jumpstart your projects using Next and Material!!
    <br />
    <a href="https://manext.vercel.app/" target="_blank"><strong>Checkout demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/OxyProgrammer/manext/issues">Report Bug</a>
    ·
    <a href="https://github.com/OxyProgrammer/manext/issues">Request Feature</a>
  </p>
  </div>

[![GitHub issues](https://img.shields.io/github/issues/OxyProgrammer/manext?style=for-the-badge)](https://github.com/OxyProgrammer/manext/issues)
[![GitHub forks](https://img.shields.io/github/forks/OxyProgrammer/manext?style=for-the-badge)](https://github.com/OxyProgrammer/manext/network)
[![GitHub stars](https://img.shields.io/github/stars/OxyProgrammer/manext?style=for-the-badge)](https://github.com/OxyProgrammer/manext/stargazers)
[![GitHub license](https://img.shields.io/github/license/OxyProgrammer/manext?style=for-the-badge)](https://github.com/OxyProgrammer/manext/blob/main/LICENSE)

<!-- ABOUT THE PROJECT -->

## About The Project

Material UI, in their documentation gives all you need for [SSR](https://mui.com/guides/server-rendering/). And [here](https://github.com/mui-org/material-ui/tree/HEAD/examples/nextjs) is a sample implementation for Next JS integration with Material UI. The sample implementation is fairly good though you may come across some warnings that is fixed in **_Manext_**. However, **_Manext_** is not only about the integration of MUI and NextJS. It takes the integration one step ahead where a lot of boilerplate and common functionalities are taken care of like _Responsive menus_, Support for _Dark and Light themes_ and _Modal Dialogs_!

**_Manext_** takes care that:

- Your time should be focused on creating something you actually want. Jump into the project directory and start writing your first component!
- You shouldn't be doing the same tasks over and over like Handling Appbar Menu | Side Drawer | Notifications.
- You should implement KISS and DRY principles to the rest of your life 😃

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

Manext is built using 👇

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [MUI](https://mui.com/)

It is expected you are well versed with latest React features like hooks and context api.

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites (optional)

Ensure you have latest stuff with npm.

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/OxyProgrammer/manext.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. If everything ran fine, start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<!-- USAGE EXAMPLES -->

## Usage

Here is a demo of Manext showcasing the bare minimum that can be achieved with it 👉
[there you go](https://manext.vercel.app/).

Showing Modals is as simple as using the hook 👉 _useModal_ and passing in the _content_ and _actions_.
This gives you entire control on your _Dialog's_ behavior, albeit keeping the logic of showing the dialog wrapped up in the _useModal_ hook!

```javascript
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useModal } from 'core-components/hooks';

const Modals = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);

  const content = (
    <Typography gutterBottom>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
      metus auctor fringilla.
    </Typography>
  );

  const actions = (
    <Button autoFocus onClick={closeModal}>
      Save changes
    </Button>
  );

  const modalStuff = useModal(modalOpen, closeModal, 'Sample Title', content, actions);

  return (
    <>
      {modalStuff}
      <Button color='primary' variant='contained' onClick={() => setModalOpen(true)}>
        Launch Modal
      </Button>
    </>
  );
};

export default Modals;
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [✔️] Integrate MUI with Next JS.
- [✔️] Create the responsive header with menu for desktop mode and hamburger for mobile.
- [✔️] Add Modal hook.
- [✔️] Add React Context.
- [✔️] Support for Dark and Light theme.
- [✔️] Create the demo and deploy on vercel/ github page.
- [🚧] Add Modal hook.

See the [open issues](https://github.com/OxyProgrammer/manext/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

OxyProgrammer - oxyprogrammer@gmail.com

Project Link: [https://github.com/OxyProgrammer/manext](https://github.com/OxyProgrammer/manext)

<p align="right">(<a href="#top">back to top</a>)</p>
