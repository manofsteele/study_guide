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

W2D5: CSRF

CSRF: Cross Site Request Forgery. A malicious link that a user clicks on (requiring user to already be logged in), that sends a request that looks legitimate to the web application.

--This is what CSRF tokens are for (also known as synchronizer tokens)
--The token is set as a hidden input, and must be included with each request, so a forger would need to guess the token as well.

W3D1: Heaps

Binary Max Heap property: the parent of each vertex except the root contains a value greater than the value of that vertex.

Priority Queue: similar to Queue, but:
-- enqueue puts a new element in a certain order
-- dequeue returns highest-priority element, then defaults to first-in, first-out
-- heaps are the data structure of choice for priority queues

Create O(N log N): insert and heapify down one by one
Create O(N): add all elements as they are, then heapify beginning with last parent node, and proceed to heapify down from each parent node, ending with the root
Insert: insert at lowest point and heapify up
ExtractMax: remove root; replace with last leaf; heapify down
HeapSort: keep extracting max, replacing with last leaf, and heapifying down until heap is empty
--can also do by swapping, and reducing length of heap by one each time
--complexity of heap sort is O(N log N)

N-element heap: leaf nodes are N/2 + 1, N/2 + 2... up to N

To max_heapify, you can start from arr(N/2), and call max_heapify on every index up to N.

AJAX: Asynchronous JavaScript And XML
-- AJAX can also send data as plain text or JSON
-- An event occurs, and JS creates an XMLHttpRequest object, which sends a request to web server; response is sent back and page is updated

how to do AJAX: (from https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)

