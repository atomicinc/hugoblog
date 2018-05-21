---
categories:
- business
- cloud
- containers
- product
- technology
date: 2018-05-23T07:21:42Z
published: false
status: draft
tags: []
title: Kubernetes Is An Operations API
type: post
url: /2018/05/23/kubernetes-is-an-operations-api/
---
What is Kubernetes?

According to the [home page](https://kubernetes.io):

> Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications.

On that basis, Kubernetes has matured and evolved, becoming not just "an open-source system", but **the** system for orchestrating containerized applications. In October 2017, Docker threw in the towel on Docker Swarm and made Kubernetes its default (and soon only) orchetstration system. [Rancher](https://rancher.com) 2.0 went from "multi-orchestrator" to primarily Kubernetes. Amazon announced a preview of Elastic Kubernetes Services (EKS), despite the existence in GA of its own Elastic Container Service (ECS). At KubeCon EU 2018 a few weeks ago, many new "kube-ready" open source projects entered incubator status at the [Cloud Native Compute Foundation](https://cncf.io), and many (_many_) startups focused on everything from Kubernetes security (lots of Israeli firms) to Kubernetes-native storage to multi-cloud Kubernetes management crowded the sponsor floor.

Kubernetes rapidly is becoming the "operating system" for cloud-native containerized applications.

And yet...

No, I do not believe that another alternative system will rise anytime soon, at least not noticeable.

I do, however, think that within a year or two, at least half of these firms will be gone. 

I believe that the very reason why Kubernetes is so successful (albeit possibly hitting the [peak of inflated expectations of the hype cycle](https://en.wikipedia.org/wiki/Hype_cycle)) has nothing to do with its technology per se. It isn't about ingress of any kind, whether traefik or nginx, nor pluggable storage layers, or this vs that security mechanism. These all are important to drive the art forward, but they are secondary.

The primary purpose of Kubernetes isn't about its technology at all.

**Kubernetes is an Operations API.** Period.

The primary interest of Kubernetes to the overwhelming majority of organizations is its ability to further the autonomy of application owners.

That ugly, easy-to-mess-up, horrible `yml` file I use to declare my app is what Kubernetes really is all about.

```yml
apiVersion: apps/v1 
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 2
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.7.9
        ports:
        - containerPort: 80
```

The above `yml` file may be  ugly and possibly never intended for human consumption; see the comments by Joe Beda and Bryan Liles [here](https://twitter.com/jbeda/status/994566252503810048).

However, it encapsulates in it *everything* that an app owner needs. It says, "I want 2 copies of the application captured in the image `nginx:1.7.9` to run, be given some labels, and be accessible at port 80." 

For almost every application use case, that is more than enough. If you need more, the Kubernetes `yml` specification lets you do a lot more - fix the number of copies, run on every host you own, have some consistency in naming, etc. But fundamentally, this is where the value is. 

If I, as an application owner, can define the above, store it next to and with my application in the same repository or some other location I control, and simply commit it to ensure my application always runs according to that specification, my job is done.

I do **not** care if it _really_ is running Kubernetes under the covers or something that looks, acts and smells like Kubernetes but actually is 5,000 monkeys hitting keyboards to restart applications (or write Shakespeare). The above abstraction is almost the **entire** value of Kubernetes to all of those "real-world" companies I cited in my last article.

There are several really big caveats to the above. I will list just two:

1. The `yml` format is way too complex and contains too much.
2. Someone has to build and manage that infrastructure.

Looking at the complexity of the `yml`, we see that the layers of depth are too many for a human, the whole `apiVersion` is strange to an app consumer, etc. Essentially, the `yml` API still contains too many things that are mixed with the lower operational layer. There is a reason why most organizations continue to use docker compose, with its far simpler `yml`, to run things locally and in CI/CD, and switch to kubernetes only for actual deployments. That will change over time, but the speed of change may well be driven by the seed of simplification of Kubernetes' `yml` API.

So, yes, there are applications that will need more intimate involvement of lower layers, and we always will need people to manage that lower layer.

However, the fundamental appeal of Kubernetes isn't Kubernetes itself, as important as it is to have implementations of ingress and persistent volumes and security, etc. It is the ability to declare, "this is what my app needs to run" and have that applied consistently and reliably.

As two people who work at very real companies said to me this past week, "We do not want to become Kubernetes experts. We just want to declare our apps and have them run."

There are several ramifications of this:

1. The real long-term growth in Kubernetes-compatible apps will come in managed services: AKS, EKS, GKE, and eventually Azure Container Instances and AWS Fargate (once it becomes Kubernetes rather than ECS compatible). With the latter two, it is entirely possible that they will not run Kubernetes at all under the covers, since it isn't about Kubernetes at all, but rather the `yml` declarative API.
2. Many (most?) of the startups around Kubernetes services, add-ons and management will fold. For now, there is great need for them. Eventually, these will be part of the hidden layer underneath AKS/EKS/GKE or ACI/Fargate. Once EKS has a good enough security layer - whether built by Amazon or acquired from one of the security companies - there will be little interest, or possibly even capability, of running an alternative security framework.

I have a client running several production Kubernetes clusters. I did an immense amount of work to help them create and set up their Kubernetes pipelines, running on EC2. I told the VP last week that I expect him to throw out all of the work we did in 12-18 months. Why? Because he will use EKS or Fargate-EKS. The work we did had high value to get us here... and zero value once we can use theirs. Do we currently use weave for networking? Sure. Once we are in a managed cluster and get networking, will we care if it is weave, calico, or AWS' own CNI implementation? Not in the least.

People who use Amazon's ElastiCache don't actually know or care if it uses _real_ Redis under the covers... just that the service is running, secure and talks 100% Redis API. 

Building Kubernetes services is fun; building businesses around them is enticing. I think many will not survive, leaving only those who set standards and are critical to Kubernetes ecosystem itself.






