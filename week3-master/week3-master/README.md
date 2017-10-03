# Week 3

Today we are learning about:

* The Bootstrap Grid for multi-column layout
* Responsive (Mobile) Web Design
* Introduction to JavaScript for interactivity


### Download This Repository

* Download this repository as a ZIP file (find the green "Clone or download" button)
* Unzip it
* Move it into your `code` folder and rename it as `week3`
* Use Atom to open the `week3` folder
* Use Chrome to open `index.html`

### Chrome Extensions

I recommend the following Chrome Extensions:

* [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=en-US)
* [WhatFont](https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm)
* [ColorZilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp)

# Getting Started

I recommend wrapping all of your content inside a `<div>` that has a class of `container`:

``` html
<body>

  <div class="container">

    <!-- Your content goes here -->

  </div>

</body>
```

If you want your content to span the entire width of the screen, use `container-fluid` instead of `container`.

If you use a [navbar](https://getbootstrap.com/docs/4.0/components/navbar/), place it inside the body but **above** the container div.  

Same goes for a [jumbotron](https://getbootstrap.com/docs/4.0/components/jumbotron/): place it **above** the container.


### The Grid System

The CSS classes defined by Bootstrap that we need to know are:

* `container` and `container-fluid`
* `row`
* `col`


### Rows

Once you've got a container set up, you **always** divide up your content into horizontal rows.  You must have at least one row.

Here's is a snippet that shows how to define two rows:

``` html
<body>
  <div class="container-fluid">

    <div class="row">

      <!-- Your columns will go here -->

    </div>

    <div class="row">

      <!-- Your columns will go here -->

    </div>

  </div>
</body>
```

### Columns

Inside each row, you must have at least one column. You can have up to twelve columns.  

By default, columns are equally sized to take up the entire width of the container.

If you do NOT want your columns to equally sized, you can specify the width of
each column as a number from 1 to 12.  

Here's is a single-row, two-column layout, useful for a page with "main section" with a right-hand "sidebar":

``` html
<body>
  <div class="container-fluid">

    <div class="row">

      <div class="col-sm-9">
        <p>This is the main section of the page...</p>
      </div>

      <div class="col-sm-3">
        <p>This is the sidebar.</p>
      </div>

    </div>

  </div>
</body>
```

The `-sm-` part means that the columns will only appear side-by-side if the device
is at least a "small" device (iPad/tablets), but they will "stack" if the screen
is any smaller (i.e. a phone).


### Helpful links

* [CSS Zen Garden](http://www.csszengarden.com/).
* [Bootstrap](http://getbootstrap.com/).
* [Our GitHub Organization](http://github.com/kiei924).
