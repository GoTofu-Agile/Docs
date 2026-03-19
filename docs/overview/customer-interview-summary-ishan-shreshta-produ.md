---
title: Customer Interview Summary — Ishan Shreshta (Produ
source: Private & Shared 2/Agile Engineering - Go_TOFU/Customer Interview Summary — Ishan Shreshta (Produ 31b0f2153d6d80499c20d599ab3967b4.md
---
# Customer Interview Summary — Ishan Shreshta (Product Manager & Product Owner) (1)

---

**Interview conducted across 1 session**

**Interviewer:** Marc | **Interviewee:** Ishan — Co-Founder & Product Manager, MediX Solutions

[ishan_interview.pdf](../../assets/notion/customer-interview-summary-ishan-shreshta-produ/ishan-interview-880a40bc.pdf)

---

## 1. Interviewee Profile

| Field | Detail |
| --- | --- |
| **Role** | Co-Founder & Product Manager |
| **Product** | MediX Solutions — pharmacy management software (inventory, medications, prescriptions) |
| **Product Type** | B2B — software for pharmacies in Nepal |
| **Users** | Pharmacy staff and operators |
| **Org Size** | Small startup (13 people total) |
| **Immediate Team** | 13 people including developers and co-founders |
| **Framework** | Informal / lightweight — Trello-based task management |
| **Prior Experience** | Founder background; no large corporate experience mentioned |
| **Hats Worn** | PM + requirements translation + customer support interface + team coordination |

---

## 2. Day-in-the-Life Summary

- First task every morning: **checking customer messages and feedback** — issues reported, new feature requests, or things that aren't working as expected.
- Goes through feedback to **interpret the actual need** behind each request — sometimes straightforward, sometimes requires deep interpretation.
- Spends time thinking about how a potential solution could **fit into the existing system** — assessing integration points before anything is communicated to developers.
- Breaks features down into **smaller tasks and tickets** in Trello; communicates these to developers.
- Significant portion of the day: **coordination and alignment** — discussing implementation, edge cases, and technical constraints with the dev team.
- Overall day structure: understand problems → design solutions → structure work for development.

---

## 3. Key Decisions & Deliverables

- Decisions driven primarily by **user impact** — features affecting many users or significantly improving UX get prioritized.
- Secondary consideration: **effort vs. value** — complexity of building vs. the benefit it would bring.
- No formal PRDs — uses **Trello tickets** as the main documentation and task management tool.
- Tickets include: feature description, relevant details, sometimes the **original client comment** for context.
- Ishan deliberately includes raw customer context so developers and partners understand **why** a feature is being built, not just what.

---

## 4. Pain Points & Frustrations (Ranked by Ishan's Emphasis)

**Pain #1: Information Gathering & Translation from User to Dev**

- The most time-consuming process: **understanding what a user actually means**, mapping that to the existing system, and translating it into something developers can implement.
- Example: A user requests a "balance sheet feature" — Ishan must first understand how the current system handles financial and inventory data, then figure out how a balance sheet could connect to existing data (sales, inventory values, profit calculations).
- This process is **slow and mentally intensive** — it requires conceptual thinking before any coordination can happen.
- *"Sometimes that process takes time before everything becomes clear."*

**Pain #2: Communication Overhead**

- A large portion of product work is **communication** — aligning developers on goals, explaining feature behavior, handling back-and-forth on edge cases.
- Every new feature or system change requires **everyone to understand the goal** and expected behavior — which takes time and repetitive effort.

**Pain #3: Lack of Structured Discovery / User Insight**

- Ishan has **direct contact with customers** (unlike Stefan), but the process of interpreting what they actually need is still manual and sometimes ambiguous.
- No structured tool for capturing, organizing, or analyzing customer feedback — it all comes in informally and is filtered manually.

---

## 5. Tools Currently Used

- **Trello** (task management & lightweight requirements documentation)
- Communication tools (unspecified — likely messaging apps / email)
- Internal discussions for coordination
- **No formal PRD tooling**, no analytics tools, no session recording tools mentioned

---

## 6. AI Usage

- Ishan is **aware of AI tools** (explicitly compared Chat PRD to ChatGPT).
- Does **not appear to use AI tools actively** in his daily workflow — no mention of personal LLM use.
- His comparison to ChatGPT suggests he has used it at some level, but it's not an established part of his process.

---

## 7. Product Reactions — Three Concepts Tested

**Concept 1: Chat PRD** (Conversational PRD Generator)

- **Rating: 3 / 10**
- Key objection: *"If the tool mainly generates text that I then copy and paste into tickets, I think I could probably use ChatGPT for the same thing."*
- Sees marginal value in better structure, but no clear differentiation from existing AI tools.

**Concept 2: Multi-Source AI Analysis** (Upload docs/notes/transcripts → generate insights & tickets)

- **Rating: 4 / 10**
- Slightly more interesting than Concept 1 due to additional context upload capability.
- Uncertainty about actual capabilities: *"I'm not completely sure how much additional value that would create compared to existing AI tools."*
- Mild openness, but no strong pull.

**Concept 3: Session Recording + Auto-Ticket Generation** (User behavior pipeline → automatic tickets)

- **Rating: 7–8 / 10**
- Clear positive reaction: *"Being able to directly see what users are doing inside the product would make it easier to identify problems and could safe time if tickets get created automatically"*
- Auto-ticket creation from user friction events resonates directly with his pain of manually interpreting user needs.
- This concept addresses his core pain — **understanding what users actually experience** — without requiring him to interpret ambiguous feedback.

---

## 8. Key Quotes

- *"My role is basically to understand what the user actually needs and what kind of problem they are facing."*
- *"The developer shouldn't have to spend too much time figuring out the user perspective or business logic — I try to define that beforehand."*
- *"Sometimes people describe something that isn't working as expected — you have to interpret what the actual need behind the request is."*
- *"Sometimes that process takes time before everything becomes clear."*
- *"If the tool mainly generates text that I then copy and paste into tickets, I think I could probably use ChatGPT for the same thing."*
- *"Being able to directly see what users are doing inside the product would make it easier to identify problems."*

---

## 9. Differences Across Company Sizes / Contexts

|  | MediX Solutions (Startup) |
| --- | --- |
| **Process** | Informal — Trello-based, no formal PRD process |
| **Requirements Management** | Lightweight tickets with client context included |
| **Decision-making** | Impact-driven + effort/value estimation |
| **Customer Access** | Direct — Ishan is the first point of contact for user feedback |
| **AI Adoption** | Aware but not actively integrated |
| **Stakeholder Landscape** | Simple — small team, direct communication |

---

## 10. Implications for Our Business Idea ("Cursor for Product Managers")

**NOTE:** The following observations are strictly derived from what Ishan described in the interview — no external assumptions added.

**What Aligns with Our Hypothesis**

- Ishan's core pain — **translating ambiguous user feedback into structured developer tasks** — is exactly the loop our tool aims to support.
- He explicitly validates that this process is **time-consuming and mentally taxing**, confirming the pain is real and recurring.
- His **7–8/10 rating for the session recording + auto-ticket concept** is the strongest positive signal across all three concepts tested — showing high appetite for tools that close the gap between user behavior and actionable tasks.
- His workflow (feedback in → interpret → structure → communicate to dev) is a **perfect fit for AI-assisted synthesis**.

**What Challenges Our Hypothesis**

- Ishan gave **Chat PRD a 3/10** — directly mirroring Michael's reaction. The "conversational PRD generator" framing consistently underperforms across interviewees.
- His comparison to ChatGPT signals a **low perceived differentiation** for text-generation-based tools — the baseline expectation is already set by free tools.
- His team is small (13 people) with a simple, informal setup — **willingness to pay for tooling may be low** in this segment.
- He has **direct customer access**, which means the pain of "no user insight" (Pain #1 in Stefan's case) is less acute — he already receives feedback, the problem is processing it efficiently.
- The **market context** (pharmacies in Nepal) may represent edge-case constraints (budget, language, digital maturity) that limit generalizability of his needs.

**Potential Pivot / Adjustment Signals**

- The strongest signal from Ishan: **session recording + automated ticket creation** (Concept 3) scored highest by far — pointing toward a product that captures behavioral signals directly and converts them into actionable work items.
- The value framing should shift from *"AI writes your requirements"* to **"AI captures what users actually do and turns that into tasks automatically."**
- For small teams like Ishan's, the tool must be **lightweight and immediately useful** — no onboarding overhead, no complex setup.
- The consistent 3–4/10 for Concepts 1 & 2 across both Ishan and Michael is a **strong cross-interview signal**: document generation alone is not a compelling value proposition.

---

## 11. Follow-Up Actions

- **Cross-validate the session recording concept** (Concept 3) with other interviewees — is this consistently the strongest resonating product direction?
- Explore whether the core offering should be **repositioned around behavioral insight + auto-ticketing** rather than AI-assisted document creation.
- Investigate **pricing sensitivity** for small startup founders — Ishan's context suggests this segment may be price-sensitive.
- Test whether the pain of **"interpreting ambiguous user feedback"** is universal across PM profiles or specific to small-team, direct-customer-contact contexts.
- Consider Ishan as a potential **early beta tester** — his direct customer relationship and simple toolstack make him an ideal candidate for rapid feedback cycles.
