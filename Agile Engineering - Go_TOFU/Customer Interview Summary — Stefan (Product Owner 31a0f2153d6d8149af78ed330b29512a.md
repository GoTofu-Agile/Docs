# Customer Interview Summary — Stefan (Product Owner)

**Interview conducted across 3 sessions** (Recordings 57, 58, 64)
**Interviewer:** You | **Interviewee:** Stefan — Product Owner, Mercedes-Benz Insurance Platform

[20260225_Transcripts and recording_Stefan](Customer%20Interview%20Summary%20%E2%80%94%20Stefan%20(Product%20Owner/20260225_Transcripts%20and%20recording_Stefan%2031a0f2153d6d8119b78ac12eed30c5fa.md)

---

## 1. Interviewee Profile

Tabelle

| Field | Detail |
| --- | --- |
| **Role** | Product Owner |
| **Product** | Mercedes-Benz Insurance Platform (digital/software) |
| **Product Type** | B2B2C — integrated into dealership journeys (B2B) and end-customer digital journeys (B2C) |
| **Users** | Primarily dealership staff (B2B); expanding to end customers (B2C) |
| **Org Size** | Enterprise (Mercedes-Benz — thousands of employees) |
| **Immediate Team** | 6 people + a neighboring team with daily syncs |
| **Framework** | SAFe (Scaled Agile Framework) |
| **Prior Experience** | Startups, TeamViewer (mid-size), now Mercedes-Benz (large corp) |
| **Hats Worn** | PM + process improvement + some technical work + culture/training |

---

## 2. Day-in-the-Life Summary

- Average of **8 meetings per day** (not including self-scheduled focus blocks).
- Meetings include: sprint planning, sprint review, product owner syncs, architecture syncs (weekly), UX syncs (biweekly), market syncs, communities of practice.
- Stefan calls many of these **"hygienic meetings"** — predictable cadence, incremental value, more process-oriented than product-oriented.
- Roughly **75% product work, 25% process/culture improvement** (e.g., organizing learning sessions on DORA metrics).
- Heavy context switching throughout the day between operational issues, market coordination, refinements, and planning.
- After returning from holiday: catching up on emails, coordinating go-live for Malaysia, end-to-end testing, dealing with migration issues, and dealership data management.

---

## 3. Key Decisions & Deliverables

- Major decisions happen at the **epic level** — planning work for upcoming 3-month increments (SAFe PI planning).
- Exchanges with business stakeholders (market coordinators) who propose product improvement proposals.
- Stefan explores viability of proposed solutions, then brings clarity to developers on what is needed.
- Uses **"Weighted Shortest Job First" (WSJF)** as a rough prioritization guidance.
- Creates **light business cases**: rough cost estimates (developer time) vs. rough benefit estimates (time saved, architectural gravity, market impact).
- Deliverables include: epic refinements, business cases, dashboards ("weather reports" for market performance), release management tooling (which he built himself).

---

## 4. Pain Points & Frustrations (Ranked by Stefan's Emphasis)

**Pain #1: No Direct Access to End Customers**

- Stefan sits in Germany making hypotheses about users in the US, Indonesia, etc., without being able to talk to them.
- He sees drop-off rates in analytics but **cannot interpret WHY** they occur.
- Finding customers for interviews in a large corporation is "super complicated" — requires hiring a specialized team, cross-charging between departments, and those teams lack context on insurance.
- Matching real Mercedes-Benz customers (who buy $50K+ cars) for user testing is nearly impossible — **"$20/hour testers" are not representative.**
- He described this as a **"broken link in many companies."**
- Workaround: Relies on qualitative interpretations from market managers (who have insurance business backgrounds but not always digital product backgrounds). He called this a **"hit and miss."**

**Pain #2: Slow Legal & Procurement Processes**

- **"The organization is as slow as its procurement."** — Stefan's own words.
- Wanting to use Microsoft Clarity for session recordings required navigating multiple people, each redirecting to someone else, ultimately requiring a new legal framework. Stefan gave up.
- Even Google Analytics consent forms require legal involvement per market.
- Pre-approved tools are easy to install, but adding anything NEW to the approved list is extremely complicated.
- This kills momentum and discourages teams from adopting better tools — "they just use whatever is already there."
- Unused licenses accumulate: people switch departments and keep paying for old tools while buying new ones. No one audits usage.

**Pain #3: Lack of Structured AI Adoption**

- AI adoption is entirely self-driven — no structured process to expose teams to new AI tools/developments.
- Stefan is personally enthusiastic (built an event storming tool, uses LLMs for prototyping), but most team members are not keeping up.
- A developer who could have spent 5 days on a task can now finish it in 30 minutes with an LLM — but awareness is low.
- He sees this as a cultural problem that could potentially be solved with a personalized, bite-sized learning feed (like "TikTok for AI knowledge").

**Pain #4: Misalignment Between Business, Technical, and Customer Perspectives**

- Different departments prioritize personal responsibility/resume-driven development over product goals.
- Example: A developer proposed implementing RabbitMQ (queuing system) when daily requests were only in the thousands — driven by personal interest, not product need.
- Example: Legal wanted to build a fully automated GDPR data deletion process; Stefan pushed back since they had zero such requests across 15 products in 10+ countries over 4 years.
- Stefan is actively working on a framework to bridge business and development — creating visibility through dashboards, event storming, RFCs, and Jira integration.
- He is writing a **book proposal for O'Reilly** on this topic — indicating he sees this as a systemic, industry-wide problem.

**Pain #5: Excessive "Hygienic" Meetings**

- Many recurring meetings bring incremental process improvements but limited direct product value.
- The meeting constellation changes every ~6 months but the volume remains constant.
- Stefan acknowledged the benefits exist but described the setup as "an unfortunate mixed bag."

---

## 5. Tools Currently Used

- Browser, Office 365
- Confluence (knowledge base)
- Jira (ticketing)
- GitHub (development + RFCs)
- Google Analytics (limited by consent/legal constraints)
- Internally developed insurance platform application
- Self-built tools: release management tool, event storming tool, performance dashboards ("weather reports")
- **Wanted but blocked:** Microsoft Clarity (session replays)

---

## 6. AI Usage (Organic Adoption)

- Stefan personally uses LLMs extensively — for coding prototypes, event storming, and exploring solutions.
- He sometimes builds working code prototypes instead of Figma mocks because it's faster to demonstrate complex interactions (e.g., search + filter conflict behavior).
- He is aware of prompt-to-Figma-to-code tools but hasn't tried them yet.
- At Mercedes-Benz, AI adoption is not systematically encouraged.

---

## 7. Discovery Challenges

- **"A lot of companies in Europe are struggling with discovery."** — Stefan
- He has never worked at a company where Product Ops exists. He knows people who sell it as a service but is unsure about the real value vs. propaganda.
- Discovery before launching in new markets (e.g., Indonesia) is extremely difficult — cultural nuances (e.g., 40% of Indonesians don't have a surname) can only be found through real testing.
- The gap between wanting to do proper discovery and being able to execute it in a large corporation is significant.

---

## 8. Differences Across Company Sizes (Stefan's Experience)

Tabelle

|  | Startups/Small | Mercedes-Benz (Enterprise) |
| --- | --- | --- |
| **Strategy** | Varied | Very strategy-driven, siloed |
| **Technical Depth for PM** | High (expected at TeamViewer) | Not required (others can cover) |
| **Decision-making** | Top-down without transparency (TeamViewer: "do this" without why) | Strategy-driven but slow; layers of coordination |

---

## 9. Key Quotes

- *"The organization is as slow as its procurement."*
- *"I'm creating a hypothesis sitting in Germany and I'm not the local representative."*
- *"Finding those customers in a big corporation is super complicated."*
- *"People who pay $50,000 for a car will not come to click our website for $20 per hour."*
- *"A lot of companies in Europe are struggling with discovery."*
- *"Different departments prioritize personal responsibility or personal gain rather than product."*
- *"Sometimes it's easier to write code for a problem — it's faster to work with a problem than build a Figma about it."*
- On hygienic meetings: *"They're happening, predictable, and they don't bring a lot of value."*

---

## 10. Implications for Our Business Idea ("Cursor for Product Managers")

**NOTE:** The following observations are strictly derived from what Stefan described in the interview — no external assumptions added.

**What Aligns with Our Hypothesis**

- Stefan explicitly struggles with **synthesizing qualitative and quantitative signals** — he has analytics data but cannot interpret the "why" behind drop-off rates without customer access.
- He makes decisions with **incomplete information** regularly (market managers provide secondhand, sometimes unreliable qualitative insights).
- His current tools do **NOT support the full discovery loop** — analytics, customer feedback, and product decisions live in separate, disconnected systems.
- He already uses AI to prototype and explore — showing **openness to AI-native workflows.**
- He described the gap between business and development as his "central intellectual preoccupation" — a tool that bridges this could resonate.

**What Challenges Our Hypothesis**

- **"What to build next" is NOT Stefan's #1 pain.** His top pain is the inability to access end customers and the slow legal/procurement process. These are organizational/structural problems, not tool problems.
- Stefan's discovery problem is less about synthesizing existing data and more about **not having the right data in the first place** (no customer interviews, limited analytics due to consent barriers).
- He already builds his own tools (dashboards, release management, event storming) — he is a **"maker" PM.** A generic tool might feel less useful to him than his custom solutions.
- The **procurement barrier itself could block adoption** of our tool in enterprises like Mercedes-Benz — even if the tool is perfect, getting it approved could take months.
- Stefan pointed out that some of his biggest problems are **cultural** (silo thinking, lack of AI adoption, resume-driven development) — these cannot be solved by a tool alone.
- He was **not directly presented with our solution concept** (the interview was cut short before Part 7 of the guide), so we have no direct reaction/commitment signal from him.

**Potential Pivot / Adjustment Signals**

- A tool that helps PMs **bridge the gap between business context and technical execution** (what Stefan is manually building) could be highly relevant — not just "what to build" but "how to communicate and align WHY to build it."
- The consent/legal bottleneck for analytics tools suggests an opportunity in **privacy-compliant user insight gathering.**
- Stefan's desire for a **"personalized AI knowledge feed"** (TikTok-like for PM tools/AI updates) is a smaller but concrete need he articulated.
- The procurement pain across enterprises is a market in itself — though likely outside our core thesis.
- The real opportunity might be less about "AI tells you what to build" and more about **"AI helps you create the artifacts that align stakeholders"** — light business cases, visual frameworks, RFC drafts, dashboards that connect customer signals to technical decisions.

---

## 11. Follow-Up Actions

- **Schedule completion of Part 7** (Solution Exploration) with Stefan to get his direct reaction to our concept.
- Explore whether legal/procurement personas should be interviewed to understand blockers to tool adoption in enterprises.
- Test hypothesis: Is the core pain **"synthesis of signals"** or **"access to signals in the first place"**? — Validate with other interviewees.
- Consider whether our tool should focus on the **"messy middle"** (aligning business + tech + customer) rather than pure discovery.
- Stefan offered to continue the conversation — maintain this relationship as a potential design partner.

##