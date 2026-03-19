# Interview transcript - Fabian

# Summary

## **Meeting Purpose**

To understand the PM workflow, pain points, and tool needs at Renzo.

## **Key Takeaways**

- **PMs are the bottleneck:** They manually aggregate fragmented info (notes, transcripts, Slack) into Product Requirements Documents (PRDs) and act as the sole communication hub, shielding developers from customer noise.
- **The Core Problem: Lack of Transparency:** Customers constantly ask for status updates because they lack direct visibility into the Jira board, creating constant PM communication overhead.
- **The Ideal Solution: A Unified Timeline:** A single, intuitive timeline view that aggregates all project artifacts (PRDs, meeting notes, Jira tickets) into a navigable, customer-facing source of truth.
- **Prioritization is Subjective:** The "Impact vs. Effort" matrix is often overruled by senior management's subjective decisions, highlighting the need for a tool that can recommend actions based on strategic goals.

## **Topics**

### **The PM Bottleneck**

- **Manual PRD Creation:** PMs manually synthesize fragmented information from multiple sources (handwritten notes, meeting transcripts, Slack) into a single PRD.
    - LLMs (e.g., ChatGPT) were used to draft PRDs, saving 2–3 hours/week but requiring heavy proofreading due to hallucinations.
- **Communication Hub:** PMs act as the sole communication link, shielding developers from customer noise to maintain their focus.
    - This creates significant overhead, as PMs must constantly relay status updates and manage expectations.
- **Prioritization Challenges:** The "Impact vs. Effort" matrix is often overruled by senior management's subjective decisions.
    - **Impact:** Measured in dollar value (e.g., "this automation saves $100k/year in audit fees").
    - **Effort:** Measured in story points (1 story point ≈ 0.5 dev day).

### **The Ideal Solution: A Unified Timeline**

- **Concept:** An intuitive timeline view that serves as the single source of truth for all project artifacts.
- **Functionality:**
    - **Navigable Milestones:** Each point on the timeline (e.g., "customer meeting") links directly to its corresponding artifact (e.g., meeting notes, PRD).
    - **Role-Based Access:** Different views for customers (limited), developers (read-only), and admins (full).
    - **Automated Notifications:** Proactive status updates sent to customers to reduce their need to ask.
- **Rationale:** To replace the current, clunky workflow of navigating between disparate tools like Jira, Confluence, and Slack.

### **Context: Renzo's Tech Pod Structure**

- **Team Structure:** Cross-functional "tech pods" (PMs, devs, BI specialists) formed quarterly to serve specific departments (e.g., Finance, Commercial).
- **Role (Fabi):** Tech Pod Captain, reporting to the CTO.
    - **Responsibilities:** Resource allocation, issue resolution, and ensuring customer satisfaction.
- **Agile Process:** Weekly/bi-weekly sprints managed in Jira.
    - **Sprint Start (Tuesday):** PMs provide developers with scoped tickets and PRDs.
    - **Sprint End (Monday):** A buffer day for urgent tasks.
    - **QC:** PMs perform internal QC before customer user testing.

### **Tooling & Workflow**

- **Core Stack:** Jira (sprint management), Confluence (documentation).
- **Observability:** Airflow monitored scheduled jobs and automatically created Jira tickets and Slack alerts for failures, with PMs as the accountable party.
- **Reporting:** Manual Excel models were used for flexible, customized reports, as automated dashboards were too rigid for management's dynamic needs.

## **Next Steps**

- **Tom:** Share the meeting transcription with the team.
- **Team:** Conduct a gap analysis on the interview questionnaire.
- **Fabi:** Provide additional context in the group chat if needed.

# Full transcript

# PM customer interview - Fabi - February 24

[**VIEW RECORDING - 47 mins (10 secs of highlights)**](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ)

**HIGHLIGHT - [WATCH](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=0.0)**

[@0:12](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=12.42) - **Tom Blumenstock (CODE University of Applied Sciences)**

Okay, then I'll guess I'll take the lead. Let me just switch quickly. All right. Now, I guess also following along the interview guide, but in general, it would be good to understand a little bit more about your role or what you did exactly.

And especially like for me and I guess more or less for Emanuele. Emanuele or Emanuele?

