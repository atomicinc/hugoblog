---
categories:
- business
- product
- technology
- conference
- cloud-native
date: 2019-09-05T08:45:42Z
published: true
status: publish
tags: []
title: KubeCon San Diego 2019 Observations
type: post
url: /2019/12/06/kubecon-2019-observations/
---

# Thoughts on KubeCon North America 2019 

In late November, I spent several days at KubeCon/CloudNativeCon, for the fourth or fifth time. It certainly has grown over the years; San Diego's conference was oversubscribed at 12,000 attendees. In the somewhat snarky words of a friend from the Linux Foundation, "this feels a lot like the OpenStack conference at its peak." I am hopeful that it doesn't go down the same path. 

Here are some insights and observations about the conference. 

## TL;DR 

The conference has grown massively, a sign of growth in adoption and maturity in the industry. It no longer is just a place for “container geeks” to talk with each other. Real users are attending now.

Some vendors are growing, others are shrinking, as is typical during growth cycles. Some particular product spaces are growing in usefulness, especially around management, deployment and security. 

The technology integrations and standardizations are improving, further cementing Kubernetes as a standard around which software s deployed and managed. More and more startups at higher levels are building explicitly on top of Kubernetes, a further sign of its acceptance as a standard. 

It is important to remember, especially those of us who tend to get caught up in the deep technology and product hype,  that Kubernetes is there to serve a purpose for those who run it: run software reliably and easily. It is just a technology, a means to an end.  

## Attendees 

This was the largest KubeCon, by far, with 12,000 attendees and oversubscribed. While this is partially due to more VC money being invested in more startups, and more existing firms jumping into the Kubernetes space, it also is due to real end-users attending. Many are first-time, just getting their feet wet in this new area, while others are genuinely interested in how they can use the technologies, or perhaps already have mandates to do so. 

