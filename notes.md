Notes:

This is my notes section about CS 260.

9/12
I learned a lot today about git and how it interacts with the environment and GitHub. For instance, it is quite easy to put a repository you have made in GitHub into your files by using the command line, going to the perfered directory and using:

git clone "github link"

this then puts the files from the repository in the directory which can be accessed in an environment like VS Code or Pycharm. Another thing I learned was how to push, add, pull, and commit from the command line. To do this you navigate to the directory you wish to change and use commands like:

git pull

git add "filename"

git commit -am "commit name"

git push

These all are very essential and should be used through the workflow of any code. I also learned a little bit about merging. I'm not 100% certain on this and will need to do some additional learning but if two instances of the code are changed, you can compare the changes in an environment and choose which one to keep.

9/14
Today I created a website instance? Server instance? IP Address? I'm not exactly sure what it is but it is run through AWS. Here's the details:

IP: http://98.82.105.184

How to run from console:

ssh -i [key pair file] ubuntu@98.82.105.184

How to check stats:

ls -l

10/21
MIDTERM NOTES:
CS260 Midterm Topics/Questions Review

In the following code, what does the link element do?:

Here are the main attributes of the <link> element:
rel: Specifies the relationship between the current document and the linked resource. Common values include:
"stylesheet": Links to an external CSS file.
"icon": Links to a favicon for the site.
"preload": Tells the browser to preload resources like fonts or images.
href: Specifies the URL of the linked resource.
type: Specifies the type of the linked resource, such as "text/css" for stylesheets.

In the following code,  what does a div tag do?:

Here are key uses of the <div> tag:
Grouping Content: It allows you to group elements (text, images, forms, etc.) together for organizational purposes.
Styling: You can apply CSS styles to a <div> to control its appearance, layout, and behavior. For example, you can control its width, height, background color, or borders.
Layout: Divs are frequently used with CSS frameworks or grid systems to create structured layouts like columns, headers, footers, and sidebars.
JavaScript Interaction: <div> elements can be targeted and manipulated using JavaScript to make dynamic changes (e.g., showing/hiding content).

In the following code, what is the difference between the #title and .grid selector?:

#title (ID Selector):
Targets an element with a specific id attribute.
An id must be unique within the document, meaning no two elements should have the same id.
The # symbol is used to select an element by its id.
.grid (Class Selector):
Targets one or more elements that share the same class attribute.
A class can be reused for multiple elements throughout the document.
The . symbol is used to select elements by their class.

In the following code, what is the difference between padding and margin?: 

Padding:
Padding is the space inside an element, between the content and the element’s border.
It adds space between the element's content (like text or images) and its border.
Padding is part of the element itself and affects the element’s background (i.e., background colors or images extend into the padding area).
Margin:
Margin is the space outside an element, between the element’s border and neighboring elements.
It controls the distance between the element and surrounding elements.
Margins do not affect the element's background, so the background color or image does not extend into the margin area.

Given this HTML and this CSS how will the images be displayed using flex?:

Explanation of Flex Properties:
display: flex;: Makes the container a flexbox container, enabling Flexbox layout for the child elements (images in this case).
justify-content: space-around;: Distributes space around the images, so there's equal spacing between and around each image.
align-items: center;: Vertically centers the images within the container.
flex-wrap: wrap;: Allows the images to move to a new line if the container becomes too narrow (useful for responsive design).
img { width: 150px; }: Ensures the images have a fixed width while maintaining their aspect ratio (due to height: auto).

What does the following padding CSS do?
What does the following code using arrow syntax function declaration do?:

Summary:
Arrow functions provide a shorter, cleaner syntax for writing functions.
They do not have their own this context; instead, they inherit this from the surrounding scope.
They are ideal for scenarios where you don't need a new this binding (like callbacks and event handlers).
They cannot be used as constructors or in object-oriented patterns that rely on the prototype property.

What does the following code using map with an array output?:

Summary:
map() is a functional way to iterate over an array and create a new array by transforming the original array's elements.
It doesn’t change the original array and is used for transformations like converting, mapping values, or applying a function to all elements.

What does the following code output using getElementByID and addEventListener?:

Code Breakdown:
getElementById:
document.getElementById('myButton') is used to grab the button element in the DOM with the id of 'myButton'.
addEventListener:
button.addEventListener('click', function() {...}); adds an event listener to the button element. It listens for the click event and triggers a function when the button is clicked.
Inside this function, we use document.getElementById('message') to grab the paragraph with id="message" and change its textContent to 'Button was clicked!'.

