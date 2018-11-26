---
categories:
- business
- cloud
- containers
- serverless
- product
- technology
date: 2018-11-26T08:45:42Z
published: true
status: publish
tags: []
title: Serverless vs Containers is Silly
type: post
url: /2018/11/26/serverless-vs-containers-silly/
---
Serverless? Containers? **Who will win???**

In the week of aws reInvent, when 45,000 or so people are descending on Las Vegas, and two weeks before the big cloud-native conference in Seattle, the question of "which is the future, serverless or containers?" seems to be the "debate du jour". 

For example, take last week's debate:

{{% tweet 1065346122913382404 %}}

I am going to posit a different position, one which, in the true spirit of compromise, leaves everyone equally unhappy:

**This debate is silly.**

If you prefer a somewhat more professiona phrasing: _This debate is immaterial._

Look at it from this perspective:

{{% tweet 1066796048121761794 %}}

A few weeks back, I spoke at the Serverless London conference, put together by the always excellent [Situation Publishing](https://situationpublishing.com), publishers of [The Register](https://www.theregister.co.uk), along with [Relish Events](http://www.relishevents.co.uk). My slides are [here](https://www.slideshare.net/deitcher/one-app-on-four-platforms-serverless-london-2018)

One of the key points I posited is that Heroku (despite requiring use of dynos and keeping track of how many) and Kubernetes (despite high complexity to deploy and manage) are, indeed, valid versions of "serverless", if not quite functions-as-a-service (FaaS). You even can deploy FaaS to Kubernetes using the impressive [openfaas](https://www.openfaas.com). 

Why would I posit that Kubernetes, or anything containers at all, can be serverless? Isn't Lambda the only "true FaaS" or "pure serverless"?

Simple. I am _not_ ideological (at least when it comes to technology). I do not believe "Lambda must win" or "only the best stuff will win" ("best" defined however conveniently for the speaker, of course). I believe in practicality. Figure out what you are trying to accomplish, what the business benefit is, determine your constraints, and plot a solution from there. 

This process leads to several interesting observations:

* Some technnologies dominate, but the reasons for adoption can vary for each set of adopters. One size _never_ fits all.
* Even when a new technology or process has clear benefits over current practice, normally one benefit is the primary one. Find that one, and the rest start to sound more wishful or strained. This is akin to the "cancer is a modern disease." No, it isn't. Beyond not having the ability to diagnose it properly until the modern era, for most of human history, people died so young and so often of so many other causes, that humans mostly didn't live long enough to get it. Focus on the one or two primary benefits.

What are the primary benefits of serverless? Well, "SERVER-LESS". For whom? For app owners.

The overwhelming majority of companies using technology have the bulk of their software costs in people writing and managing software, i.e. app owners. Why? 

1. because that is where the business-generating value is
2. because that is what is unique to this organization

(hint: those two are, in essence, the same thing)

It follows that the primary benefit from this new paradigm should go to reducing app owner costs. Everything else - nanoservices or auto-scaling or whatever - is secondary to "stop making app owners worry about servers."

Is it fabulous to not have to worry about servers _at all_, not even your ops or infra teams? Sure. Where is the highest value or return on investment (ROI)? Where the costs are highest: app owners.

It turns out that _both_ containers and their various orchestration platforms _and_ pure FaaS like Lambda provide these benefits. They decouple the app owner from the underlying servers (metal or virtual). In one, my app owners write functions with metadata config that they package up and deploy without thinking about the servers and trusting to scaling of the system. In the other, my app owners write functions with metadata config that they package up and deploy without thinking about the servers and trusting to scaling of the system. (yes, I did just copy-paste the second sentenc) 

Both of these technologies allow the single largest group - and therefore the single largest cost - to outsource the server part to a third party: Amazon (in the case of Lambda), or whoever is running their container orchestrator cluster (Amazon EKS, Google GKE, Azure AKS, an internal or external cloud ops team for Kubernetes). 

Ah, you will say, but with containers you _still_ have to manage the infrastructure! True... but your app owners - the people in your company generating uniquely valuable activities - do not have to think about it or deal with it. They have successfully detached from all of that by "outsourcing" it and interacting via a well-known contract API. If it makes you happy, you can take the entire cluster management operation and outsource it: to a consulting firm, to a management firm like [WeaveWorks](https://weave.works), to a cloud provider.

Switching these does not affect or impact the app owners, and they continue to do the things you want them to do - build apps - and not the things you do not - worry about servers.

Taken to the next level, you could have a managed OpenFaaS cloud that is operated with SLAs, secured to whatever relevant compliance standards, and lets you switch between "manage it myself", "outsource my own managed" and "use a public cloud" at will.

At this point, it simply becomes a cost model question, which change between organizations and times.

It wasn't that long ago that "everyone will outsource their help desks; it makes too much economic sense!" I lived through several of these. Some outsourced, some insourced, some went back and forth. The standards for good help desk process are the same, the implementations vary.

In the end, will everyone use a public cloud managed FaaS like Lambda? I do not know, and I do not _believe_. I do think that FaaS will provide better models in many use cases. Will it be Lambda or something OSS like OpenFaaS? I have no idea. I do know that organizations will adopt whichever practice provides the highest benefit with minimum disruption... and will not care _at all_ what is "pure", "perfect" or "true".