[@0:43](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=43.76) - **Emanuele Scammacca del Murgo**

Emanuele. Emanuele.

[@0:45](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=45.82) - **Tom Blumenstock (CODE University of Applied Sciences)**

Okay. Emanuele. guess you have a little bit more experience of how a product manager works. At least for me, I only never worked with product managers.

So maybe a little bit. God, what a picture of what you exactly did.

[@1:04](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=64.18) - **Fabian Thiele**

Yeah, yeah. So, at Renzo, tech team was structured in development pods, meaning the entire tech org, consisting of product managers, developers, business intelligence specialists, and other, let's say, niche specialists, were categorized in agile teams.

Those teams were formed on a quarterly basis, but worked in weekly to two-week sprints, and were allocated as the tech org, but serving a specific department or team, depending on the need of the company.

My role in that was, I was a so-called tech pod captain, so we had four tech pods within the tech team.

And each of those had, like, a different purpose. So Miro was there, was responsible for finance department and the commercial departments, and we did both, like, internal tooling as well as the building of new products, internal tooling, as in, hey, we have Tableau.

This is, we need a dashboard to visualize X, Y, Z financials, versus, hey, we need to build a scraper to get this data and build an application on top of it.

So this was roughly, roughly the breadth of width. The product primarily was software applications, so not necessarily software you would then sell to a customer online.

This was in-house development and in-house products. Some of those we actually developed in a way so we could. We licensed it to others, but at least for my team, we never did that.

Yeah, the day-to-day was, right, depending on what kind of role the pod lead, so to say, had, it was like the team manager, right, and the team manager automatically was the one managing also the sprints, right.

I had two product managers that essentially did that, so to say, in the nitty-gritty details for me, but the day-to-day was allocating the resources and fixing any issues that occur.

So it's about being present in, like, customer calls, customer team, right, the respective departments, so the vertical in the org, so the finance or the commercial team, making sure they get what they want on time and in.

Full, out of ensuring that, making sure all developers are happy and can perform at the best of their abilities and making sure nothing gets miscommunicated.

There were also goals. So the way our goal setting worked was we had a company-level quarterly goal by the management team, and those trickled then down into like a goal tree.

that the tech team staffing was then using in order to prioritize. oftentimes, you had to spend time on fixing a bug or so, right?

But at the same time, you had to prioritize, okay, hey, in the grand scheme of things, in order to achieve those quarterly goals, right, what is the most important thing?

So I would say, it's juggling a lot of different balls. And it can come from looking through the code with a developer to discuss it.

I with the CXO of the respective team of what products should be developed or what should be prioritized best.

All right.

[@5:12](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=312.22) - **Tom Blumenstock (CODE University of Applied Sciences)**

So you yourself looked next to the developer, looked into the code itself?

[@5:20](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=320.1) - **Emanuele Scammacca del Murgo**

Yeah, if needed. root cause, right.

[@5:24](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=324.12) - **Fabian Thiele**

If you need to do a RCA root cause analysis and you have to drive the team a bit, I would like in the daily tech check-in that we would have in the morning.

The developers were almost exclusively from India. So we had early check-ins. And if there was something that was so, let's say, important to look in, we in the call did that or at a breakout.

So, right. Then you also like sometimes somebody is not there and you have to then step into

[@6:02](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=362.42) - **Emanuele Scammacca del Murgo**

And next to you as a product manager and the developers, what roles did the team include?

[@6:14](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=374.1) - **Tom Blumenstock (CODE University of Applied Sciences)**

Designers, researchers, finance people?

[@6:16](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=376.94) - **Fabian Thiele**

Yeah, so we, so the tech team within the tech team consisted of two product managers. I include myself as the soft plus one in there.

We had four developers. They mostly did Python. We had two BI specialists that did mostly SQL stuff, right? So we classified the developers as like, what can they do, right?

With coding languages, right? Do they more on front-end UI stuff? Do they do back-end stuff? Are they building pipelines, right?

These kind of things. And then you had a designer or, let's say, a business analytics front-end specialist. So that's how I would say you had, like, the way we did it was product, SQL folks, or business intelligence specialists, business analysts, and then developers.

