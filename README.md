# Nuxt 3 Journey
## Installation

### New Project
Open the terminal and use the following command to create a new starter project:
```bash
  npx nuxi init [name-your-project]
```
<br/>

Open the [name-your-project] folder in Visual Studio Code.
```bash
   cd [name-your-project]
```

```bash
   code [name-your-project]
```
<br/>

Install the dependencies
<b>Using NPM</b>
```bash
   npm install
```

<b>Using Yarn</b>
```bash
  yarn install
```
<br/>

Start Development Server
<b>Using NPM</b>
```bash
   npm run dev -- -o
```
or
```bash
   npm run dev
```

<b>Using Yarn</b>
```bash
   yarn dev -o
```
or
```bash
   yarn dev
```
<br/>

## Concepts
  - [X] Vue.js Development (<a target="_blank" href="https://v3.nuxtjs.org/guide/concepts/vuejs-development">link here</a>)
    - Using single file components (SFC)
    - Components auto-imports in **/components** directory
    - Using Vue Router for the router in **/pages**
    - Better performance than the Nuxt 2
    - Using composition API
    - Typescript support 
  - [X] Rendering Modes (<a target="_blank" href="https://v3.nuxtjs.org/guide/concepts/rendering">link here</a>)
    - Client-side rendering
    - Universal rendering
    - Hybrid Rendering (New in Nuxt 3 with server enginge **Nitro**)
  - [X] Auto Imports (<a target="_blank" href="https://v3.nuxtjs.org/guide/concepts/auto-imports">link here</a>)
    - Nuxt auto-imports for function & composables to perform **data fetching**, **app context** & **runtime config**
    - Vue auto-imports, Vue 3 exposes reactivity API, lifecycle hooks and helpers
    - Directory-based auto-imports, like in **/components** and **/composables**
  - [X] Typescript (<a target="_blank" href="https://v3.nuxtjs.org/guide/concepts/typescript">link here</a>)
    - Type-checking
    - Auto-generated types

## Features
  - [ ] Views
    - Pages
      - [X] Basic creating a page ( with different extension like .vue, .ts & .tsx )\
      *example file:* 
        - <a target="_blank" href="https://github.com/wahyufeb/nuxt3-journey/blob/master/pages/page-with-vue/index.vue">pages/page-with-vue/index.vue</a>
        - <a target="_blank" href="https://github.com/wahyufeb/nuxt3-journey/blob/master/pages/page-with-ts/index.ts">pages/page-with-ts/index.ts</a>
        - <a target="_blank" href="https://github.com/wahyufeb/nuxt3-journey/blob/master/pages/page-with-tsx/index.tsx">pages/page-with-tsx/index.tsx</a>
      - [x] Dynamic route\
      Create dynamic route with add **[ ]** bracket to the file or directory.\
      Catch the value with **$route.params[your-dynamic-route-name]**.\
      *example file:*
          Dynamic route with directly to the file.
        - <a target="_blank" href="https://github.com/wahyufeb/nuxt3-journey/blob/master/pages/dynamic-route/users/[user].vue">pages/dynamic-route/users/[user].vue</a>
       
        Dynamic route with directly to the directory.
        - <a target="_blank" href="https://github.com/wahyufeb/nuxt3-journey/blob/master/pages/dynamic-route/permission-[role]/index.vue">pages/dynamic-route/permission-[role]/index.vue</a>
        - <a target="_blank" href="https://github.com/wahyufeb/nuxt3-journey/blob/master/pages/dynamic-route/permission-[role]/[access]/index.vue">pages/dynamic-route/permission-[role]/[access]/index.vue</a>
      - [X] Catch all route\
      *example file:*
        Create page for **catch all route** from the path (specifically for the "*catch-route*" path)
        - <a target="_blank" href="https://github.com/wahyufeb/nuxt3-journey/blob/master/pages/catch-route/[...slug].vue">pages/catch-route/[...slug].vue</a>

        Create file with name **404.vue** on the pages/ folder to handle all routes that are not otherwise matched. 
        - <a target="_blank" href="https://github.com/wahyufeb/nuxt3-journey/blob/master/pages/404.vue">pages/404.vue</a>
      - [ ] Nested routes
      - [ ] Child route
      - [ ] Page metadata
      - [ ] Page navigation
    - Layouts **(soon)**
    - Components **(soon)**