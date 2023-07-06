---
categories:
- business
- cloud
- technology
date: 2023-07-06T11:45:42Z
published: true
status: publish
title: Cloud Unnative
tags: []
type: post
---

What is "cloud-unnative"?

It sounds like a tongue-in-cheek term promoting architectures that do not fit into
the cloud, but it is not. Actually, I have spent much of my career helping companies get their
architectures into forms that distinctly are cloud-native, much of it long before the term "cloud-native"
existed. Many cases make perfect sense _not_ to go into the cloud. The design principles, however,
can be enormously helpful towards operating more efficiently and reliably, within or outside the cloud.

Then what is "cloud-unnative"?

It is the term that popped into my head, created _ex nihilo_, the moment I saw the
[pricing page](https://aws.amazon.com/config/pricing/) for [AWS Config](https://aws.amazon.com/config/).

One of the Achilles heels of many cloud service providers, especially large sprawling ones like AWS, is that
it is very hard to get a handle on every resource you have.

Most firms like to have a good handle on all of their assets, especially when those assets cost money not only at
acquisition time, but also on an ongoing basis. You might need it just for accounting, or for compliance auditing or
for any number of other reasons. I recently had a need just so I could cross-reference them to what is in Terraform
and other infrastructure-as-code (IaC) versus unmanaged. 

In the 90s, as IT expanded dramatically, lots of small firms popped up with easy-to-use IT asset auditing tools,
many eventually merging into larger firms. In that respect, it was surprising how long it took to get some form of asset auditing into the cloud,
especially market-leader AWS.

In theory, you can use the AWS SDK or CLI to get a list of all of your resources, but it is (more than) a bit of a pain,
You need to know the end point or subcommand for each resource _category_, then the name of each _resource_, and then the
particular API call or format for listing the resources, then the format for getting the details. Half of the time,
specific resource information requires passing the name of the resource, other times the ARN, and every now and then, the
resource-specific ID.

In sum, it is a mess.

There are several open-source projects that try to tackle this, but they are all incomplete. 

* [aws-list-all](https://github.com/JohannesEbke/aws_list_all)
* [aws-inventory](https://github.com/nccgroup/aws-inventory)
* [aws-nuke](https://github.com/rebuy-de/aws-nuke) - run it in `dry-run` mode only!

Then there are the native AWS services themselves:

* [AWS Resource Explorer](https://aws.amazon.com/resourceexplorer/) - in theory, it is great. In practice, it only covers a limited subset of resources, and amazingly has a 1,000 resource limit on any query. There is no way to download anything greater.
* [AWS Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html) - much more focused on cost, it is not very useful for things like finding individual resources and their IDs and properties and tags, or items that have a $0 cost.
* [AWS Resource Groups](https://docs.aws.amazon.com/ARG/latest/userguide/resource-groups.html) - this actually isn't too bad. It doesn't quite cover every resource, although few things do. More importantly, it is designed more around managing resources by property, such as tag, and so is less likely to fit well with a "give me everything" use case.

Then there is [AWS Config](https://aws.amazon.com/config/). AWS Config literally tracks every resource in a region in an account, subject to filters you
set. It even can apply rules to them in order to generate reports (which, I suspect, is just SQS or Kinesis events processed by Lambda; AWS does
[eat its own dogfood](https://en.wikipedia.org/wiki/Eating_your_own_dog_food)).
The report is updated with each change of any kind. So even if you change a tag on a bucket or ec2 instance, or create a new ECS container,
it will show up in the report. The report then is sent to your target location, typically an S3 bucket.

In theory, this sounds great; what is the issue?

Pricing.

Because AWS Config is built around tracking the state of your resources, it functions sort of like an account statement. Account statements don't just
exist; they are the aggregate, or snapshot in time, of all of the changes. So each change generates an event.

AWS charges per event. The price is low, just $0.003 per configuration item, which doesn't sound like much, but it adds up surprisingly quickly.
Take a large environment with 40,000 resources - and remember, not just ec2 instances, but autoscaling groups and Network ACL rules and policy-role
attachments are all "configuration items" - will cost only $120. That really is not bad.

The problem is that every change will cost you an additional $0.003. Added a firewall rule? Pay $0.003. Remove a tag? $0.003.

Why does that matter?

Because cloud-native encourages the ephemerability of resources. It _encourages_ you to create immutable resources and destroy and replace them as
needed, tens of times per month or per day. Containers are meant to last days or hours or minutes. Lambda invocations can be even less.

Indeed, AWS's own pricing model doesn't charge for IAM Roles or Policies, Security Groups or Network ACLs. It charges for things that have a real cost.
Even ec2 instances cost by the hour, and Lambdas by the 100ms. Running one ec2 for a month is identical to running 720 ec2s for an hour. It is supposed
to be this way! It is... cloud-native.

Except that every time you change it, you incur a cost, and that cost is not insignificant. A company I saw recently was paying hundreds of dollars
_per day_ for AWS Config alone. I was so surprised, that I reached out to others I knew, who confirmed a similar experience.

AWS Config is a necessary service, whose mindset is 100% traditional, slowly-changing data centre. It is distinctly cloud-unnative.