[@7:25](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=445.9) - **Tom Blumenstock (CODE University of Applied Sciences)**

All And you reported, in that case, to the main product manager and to the management team? Yes, to the CTO.

[@7:34](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=454.96) - **Fabian Thiele**

So the way the tech team was structured is those tech pods, they were, like, 90% of all the tech functions.

And those four tech pods, captains four to five, I'm sure anymore, they directly reported into the CTO. So, yeah, I mean, my role was, anyways, like, I did this for one and a half years, roughly, and...

As a project, so to say. All right.

[@8:05](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=485.581) - **Tom Blumenstock (CODE University of Applied Sciences)**

Okay, can you give a brief breakdown of what your day-to-day looked like?

[@8:11](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=491.781) - **Fabian Thiele**

Yeah, so in the morning, you had a tech check-in that usually was a stand-up. We went through the team, we looked at our gyra board, so everything always started in gyra, where we had our tickets.

We looked at that and discussed, like, whether updated the status, right? So on track, right, where from the deliverables from the day before, how much did we get done?

And if there's something where we need to step in or, right, the expected time is not suitable because it takes a lot more time.

So if there was an issue in the scoping, so primarily to... And discuss those topics. Those calls were either led by me or the product managers.

So in general, those calls are led by the product managers because in our setup, the product managers are equal to the product owner, meaning they are responsible for the success or the heat you get if something was not functioning well.

The product managers were the glue between kind of everything. And, yeah, so you had this check-in. The check-in, if it goes smoothly, goes for 15 minutes only, right?

The developers are present in that call. Developers, usually you don't want to pull into these calls because, right, they have a job.

They need to work in, like, two, three, four-hour silo sprints with themselves in order to be focused on their task attempt.

So you want to decrease that time, but they can last to an hour. If there is a pressing issue and then, right, some folks drop off, some don't.

Usually then, once a week, you had, at least once a week, you had to check in with the respective department or team that you are supporting on the technical side.

I had three of those per week, one with the finance team and one with, and two with the commercial team.

The commercial team was split into sub-functions, right? So it was on the one hand, our product development team that developed physical goods, right?

We sold consumer goods on the Internet. That was our core business, and we helped them develop technical solutions for them to be more efficient.

And the other one, the other one was the portfolio operations, so the folks that operate all the merchant accounts.

And that you would have on Amazon, Walmart, et cetera, P.P., yeah. And you had those check-ins. And then, depending on a product or feature development, you have a specific check-ins.

Those are usually then fully managed by the product management, right? They set the agenda. They ask, right, if the requirements are good.

So, right, usually you would look at the PRD, product requirements document. And that has been done via interviews with the function, right?

Close-through. Make sure everyone is on the same page. You speak the same language. And then those product managers would have internal check-ins with the developers.

Say, I'm here. Look at this document in advance. In the call, 10 minutes, we discuss whether there's any misunderstanding or we need to extend the documentation, right?

Then the developers. Get to work during the week. So we started our sprint on a Tuesday and then ended it on Monday end of day in order to have, let's say, the weekend in between if something like super urgent is needed.

You still have a buffer time. And the developer, right, does that thing. And the product manager then checks in with the developer once the story point, as in the currency of hours a developer spent on something, right, has been done to check in to a QC quality control.

And once that is done, in the following check-in with the function, so purely then the next week, you would say, hey, look, this is what we developed.

Let's test this now, right? And this goes into user testing. And only if the function is, like, metaphorically signing and says, yes, this is what I need.

Then, right, it will go into production and be into a maintenance kind of mode, right? To be frank, this never really happens that on the first go, end users are satisfied.

They have, in the meantime, different ideas or the developer or the product manager are just not putting it in the right direction.

So there's a lot of, let's say, miscommunication, expectation management that happens. And also, usually, you underestimate the time you actually need to spend on making something to work.

Obviously, in a big buffer.

[@13:40](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=820.561) - **Emanuele Scammacca del Murgo**

Are there any tools they use to, like, could you speak a little bit on the, if we look in a close-up view on the process?

So there's the product managers that all basically coordinate on the customer's feedback, have a report. Then they basically decide we need to create.