What does the following line of Javascript do using a # selector?:

Key Points:
The # selector is specifically for selecting elements by their ID.
The ID should be unique within the HTML document, meaning there should only be one element with that ID.
Once you have selected the element, you can manipulate it (e.g., change its text, style, or add event listeners).

Which of the following are true? (mark all that are true about the DOM):

The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.
For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.

By default, the HTML span element has a default CSS display property value of: Inline

How would you use CSS to change all the div elements to have a background color of red?:

div { 
background-color: red;
}

How would you display an image with a hyperlink in HTML?:

<body> 
<a href="https://www.example.com" target="_blank">
<img src="https://via.placeholder.com/150" alt="Example Image" />
 	</a> 
</body>

In the CSS box model, what is the ordering of the box layers starting at the inside and working out?:

Content => Padding => Border => Margin

Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?: 

<p>
<span class="green-text">trouble</span> double 
</p>

.green-text { 
color: green;
}

What will the following code output when executed using a for loop and console.log?:

Breakdown:
Initialization: let i = 0 initializes the loop counter i to 0.
Condition: i < 5 is checked before each iteration. The loop continues as long as this condition is true.
Increment: i++ increments i by 1 after each iteration.
console.log(i): This line outputs the current value of i to the console during each iteration of the loop.

How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?: P, ol, ul, h2, h1, h3

How do you declare the document type to be html?: <!DOCTYPE html>

What is valid javascript syntax for if, else, for, while, switch statements?:

If (condition) {
//stuff
}
else if (condition2) {
//other stuff
}
else {
}

for (let i = 0; i < n; i++) {
//stuff(i)
}

While (condition) {
//stuff
}

do {
//stuff
} while (condition);

