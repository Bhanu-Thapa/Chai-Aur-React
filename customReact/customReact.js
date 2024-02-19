const mainContainer = document.querySelector('.root');
console.log(mainContainer);

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click me to visit google',
};

function customRender(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);
  domElement.setAttribute('href', reactElement.props.href);
  domElement.setAttribute('target', reactElement.props.target);
  domElement.innerHTML = reactElement.children;
  mainContainer.appendChild(domElement);
}

customRender(reactElement, mainContainer);