This and this product. And then they basically convey the information to the developers. But inside that, is it like a seamless process?

So does it, do they always find the right solution for something? Or, and how much do the developers themselves get involved in the process?

Yeah.

[@14:20](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=860.262) - **Fabian Thiele**

Yeah. So from a tooling perspective, everything we did went via Jira and for documentation confluence. So same, same ecosystem.

So this is essentially the bread and butter. You manage the sprint via the sprint function in Jira. And you create documentation via a standardized template in the confluence.

And only if those things are there, right? Something is sufficient. Like I was a, it's very, very, let's say, deliberate on how accurate the information needs to be in those tools.

Because this is at face value, right, digitally, the source of truth. And this is essentially, it works, and usually for sprints or documentation, the product manager is fully responsible.

So they are the ones that are accountable, and they are the ones driving also the developers and managing them, right.

So the developer from our setup, they shouldn't worry too much about kind of anything other than when the product manager says, hey, here's what you're going to do for this sprint.

First X, Y, Z, here's the documentation. Do you have any questions else? Go, and we will check in and update in the daily check-in.

And if there's something to present, the developer and the product manager would jump on call and look through the solution the developer built.

Sometimes it's that the product manager... Manager explicitly in the scoping phase, right, we get a feature request or a solution request from the team.

The product manager must say, okay, thank you, we will scope this in order to assess effort and impact. The effort impact matrix was usually how we weighed stuff, impact in dollar value, and effort in story points.

One story point was half a day, was roughly five, six hours of development time, so meaning a.m. was one story point, p.m.

time is another, so each developer has, so to say, two story points of capacity every day. And that was essentially what that's done, it was all tracked in JIRA, and additionally for reporting, we used Excel and slides and some dashboards in Tableau in order to build control.

mechanisms to deploy capacity and iterate on it. But that was more for reporting purposes, I'd say. Other tools that are being used, right, obviously, GitHub within the developers as for version control and connection to the production cluster.

Tableau for business intelligence, Power BI in some cases, but primarily everything worked by Tableau for visualization. And then, of course, you had plenty of other tools, right?

AWS was kind of for server hosting and different functions within AWS in the AWS ecosystem. So database was hosted in AWS.

AWS Bedrock, for example, large language model applications was first used, but in the end, you connect whatever is needed.

There was always always. Okay. there there there. a while. You Yeah. A new need, and then you hosted the code, you adapted the stack where it's needed.

General observability was done via Airflow. So Airflow is a tool that essentially checks whether the scheduled jumps, the scheduled tasks that are automated are working.

That was a key tool also for reporting purposes, right, because one incentive was uptime. of your applications, and if something in the pipeline failed or not, right, and that observability was done via Airflow, we connected Airflow to Gyra to automatically create tickets if something was needed, and also to Slack.

Slack was the communication method, as for many companies or startups or scale-ups at the time, and we had automated alerts if something, for example, didn't work there.

And the recipient usually was always the Product Manager, who knew it first. It was also the developer who got the notification, but Accountable is the Product Manager, in to end.

Okay, one question following up on that.

[@19:13](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=1153.04) - **Tom Blumenstock (CODE University of Applied Sciences)**

What I'm asking myself is, so when you gather the data from the multiple sources, how do you aggregate it?

So from the BI perspective, I guess you have dashboards, probably next to these dashboards, you have interviews with the business people working in the team, but where and how do you aggregate this data and analyze it to basically use the information and work it into a PRD?

Yeah, yeah, that's a good question.

[@19:51](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=1191.46) - **Fabian Thiele**

So let's say pre-LLMs, it was fully done by hand and super fragmented, right? It was the product manager. This role to conduct the interview with the customer, to take notes, and to make sure to formulate a nice PRD out of it.

Once LLMs, meeting records, transcriptions come into play, the PM was able to conduct better interviews and by not all the time taking notes, right?

They could ask and they know, okay, everything is being transcribed. And at the end, after the call, they had to then sit down and use all the fragmented pieces of information in order to write that PRD.

So taking notes, transcribing those notes and formulating a PRD usually was a lot of, a lot of time, took a lot of time and effort, right?