--make XMLHttpRequest object;
--set httpRequest.onreadystatechange to the name of function (or use anonymous function)
--then httpRequest.open('GET', 'url', true[asynchronous is default]);
and: httpRequest.send();
--if POSTing data, may need to use:
httpRequest.setRequestHeader('Content-Type', '[content type]');
-- on return, check that .readyState === XMLHttpRequest.DONE
-- then check .status (200 is what you're looking for)
-- then use .responseText or .responseXML to get at data returned

DOM events: https://developer.mozilla.org/en-US/docs/Web/Events

Resource events: cached, error, abort, load, unload
Network events: online, offline
Focus events: focus, blur (receiving and losing focus)
WebSocket events: open, message, error, close
Session History events: pagehide, pageshow, popstate (navigating to and from session history entries)
CSS Animation events: animationstart, animationend, animationiteration
CSS Transition events: transitionstart (runs after any delay), transitioncancel, transitionend, transitionrun (runs before any delay)
Form events: reset, submit
Printing events: beforeprint, afterprint (print dialog opening/closing)
Text Composition events: compositionstart, compositionupdate, compositionend
View, Clipboard, Keyboard, Mouse, Drag & Drop, Media, Progress, Storage, Update, Value change are all other categories of events

Page lifecycle: https://javascript.info/onload-ondomcontentloaded

three important events in lifecycle of an HTML page:
-- DOMContentLoaded: DOM tree built, but external resources not necessarily loaded
-- scripts will run before this event fires unless they have async or defer attributes
-- async is for scripts that are independent and don't depend on page content
-- defer is for scripts that need DOM or a particular execution order

-- load: all resources loaded
-- beforeunload/unload: when user is leaving the page

--document.readyState is current state of document: loading, interactive, or complete

Redux videos:

-- can pass store down using context:
-- can use const { Provider } = ReactRedux;

W3D2: More on heap sort

Same-origin policy: https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy

Same-origin policy: a policy that restricts how a document or script loaded from one origin can interact with a resource from another origin.

--same origin is when two urls have same protocol, port (if specified) and host. This may be called "scheme/host/port tuple", or just "tuple".

--HTTP is port 80 by default
--origins can be inherited when url is about:blank or javascript:URL -- but not data:
--domain can be changed by resetting document.domain to a superdomain of current domain; not to any other domain. This well reset port number to null

--cross-origin network access
--cross-origin writes typically allowed: links, redirects, form submissions
--embedding typically allowed
--reads usually disallowed
--cross-origin embedded resources often include: JavaScript scripts, CSS stylesheets, <img>, <audio>, <video>

--use CORS to allow cross-origin access -- lets you specify what hosts can load content
--use a CSRF token to prevent cross-origin writes

--localStorage can only be written to or read from by the origin that created/uses the data, not any others

CORS: Cross-Origin Resource Sharing (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

-- uses additional HTTP headers to tell a browser to let a web application at one origin have permission to access some resources from a server at another origin.
-- for example, via an XMLHttpRequest, or the Fetch API
-- Web fonts often use it.
-- request methods that can cause side-effects must be "preflighted", asking for supported methods first using an OPTIONS request

JS: var, let, and const, from https://medium.freecodecamp.org/the-definitive-javascript-handbook-for-a-developer-interview-44ffc6aeb54e

var: everything before ES6. function-scoped. undeclared variables create a var in global scope

let and const: not hoisted. any curly braces.
const cannot be reassigned, but properties can be changed.

Redux videos:

<Provider> component: makes store available to all container components without passing it explicitly; just use it once when root component is rendered:
`import { Provider } from 'react-redux'`

W3D3: Merge sort

Merge sort runs in O(n log n)
Ruby uses insertion sort for smaller arrays, merge sort for arrays > 13 elements.

NoSQL vs. SQL: https://arstechnica.com/information-technology/2016/03/to-sql-or-nosql-thats-the-database-question/

ACID database: Atomicity, Consistency, Isolation, Durability

NoSQL: often associated with 'big data' tasks.
--columnar databases, like log files
--key-value and databases like MongoDB, which search through unstructured data
--high-speed databases that process large streams of data with low latency.

examples: VoltDB: high-speed SQL database
--Couchbase: high-speed, general purpose, NoSQL
--Hadoop: not considered a database;
-- enabled by MapReduce, a way to process and generate large data sets with a parallel, distributed algorithm on a cluster
-- not easy to use -- SQL-unfriendly
-- tools to use Hadoop include: Cassandra, HBase, Hive, Pig, ZooKeeper
-- best for large data sets, simpler questions
-- not good for real-time data
--MongoDB
--uses BinaryJSON
--Couchbase: open source, NoSQL, distributed, JSON-based document store

--CAP theorem: consistency, availability, partitionability; can only have two

Use strict: https://www.w3schools.com/js/js_strict.asp

Declare by writing between quotes: "use strict";
in strict mode: cannot use undeclared variables
--good to use in all programs
--when declared at beginning of code, has global scope; inside a function, only has local scope
-- makes it harder to accidentally declare a global variable by mistyping a variable name
-- any assignment to a non-writable property will throw an error
-- cannot delete variables, objects, or functions
-- cannot duplicate a parameter name
-- no octals
-- no `with` statement
-- eval cannot create variables in scope from which it was called
-- global object was this; now it is undefined
-- prevents keywords from being used as variable names

Rest paramaters and spread operator: https://javascript.info/rest-parameters-spread-operator

Rest parameters:
-- a function can be called with any number of arguments, no matter how it is defined.
-- ...args is one way to gather remaining parameters into an array. this must be at end of parameters
-- there is also arguments: this object contains all arguments by index
-- but it's not an array, so no array methods can be used
-- arrow functions do not have "arguments" -- arguments will refer to outer function
-- they don't have their own 'this' either

Spread operator:
... before an iterable object expands it into a list of arguments
-- can use multiple objects: ...arr1, ...arr2 -- and it becomes a single list
-- and combine with normal values
-- essentially, reverse of arguments or a rest operator
-- also can merge arrays:
-- let merged = [0, ...arr1, 2, ...arr2];
-- can split strings up this way: [...str] yields an array of characters
-- Array.from(str) also splits

SQL query order:

1. FROM, JOIN
2. WHERE
3. GROUP BY
4. HAVING
5. SELECT
6. DISTINCT
7. ORDER BY
8. LIMIT / OFFSET

W3D4: Counting sort; bind; SQL joins

Counting sort:

-- count number of objects having distinct keys, keeping counts in a count array
-- modify count array such that elements represent cumulative counts
-- next, output each object in input sequence in order, decrementing its count, until finished with input sequence
-- it is efficient if range of input data is not significantly greater than number of objects to be sorted.
-- O(n) time complexity, space proportional to range of data
-- often a subroutine to another algorithm, such as radix sort.
-- the count phase is described as a partial hashing.

more on SQL vs. NoSQL: (from https://www.upwork.com/hiring/data/sql-vs-nosql-databases-whats-the-difference/)

-- i.e., relational vs. non-relational databases
-- non-relational also called document-based

-- NoSQL does not use table model
-- SQL is less flexible
-- NoSQL requires more processing effort and more storage
-- Hadoop: an open-source computing and data analysis platform, often used with NoSQL databases.
-- NoSQL databases can be reached more easily through APIs, allowing developers to access database without necessarily knowing the database's structure.


types of NoSQL databases:

-- key-value : examples include Cassandra, Azure
-- column store : stores data tables as columns -- more scalable. examples: HBase, BigTable
-- document database: MongoDB -- 'key-document' instead of 'key-value'
-- graph database : for interconnected data: Polyglot, Neo4J


MongoDB: used by Craigslist, eBay, Foursquare. open-source and free.

use SQL if you need ACID compliance (atomicity, consistency, isolation, durability); or if your data is structured and unchanging

NoSQL: useful when data has little to no structure.
  -- scalable in the cloud
  -- more rapid development


JS: bind (from https://javascript.info/bind)

-- setTimeout in browser sets this=window for function call; in Node.js this becomes the timer object.

-- one way to avoid loss of this from an object is to use a wrapping function: 

  setTimeout(function() {
    user.sayHi();
  }, 1000);

  vs. setTimeout(user.sayHi, 1000);

vulnerability here is that the function can still be reset before timeout has elapsed.

so: bind!

general form: let boundFunc = func.bind(context);


let user = {
  firstName: "John"
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John

bindAll in a loop:

for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
}

some libraries have .bindAll included


SQL joins: from (http://www.sql-join.com/sql-join-types/)

inner: all records where join condition is met.
left join: everything from A, plus table B records that meet join;
right join: everything from B, plus table A records that meet join;
full join: all records from A and B


W3D5: Bubble sort, scalability, JS function object, SQL subqueries

Bubble sort: from https://www.toptal.com/developers/sorting-algorithms/bubble-sort


--Nearly sorted data takes O(n), but needs at least 2 passes through data.
--Stable;
-- O(1) extra space
-- O(n2) comparisons and swaps

-- interesting use case for bubble sort: from https://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/

printing k largest/smallest elements in an array 
use bubble sort k times
-- time complexity will be O(nk)


Scalability: from https://stackoverflow.com/questions/11707879/difference-between-scaling-horizontally-and-vertically-for-databases

Difference between horizontal and vertical scalability of SQL and NoSQL databases

horizontal scaling: scaling by adding more machines
vertical scaling: adding more power (CPU/RAM) to one machine

for databases, this means: horizontal is partitionaing data, vertical is spreading load across resources of one machine

horizontal scaling: Cassandra, MongoDB, Google Cloud Spanner
vertical: MySQL -- Amazon RDS 
  -- vertical often involves downtime when switching from less powerful to more powerful machines.


JavaScript function object, from https://javascript.info/function-object

In JS, functions are objects. We can add/remove properties, pass by reference, etc.

-- .name gives us the function's name
-- even when the name is the result of an assignment
-- object methods have names too
-- .length returns number of function parameters, without rest parameters
-- and we can add custom properties -- not the same as a local variable
-- NFE: named function expression -- allows a function expression to reference itself. N.B., can't do this with function declarations
-- libraries may declare a global function to attach properties to, to avoid polluting global namespace. e.g. $ in jQuery, or _ in lodash.


SQL subqueries, from: https://mode.com/sql-tutorial/sql-subqueries/


W3D6-7: Radix sort, scalability, JS function declaration vs. function expression, SQL GROUP BY


Radix sort: from https://www.geeksforgeeks.org/radix-sort/

-- Sort digit by digit, starting with least significant digit. Counting sort can be used as a subroutine for this sort


Scalability lecture: from https://www.youtube.com/watch?v=-W9F__D3oY4&t=5s

-- discussion of hosting
-- VPS: virtual private server, which you can rent from a provider
-- running virtual machines in the cloud
-- vertical scaling: add more ram or disk space on a single machine -- this has limits
-- split resources is one way around this
-- extra hard drive -- SAS -- serially attached SCSI drive
-- horizontal scaling: multiple web servers
-- problem is now how to distribute requests across your servers -- load balancing
-- BIND is one load balancer: sequential IP's -- different IP for each request
-- this can be a problem for sessions -- they need to be on a specific machine


JS: function expression vs. function declaration

-- function expression is created when execution reaches it (i.e., it is not hoisted). this is when the function is in the second half of an assignment expression.
-- function declaration is hoisted and can be called before it is declared. 

SQL: Group By vs. Having

-- group by -- is a query that takes a table and summarizes it into another table 
-- having is essential a where clause that applies to this computed table
