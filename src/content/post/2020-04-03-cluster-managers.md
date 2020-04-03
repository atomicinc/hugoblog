---
categories:
- business
- product
- technology
- cloud-native
- kubernetes
date: 2020-04-02T08:45:42Z
published: true
status: publish
tags: []
title: Inception: Kubernetes Cluster Managers
type: post
url: /2020/04/02/inception-kubernetes-cluster-managers
---

# Inception

When the cloud-native world really got under way, especially the open-source part of it, much of what we
used to do (and, likely, most companies still do) in custom and proprietary ways became standardized:

* defining workloads
* defining storage
* defining dependencies
* defining policies
* defining placement
* defining replicas
* load balancing
* rollout strategies
* packaging
* status
* many other things

The tool to do this, of course, began with docker, which addressed, primarily the packaging and workloads part,
but grew to Kubernetes as a basis for the rest of it. Indeed, I believe that the primary reason for the success
of Kubernetes has been the standardization of all of the above, and so much more, across organizations.

Of course, as things get fixed and standardized in one layer of the stack, the same problems move up. As we
stopped treating not only our infrastructure but even our applications as pet and more like cattle, even providing
standardization for those that need to be more "pet-like", we started treating our management infrastructure,
i.e. our Kubernetes clusters themselves, as more like pets.

As it is, Kubernetes always was complex and hard to deploy.

Enter the deployers and managers. Early to this game was Rancher - I still have immense respect
for their willingness to forgo their own home-grown Cattle orchestrator in favour of Kubernetes, once they
saw where the market was going. Many more of come to fore since at various levels of tooling and complexity.
Some mixed distributions, some used standard distributions; some are software, some are more services; but
all attempted to tame the Kubernetes deployment beast - the next level up - to some degree or another. At various
times, I have used or even built integrations to Weave, Rancher, Kubespray, kops, Kubicorn, Gardener, Cluster-API
and its variants, and others. And, of course, the cloud providers with their managed offerings - AKS, EKS, GKE, Digital
Ocean, etc. - all attempt to tame the beast.

As these have become more prominent, and as Kubernetes declarative manifests become comfortable - or at least common -
standards for describing applications, the ability to deploy smaller and small clusters grows, leading to more
demand for simpler multi-cluster management.

Which leads us to [Fleet](http://github.com/rancher/fleet), just announced by Rancher. I am a fan of Darren's work,
and I enjoy exploring how technology markets develop, so this gives me the opportunity to use Fleet as an entrypoint into
looking at the cluster management marketplace in general.

Let's start with my observations of Fleet itself, and then move on to the market in general in a follow-on article.


## Fleet

I recommend reading the docs and blog post announcing it. Conceptually, it is pretty simple: use a cluster to
manage other clusters (according to them, up to millions of other clusters), and use Kubernetes custom resources (CRDs)
to describe both the desired state of those clusters and their status.

Both of these draw on common practices in the Kubernetes world:

* Using Kubernetes custom resources as an asynchronous API to communicate desired state and actual state
* Using Kubernetes to manage other Kubernetes clusters

These both came together in [Gardener](https://gardener.cloud), the first and, as far as I can tell, only other
open-source attempt to manage large numbers of Kubernetes clusters across a geographically diverse region. The other
is the Kubernetes [Cluster-API](https://cluster-api.sigs.k8s.io), which is more of building blocks for managing clusters
and, more importantly, cloud provider resources, via a management cluster. Fleet does not use cluster API since it doesn't
really concern itself with managing the cloud provider resources (at least for now), while Gardener has been watching it
closely.

I don't find it too surprising from Fleet's part, since they have a highly "opinionated" view of how clusters should be
deployed:

* k3s kubernetes, on top of 
* k3os OS, on top of
* cloud provider of your choice

While it is opinionated, I put it in quotes, because while they do recommend it, they don't insist on it.
My experience with k3s has made my "go-to" for when I need a deployment, unless I have reason to do otherwise.

### Clusters are like nodes, not pods

Fleet uses cluster resources more like nodes in "traditional" Kubernetes than typical resources such as pods, services or deployments.

Kubernetes really has two kinds of resources (these are my nomenclature):

* standard resources, such as pods, services, deployments, etc. With these, you tell the cluster, "I want these" and the controllers in the cluster make sure they are in the desired state
* infrastructure resources, such as nodes. With these, you set them up and have them join the cluster. It knows about them, but it doesn't make them exist for you.

Fleet really manages what is _in_ your managed clusters, rather than managing the clusters _themselves_. This is an
important distinction, and can confuse people. You still need to get your nodes deployed and your cluster software running.

As above, k3s makes part of this relatively easy, and you can use terraform or any other deployment method to get infrastructure
deployed, but it still is up to you. Will that change? I hope so. I think the growth and eventual maturation of cluster-api
may lead to Fleet being able to do all of the above. Gardener certainly does, but it was a material amount of effort
on their part to get there.

### Bundles are too much

I probably should label this section, "needs better documentation". The documentation spends a bit too much time on how
great bundles are and how powerful and flexible, and not enough describing what they do and their basic use case.
I would go so far as to say this is one of those cases of "too powerful for alpha". 

Bundles are nothing more or less than a declarative way to say, "I want this config deployed to these clusters". 
That is it. Using classic Kubernetes lingo, these are like DaemonSets.

* DaemonSets are software deployed to every node in your cluster, subject to selectors
* Bundles are configurations deployed to every cluster you manage, subject to selectors

So what does it have that is too much? Actually, it isn't really too much. Bundles are able to create those configurations
from native Kubernetes declarations (yaml), or Helm charts, or kustomize. I am sure more will come. These are great,
powerful _extensions_, not the core of what it is.

I agree with the Rancher crew: the flexibility is useful; I suspect that if it didn't exist, within six months people would
be clamouring for, "support *my* version of configuration file building!" It just seems to overshadow the far more
important idea of a bundle itself.

### One More CLI

The usage of “yet another CLI” is a little off-putting, but I get why it may be necessary.
So many CRDs and resources, so much to process (bundle overbuild) and at a certain point existing tools just don’t cut it.

## Summary of Fleet

Overall, it is an interesting experience. More complex but potentially more powerful than some of the simple cluster deployers
and managers, simpler than the largest of them. 
Rancher says that they are targeting millions of micro-clusters. I don’t see how that will work with a single master cluster
design and millions of them communicating, even if they have done a good job optimizing communications, but I suspect more
optimizations are on the way. I am very interested to see where it is going.

## Fleet and Rancher the Business

Finally, we move on to the business side. Put bluntly, is this a direct competitor to their Rancher product? Or is it more of
a complement?

The first time I spoke with the Rancher founders by phone conference (they were a really young company and product, and I had
brought them into a financial client of mine), I made a comment about how it looks like a great product for small to midsize
deployments, but that it wasn't likely to scale to really large ones. They were taken aback, explained how some of them
had telco and cloud-scale backgrounds, and built it for very large scale. To be fair, I think part of it was because the UI
at the time didn't have a chance of scaling up to large numbers of pods and nodes, let alone clusters, and that was years ago.
But partially Fleet may be a recognition that Rancher - as it stands today - is not built to scale to very large numbers of
clusters. Conversely, it may simply be to a different market.

Rancher, to its credit, has always been a full open-source company. I know lots of places that simply download and run Rancher
OSS and pay them not a penny. Even more to its credit, the support even for the open and free product is quite good. So even
if this cannibalizes the existing product, or acts as the basis of a new version, that probably would be fine wiht them.

## Fleet and the Cluster Management Market

Where does Fleet fit into the larger management market, and where is it going? A good topic for next post.

