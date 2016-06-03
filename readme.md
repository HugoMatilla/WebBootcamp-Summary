#1. HTML
## FORMS
Basic
```html 
<form action="http://www.wikipedia.org">
	<input type="text" placeholder="username">
	<input type="password" placeholder="password">
	<input type="submit">
</form>
```
With data in the URL add `name`

```html
<form action="http://www.wikipedia.org">
	<input name="username" type="text" placeholder="username">
	<input name="password" type="password" placeholder="password">
	<input type="submit">
</form>
```

###Labels
Add captions to individual elements in our form.   
Important for accessibility 
Basic
```
	<label>
		Username: 
		<input name="username" type="text" placeholder="username">
	</label>
	<label>
		Password:
		<input name="password" type="password" placeholder="password">
	</label>
```

Linked. `for` in the label `id` in the input
```
<form action="http://www.wikipedia.org">
	<label for="username">Username:</label>
	<input id="username" name="username" type="text" placeholder="username">

	<label>Password:</label>
	<input id="password" name="password" type="password" placeholder="password">
	
	<input type="submit">
</form>
```
###Validations
`required` and `type`
```
<form action="http://www.wikipedia.org">
	<label for="user-email">Email:</label>
	<input id="user-email" name="username" type="email" placeholder="email" required>

	<label>Password:</label>
	<input id="password" name="password" type="password" placeholder="password" required>
	
	<input type="submit">
</form>
```
###Radio Button
`name` have to be the same to connect the radio buttons.
`value` is the value of each radio button
A `button` as the last element in a form does the same as submit.
```
<form>
	<label for="dogs">Dogs: </label>
	<input name="petChoice" id="dogs" type="radio" value="DOGS">

	<label for="cats">Cats:</label>
	<input name="petChoice" id="cats" type="radio" value="CATS">

	<button>Go!</button> 

</form>
```
###Select Tag
`name` is needed to be added in the URL
`value` is used if we want something different to the text to be sent
```
<form>
	<p>What's your current mood?</p>

	<select name="mood">
		<option value="happy">:)</option>
		<option value="neutral">:|</option>
		<option value="sad">:(</option>
	</select>	
	<button>Go!</button> 

</form>
```
###Textarea Tag
```
<form>

	<input type="text">

	<textarea name="paragraph" rows="10" cols="10"></textarea>

	<button>Go!</button>
</form>
```
#2. CSS
**Each element**
```
<p style="property: value;">hello</p>
```

**In the  head**
<style type="text/css">
	selector {
		property: value;
	}
</style>

**As a link**
```
<link rel="stylesheet" type="text/css" href="app.css">
```
##Selectors

**Element**
```
	
	<li>
		<input type="checkbox">
		Walk Rusty
	</li>
	li {
		border: 2px solid red;
	}
```

**class**
```
	
	<li class="completed">
	<input type="checkbox" checked>
		Buy Groceries
	</li>

	.completed {
		text-decoration: line-through;
	}
```

**id**
```
	
	<li id="special">
		<input type="checkbox">
		Finish Recording CSS Videos
	</li>

	#special{
		background: yellow;
	}
```
### Selectors Advanced
[The 30 CSS Selectors You Must Memorize](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)


**Star** Everything on the web
```

	* {
		border: 1px solid lightgrey;
	}
```
**Descendant Selector** 
```

	li a {
		color: red;
	}
```
**Adjacent Selector**
```

	h4 + ul {
		border: 4px solid red;
	}
```

**Attribute Selector**
```

	input[type="checkbox"] {
		background: blue;
	}

	a[href="http://www.google.com"] {
		background: blue;
	}
```
**nth of type**
```

	li:nth-of-type(3){
		background: purple;
	}
	
	li:nth-of-type(odd){
		background: purple;
	}
```

