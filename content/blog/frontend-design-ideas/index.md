---
title: That frontend is not going to build itself. So what can we do?
linktitle: "Frontend design ideas"
blurb: "We set out our ideas and plans for building the freesewing frontend"
date: 2017-04-02
author: "Joost De Cock"
authorlink: "http://github.com/joostdecock/"
image: "picture.jpg"
caption: "This dude is not me, but you get that this is about somebody thinking about stuff, right?"
credit: "An image from Startup Stock Photos"
creditlink: "http://startupstockphotos.com/post/143841899156"
category: "design"
tags: tag1, tag2, tag3
layout: Post
---
With freesewing core 1.0.0 out the door, my focus has shifted to building a front-end for it so that freesewing.org can fully replace makemypattern.com.

While I believe that the value of freesewing lies with core and our patterns, we're going to have to build something that's a bit more user friendly than our demo if we want outsiders to realize that.

Makemypattern.com — arguably the best comparison of something similar — runs on Drupal 7. My idea initially was to run the new site on Drupal 8. I worked on that a bit, and got to the point where I was confident enough that I could hook it up to the backend. That's when I turned my attention to what is now known as freesewing core.

> If you're curious, that initial Drupal 8 effort lives on [lab.makemypattern.com](http://lab.makemypattern.com/). The site is terribly broken, but you can login with demouser/demouser.
> 
> Some of those early ideas have stuck around, like the off-canvas navigation menu. Also, the theme I designed for drupal 8 is called Siobhan, and that explains why on docs.freesewing.org, the custom JavaScript is held in a file called siobhan.js.
> 
> So far our trip down memory lane.

A lot has changed since then. Or perhaps not, but I've changed. And I'm thinking of doing things different.

## The problem with a CMS

I have no beef with Drupal but the idea of managing the freesewing website through any CMS does not appeal to me.

One of the main reason is that so much information is stored under an opaque database layer which makes it difficult to manage. That goes for content where posts, their metadata, their images, and so on, is all spread across tables, locations, folders. But there's also the theme that has a bunch of stuff, there's the custom Drupal modules to connect to the backend, and so on and so forth.

The freesewing docs site in contract, is a breath of fresh air to manage. Just a bunch of markdown files, with some SASS, some images, and some JavaScript thrown in, and it all compiles into a neat static website.

It's easy to manage, and it integrates nicely with the GitHub workflow that any contributor is going to be familiar with anyway.

So I guess I want that same approach in a website. Except, it can't be static because it has to, you know, do stuff.

## An alternative approach: JAMstack
If you've never heard of JAMstack, then don't worry. I didn't even know about JAMstack until a couple of weeks ago when I was looking into hosting for the freesewing docs site. At that time, it was hosted on GitHub pages. Where you can have SSL, or a custom domain name, but you can't have both.

Looking for alternatives, I stumbled on Netlify, who do both SSL and custom domains. Long story short: now it's them who are hosting our documentation. And this video by Netlify CEO Mathias Biilmann got me really excited about JAMstack.

Unless you're familiar with JAMstack, I suggest you check out the video, but it boils down to this:

  - J -> JavaScript
  - A -> APIs
  - M -> Markup

The idea is that you build a static site (markup) that you then make non-static with JavaScript that hooks up to an API.

So in our case, rather than having a documentation site with easy-to-edit markdown and a large and complex CMS to handle the dymanic stuff, let's just build one site that is statically generated, yet uses JavaScript and APIs to do the smart stuff.

## What do we need?

Not much really:

  - Static content (documentation, pattern descriptions, help, examples, ...)
  - Users (people need to be able to create an account and store related data: preferences and whatnot)
  - Models (people need to be able to define models and store related data: measurements and such)
  - Authentication (we need to know who is who so we can load their data)

We already have a good solution for static content. And it wouldn't be too hard to build a simple API to handle Users/Models. Authentication is arguable harder, but we could just hook up to something like auth0. They have a free tier for open source projects so it wouldn't cost anything.

## React on the client side

