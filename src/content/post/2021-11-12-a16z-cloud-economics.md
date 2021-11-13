---
categories:
- business
- cloud
- technology
date: 2021-11-12T11:45:42Z
published: true
status: publish
title: Not Such A Paradox
tags: []
type: post
url: /2021/11/12/not-such-a-paradox
---

Is the cost of cloud a "trillion dollar paradox"? Legendary venture capital firm
Andreesen Horowitz thinks so, based on their [blog post from late May](https://a16z.com/2021/05/27/cost-of-cloud-paradox-market-cap-cloud-lifecycle-scale-growth-repatriation-optimization/).

The above article has been making the rounds for several months, causing a lot of teeth-gnashing and
lining up of parties on either side.

Is it evident that cloud puts "pressure ... on margins (that) can start to outweigh the benefits, as a company scales and growth slows"?

I am going to disagree with a16z's analysis, for one key reason, rooted at the heart of modern economics:
specialization.

The a16z article's arguments boil down to, "public cloud list prices can be 10 to 12x the cost of running
one’s own data centers", and therefore, once you reach scale, "you’re crazy if you stay on it." As proof of this potential, the authors state:

> AWS still operates at a roughly 30% blended operating margin net of these discounts and an aggressive R&D budget — implying that potential company savings due to repatriation are larger.

I almost can hear them quoting Jeff Bezos' famous saying of, "Your margin is my opportunity."

However, Bezos' statement is valid only in competitive scenarios. If you sell tables for 75% margin,
and I am willing to sell for 30% margin, then, sure, your margin is my opportunity. However, if your business is commercial air travel and mine is computers, then we are not competitive; we specialize in different
economic areas, and your margin most definitely is **not** my opportunity.

The reason this is the case is specialization. It is why I buy health-care from my doctor, tomatoes at
my supermarket and iPhones from Apple. Each specializes in doing a few things really well,
leading to greater efficiency and expertise, which in turn give me _much_ better quality products and
services at _much_ lower costs than if I had to be my own doctor, and tomato-grower, and smartphone provider.

By a16z's logic, every company should have their own food supply because Sysco's operating margin is ~6%, and run their own airline, since United's operating margin is ~8%!

What does this have to do with public cloud?

Every company has an IT department, a backbone service and therefore operating cost. Very few specialize in
it. Those few who do, are the cloud providers. AWS's margin is, indeed, someone's opportunity; _their competitors'_: Microsoft Azure, Google Cloud, Equinix Metal.

The vast majority of companies are not very good at all of the complicated technology and operations that
are required to run infrastructure and middleware. Most struggle running their own business-dedicated
software.

Companies aren't buying cloud _only_ because Amazon or Azure can buy servers, rack space, power and cooling
cheaper than they can. The above _definitely_ is true, and always
will be, due to economies of scale: Amazon's scale means they _can_ buy the above much cheaper than
even very large companies.

But the cloud providers specialize in deploying and operating IT. Their key investments are in making those
activities ever more efficient. They engineer their infrastructure to a degree
that few other companies can.

Do you want a database? Every company does; do you want to _run_ a database? Almost _no_ company does.
It is much harder to spin one up and operate it than to just use Amazon Aurora, and your operating costs, in
personnel alone, will be much higher than the uplift from using theirs.

AWS has a 30% margin _because_ they have engineered it so they can deploy and run a
database for pennies on what would cost you dollars.

The a16z article assumes that companies run their business applications in the cloud for two reasons:

* lower purchase cost for underlying goods and services (services, routers, rackspace, power, cooling), i.e. economies of scale
* flexibility, which comes down to flexibility in my business, not to mention being able to spend opex instead of capex

Once those reasons dissipate, or at least weaken, the balance shifts.

But there is a critical third reason why companies buy cloud services, one that outweighs all of the rest:

* outsource operations to a more reliable and lower-cost operator, a specialist

Every company I ever have worked at, managed, or consulted to, has wished it could spend a few million
dollars more to engineer out more and more inefficient, costly, human
IT processes and replace them with reliable automated ones. Cloud providers do _precisely_ that, and charge
you only for the actual resources consumed; not a penny for "operational convenience".

When a client comes to me and asks, "should we move out of the cloud?" or "should we move into the cloud?"
I have a very simple list I go through.

First, do you have specific technical or regulatory requirements that prevent you from being in the cloud? If so, you have no choice; you must be on-premise.

Second, do you have sufficient predictability that you know what your usage will be? If the answer is no,
you are likely to overspend or underspend when purchasing infrastructure, compared to public cloud on-demand
resources.

Third, and most importantly, do you know, _really_ know, what engineering skills and staff, operations skills
and staff, and software - commercial of-the-shelf (COTS) or open source (OSS) - you will need to deploy and
manage all of the above? Most of the time, unfortunately, the answer is simply "we do not."

Make sure you know those really **really** well - or let me help you get them. Then, and only then, can you
have a real answer to the question, if cloud is right for you, or to paraphrase a16z, is it a "trillion dollar paradox".


