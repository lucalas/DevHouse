# DevHouse

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `views/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Project Guidelines

### Imports

1. If a module is in the `projectRoot/src` folder must be imported without the relative path

   **Example:**

   ```diff
   - import { Component } from '../components/Component'
   + import { Component } from 'components/Component'
   ```

### Creating new component/page

```sh
yarn generate
```

For creating components or pages use the CLI!
We use a command `yarn generate` that ask you what type of component / view you want to create and make boring task for you

> #### ⚠️ Important:<br>
>
> Keep in mind inside pages there are only a mirror for the real file, located in views
> So for example if you want to create a dynamic route in the view just call it with a meaningfull name and inside
> the page you can use the **NextJS** syntax ( carrers/[id].ts )

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