And of course, you have multiple sources for those notes you take by hand, the notes you take on your laptop.

Top, the transcription of the meeting, in some cases, the recording of the meeting, and other Slack information if you need to clarify something, right, there are multiple sources before you actually have a PRD.

And usually a PRD would also include already a solution design, right, and this then is, those are pieces of information that comes from the engineers or the development team.

If you have a really good product manager who's good in architectural stuff, right, they can already, right, put a plan in place in, I don't, I would say 75% of the cases, that's true, and you already know what the solution roughly will look like.

But that's then also something that can come in order to confirm from the development team, so no centralized, the only thing centralizing stuff was the product manager.

Okay, but...

[@22:00](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=1320.0) - **Tom Blumenstock (CODE University of Applied Sciences)**

But he centralized the segmented information sources by himself manually at some point, or was there a specific workflow PMs used to concentrate all this data?

[@22:18](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=1338.32) - **Fabian Thiele**

Yeah, so usually each PM has, I think, their kind of own way, so there was nothing done centrally, but once ChatGPT and Chat-based LLMs were good enough, right, you could data dump into one ChatGPT conversation, right, and ask it to draft a PRD.

You see that usually, right, similar to the meeting guideline notes you have then, you see once it went through a large language model, and, but that helped in order to have, let's say, this checklist, what does a PRD really need, what format should it have, and yeah, and then they could only prove me that.

think this saves about, so having, let's say, this in place saves at least two, three hours, maybe in some cases even more per week for a product manager to have this sketched out.

The other thing, of course, is you then need to allocate time and proofreading and making sure everything is right.

At the time, there was still a lot of hallucinations in the model, but yeah, that was kind of the document.

The PRD also needs to be signed by the counterpart of the customer, right, to make sure, hey, this includes everything they need on a feature requirement perspective.

And before any capacity was deployed on the development side, and this was kind of the contract, so to say, between the tech team and the customer function.

And it took a lot of time and was really dependent on how well the product I located the projects, which it refers to, and then created charts that you can screenshot and put on a slide.

That was kind of used for that. It took a lot of manual effort to get, let's say, the template in place, but once the template was in place and integrated into Excel, it was pretty useful.

But, yeah, there was never really a very stable set because the way you report and what exactly you're reporting on and what cuts of this usually varied from week to week.

had a standard setup, but then the CFO says, okay, hey, let's calculate in the cost of tooling or the cost of compute for the solution, right, capital efficiency, these kind of things.

So, you always needed something that was adaptable enough for you. And in my case, as I was the one who had to report, I trusted in a tool that...

In an application that I know by heart, in and out, Excel, and so I knew it would just fulfill my criteria.

We tried other tools for that. The problem was that you need a really set way of reporting things, and once something is automated, people don't look at it anymore, right?

And you really need to get into the discussion of it, and also in order for it to be entertaining for management teams who don't have anything to do with tech, right?

The way you report to the CTO is a completely different way you report to a CFO or the CEO, right?

They don't care about how many story points you spend there. You need to use a different language there. And that all is also within the scope of the product manager, right?

Internal, external communication and stakeholder management. It's like 50% of the work, right? You're getting screamed at by some customer functions because the solution is not working well or right.

It needs to go faster. think those are usually the two reasons for frictions. And then you have to communicate this to the developer because your job as a product manager is to shield the development teams from the customers in order for them to work and work in peace and work efficiently, and the PM is kind of the way, the shield that blocks that.

All right.

[@27:38](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=1658.38) - **Tom Blumenstock (CODE University of Applied Sciences)**

All right. I guess we could move on to part four then. So in your workflow itself, I guess you mentioned some pain points already, but in your workflow that you had as a PM, what specific bottlenecks do you notice or manual workflows where you saw potential?

Of optimization or just, yeah, better applications. Yeah, so I think there are two buckets.

[@28:07](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=1687.58) - **Fabian Thiele**

The first one is not super relevant. The first bucket is humans. Humans make mistakes. Humans have a change of heart if it comes to, I don't know, I need this feature and, oh, no, I don't need it anymore.

need that. I think that's something you can never influence, but the things that you can definitely influence is documentation as the key form of documentation, so documentation for better communication, right?

