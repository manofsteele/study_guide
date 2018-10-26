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



AJAX and XMLHttpRequest : https://www.w3schools.com/xml/ajax_intro.asp 

AJAX is asychronous JavaScript and XML 
the heart of AJAX is the XMLHttpRequest, an object used by browsers to exchange data with servers. 

XMLHttpRequest methods include new XMLHttpRequest(), abort(), getResponseHeader(), open(method, url, async, user, psw), send(), setRequestHeader() 

XMLHttpRequest properties include onreadystatechange, readyState, responseText, responseXML, status, and statusText 

what kind of request to create? -- usually GET, but POST when: 
    --cached file is not an option (e.g., updating a file)
    --sending large amount of data (POST has no size limitations)
    --when sending user input, POST is more robust and secure 

to send information with the request, add to query string in URL 

to POST data, use setRequestHeader to specify data type, and the data itself in send() 

the url in a request is a file on a server 


DOMContentLoaded and load: https://javascript.info/onload-ondomcontentloaded

DOMContentLoaded can only happen after scripts in header have been executed; unless the scripts have async or defer attributes 

async is used for scripts like counters or ads that don't need to access page content.

defer is used for scripts that need to access the DOM, or where execution order is important.

scripts after the style in the header don't execute until styles have loaded.

document.readyState has three possible values: loading, interactive, and complete 



Week 2 Day 2: 

HTTP Status Codes, from https://www.restapitutorial.com/httpstatuscodes.html

200 OK: request successful
201 Created: new resource has been created
204 No Content: Request fulfilled, but no return content needed 
304 Not Modified: Resource not modified since last requested
400 Bad Request: bad syntax leading to error
401 Unauthorized: No authentication 
403 Forbidden: User not authorized/resource not available
404 Not Found: Nothing at that URI -- or the service wants to mask a 401 or 403 
409 Conflict: conflict in request, such as an edit conflict -- deleting a root object or making a duplicate entry, for example
500 Internal Server Error: generic error message -- used when nothing else seems suitable -- catch-all error for server-side exception.




