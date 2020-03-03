### Installing live-server globally

- npm install -g live-server
- to run live-server from the cli:
  - live-server public
  - make sure you're in the root folder

### Installing React via CDN

- ```javascript
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  ```

- ```js
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  ```

### Browser and JSX

- The browser does not understand JSX. JSX must be compiled to Javascript so the browser can understand it.