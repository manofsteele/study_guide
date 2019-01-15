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

Redux videos:

Week 2 Day 3:

Dynamic Programming video:

dynamic programming is to be used when a problem satisfies the
--overlapping subproblems property
--optimal substructure property: optimal solution of a given problem can be obtained by using optimal solutions of its subproblems.

memoization: uses a lookup table that is checked first; does recursive calls until it reaches an entry in the lookup table or the base condition; fills up the table on the way back up the recursion stack.

time complexity and space complexity of O(n), for Fibonacci

tabulation: works from bottom up -- begins with solutions to base problems, then goes up to n. so it works in single function call, saving multiple function calls.

GET vs. POST

GET: can be cached; remains in browser history; can be bookmarked; should not be used with sensitive data (because data is visible in the URL); have length restrictions; can only request, not modify data

POST: never cached; do not remain in browser history; cannot be bookmarked; no restrictions on length

PUT vs. PATCH

PUT: replaces/updates an entire entity, with all properties
PATCH: replaces/updates only some properties of an entity

Redux videos:

Avoiding array mutations: call deepFreeze on an array to prevent modification
--use concat to return new object instead of mutation
--use .slice, then concat instead of .splice to remove an element
--use ES6 spread operator ...arrayName[range],

--use Object.assign({}, object name, {object properties to be changed});
--this way you don't mutate and only change certain properties, allowing for further properties to be added to the object

writing a todo list reducer:
--reducer takes action and previous state, creates new object with updated properties, and returns that

Reducer composition: Different reducers specify how different parts of the state tree are updated in response to actions.

--name reducers after the state keys they manage
--generate top level reducer with the combineReducers function provided by Redux
--combineReducers has one argument: an object specify mapping between state keys and their reducers

Week 3 Day 4:

Dynamic programming

How to classify as DP?: --maximizing or minimizing problems;
--count arrangements under certain conditions
--certain probability problems
--all DP problems satisfy overlapping subproblems property
--most also satisfy optimal substructure property

--decide what state of problem is: set of parameters than uniquely identify a certian position in the problem
--formulate a relation between the state
--add memoization or tabulation

https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95

10 Interview Questions Every Javascript Developer Should Know

1. Programming paradigms: functional programming v. OOP
   --Javascript supports OOP using prototypal inheritance

2. What is functional programming?
   -- functional programming produces programs by composing mathematical functions and avoiding shared state and mutable data.
   -- goal is to avoid side effects on data
   -- write "pure functions"
   -- this is where first-class functions, higher-order functions, etc. come in
   -- Lisp is an example of a functional programming language

3. Class inheritance vs. prototypal inheritance

class inheritance: instances inherit from classes, and sub-classes inherit from classes. use constructor functions. 'class' keyword not strictly necessary

prototypal inheritance: instances inherit directly from other objects
-- objects are created using factory functions of Object.create()

4. What are the pros and cons of functional vs. OOP programming?

OOP pros: easy to understand objects and methods; imperative style makes code easy to read 

OOP cons: typically depends on shared state. Objects and behaviors are on the same entity, which may be accessed in a non-deterministic order, possibly leading to race conditions.

FP pros: avoids shared state and side effects; code is more generally reusable. declarative style concentrates on what vs. how -- this gives latitude for refactoring and optimization 
-- pure functions also make scaling across multiple processors or clusters easier without creating resource conflicts

FP cons: code can be less readable because it is more abstract and terse.
-- more people are familiar with OOP 
-- steeper learning curve 

5. When is classical inheritance an appropriate choice? 

-- Never, or almost never. At least, never more than one level.
-- "Favor object composition over class inheritance."
-- "all object hierarchies are eventually wrong for new use cases."

6. When is prototypal inheritance an appropriate choice?

-- multiple types of prototypal inheritance
  --delegation (i.e., the prototype chain)
  --concatenative (i.e., mixins, `Object.assign()`)
  --functional (function used to create a closure)

-- any time you need inheritance; when objects need to be composed from multiple sources; when modules or FP don't provide an obvious solution

7. What does 'favor object composition over class inheritance' mean?

Code reuse should be achieved by assembling smaller units of functionality into new objects instead of inheriting from classes and creating object taxonomies.

That is: use can-do, has-a, or uses-a relationships instead of is-a relationships.

8. What are two-way data binding and one-way data flow, and how are they different? 

two-way data binding: UI fields are bound to model data dynamically such that when a UI field changes, the model data changes with it and vice versa.

one-way data flow: the model is the single source of truth. (React/Redux is one-way data flow). changes to UI trigger messages to the model, which has access to change app's state.

--Angular uses two-way binding.

9. What are the pros and cons of monolithic vs. microservice architectures? 

Monolithic: your app is written as one cohesive unit, whose components are designed to work together, sharing same memory space and resources.

Microservice: your app is made up of lots of smaller, independent applications that can run in their own memory space and scale independently from each other, potentially across many machines.

Monolithic pros: makes logging, rate limiting, audit trails easier to hook up

Monolithic cons: tight coupling -- difficult to isolate services for independent scaling or code maintenance. Also harder to understand, as relationships between different parts of code are not always obvious.

Microservice pros: Usually better organized, and components have clearly defined uses that do not depend on other components. Easier to recompose to serve different purposes. Can scale individual services more easily.

Microservice cons: containers and VM's can be a problem. may need to establish separate modules for various cross-cutting concerns, or route traffic in another service layer.

10. What is asynchronous programming, and why is it important in JavaScript? 

Synchronous: code is executed from top-to-bottom, and blocking.

Asynchronous: engine runs in an event loop. blocking operations start requests, and code keeps running without blocking for the result. When response is ready, interrupt is fired, causing event handler to run, and control flow continues. 

UI's are asynchronous by nature -- user input interrupts event loop and triggers event handlers.

Node is asynchronous by default. --accepts more incoming requests while first one is being handled.






