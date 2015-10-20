# Messages Lab

#### Project Definition
Make a simple website that loads JSON data from a file, parses it and displays the contained messages in a mildly formatted and flexible way.

#### What works and what doesn't
The JSON from data.json loads and is parsed correctly, however I could not get to the CSS stylesheet to make the page look how I wanted, so the page is a comprimise.

#### Who I worked with
Just me.

#### Time spent
Maybe half an hour on JavaScript and a little more than that on CSS. CSS is way less fun.

#### Is it possible to request data from another origin from your local machine?
No! That's what the sandbox is for! The same origin policy restricts JavaScript from accessing or running code from other sources. This is a very good thing because it protects you and everybody else from malicious software. If a website could get and and run code from other origins, there is a huge risk for malicious websites to download and break your computer or harm you in some way, either by corrupting files or stealing information.

#### Files
index.html - Index html framework for the website
lab.js - The javascript functionality for the website, including parsing and adding messages
style.css - CSS style definitions for the webisite (i.e. blue backgrounds and Helvetica font)
data.json - The data in json format being read by lab.js