# Customer Interview Summary — Fabian (Tech Pod Captain / PM)

**Interview date:** February 24
**Duration:** ~47 minutes
**Interviewers:** Tom Blumenstock, Emanuele Scammacca del Murgo | **Interviewee:** Fabian Thiele — Tech Pod Captain at Renzo

[Interview transcript - Fabian ](Customer%20Interview%20Summary%20%E2%80%94%20Fabian%20(Tech%20Pod%20Capt/Interview%20transcript%20-%20Fabian%2031a0f2153d6d816ea40bebd0b6b6471e.md)

---

## 1. Interviewee Profile

Tabelle

| Field | Detail |
| --- | --- |
| **Role** | Tech Pod Captain (equivalent to PM/team lead hybrid) |
| **Company** | Razor— e-commerce company selling consumer physical goods online |
| **Product** | Internal tooling & products for Finance and Commercial departments (dashboards, scrapers, automations) |
| **Product Type** | B2B internal — software built for internal business functions (Finance, Commercial, Portfolio Operations) |
| **Users** | Internal stakeholders: Finance team, Commercial team, Portfolio Operations (merchant accounts on Amazon, Walmart, etc.) |
| **Org Size** | Startup/scale-up |
| **Immediate Team** | ~8 people: 2 PMs, 4 developers (mostly Python, India-based), 2 BI specialists + a designer/business analytics front-end specialist |
| **Reporting Line** | Directly to CTO |
| **Tenure** | ~1.5 years in the role |
| **Framework** | Agile — weekly to bi-weekly sprints managed in Jira |

---

## 2. Day-in-the-Life Summary

- **Morning stand-up/tech check-in:** Review Jira board with developers, check ticket status, identify blockers, discuss whether deliverables are on track.
- **Sprint cadence:** Start Tuesday, end Monday. Monday is a buffer day for urgent items. Weekend available for super-urgent issues.
- **Weekly check-ins with business functions:** 3 per week — 1 with Finance, 2 with Commercial team. These are led by PMs, last 15 min if smooth, longer if scoping issues arise.
- **Core activities:** Resource allocation, issue resolution, customer satisfaction, root cause analysis when needed, goal prioritization.
- **Juggling many balls:** Can range from looking through code with a developer to discussing prioritization with the CXO of a business function.
- **Internal QC:** PMs perform quality control before customer user testing. Only after the function "signs off" does something go to production.

---

## 3. Key Decisions & Deliverables

- **PRDs (Product Requirements Documents):** The central deliverable. Created manually by PMs from fragmented sources (handwritten notes, meeting transcripts, Slack messages, developer input). PRDs must be signed by the customer function before development starts — acts as a "contract."
- **Prioritization via Impact vs. Effort matrix:** Impact measured in dollar value (e.g., "this automation saves $100K/year in audit fees"). Effort measured in story points (1 story point ≈ 0.5 dev day). Each developer has ~2 story points capacity/day. All tracked in Jira.
- **Goal-driven prioritization:** Company-level quarterly goals from management trickle down into a goal tree that the tech team uses to prioritize.
- **Reporting:** Manual Excel-based reports and Tableau dashboards, highly customized per audience (CTO gets story points, CFO/CEO get different language). Reporting format changes week to week based on management requests.

---

## 4. Pain Points & Frustrations (Ranked by Fabian's Emphasis)

**Pain #1: PM as Communication Bottleneck / Lack of Transparency**

- PMs are the **sole communication link** between developers and business functions — they "shield" developers from customer noise.
- Customers constantly ask for status updates because they have **no visibility into the Jira board.** Only PMs have access.
- Fabian described this as creating **"a lot of unnecessary calls and ping-pong on Slack or meetings."**
- **50% of PM work** is internal/external communication and stakeholder management.
- He explicitly said: **"Transparency is, I think, the key time saver."**

**Pain #2: Manual, Fragmented PRD Creation**

- Pre-LLMs: PRDs were **"fully done by hand and super fragmented."** The PM had to conduct customer interviews, take notes, AND formulate the PRD.
- Multiple sources for a single PRD: handwritten notes, meeting transcriptions, Slack messages, developer architectural input.
- Post-LLMs: PMs dump everything into ChatGPT to draft a PRD — **saves 2-3 hours per week** per PM. But requires **heavy proofreading** due to hallucinations.
- Each PM has their own prompt workflow — **"nothing done centrally."** No standardized AI-assisted process.
- PRDs also need to include solution design, charts, screenshots — making them time-consuming and dependent on PM's technical/product skill.

**Pain #3: Prioritization Overruled by Subjectivity**

- Fabian described wanting **"a fully end-to-end prioritization framework that creates one truth"** for the most economic development decision.
- They built an automated Impact vs. Effort scoring system in Excel (fed by Jira data + manual inputs like salaries, contracts, customer value estimates).
- **Problem:** Even with data-driven scoring, senior management **"always overruled it with subjectivity."**
- Fabian's dream: a **recommendation engine** that ties to speed, capital efficiency, and roadmap progress — and warns when quarterly goals are at risk if something isn't prioritized.

**Pain #4: Reporting Overhead**

- Reporting takes a lot of time: preparation, conducting, answering questions.
- Reports need to be **constantly adapted** — automated dashboards became stale because "once something is automated, people don't look at it anymore."
- Different audiences require entirely different languages: CTO (story points) vs. CFO (dollar value, capital efficiency).
- Fabian preferred Excel because he could adapt it flexibly, but it was fully manual.

**Pain #5: Miscommunication & Iteration Loops**

- **"To be frank, this never really happens that on the first go, end users are satisfied."**
- Causes: miscommunication, expectation management failures, underestimation of development time, developers interpreting requirements differently.
- The PM-to-developer handoff is where a lot breaks down despite documentation.

---

## 5. Tools Currently Used

- **Jira** — sprint management, ticket tracking (central system of record)
- **Confluence** — documentation, standardized PRD templates
- **Slack** — communication, automated alerts
- **GitHub** — version control, production deployment
- **Tableau / Power BI** — business intelligence dashboards
- **Excel** — reporting, prioritization scoring, capacity planning
- **AWS** — hosting (databases, server infrastructure)
- **AWS Bedrock** — LLM applications (first used here)
- **Airflow** — observability, scheduled job monitoring, auto-creates Jira tickets + Slack alerts on failures
- **ChatGPT** — ad-hoc PRD drafting (individual PM initiative, not centralized)

---

## 6. AI Usage (Organic Adoption)

- PMs use ChatGPT individually to **draft PRDs from meeting transcripts and notes** — saves 2-3 hours/week but requires heavy proofreading.
- Developers used ChatGPT and co-pilots for **technical documentation** (code repo exports → technical docs). But business logic documentation from calls was **"not possible"** with existing tools.
- Each PM had their own prompts — described as **"a patchwork of things"** (flicken teppich). No central system.
- LLM output required iteration: **"You iterate one, two, three times sometimes"** before getting the final PRD.
- **No AI tool existed at the time** that could offer the integrated functions Fabian wanted (auto-PRD generation + timeline + customer transparency).

---

## 7. The Ideal Solution (Fabian's Own Description)

Fabian organically described what he'd want — a **unified timeline view**:

- **A single navigable timeline** per project — from idea to solution — where you can click on any milestone (e.g., "first meeting with customer") and see: the meeting notes, the PRD generated from it, the internal call notes, the Jira tickets.
- **Role-based access:** Customers see limited view (status, timeline, progress). Developers see read-only detail. Admins see everything.
- **Automated notifications** to customers — proactive status updates to reduce their need to ask.
- **Integrates with Jira** — not a replacement, but connects to it. Auto-generates PRDs and progress dashboards.
- **Must be highly customizable** — "definitely not a one-stop-shop solution." Every tech team within every company and industry has different needs.
- Must include a **recommendation engine** for prioritization tied to quarterly goals.

---

## 8. Compliance & Enterprise Constraints

- Fabian highlighted that **~20% of information flow is "undetectable"** — informal conversations ("kitchen talk"), coffee-machine discoveries. This can't be captured by any tool.
- **Compliance/audit requirements:** Most enterprises require the tech stack to be auditable. Using LLMs at scale to transcribe meetings was **"not something you can do"** under current regulations (as of ~2 years ago).
- There needs to be a **human control layer** — you can't just put all information and conversations into a system without oversight.
- Sensitive data (salaries, contracts) needs special handling — usually only HR/payroll has access. Compliance for including this in prioritization tools is unclear.

---

## 9. Key Quotes

- *"The product managers were the glue between kind of everything."*
- *"Your job as a product manager is to shield the development teams from the customers in order for them to work in peace and work efficiently, and the PM is kind of the way, the shield that blocks that."*
- *"Transparency is, I think, the key time saver."*
- *"Creating documentation, so writing PRDs for sure, being present in calls and mitigating between stakeholders."* — on where he spends the most time
- *"Having a fully end-to-end prioritization framework that creates one truth, I think, what is the most economic decision on what to develop — that was always my dream."*
- *"It's always being overruled by subjectivity of senior management."* — on prioritization
- *"There was no tool that could offer the functions that we just discussed. So we did not use anything."* — on AI tools for PM workflows
- *"You can standardize 80% of it, but there's always this 20%, let's call it kitchen talk."*
- *"To be frank, this never really happens that on the first go, end users are satisfied."*

---

## 10. Implications for Our Business Idea ("Cursor for Product Managers")

**NOTE:** The following observations are strictly derived from what Fabian described in the interview — no external assumptions added.

**What Aligns with Our Hypothesis**

- Fabian described the **exact problem our thesis targets:** PMs manually aggregate fragmented information from multiple sources into PRDs, and there's no system supporting the full loop.
- He confirmed LLMs already save 2-3 hours/week on PRD drafting but the process is **ad-hoc, fragmented, and not centralized** — exactly the gap a product could fill.
- His ideal solution (unified timeline with auto-PRD generation, Jira integration, customer transparency) **closely mirrors the "Cursor for PM" concept** — a system that supports the full discovery-to-delivery loop.
- He explicitly said **no tool existed on the market** that could do what he needed when he looked.
- His prioritization pain aligns with the "ask what should we build next" part of the thesis — he wants a recommendation engine that connects to strategic goals.

**What Challenges Our Hypothesis**

- Fabian's **#1 pain is communication overhead / transparency**, not discovery per se. His internal customers already tell him what they want — the problem is status visibility and reducing PM-as-middleman load. This is more **project management** than product discovery.
- He emphasized that any solution must be **"very customizable"** — not a one-stop shop. Every team/company/industry has different needs. A generic tool might not satisfy.
- **20% of information flow is uncapturable** ("kitchen talk") — any tool will still miss informal signals.
- **Compliance is a real barrier:** Enterprise audit requirements and regulations around LLM-based transcription may block adoption.
- Senior management **overrules data-driven prioritization with subjective decisions anyway** — a recommendation engine may not change behavior at the top.
- Fabian's context is **internal tooling for business functions**, not external product for end users — his "customers" sit across the hallway. Discovery dynamics differ significantly from B2C/B2B SaaS.

**Potential Pivot / Adjustment Signals**

- The **"PM as bottleneck" problem** is concrete and quantifiable (50% of time on communication). A tool that automates status transparency and reduces PM communication overhead has clear ROI.
- The **PRD generation workflow** (transcript + notes + Slack → structured PRD) is a well-defined, automatable pipeline that multiple PMs would pay for — especially if it integrates with Jira/Confluence rather than requiring a separate ChatGPT workflow.
- The **"unified timeline"** concept Fabian described is essentially a PM operating system — this could be a strong product metaphor/positioning rather than "Cursor for PMs."
- The need for **audience-specific reporting** (auto-translate story points → dollar value depending on audience) is a discrete, high-value feature.

---

## 11. Comparison: Fabian vs. Stefan

Tabelle

| Dimension | Fabian (Renzo) | Stefan (Mercedes-Benz) |
| --- | --- | --- |
| **Org size** | Startup/scale-up | Enterprise |
| **#1 Pain** | PM is communication bottleneck / no transparency | No access to end customers |
| **#2 Pain** | Manual PRD creation from fragmented sources | Slow legal/procurement blocking tools |
| **Discovery gap** | Not a major issue — internal customers tell him what they want | Core issue — can't reach real end users |
| **AI adoption** | Ad-hoc ChatGPT for PRDs (2-3 hrs/week saved) | Personal LLM use for prototyping/event storming |
| **Tool blocker** | No suitable integrated tool existed on market | Procurement/legal kills momentum |
| **Ideal solution** | Unified timeline + auto-PRD + customer transparency | Visual alignment framework bridging business ↔ tech |
| **Customizability need** | Very high ("not a one-stop shop") | Builds his own tools |
| **Commitment signal** | Strong — described ideal solution in detail, offered to continue | Soft — agreed to continue, no solution presented |

---

## 12. Follow-Up Actions

- Fabian offered to do a **gap analysis** on the interview questionnaire and provide additional context in the group chat — follow up on this.
- Test whether the **"unified timeline" concept** resonates with other interviewees — it could be the product anchor.
- Explore the **PRD generation pipeline** as a concrete MVP: transcript + notes + Slack → structured PRD draft with Jira/Confluence integration.
- Investigate the **compliance/audit angle** — is this a dealbreaker for enterprise adoption, or a moat if solved?
- Validate whether the **transparency/status visibility pain** is universal across PM contexts or specific to internal-tooling teams.