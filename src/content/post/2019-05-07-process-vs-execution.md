---
categories:
- business
- process
- product
- technology
date: 2019-05-07T08:45:42Z
published: true
status: publish
tags: []
title: Change Process vs Change Execution
type: post
url: /2019/05/07/process-systems-vs-execution-systems/
---
Why do I need both GitHub/GitLab/Bitbucket and JIRA/PivotalTracker/etc.?

Over the last several years, while working with companies that regularly deliver software, I have seen three basic patterns in use:

* Git-All-In: These companies, normally founded by engineers, run all-in on git platforms like GitHub/GitLab/BitBucket. The Issues tracker and Pull Requests/Merge Requests (I will stick with "PR", but no offense to GitLab) are the primary tool they use to track activity. As they grow some, they use the various "project", "kanban" and other organizational features added to these platforms, but the primary method for interacting with daily work and knowing their state is the Git-based platform.
* JIRA-All-In: These companies, normally more mature firms with strong process structures and organizations, run all-in on JIRA or, less frequently, some other ticketing system. The primary tool they use to track activity and knowing their state is the ticketing platform, along with its reporting and organizational features. Sure, they use version control and some mechanism for handling actual merges and reviews, but the primary management tool is JIRA.
* Hybrid (H): These companies use both. While they remain focused on JIRA for tracking and management, the Git platform and its change features like PRs are an important workflow tool and a first-class citizen, on par with JIRA.

Over the last few days, I have had several conversations, notably with my brilliant architect colleague [Josh Mahowald](https://www.linkedin.com/in/joshmahowald/), on trying to put some good naming on these systems and patterns, and understanding where they will lead.

Both JIRA and GitHub/GitLab/Bitbucket serve important but distinct purposes. In order to understand it, let's go through the life of a change from a company's perspective (abbreviated):

1. A change is desired, either to repair a fault or to create new capabilities. We now need to track the desire for a change, including its estimated effort, what it impacts, the group that owns it, estimated time to delivery, priority, business impact, etc.
2. The change is assigned to an actual individual for execution. We now need to track that someone owns it, how long it took to get there, which group she or he is in, etc.
3. The person completes the change and desires to make it part of the actual deployed software base, as well as to deploy it. We now need to track that it has been made ready for acceptance, requires testing, requires approval. 
4. The person needs to get the proposed change evaluated. This evaluation process is both machine-intensive, in terms of automated testing, and human-intensive, in terms of review. Based on the results of the evaluation, we need to know what both human reviewers and automated systems determined and track it. We may also desire to track how long the process took.
5. The person needs to apply their changes to the existing software base. We now need to track that it was merged in, when it happened, and compare it to any new issues that may occur post-change for correlation.
6. The change needs to be deployed to environments, whether immediately to production, as in the typical Internet SaaS world, or through various staged environments and promotions, in more sensitive corporate deployments. We now need to track when it was deployed to which environments, how long it tooks, what other changes took place simultaneously, and a host of other data points.
7. Optionally, the change may need human approval for final deployment to production, like a change control board. Much as the Internet minimizes these, they are alive and well in large corporations for good reason. The mantra of "move fast and break things" works well in Twitter, or even Salesforce.com; SWIFT or Barclays Bank cannot afford to "break things" or they lose not only many millions (or more) of real money; they lose credibility. No one wants a nuclear plant operator or Boeing Dreamliner software engineer to "break things"! These change control approvers are not interested in the details of lines 124-132 of `reports.go` compared to the previous version. They are interested in the history of the change: what environments did it go to? How long did it "burn in" each environment? Who signed off?

It becomes clear that there are _two_ kinds of change systems with which we engage. 

* <u>Change Process</u>: From a management perspective, we need systems to track the **process** of change. We need to know the state of each change, its history, its approvers at various levels, how long it spent in each stage, its severity or importance, and hundreds of other measurements. From this perspective, we don't really care if the actual change to the application itself, merging the code, takes 20 hours with 3 people or 20 minutes with 2 people. We just care that we reliably know the various states and can report on them. These may even be _required_ for compliance with the unending and ever growing list of regimes: Sarbanes-Oxley, HIPAA, PCI, SOC, IL levels, etc.
* <u>Change Execution</u>: From an execution of change perspective, we need systems to make the **execution** of change as simple and reliable as possible. From this perspective, we don't care much about previous states or how long it took to assign the issue to me, or how many concurrent issues in "user authentication" we have. All we care about is, how do we get this proposed change tested, approved and applied with minimum effort and maximum reliability.

Both are necessary, especially as a company and its scope and rate of change grow.

Engineers will struggle to execute changes reliably without a solid execution system. Fortunately, we live in an era when systems like GitHub, GitLab and Bitbucket provide not only version control for software, but solid mechanisms for evaluating changes, both automated such as tests and compliance reviews, and human, with approval requirements and multiple forms of visual evaluations, as well as comment flows and integrations.

At the same time, executives and managers will struggle to prioritize and assign work, let alone know its actual vs projected state, without a solid process system. Fortunately, we live in an era when systems like JIRA provide not only tracking, but solid reporting, organization and automation around the process of change.

Nonetheless, there definitely is some overlap between the systems. A primary reason many companies have not moved to a full hybrid model, above, is because of the double effort involved.

Many of the leaders in this space already have at least partial offerings in the other. Atlassian, which sells JIRA, has Bitbucket as its change execution system. Unsurprisingly, they are tightly integrated. GitLab has, at least in its commercial offerings, various kinds of ticketing systems beyond the basic issues, and is extending some of the tracking and reporting features on a regular basis. Finally, GitHub offers projects and kanban boards in addition to its basic issues.

I think it is inevitable that the companies will become more head-to-head competitors. Both GitLab and GitHub will offer true change _process_ systems in addition to their baseline change _execution_ systems. The validation of their success will come when non-engineering product and project managers, and perhaps even executives like CFOs and COOS, can use these systems to track, report and manage work in their companies.

Interestingly, I believe that any improvements the companies make at this point in their Change Execution systems will be incremental. GitLab has Runners and GitHub has Actions (still in Beta). There may be much to improve on both, but those will be evolutionary. On the other hand, making GitLab and GitHub not just "the place where developers live" but "the place where executives manage" is an important next step.

I am looking forward to it.