Each time, I ask either the [Executive Director of the CNCF](https://www.cncf.io/people/staff/) or the [Chair of the Marketing Committee](https://www.cncf.io/people/marketing-committee/) the percentage of end-user attendees (“buy-side”) vs those who build or sell Kubernetes or other products (“sell-side”). I believe Barcelona in May of this year was the first time it crossed 50% buy-side, and was estimated even higher here, with more data to come when they finish the analysis. It is crossing the Rubicon and becoming entrenched.

## Vendors 

The vendor hall, or "sponsor showcase," has become the focal point of the conference, in this case literally. There was a central hallway in the building, with the minor showcase on one side and the major one on the other, and the presentation rooms on the far sides of each. You literally had to walk through the sponsor hall to get to presentations. That may just have been a side effect of the conference centre architecture, but I don't think so. KubeCon has become a big business. 

It is interesting to note who had real money to spend on larger booths, and drew larger crowds. The usual "big money" players like VMWare, AWS, IBM/RedHat, of course, but Rancher also has become a significant player.

From a company that started a few years ago to provide some basic orchestration of containers, to a major pivot at Rancher 2.0 to go "all-in on Kubernetes" (a move which does great credit to the founders, especially [Darren](https://twitter.com/ibuildthecloud), who sacrificed his brilliant baby of an orchestrator, Cattle), to a company that no one knew how they would survive between Swarm and Kubernetes, to one of the larger booths on the floor that was literally swamped at all hours. Their future looks strong, but it is unclear as to whether they will be primarily an on-premise provider, given the growth of managed offerings like AWS EKS and Azure AKS, or if their ability to multi-cloud (now officially a verb) will make them interesting even to those deploying to public clouds.

Clearly, there is a real hunger for products that can make Kubernetes manageable.

There were a lot of security-related firms, most of them Israeli, unsurprisingly. Walking the conference, I think the language I heard most after English was Hebrew. Snyk, Twistlock and Aqua were prominent. Twistlock has lots of funds since its acquisition by Palo Alto Networks, Snyk with its prominent spokesperson [Gareth Rushgrove](https://twitter.com/garethr), who has been a fixture in the containers space since the beginning (and gives enjoyable talks and is an all-around nice guy), and Aqua with its large booth and star power in [Liz Rice](https://twitter.com/lizrice), co-chair of all three 2018 KubeCons. The approaches are similar, albeit not quite identical, and everyone is trying to grab a piece of the security pie. I suspect more acquisitions are coming.

A sad but small aside: last year WeWork (or is it just We Inc? Do I need to pay $5.8MM to use that name?) had a very active and heavily recruiting booth (they tried to get me once they realized I was one of the LinuxKit maintainers). This year it was forlorn and off to the side, abandoned by both visitors and employees. Icarus didn't heed Daedalus' warning and flew too close to the sun.

[Andy Randall](https://twitter.com/andrew_randall/) of [Kinvolk](https://kinvolk.io) measured the sound level in the main sponsors' hall, and came out with 80dB; apparently 85dB is the level at which workers are required to wear ear protection. 

In the smaller secondary hall - thankfully at a much lower noise level - were the cheaper booths, or, as a friend from the Linux Foundation called it, the "Geek Hall". A number of formerly moderate-sized booths have shrunk significantly in size, notably fluentd provider Treasure Data, now owned by Arm; they were more of a table with a small sign. I believe fluentd the open-source product will continue to thrive, largely due to the community around it, and the fact that it doesn't have all that much development needed. The investment from Arm, though, is likely to be reduced. I did speak with a former Treasure Data executive, who confirmed that the Arm culture is not quite the open-source and startup culture that they had before. I wouldn't hesitate to continue to use and recommend fluentd, but I would keep an eye out for signs of weakness, as well as potential competitors. 

On the other side, Pulumi, the "true coding language" alternative to Terraform, is growing. Their booth in Seattle last year was two or three people, while this year's was several more, and the CTO didn't even need to attend. They have a tough uphill slog against HashiCorp, but Terraform has its limitations, many of which Pulumi is addressing. They won't quite yet win the battles for customers where "no one ever got fired for buying IBM," but they may be on the way there.

## Sessions 

The presentation sessions were highly varied. With literally hundreds of them, I could attend but a tiny percentage, as well as discuss a few more with colleagues who attended others. 

Overall, the level seems to waffle between basic talks (sometimes masquerading as teaching something new, unfortunately) and advanced. The advanced talks were less heavily attended, but the quality of presentation, attendee and interest in those was quite high. For example: 

* Some of the work on Virtual Kubelet is fascinating, and continues to open up non-Kubernetes deployments to the Kubernetes API and semantics, which only helps further cement standardization around the Kubernetes API.
* Justin Cormack's work on notary and TUF - securing the software supply chain - drew a lot of interest. The number of attacks on the supply chain continues to grow, and interest is very high in maintaining the proven reliability of artifacts from source to production. It was encouraging to see two trends in his talk: 
  * the simplification of managing that supply chain, compared to earlier efforts, which largely were ignored 
  * the standardization of those efforts into image registry standards, i.e. the [OCI distribution specification](https://github.com/opencontainers/distribution-spec)
  * Darren Shepard gave a very well-received presentation - to a packed and very interested room - on building a lightweight yet fully compliant Kubernetes implementation, i.e. Rancher’s [k3s](https://k3s.io). More on that below. 

To my mind, the advanced sessions are good, with great interest; at the other end, interest is growing in basics. We may yet see KubeCon split into different conferences, or at least clearer tracks, to address the needs. 

## Keeping It Simple 

As discussed earlier, an area with a huge amount of interest was k3s, Rancher's lightweight but fully compliant and certified Kubernetes distribution. It was proposed barely a year ago, when Rancher saw some customers in China who wanted to run single-node Kubernetes clusters on limited capability devices. When I queried [a founder](https://www.linkedin.com/in/shengliang/) last year in Seattle, "why not just run docker?" he responded that Kubernetes had become the de facto standard against which the customer wrote deployment manifests; they didn't want to change to docker compose files for this use case. This alone shows how the standard had switched (and a lost docker opportunity, but that is an article for another day). In that year, k3s has been wildly popular, released official version 1.0.0 during KubeCon, and is used from IoT all the way up to data centres.  

Kubernetes, and by extension KubeCon, isn't about Kubernetes at all. It is about a standardized way of describing, deploying and managing software. For a small number of people, that is about the very guts of the orchestration software, Kubernetes. For the vast majority, they just want someplace to run their software, with the minimal cost and pain possible. As more companies look to leverage Kubernetes for more scenarios, they are looking for it to be as small, unobtrusive and painless to manage as possible. Kubernetes has come a very long way in ease of deployment since just a year or two ago, let alone its first release five years ago. Yet provided with a simpler and smaller alternative, most people grasp for it. I expect many more developments in this area. 
