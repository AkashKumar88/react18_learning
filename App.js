const heading = React.createElement('h1', {id: 'heading'}, 'Hello World from React');

const parent = React.createElement('div', {id: 'parent'}, React.createElement('div', {id: 'child'}, [React.createElement('h1', {key: 'h1'}, "Hello World from H1"), React.createElement('p', {key: 'p'}, "Hello World from P")]));
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);   
root.render(parent);   