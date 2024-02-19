import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';

// function MyApp() {
//   return (
//     <div>
//       <h1>This is vite Custom App</h1>
//     </div>
//   );
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank',
//   },
//   children: 'Click me to visit google',
// };

// const AnotherElement = (
//   <a href="https://google.com" target="_blank">
//     visit google
//   </a>
// );

const anotherUser = 'chai aur react';

const reactElement = React.createElement(
  //pre define method and parameters (SYNTAX)
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'Click me to visit google ',
  anotherUser
);

ReactDOM.createRoot(document.getElementById('root')).render(reactElement);