switch (expression) {
Case expression1:
	//stuff
	break;
Case expression2:
	//stuff
	break;
default:

What is the correct syntax for creating a javascript object?

let person = { 
firstName: "John", 
lastName: "Doe", 
age: 30,
 isStudent: false, 
greet: function() { 
console.log("Hello, " + this.firstName); 
} 
};

Is it possible to add new properties to javascript objects?: Yes

If you want to include JavaScript on an HTML page, which tag do you use? <Script>

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

Which of the following correctly describes JSON?:
JSON is a widely used data format that represents structured data using key-value pairs, arrays, and objects. It is commonly used in APIs for data transmission and is easily readable by both humans and machines.

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?
Chmod: Modifies file or directory permissions. This sets read, write, and execute permissions for the owner, and read and execute permissions for everyone else.
Pwd: Displays the full path of the current directory.
Cd: Change directory
Ls: List
Vim: Opens the Vim text editor, a powerful command-line text editor.
Nano: Opens the Nano text editor, a simple, user-friendly text editor.
Mkdir: Creates a new directory
Mv: Moves or renames files and directories
Man: Displays the manual or help page for a command.
Ssh: Connects to a remote system securely over a network using SSH.
Ps: Displays currently running processes.
Wget: Downloads files from the internet.
Sudo: Executes commands with administrative (root) privileges.

Which of the following console command creates a remote shell session?: 

ssh username@hostname

Which of the following is true when the -la parameter is specified for the ls console command?:

	-l (long listing format): Displays detailed information about files and directories, such as permissions, number of links, owner, group, file size, and modification time.
-a (all): Shows all files, including hidden files (files whose names start with a dot .), which are not shown by default.

Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?:

Top-Level Domain (TLD): click
Root Domain: bozo.click
Subdomain: fruit.bozo.click and more specifically banana.fruit.bozo.click where banana is a subdomain of fruit.

Is a web certificate is necessary to use HTTPS.:

Yes, a web certificate is necessary for HTTPS. Without it, you cannot secure the communication between your server and users through HTTPS.

Can a DNS A record can point to an IP address or another A record.:

An A record can only point to an IP address.
It cannot point to another A record; use a CNAME record for aliasing to another domain.

Port 443, 80, 22 is reserved for which protocol?:

Port 443: HTTPS (secure web traffic)
Port 80: HTTP (standard web traffic)
Port 22: SSH (secure remote access)

What will the following code using Promises output when executed?

Promises: Promises provide a cleaner way to handle asynchronous operations compared to callbacks. They represent a value that may not be available yet but will be resolved or rejected in the future.

const myPromise = new Promise((resolve, reject) => 
{ const success = true; // Change to false to see the rejection behavior 
if (success) { 
resolve("Promise resolved!"); 
} 
else { 
reject("Promise rejected!"); 
} 
}); 

myPromise 
.then(result => { 
console.log(result); // Will log "Promise resolved!" if resolved 
}) .catch(error => { 
console.log(error); // Will log "Promise rejected!" if rejected 
});


Final Notes:

What is the default port for HTTP/HTTPS/SSH?:
HTTP: 80
HTTPS: 443
SSH: 22

What does an HTTP status code in the range of 300/400/500 indicate?:
300: Redirection (e.g., 301 for permanent redirect, 302 for temporary redirect)
400: Client Errors (e.g., 404 for Not Found, 403 for Forbidden)
500: Server Errors (e.g., 500 for Internal Server Error, 502 for Bad Gateway)

What does the HTTP header content-type allow you to do?:
The Content-Type header specifies the media type of the resource, helping the server and client understand how to interpret the body of the request or response (e.g., application/json, text/html).

What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do?:
Secure cookie: Can only be sent over HTTPS, ensuring the cookie is encrypted in transit.
Http-only cookie: Cannot be accessed through JavaScript (helps prevent XSS attacks).
Same-site cookie: Restricts the sending of cookies to only same-site requests, mitigating CSRF attacks.

Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?:
You’ll need the specific code to provide the exact answer, but generally, Express middleware will log details about the incoming request such as the HTTP method (GET) and URL path (/api/document).

Given the following Express service code: What does the following front end JavaScript that performs a fetch return?:
This depends on the Express service code and the fetch request. Typically, a fetch will return a promise that resolves with the response object, which can be parsed to access data like JSON.

Given the following MongoDB query, select all of the matching documents {name:Mark}:
This query will return all documents in the collection where the name field is equal to "Mark".

How should user passwords be stored?:
User passwords should never be stored in plain text. They should be hashed using a strong cryptographic algorithm like bcrypt, scrypt, or Argon2.

Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console?:
Depending on the WebSocket interactions in both the front and back ends, the front end will likely log the message or data received from the WebSocket server once the connection is established.

What is the websocket protocol intended to provide?:
WebSocket provides a full-duplex communication channel over a single TCP connection, allowing for real-time, low-latency communication between the client and server.

What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM:
JSX: JavaScript XML
JS: JavaScript
AWS: Amazon Web Services
NPM: Node Package Manager
NVM: Node Version Manager

Assuming an HTML document with a body element. What text content will the following React component generate?:
This depends on the React component code. Typically, a React component will render dynamic content based on the component's state or props.

Given a set of React components that include each other, what will be generated?:
React will render a tree of components, with each parent component rendering its child components. The final output will be a hierarchical structure of HTML elements.

What does a React component with React.useState do?:
React.useState is a hook that allows a functional component to manage state. It returns an array with the current state and a function to update the state.

What are React Hooks used for?:
React Hooks allow functional components to have state, side effects, context, and more, without needing to convert them to class components.

What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do?:
State Hook: useState manages component state.
Context Hook: useContext provides access to React context, allowing components to consume values from a provider.
Ref Hook: useRef provides access to a DOM element or a value that persists across re-renders.
Effect Hook: useEffect runs side effects (e.g., data fetching, DOM manipulation) after render.
Performance Hook: useMemo and useCallback help optimize performance by memoizing values or functions.

Given React Router code, select statements that are true.:
The correct statements will depend on the exact code. Generally, React Router handles navigation and rendering of components based on the current URL path.

What does the package.json file do?:
package.json holds metadata about a Node.js project, including dependencies, scripts, and configuration details like project name and version.

What does the fetch function do?:
The fetch function initiates an HTTP request and returns a promise that resolves to the response of the request.

What does node.js do?:
Node.js is a runtime environment for executing JavaScript outside of the browser, typically used for server-side applications.

What does pm2 do?:
PM2 is a process manager for Node.js applications, providing features like process monitoring, clustering, and automatic restarts.

What does Vite do?:
Vite is a build tool and development server that provides fast hot module replacement (HMR) and optimizes the development experience for modern JavaScript applications.
