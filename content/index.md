---
title: Welcome to freesewing, and open source platform for made-to-measure sewing patterns
layout: Homepage
---
<div class="container" markdown=1>
<div class="col-lg-7 col-md-12 offset-lg-2 fade-oc" markdown=1>
Hi there. 

This is a work in progress to create a freesewing website that combines:

- static content: documentation, blog posts, and so on
- dynamic content: login, models, patterns

It's an attempt to implement our [frontend design ideas](blog/frontend-design-ideas/).

## What's working

This site runs on [phenomic](http://phenomic.io) and is build on top of React.

It generates a static build, which we can automatically deploy on Netlify on each 
push to the repository.

There's a number of things that have been implemented:

- It looks like the freesewing site
- We have a new (and I think better) header and footer 
- There's a [Page layout](docs/repositories) layout
- There's a [Blog layout](blog/frontend-design-ideas) 
- There's a [Cover layout](cover)
- There's a HomePage layout (which is kinda empty for now)
- We have a seperate Table of contents, so we can fold it into the off-canvas menu
- We have code highlighting for fenced code blocks like this:

```php
<?php
do(secondGuess(yourself)) while (isFrustrating(javascript));
```

- And we have a cool shortcut to add al those code sample + image things in the classdocs
Check out the ported [`BezierToolbox`](docs/core/class/beziertoolbox/) class documentation
and compare it to its markdown source. It's pretty neat.

## What's left to do

Basically, all things that require a better JavaScript developer than I am:

- We can't use jQuery to handle state, as it clashes with React. So the hamburger 
and table of contents icon don't work reliably and should be handled in Redux
- For this, and for our app later, we're going to have to add some state. 
We'll need to figure out how to using Redux to manage our application state
keeping in mind that Phenomic already uses Redux under the hood, so we'll need to add our
data/reducers to the store
- Once Redux is up and running, we should starting building the dynamic features.
- For authentication, we might want to plug in Auth0 rather than roll our own

And there's a few things that need polish:
 
- Serve icons as React components so we can ditch FontAwesome (some work has been done, there's an Icon component)

And once everything works the way we want to:

- Port content from documentation site
- Port content from makemypattern.com

## We could use your help
If you you'd like to help (we can use it) or have questions, start here: 
<a class="btn btn-lg mt-5 btn-primary" href="http://gitter.im/freesewing/freesewing">Let's talk on Gitter</a>
</div>
</div>