One source of truth, this is what we're going to build in that time frame with this much effort or development cost, right?

So that's the ground truth to find that. And usually things are just not going fast enough, right? So that's always the thing.

Things are either not fast enough, too costly, or too fragile. Right? Quality not high enough. Either of those three or more than just one dimension is always given.

And what helps a lot if there's like this clear roadmap from, hey, the function has an idea. They want to use the tech team's resources in order to build it, right?

So that you have a very clean process of how this flows, right? Hey, you have an idea. You talk to the PM.

The PM says, okay, interesting. They get into a mode of ideating and say, okay, this is what, this is the problem you have.

And the PM already has an idea on building a solution. They scope it with the development team, internally align it with the tech team.

Is this the best way of resource, of our resources? Then go back to the customer and be like, hey, we can do X, Y, Z for you.

At this point in time, time, yeah? The customer is either... Happy or not happy, and just then goes ping-pong a couple of times if need, and then it goes into development, right, internal QC, external QC, and user testing, and then it's only closed once there's a signature on the development side.

So what we did was we had the gyra board, and the product manager were the ones having added access to the tickets only, not the developers.

They could only see and say, like, hey, I'm ready to pick up X, Y, Z. The PM says, okay, let's put it into development status or, right, in scoping or in whatever stage of this timeline.

And then, and then communicating this manually to the functions that were always a pain, right, so the functions would ask, hey, in which state is this, right, if the functions already had.

Access to the gyro board, for example, this would be really good, right? The few access or a tool, right, where they see, okay, it is in this stage, it will roughly take this, is this on time or, right, will this take longer than expected?

So a fluent flow of information to where in the development stage something is, I think is very good in order to avoid a lot of unnecessary calls and ping pong on Slack or meetings with good understanding.

So the customer, right, doesn't want to jump on call every other day just to check in and increase pressure, right?

So transparency on development status and, yeah, I think that's one, transparency on documentation. Generally, transparency is, I think, the key time saver.

Yeah, I'd say primarily that.

[@32:04](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=1924.32) - **Tom Blumenstock (CODE University of Applied Sciences)**

And what would be the, if you look back, the task or thing that you spend unnecessary time on, if you like, I guess, documentation, as you mentioned already, but is there a specific task you spend or are embarrassed that you spend that much time on it?

[@32:27](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=1947.82) - **Fabian Thiele**

Creating documentation, so writing PRDs for sure, being present in calls and, like, mitigating between stakeholders. And I think another bucket is prioritization, right?

So having a fully end-to-end prioritization framework that, like, creates one truth, I think, what is the most economic decision on what to develop, right?

I think that is, that was always my dream to have. We also did it, but in the end, it's all.

Always being overruled by subjectivity of senior management also, right? So most of the workflows, you need to build in a way that they are, let's say, very customizable to whatever the tech team within a company, within industry, right, kind of needs.

And that is definitely not a one-stop-shop solution that would solve it. It's rather a mixture of things, like one interface that integrates, for example, with Gyra, automatically generates PRDs, right, and automatically builds a progress dashboard or gives notifications to the customer, right?

Hey, good day, today is Monday, it's the last day of development, we expect to showcase your demo tomorrow in our wiki check-in, these kind of things.

So communication, documentation. And Quality Control, I would put those into the same bucket. Prioritization, those are the three big buckets, I would say.

[@34:13](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2053.18) - **Tom Blumenstock (CODE University of Applied Sciences)**

And the tool you already mentioned that you worked on yourself or the Razr built themselves internally, what did this tool include or what parts of the workflow did it integrate?

[@34:32](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2072.92) - **Fabian Thiele**

It integrated in, so it's, the data was fed by the Jyra integration into the Excel, yeah, and within the Excel, you also needed some manual inputs, right, like, I don't know, salaries, so it's a highly, highly confidential file.

The developers sell contracts of, right, our subscriptions or tooling that we use. In order to calculate the dollar value, you need inputs, manual inputs from the customers that say, hey, if you build me this accounting automation, we don't need to charge auditors hundreds of thousands of dollars, for example, these kind of things.

You need manual inputs from kind of all sides. Those need to be, all of those need to be treated very intransparent to the context of everything I said before, and then directly give you an output, a score, so to say, or an importance, right?

