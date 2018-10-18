https://medium.freecodecamp.org/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2

Fundamental React Concepts 

1. React is all about components.
2. JSX allows React to be written with code similar to HTML.
3. You can use JavaScript expressions anywhere in JSX
  --only expressions, not statements (like if statements)
  --inside curly braces 
  --a React element is essentially a function call 
  --{true}, {false}, {undefined}, and {null} are all valid elements, which render nothing. This is a useful way around the prohibition on if/then logic
  --functional methods like map, reduce, concat are all ok because they return expressions 
4. You can write React components with JavaScript classes 
  --when specifying onClick, don't include parentheses -- just use reference to function 
5. Events in React: Two Important Differences 
  a. All React element attributes are named using camelCase, e.g. onClick, not onclick 
  b. function reference is event handler, not string: onClick={handleClick}, not onClick="handleClick" 
  -- event.preventDefault in a React handler is used because React wraps the DOM event object with an object of its own. 
6. Every React component has a story -- this is how this site presents the subject of lifecycle methods 
7. React components can have a private state -- remember that setState is asynchronous, and you can update only those fields you specify
8. React will react -- i.e., to changes in state and props 
9. React is your agent -- does the communication with browser DOM methods 
10. Every React component has a story -- here, a discussion of the fact that React computes new rendered output when there is no custom shouldComponentUpdate method, and checks whether it's different, deciding whether to re-render, and calling componentDidUpdate in either case. 



https://visualgo.net/en/heap?slide=1-2 

All about heaps 

Priority queue: like a queue, but items have a priority attached as well -- items get removed first on basis of priority, then on basis of insertion order.

Heaps have efficiency of log-n because they are effectively binary search trees, which are complete. This is why they can be stored as arrays.

Why if a vertex has two children, we have to check (and possibly swap) that vertex with the larger of its two children during the downwards fix of Max Heap property? -- no answer given here.

A heap must be a complete binary tree -- every level must be filled, and the last must have left-most nodes filled first. 

Min heaps have smallest value at root, max heaps have largest value at root.

Unlike binary search trees, left node does not have to be smaller/larger than the right node. 

