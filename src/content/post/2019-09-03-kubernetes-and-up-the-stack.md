---
categories:
- business
- process
- product
- technology
date: 2019-09-03T08:45:42Z
published: true
status: publish
tags: []
title: Kubernetes Enabling Moving Up the Stack
type: post
url: /2019/09/09/kubernetes-enabling-moving-up-the-stack/
---
Yesterday, I had the privilege of one of my many discussions on technology direction with [Josh Mahowald](https://www.linkedin.com/in/joshmahowald). Our conversation turned towards why it is that so many interesting and enabling pieces of software have been built on top of Kubernetes. As Josh put it, there is an explosion of higher-level services and tooling.

This will be the first in a series of posts examining what Kubernetes _really_ is (ok, an [API](2018/05/23/kubernetes-is-an-operations-api/)), where it fits in the history of technology, and why it has enabled this kind of "explosion".

To be clear, I do not believe that Kubernetes is the end-all and be-all of technology. I am not convinced it is 100% right for every organization or every situation, although the complexity cost of managing and deploying it keeps coming down. Further, I do not know where FaaS and other managed services will go. With all due respect to [Simon Wardley](http://twitter.com/swardley/), the future remains [the undiscovered country](https://www.bartleby.com/46/2/31.html).

As an interesting side note, while I remain an avid fan of Star Trek, I find it disturbing that all of the first page results on Google for "The Undiscovered Country" return Star Trek and _not_ Hamlet.

![Google Undiscovered Country](/site-images/google-the-undiscovered-country.png)

Years ago (many years ago), I received my [ITIL](https://en.wikipedia.org/wiki/ITIL) certification. While many in the tech sector are unfamiliar with ITIL, those who are in IT (i.e. the customers of those in tech) are quite familiar with it. Personally, I found the ITIL course unnecessary. Almost everything positive in there had been part of our best practices in Morgan Stanley back in the 1990s, under the leadership of Guy Chiarello and Dan Petrozzo.

What _was_ useful was standard nomenclature. By providing a clear, universal definition of what an "incident" is, what a "problem" is, what a "change" is, and many other terms, it became possible to have clear, understood conversations. This, in turn, made it possible for vendors to arise offering universal software like change control, change management databases, incident management, etc.

Looking further back, the POSIX standard made it possible for someone writing software for POSIX-compliant (primarily Unix and Unix-derived) operating systems to have a standard set of behaviours. Sure, you had to compile separately for SunOS, HP-UX, SGI IRIX, and a host of others, not to mention Linux, but the differences were minor compared to building software for Macintosh, Windows or IBM S/390. 

POSIX not only defined standard _interfaces_; it also defined standard _services_. When writing to a terminal on a POSIX system, it isn't just that you knew you could use a standard system call; you could rely on something out there (the operating system), to translate your characters into whatever physical representations were necessary for the user to see "Hello, World!" on that terminal.

What does all of this have to do with Kubernetes?

The [Kubernetes home page](https://kubernetes.io) is below:

![Kubernetes](/site-images/kubernetes-home-page.png)

It is "production-grade container orchestration", or, in more detail, an "open-source system for automating deployment, scaling, and management of containerized applications."

Kubernetes looks, sounds and feels like something new.

**It isn't.**

Every company that ever has run software, which, at this point, is every company, has had to solve the problems solved by Kubernetes:

* Deploying software to runtime nodes
* Controlling which software can run where
* Colocating software
* Explicitly preventing software from colocating
* Attaching storage
* Persistence of data and names
* Networking naming
* DNS
* Connecting software over a network
* Providing inbound connectivity

The list goes on. Not every organization did all of these, let alone well. Very few did all of them well. Further, many (most?) did some (most?) manually. Who hasn't been part of this conversation?

> Yes, the flibbing service on server winston crashed at 2am, so I was paged and started a new instance on server
> spencer, then adjusted the load balancer to point to that one instead of winston.

Kubernetes provides two critical things:

1. A standard name for every one of these things.
   * Inbound connectivity is "Ingress", while a service that provides it is an "IngressController"
   * A replicated copy of software is a "Deployment" (simplifying)
   * A replicated copy of software with persistent naming and storage is a "StatefulSet"
   * A copy of software on every node is a "DaemonSet"
   * etc.
2. Services to manage the state of these.

An organization that deploys Kubernetes need not worry about manually ensuring that exactly three copies of the flibbing service are running, nor writing custom in-house software, which probably has lots of bugs and no one but Jill in TechOps knows how to fix, to keep it at exactly three copies. Kubernetes comes with a built-in controller to ensure you have three copies of the flibbing software running in a "Deployment."

This has impact in several key areas:

* Skills that used to be company-specific - and not necessarily value-added - are interchangeable and purchaseable
* The cost of changing underlying software drops significantly
* Software vendors can leverage standards to move further up the stack to provide higher-value services

We will explore each of these in a subsequent article.