So we calculated the score, impact effort, and that was actually how we, per default, ranked stuff, but ultimately what we did is we revisited this automated scoring, which was Excel formulas, yeah, in the end.

So you can build something that would recommend what you would should do, right, a recommendation engine, depending on your needs, speed, capital efficiency, or efficiency, or roadmap progress.

Something like, hey, at the end of this quarter, you need this. If you don't prioritize this now, the overarching goal for this quarter is at risk, right?

Sometimes you work on smaller stones that later build up to a big house you want to have at the end of the quarter, but if you push something into the backlog, which you can, but still you need to fulfill this goal at the end of the quarter, right, there should be an overarching rule in the system that tells you, hey, if you don't do this, you will most likely not be able to fulfill your goals, right?

I think these three components, right, think speed efficiency and goal, greater, greater picture.

[@38:02](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2282.13) - **Tom Blumenstock (CODE University of Applied Sciences)**

All right. So far, so good. Emanuele, do you have anything to add? Yeah. Yeah.

[@38:10](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2290.97) - **Emanuele Scammacca del Murgo**

Perhaps about the timeline. mentioned that oftentimes teams have difficulties to maintain the timeline. Do you think that in this case, a tool like that might help just sort of have the whole thing a little bit more structured and perhaps also in time learn how to perhaps better organize yourself to maintain deadlines or to be realistic?

And what do you think were the causes? Is it just maybe an overestimation of how complex something is to develop and then you end up taking just more time?

Or do you think with something like that, you could perhaps reduce times or developing times? Yeah.

[@38:51](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2331.69) - **Fabian Thiele**

I think having materials as a product manager to showcase to everyone or that is available to everyone in like either being a developer.

The CTO or the customer. think that would be very useful for the product managers because, right, reporting also takes some time.

Maybe that's also one dimension I missed so far. Reporting takes a lot of time. The preparation for reporting, conducting the reporting, and answering to questions, that takes some time.

And I think a timeline would help there a lot. To have a structured process there would help a lot.

To follow it all the time will not work, right? Because there's always this exception to the rule. And whatever timeline solution there might be, right, it would need customization options.

But, yeah, to answer the question, yes, I think a timeline would be great, especially for the customers. You spend a lot.

of time and effort to communicate stuff, and when it directly connects to your tickets and to your PRDs that are being generated, I think that would be really cool.

So you could have like, hey, Project XYZ, right? We need to develop a dashboard for the finance team to forecast the next 12 months cash flow, right?

You have a timeline, and you click on elements, right? The elements is like from idea to solution. You have all the technical steps in between.

You have all the meetings that are being done. You can click on a dot, and this is like one milestone, a meeting, the first meeting with the customer.

You click on it. You see the notes from the meeting, for example. You see the PRD that was generated after this, and you see the notes from the internal call, et cetera.

So to have this as, let's say, the navigation source of truth and not like a technical system like Gyra where you have to jump from A to B in order to get X, Y, Z, right?

Something that compiles and aggregates the information crisp and intuitively for everyone, I think, yeah. And then you can have different accesses, a customer access that can not see everything, but most of the things.

And then admin access where you can see everything, development access where you can see almost everything, but you can't edit.

[@41:36](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2496.27) - **Tom Blumenstock (CODE University of Applied Sciences)**

So in the admin access, you would like to, in your case, would have liked to include salary information and all the sensitive data that would be necessary.

[@41:48](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2508.57) - **Fabian Thiele**

Yeah, I mean, the PM usually should not really have this information unless the development teams report into you and you are the manager of this person.

Right. I think there should be in the back end the option to do it, but it should not be visible in the front end.

And right. I think for compliance reasons, you need to sign a letter with HR whatsoever in order to do that.

Usually only HR can have this kind of information and payroll managers in general. But I'm not sure how compliant this would be.

But yeah.

[@42:28](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2548.59) - **Emanuele Scammacca del Murgo**

Sounds great. I think there was a lot of information. I think we probably should have to go through again.

From my side, I think that's everything. I don't know, Reggie, Tom, do you guys have any other questions?

