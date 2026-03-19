# Costumer Inteview - Maxime (Hitachi Rail)

[Transcript](Costumer%20Inteview%20-%20Maxime%20(Hitachi%20Rail)/Transcript%2031a0f2153d6d81318e5ef7f102abc791.md)

## 1. Inteviewee profile

| Field | Detail |
| --- | --- |
| **Role** | Work Package Manager for Safety (sub-project lead) |
| **Product** | Hitachi Rail |
| Product Type | B2B — Safety & Validation documentation and assessment services, integrated into the engineering delivery lifecycle of rail system projects |
| Users | Internal: Safety Managers, Validators, Work Package Managers. External: External auditors / notified bodies who assess the final Safety Case and Validation Report |
| Org Size | Large enterprise (Hitachi Rail — global organization; Maxime's immediate department is ~15 people in Berlin) |
| Immediate Team | 6 people on the largest project (Safety Managers + Validators + 1 junior Work Package Manager learning under Maxime) |
| Framework | Formally Scrum, but practiced as Kanban in reality — milestone-driven, no strict sprint completion enforcement; PI Planning (SAFe-influenced) used for cross-team activity planning |
| Prior Experience | N/A |
| Hats Worn | Work Package Manager + resource planner + effort estimator + stakeholder coordinator + internal reviewer + compliance/norm adherence oversight |

## 2. Day-in-the-Life Summary

- **Project sync meetings (multiple per week):** One at the overarching project level (including commercial aspects), one at the engineering level with other Work Package Managers. Agenda covers open items, deliverable status, and newly emerged issues.
- **Weekly team meeting:** Reviews the Kanban/Scrum board, discusses what's coming up that week, surfaces newly raised defects or field issues that need to be slotted in.
- **One-on-ones and bilateral coordination:** Follow-up calls with individual team members and lateral coordination with other work packages.
- **Jira tracking:** Ongoing logging and updating of tasks.
- **Activity planning (up to 3-month horizon):** Recently migrated from MS Project to C-Place for milestone-based scheduling.
- **Progress reporting:** No formal KPIs — focus is on ratio of work completed to hours billed.
- **Resource planning:** Managing utilization of ~15 Safety staff across multiple concurrent projects; capacity planning is milestone-driven and highly variable.
- **Effort estimation at project start:** Combined top-down (experience-based FTE allocation) and bottom-up (task-by-task summation) approach, plus a large legacy Excel model.

---

## 3. Key Decisions & Deliverables

- **Safety Plan & Validation Plan:** Produced at project start — normative, standard-prescribed documents that define the framework for the entire Safety lifecycle.
- **Reviews:** Maxime's team receives and evaluates all documents from preceding development stages (specification, verification, test). Reviews are conducted via an in-house tool (CMCS), with comments classified, tracked, responded to, and closed — all in a legally traceable format.
- **Validation Report:** Assesses the verification work package, traces requirements through the full development chain, and evaluates test and defect management practices.
- **Safety Case:** Covers Hazard Analysis, Technical Safety Report, safety requirements, application conditions, and Safety Justification — all norm-prescribed.
- **Work Package Descriptions & Project Start Documentation:** Maxime's own deliverables include effort estimates, risk assessments, and work package descriptions at project kick-off.
- **Progress reporting:** Maxime reports milestone status and scheduling upward — he does not synthesize or interpret technical content.
- **No PRD equivalent:** Requirements documentation is handled entirely by the preceding development stages. Maxime's team evaluates compliance with requirements but does not author them. There is no single consolidated document comparable to a PRD.

---

## 4. Pain Points & Frustrations (Ranked by Maxime's Emphasis)

**Pain #1: Opacity / Lack of Transparency into Team Progress**

- Maxime's primary visibility into what his team is doing comes from weekly verbal updates — he has no real-time or asynchronous view of daily activity.
- Review requests sometimes bypass him entirely, going directly between team members and reviewers without his knowledge.
- When asked what he would wish away, he named **opacity and complexity** as the two biggest frustrations.
- He acknowledged this is partially constrained by works council regulations — you cannot systematically monitor what employees are doing throughout the day.

**Pain #2: Complexity and Stakeholder Misalignment**

- The Safety domain sits at the intersection of diverging interests: his team prioritizes field safety above all; project management prioritizes speed and cost. Both perspectives are legitimate but fundamentally in tension.
- Extreme interdependencies across work packages mean every delay cascades — work compresses heavily toward milestones, making time pressure a chronic issue.
- Coordinating between stakeholders, aligning on process, and managing differing interpretations of reality consumes significant time.

**Pain #3: Manual Transfer into Jira (PI Planning → Jira)**

- After each PI Planning session (Project Increment Planning), tasks are manually re-entered into Jira. Maxime flagged this as an obvious candidate for automation: **"That could definitely be done smarter."**

**Pain #4: Effort Estimation Without Reliable Baselines**

- Estimations are required but difficult to ground: team members are reluctant to commit to numbers because exceeding them creates friction.
- Bottom-up estimation doesn't work reliably. Top-down experience-based estimation is used instead, calibrated against a large legacy Excel model.
- The Excel model is more accurate than dedicated engineering estimation software that was tried and abandoned — but takes approximately a year of effort to maintain per update cycle.

**Pain #5: Resource Planning Complexity**

- 15 staff work across multiple projects simultaneously, with milestone-driven (not steady) workloads and constantly shifting timelines.
- No self-updating capacity optimization tool exists. Maxime is actively working on building something, but nothing satisfactory is in place yet.
- Escalations frequently pull staff from lower-priority projects to higher-priority ones, creating cascading planning disruptions.

---

## 5. Tools Currently Used

- **Jira** — task tracking, sprint/Kanban board management
- **C-Place** — milestone-based project and activity planning (recently introduced, replacing MS Project)
- **CMCS (in-house)** — document review tool: upload documents, invite reviewers, track and classify comments, manage iterations in a legally auditable format
- **Wiki** — internal documentation
- **Excel** — rough personal planning, effort estimation, legacy estimation model
- **Microsoft Co-Pilot** — available but largely unused; no concrete use case identified by Maxime

---

## 6. AI Usage (Organic Adoption)

- **Effectively none.** Maxime does not use AI tools at work. He is aware of Microsoft Co-Pilot but has found no practical use case for it in his workflow.
- Privately uses AI for investment-related tasks.
- The organization has AI initiatives and encourages adoption, but nothing has been deployed for Safety reporting workflows.
- **Core blocker:** Safety reports cannot contain errors — AI-generated content is not yet trusted for normatively prescribed, audit-relevant documentation.
- **Future condition for adoption:** Maxime described waiting for an **explainable AI** — one where the reasoning steps are traceable, not just a black box output. Once that exists, he could see AI supporting Validation Report and Safety Case authoring.
- Hitachi has an internal AI division; potential synergies are being explored company-wide, and there is a partnership with NVIDIA on sensor data enrichment. But nothing has reached Maxime's workflow concretely.

---

## 7. The Ideal Solution (Maxime's Own Description)

Maxime's wish list was more modest and operationally specific than visionary — reflecting a role focused on coordination rather than product creation:

- **A meeting summarization tool** that cuts out irrelevant discussion and extracts only decisions and action items — his direct answer to the magic wand question. He noted this already exists but is likely non-compliant in his environment.
- **More real-time visibility into team activity** — knowing what team members are actually working on day-to-day without relying on weekly verbal updates or being bypassed on review requests.
- **A self-updating resource planning and capacity optimization tool** — one that ingests updated project timelines across multiple concurrent projects and suggests how to allocate staff, including surfacing commitment conflicts.
- **Smarter PI Planning → Jira transfer** — reducing or eliminating manual re-entry of tasks from planning sessions into Jira.

---

## 8. Compliance & Enterprise Constraints

- **Legally auditable documentation is non-negotiable.** In the event of a rail accident, investigation authorities must be able to trace the entire development and safety assessment process through the documentation. This means comment histories, review iterations, and decisions must be permanently preserved and tamper-proof.
- **CMCS was chosen over SharePoint/Word Online** specifically because Office Online allowed comments to be deleted — an unacceptable risk in this regulatory context.
- **AI-generated content in Safety reports is currently off the table.** No errors are permissible. Until AI output is reliably explainable and traceable, it cannot be used in normatively prescribed documentation.
- **Works council limits managerial monitoring.** Maxime explicitly noted he cannot systematically track what team members do throughout the day — a structural constraint on transparency solutions.
- **Meeting transcription tools face compliance barriers.** Maxime immediately flagged that a tool like Granola would likely not be compliant in his context — people can be "held to their words," and consent and data handling are serious concerns.

---

## 9. Key Quotes

- *"Safety is not a product in the conventional sense — it's more like a stage in the development lifecycle, similar to specification and testing."*
- *"Their role is to evaluate the system at the end of development — so they need to be very knowledgeable and look closely at processes, at gaps in development, at requirements coverage."*
- *"Things take the time they take. You can't ship something half-finished to testing."*
- *"The manual transfer into Jira from PI Planning — that could definitely be done smarter."*
- *"It's difficult to find reliable numbers."* — on effort estimation
- *"Opacity and complexity."* — when asked for his single biggest pain point
- *"More insight into what they're doing — based on what they tell me. But you don't get that through the works council."*
- *"A tool that summarizes meetings, cuts out all the pointless discussions, and just gives you the essence of what was said and decided."* — his magic wand answer
- *"We're waiting for an AI where it's not just a black box — where you can trace how each step was reached. Then you could imagine reports being written with AI support."*
- *"A capacity optimization tool that updates itself automatically."*

---

## 10. Implications for Our Business Idea ("Cursor for Product Managers")

**NOTE:** The following observations are strictly derived from what Maxime described in the interview — no external assumptions added.

**What Aligns with Our Hypothesis**

- The **manual Jira transfer from PI Planning** is a concrete, well-scoped automation problem that maps directly to the "reduce PM overhead" angle of the thesis.
- The **opacity problem** — lack of real-time visibility into team activity — mirrors the transparency pain identified in the Fabian interview, suggesting it is a cross-context pattern, not company-specific.
- Maxime's **meeting summarization wish** confirms demand for AI-assisted distillation of meeting content into actionable outputs — consistent with the PRD drafting pain in the Fabian interview, though at a simpler extraction level.
- The **resource planning problem** (multi-project, milestone-driven, self-updating capacity optimization) is a discrete, high-value workflow gap that no current tool in his stack addresses.

**What Challenges Our Hypothesis**

- Maxime's role produces **almost no PRD-equivalent documentation** — he plans, tracks, and coordinates, but does not synthesize technical content. The core "Cursor for PM" thesis around PRD generation is largely irrelevant to his workflow.
- His **customer is the external auditor and the norm itself** — not an internal business function or end user. Discovery, requirements gathering, and stakeholder alignment dynamics are structurally different from the SaaS PM context.
- **Compliance constraints are severe and non-negotiable.** Meeting transcription, AI-generated content in reports, and centralized data aggregation all face hard regulatory barriers in safety-critical rail systems. Any tool entering this space must operate within EN 50126/50128/50129 norms and comparable standards.
- **AI adoption is explicitly blocked** for the highest-value workflows (report authoring) until explainability standards are met — a capability gap that current LLMs do not reliably close.
- Maxime sees **limited optimization potential at the tool level** — his assessment was that his work is not particularly tool-complex, and overhead that could be automated away is relatively small.

**Potential Pivot / Adjustment Signals**

- The **PI Planning → Jira automation** is a narrow but concrete feature with clear time-saving potential — potentially generalizable to any team running PI Planning or similar structured planning ceremonies that require manual downstream data entry.
- The **self-updating capacity planning tool** (multi-project, milestone-aware, staff allocation suggestions) is a recurring gap across project-management-heavy roles — and represents a more tractable product surface than full AI report generation in regulated industries.
- **Explainable AI for regulated industries** is a distinct and underserved segment — if a product could demonstrate full reasoning traceability (not just output), it could unlock the Safety reporting workflow that Maxime described as the long-term opportunity. This is a harder technical problem but a potentially defensible niche.
- The **compliance-first design requirement** (auditability, no deletable comments, traceable decision history) points toward a product positioning around **trust and traceability** rather than speed — a meaningful differentiation from general-purpose AI tools.