Assuming we have our user/model API and authentication API covered, that leaves the question of how we will integrate that into the frontend.

We can mangle a bunch of jQuery as we did for our demo, but I think we can all see how that's going to be a maintainability nightmare. So last weekend I looked at all those newfangled JavaScript frameworks that the kids are all excited about. (you know, Angular, React, Ember, ...).

After clicking around for a bit, I decided to give React a try. Because it seems a perfect fit for our JAMstack approach. Just a bunch of static stuff with some React components thrown in where we need non-static interactions.

Now as I said, this was last weekend (4 days ago) and React is completely new to me, as is NodeJS for that matter. So I'm not going to lie to you, I've had a number of [this React is a fart and you're a cheating bitch](https://youtu.be/SI0zSkiBJtM?t=83) moments. But all in all, I think it's a very promising path.

## How many languages is too many?

Given that core is written in PHP, and that our documentation site runs on Jekyll (which is Ruby) this adds a third programming language to the mix. I'm not saying that's a problem, but I'm also not saying it's great.

But arguably, we're not adding any language at all. React is merely a framework, as Symfony is in PHP. The language is JavaScript, and since we're in the web business, we're always going to have JavaScript. As a matter of fact, we already have it in our documentation site.

So the language that qualifies most as the odd one out is Ruby. Should we perhaps get rid of it?

I think we should. There's no shortage of other static site generators out there. And it's important to remember that Jekyll/Ruby was never a concious choice. It just so happens that this is what GitHub pages is based on, and as I already mentioned, that's where we started hosting our documentation.

So Jekyll was forced upon us by GitHub pages, and as we moved on to Netlify, we just stuck with it. But there's other options. And one of those options is Phenomic which is based on — wait for it — React.

So if we swap out Jekyll for Phenomic, we can ditch Ruby and we are down to having to wrangle PHP and JavaScript, which seems like a reasonable combo to me.

## My proposal

After having released freesewing core, I think everybody is a bit looking around in a what now? sort of a way, so I am going to put forward this proposal to get the ball rolling on our frontend:

### We migrate docs from Jekyll to Phenomic

This will make us familiar with the Phenomic/React/NodeJS environment and gives a the needed confidence to build a more dynamic site in React.

If you find this an intimidating step, ask yourself: How familiar are you with Jekyll/Ruby?

### We implement a User/Model REST API in PHP

This is backend code. We have people with PHP experience. I think that makes most sense. Also, this we'll have to host ourselves, just as we're hosting core ourselves. We already have a server running PHP code for us, let's just add some code.

Just because we host them on the same server doesn't make them the same though/ This will be a separate project from core.

Also, I'd like to keep this one real simple and flexible. For example, in Drupal when a pattern requires a new measurement, I had to update the data model before I could use it. I'd like to avoid this by having a mix between relational database fields for things like email, name, and so on. And JSON storage for measurements and other stuff that we never query.

### We plug in some sort of authentication

Looking at you [auth0](https://auth0.com/).

### We build React components to handle models/users/pattern drafting

Basically, the parts of the site that need to be dynamic will be implemented in React, using our REST API.

I realize this might be more complex than this one line makes it seem. But writing custom Drupal modules ain't no walk in the park either.

### We provide a migration path for MMP users

This one is not 100% needed, but it's probably nice if we look into a way for existing MMP users migrate their account and model

## What I hope to see from you

Please provide feedback on this proposal. Even if it's just _Why does it take you 1500 words to say anything?_.

I've created a GitHub issue here that you can use to comment on this. Or edit this text and submit a pull request to add your 2 cents.

There's also [the freesewing community on Gitter](https://gitter.im/freesewing/freesewing) where we can chat.

## What I've been up to

As I said, I've been trying to familiarize myself with a bunch of new stuff over the last couple of days.

I set out to recreate the look and feel of our docs site in Phenomic/React. The result of that effort is on display here and the GitHub repository is here.

I'm a total noob at this. If you are one too, feel free to come an play around with it.

And if you know React, please help. Pretty please?