## Specificity
[Specificity](https://developer.mozilla.org/en/docs/Web/CSS/Specificity)
The following list of selector types is by increasing specificity:

* 0. Type selectors (e.g., h1) and pseudo-elements (e.g., :before).
* 1. Class selectors (e.g., .example), attributes selectors (e.g., [type="radio"]) and pseudo-classes (e.g., :hover).
* 2. ID selectors (e.g., #example).

## Fonts and texts
[Fontstack](http://www.cssfontstack.com/)
**Custom**
```
	<link href='https://fonts.googleapis.com/css?family=Raleway:400,700|Indie+Flower' rel='stylesheet' type='text/css'>
	
	p {
		font-family: Raleway;
	}

```
**em** Relative to the font-size of the enclosing element 
```

	span {
		font-size: 2.0em;
	}
```
**rem** Relative to font-size of the root element

**Weight of the font**
```

	p{
		font-weight: normal;//100- 800
	}
```
**Height of the line**
```

	p {
		line-height: 1.5;
	}
```
**Text alignment**
```

	h1 {
		text-align: right;
	}

	p {
		text-align: center;
	}
```
**Decoration**
```

	p {
		text-decoration: underline;
	}

	h1 {
		text-decoration: line-through;
	}
``` 

##Box Model

* 1.Content
* 2.Border
* 3.Padding
* 4.Margin

**Auto** This will center the content
```
	width:<any>
	margin: 0 auto 0 auto; // or margin: 0 auto;
```
**Float** Remove default white spaces between images, and actually much more stuff (Let an image float to the left)
```
	float: left;
```
#3. Bootstrap
## Data attributes
[Data attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes)
[data-target](http://getbootstrap.com/javascript/#live-demo)
**Data attributes**
```

	data-target="#someElement"
```

##Grid
[Grid options](http://getbootstrap.com/css/#grid-options)
Choose the number/size of columns depending on the size of the screen: large(lg), medium(md), small(sm) or extra small(xm) 
```
  <div class="col-md-3 col-sm-6">TOUR DATE!</div>
  <div class="col-md-3 col-sm-6">TOUR DATE!</div>

```

#DOM
Document Object Model  
The Interface between javascript and HTML+CSS   
The browser turns every HTML tag into a javascript object that we can manipulate.  
Everything is stored inside of the _document_ object.  


`console.dir(document)`


##Selection
Access main attributes
```javascript

	document.URL
	document.head
	document.body
	document.links
```

Selecting
```javascript

	document.getElementById()
	document.getElementsByClassName()
	document.getElementByTagName()
	document.querySelector()// Use CSS selector # for ids, . for classes. Only return the first element
	document.querySelectorAll()// Returns the all the elements

```
##Manipulation
###Style
Change visual style changing its classes.
```javascript

	var tag = document.querySelector("p")
	tag.classList.add("className")
	tag.classList.remove("className")
	tag.classList.toggle("className")
```	
###Content

```javascript

	var tag = document.querySelector("p")
	tag.textContent = "some text"
	tag.innerHTML = "some text"// Keep the HTML inside the content
```

###Attributes

```javascript

	var link = document.querySelector("a")
	link.getAttrubute("href")
	link.setAttrubute("href","www.google.com")

	var img = document.querySelector("img")
	link.setAttrubute("src","cat.png")
```	

###Events
`element.addEventListener(type, functionToCall);`

```javascript
	
	var button = document.querySelector("button");
	button.addEventListener("click", function() {
	  console.log("Button clicked!");
	});
```	

[Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)

* click
* mouseover
* mouseout

```javascript

	var lis = document.querySelectorAll("li");

	for(var i = 0; i < lis.length; i++){
		lis[i].addEventListener("mouseover", function(){
			this.classList.add("selected");
		});

		lis[i].addEventListener("mouseout", function(){
			this.classList.remove("selected");
		});

		lis[i].addEventListener("click", function(){
			this.classList.toggle("done");
		});
	}

```
#JQuery
[YOU MIGHT NOT NEED JQUERY](http://youmightnotneedjquery.com/)

##Basic

**CSS**
`$("div").css("background", "purple");`

**Full Style**
```

	var style = {
		color:"lightskyblue",
		background:"powderblue",
		border:"2px solid thistle"
	}
```
`$("div").css(style);`

**Item in the array**
`$("div:first-of-type").css("color");`// HTML    
`$("div:first").css("color");`// Jquery   
`$("img").last().css("color");`   

**Main functions**

* `val()` ("_What is inside the form_") Get the current value of the first element in the set of matched elements or set the value of every matched element.
* `text()` Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.
* `html()` Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.
* `attr()` Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
* `addClass()` Adds the specified class(es) to each element in the set of matched elements.
* `removeClass()` Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
* `toggleClass()` Add or remove one or more classes from each element in the set of matched elements, depending on either the class’s presence or the value of the state argument.

##Events

* `click()` Bind an event handler to the “click” JavaScript event, or trigger that event on an element.
* `keypress()` Bind an event handler to the “_keypress_” JavaScript event, or trigger that event on an element. Use `which` to get the key that was pressed.

```

	$("input").keypress(function(event){
		console.log(`You pressed  ${event.which} in ${$(this).id()}`)
	})
```

* `on()` Attach an event handler function for one or more events to the selected elements.
	*	"click"
	*	"dblclick"
	*	"keypress"
	* 	"mouseneter"
	* 	"mouseleave"

### Click vs On

* `click()` only adds listeners for existing elements
* `on()` will add listeners for all potential future elements

##Effects

```
	
	$("button").on("click", function(){
		$('div').fadeOut(1000, function(){
		 	$(this).remove();
		});
	});
```	

* `fadeOut()`
* `fadeIn()`
* `fadeToggle()`
* `slideDown()`
* `slideUp()`
* `slideToggle()`