[@42:47](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2567.41) - **Tom Blumenstock (CODE University of Applied Sciences)**

I guess there is a lot of cover based on this interview guide. But yeah, I would also would say let's.

[@42:56](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2576.57) - **Emanuele Scammacca del Murgo**

Yeah, perhaps one last question concerning were there any attempts. You said that you guys tried to develop your own system.

Was there anything, I mean, that you considered? I mean, any existing AI tools that, I don't know, are on the market available or something?

[@43:14](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2594.65) - **Fabian Thiele**

Yeah, at the time, there was no tool that could, let's say, offer the functions that we just discussed. So we did not use anything.

And for that, for developers, there was a lot of stuff, right? Co-pilots, coding agents, whatsoever, also to create documentation, right?

I think for creating documentation, usually export of the code repo into ChatGPT helped a lot in order to create technical documentation, but business logic documentation from a call, for example, that's also not possible, right?

You always have this layer in between. Here's a transcript, here's the format I need, right? And this all needs to be very customized.

So it's more like prompts. You. You have like a flicken teppich of things. I have my prompt somewhere. I take this meeting transcript.

I put it in there into the compliant code agent of what, paste in the template I want it to be.

The LLM does one thing. You iterate one, two, three times sometimes, and then it's the final PID or whatever you want to use it for.

So there was no central solution for it.

[@44:26](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2666.51) - **Tom Blumenstock (CODE University of Applied Sciences)**

There was willingness to have it, but nothing on the market that would really Okay, but the slip you just described to do with a large number of transcripts and other documents that you feed into the PRD, right?

[@44:44](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2684.37) - **Fabian Thiele**

Yeah. Yeah, exactly. Yeah, it's right. It varies from project stakeholder where the information comes from. You can standardize 80% of it, I guess, but there's always this 20%, let's call it kitchen talk, right?

It says... So in the kitchen, you walk in, you grab a coffee, and suddenly there's your customer, and he's be like, hey, I also thought about XYZ is discovered.

Yeah, so there's always this 20% layer of undetectable information flow that need to be inserted manually. And also from a, I don't know, compliance perspective, right, you can't just put everything in there all the time, right, still fairly new to put all the information and conversation somewhere.

So there needs to be a human control layer for it, or compliance certification that is auditable, right? Most enterprises require all the tech stack to be audible by auditors, right?

They do audits and that you have to fulfill. And if you're at scale using LLMs to transcribe transcripts, that's at the current regulation, not something you can, what, two years ago?

It's not something that you can do. Fantastic.

[@46:03](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2763.95) - **Emanuele Scammacca del Murgo**

Perhaps we'll be able to help you out then. Yeah, super curious, guys.

**ACTION ITEM: Share interview transcript w/ Fabian - [WATCH](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2770.9999)**

[@46:09](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2769.33) - **Fabian Thiele**

Keep me posted. 100%. All right. Nice.

[@46:15](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2775.55) - **Tom Blumenstock (CODE University of Applied Sciences)**

We took already an hour of your time.

[@46:21](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2781.39) - **Fabian Thiele**

I have a call now. You should join, but we can also discuss any findings or so.

[@46:27](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2787.63) - **Tom Blumenstock (CODE University of Applied Sciences)**

Yeah, no. I will share the transcription shortly. Perfect.

[@46:34](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2794.39) - **Fabian Thiele**

Thank you, Tom. If we write, we can do like a gap analysis or so on the questionnaire. If there's like something I need to provide, I can also all the time provide it in the group, right?

Wonderful.

[@46:45](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2805.75) - **Tom Blumenstock (CODE University of Applied Sciences)**

All right.

[@46:46](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2806.61) - **Fabian Thiele**

Perfect. Nice. Thank you very much, guys. Thank you, Fabian. Bye.

[@46:52](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2812.55) - **Tom Blumenstock (CODE University of Applied Sciences)**

Bye. Ciao.

[@46:54](https://fathom.video/share/6bDzbMbZK6qPrdMu8HYEyb2ATbtEKwQQ?timestamp=2814.53) - **Reginald Baraza**

Bye, Reggie. Bye, man. Bye. Bye. Bye. Bye. Bye. Bye. Bye. Bye.