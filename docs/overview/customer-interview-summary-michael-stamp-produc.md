---
title: Customer Interview Summary — Michael Stamp (Produc
source: Private & Shared 2/Agile Engineering - Go_TOFU/Customer Interview Summary — Michael Stamp (Produc 31b0f2153d6d80499ecaf7018a7b6cdf.md
---
# Customer Interview Summary — Michael Stamp (Product Manager)

---

**Interview conducted across 1 session**

**Interviewer:** Marc | **Interviewee:** Michael — Senior Engineer & Product Manager, Audi ADAS

[Michael_Interview (1).pdf](../../assets/notion/customer-interview-summary-michael-stamp-produc/michael-interview-1-05d41937.pdf)

---

## 1. Interviewee Profile

| Field | Detail |
| --- | --- |
| **Role** | Senior Engineer & Product Manager |
| **Product** | ADAS (Advanced Driver Assistance Systems), Level 3–4 |
| **Product Type** | B2C — vehicle software features for end customers (US market focus) |
| **Users** | End customers (drivers); internal: stakeholders, suppliers, JV partners |
| **Org Size** | Enterprise (Audi / Volkswagen Group — tens of thousands of employees) |
| **Immediate Team** | Cross-functional; works with strategic suppliers & JV (Rivian Volkswagen Technology) |
| **Framework** | VW Product Development Process (internal stage-gate framework) |
| **Prior Experience** | Engineering background; senior engineering → product management at Audi |
| **Hats Worn** | PM + requirements engineering + stakeholder alignment + reporting |

---

## 2. Day-in-the-Life Summary

- Core focus: **Adapting Audi ADAS features for the U.S. market** — specifically hands-free highway driving.
- Collects customer requirements from market sources, consolidates them into a **global requirement catalog**.
- Plans development milestones in line with the **VW Product Development Process** (stage-gate).
- Clarifies cost/benefit tradeoffs — what features cost the customer vs. what's acceptable internally.
- Goal: **Bring features into series production** reliably.
- Heavy communication load: Outlook, Teams, Slack — both internal and with external strategic suppliers.
- Significant time spent on **consolidating information across parallel channels** — internal teams, suppliers, Rivian VW JV.

---

## 3. Key Decisions & Deliverables

- Planning guided by the **Product Development Process** — a VW-internal stage-gate schema defining when decisions must be finalized and what maturity level must be reached.
- No dedicated external tool for tracking the process — progress reported via **PowerPoint reports** to Senior Director and vehicle project management.
- Works extensively with **PRDs (Product Requirement Documents)** — maintained in **Codebeamer** (requirements management tool).
- PRDs serve as the **"single point of truth"** — structured from customer-level → domain-level (ADAS) → component and function level.
- Requirements continuously updated and exchanged with stakeholders, including external suppliers.

---

## 4. Pain Points & Frustrations (Ranked by Michael's Emphasis)

**Pain #1: Information Overload Across Parallel Channels**

- The biggest time sink is the **consolidated provision of information** across many parallel channels.
- Internal coordination + collaboration with strategic suppliers (e.g., vehicle control unit suppliers) + Rivian Volkswagen JV creates an overwhelming number of information streams.
- Main challenge: **extracting the right information at the right time** — not lack of data, but information fragmentation.

**Pain #2: No AI in Daily Workflow (Yet)**

- Michael is aware that AI approaches exist for automating parts of the requirements process.
- However, **he does not use AI solutions in his daily work** — gap between awareness and adoption.
- No structured push from the organization to integrate AI tools into his workflow.

**Pain #3: PRD Process — Not a Pain, But a Constraint**

- Michael explicitly stated that working with PRDs is **not a pain point** — it's a normal part of the job.
- The process is standardized, tooled (Codebeamer), and well-understood.
- Implication: A tool that "improves PRD writing" alone is **not a compelling offer** for this profile.

---

## 5. Tools Currently Used

- Microsoft Outlook, Teams
- Slack
- Microsoft OneNote
- Confluence (project documentation)
- **Codebeamer** (requirements management — PRD equivalent)
- PowerPoint (reporting to senior stakeholders)
- Internal VW Product Development Process documentation

---

## 6. AI Usage

- Michael is **aware of AI approaches** for requirements automation.
- **Does not actively use AI** in his day-to-day work.
- No mention of personal LLM usage, prototyping tools, or AI-assisted workflows.
- AI adoption appears to be organizational inertia rather than personal resistance.

---

## 7. Product Reaction — "Chat PRD" Concept

- Presented with the concept of a **"Chat PRD"** tool — AI-assisted PRD generation via conversational interface (like ChatGPT), producing a fully formatted PRD at the end.
- **Rating: 3 out of 10**
- Key objections:
- No clear added value compared to **existing solutions (e.g., Copilot)**.
- Feels like *"another interface with similar functionality."*
- The **concrete advantage over the current status quo** is not evident.
- This is a **direct, negative signal** on the product concept as presented.

---

## 8. Key Quotes

- *"A significant time factor is the consolidated provision of information."*
- *"There are many parallel information channels — the challenge is extracting the relevant information at the right time."*
- *"[PRDs are] simply a normal working document."*
- *"I don't see a clear added value at the moment. To me it feels like another interface with similar functionality."*
- *"The concrete advantage compared to the current status quo is not entirely clear to me."*

---

## 9. Differences Across Company Sizes / Contexts

|  | Audi / VW (Enterprise) |
| --- | --- |
| **Process** | Rigid stage-gate (Product Development Process) |
| **Requirements Management** | Highly structured — Codebeamer as single source of truth |
| **Decision-making** | Process-driven; maturity gates define timing |
| **AI Adoption** | Low — awareness exists, but no daily usage |
| **Stakeholder Landscape** | Complex — internal teams + suppliers + JV partners |

---

## 10. Implications for Our Business Idea ("Cursor for Product Managers")

**NOTE:** The following observations are strictly derived from what Michael described in the interview — no external assumptions added.

**What Aligns with Our Hypothesis**

- Michael's #1 pain — **information fragmentation across parallel channels** — is a synthesis problem at its core. A tool that helps consolidate, filter, and surface relevant signals could directly address this.
- The PRD process is already standardized, which means any AI layer would need to integrate with **existing structures** (Codebeamer-style), not replace them.
- Michael is not opposed to AI — he's simply **not yet reached by a compelling enough offer.**

**What Challenges Our Hypothesis**

- Michael gave the "Chat PRD" concept a **3/10** — directly challenging the value of a conversational PRD generator.
- His core objection: the tool doesn't differentiate clearly from **Copilot or existing AI assistants** already available.
- PRDs are **not a pain point** for him — they're a solved, routinized part of his job. A tool centered on PRD generation misses the actual friction.
- Michael's workflow is **deeply constrained by VW's internal process** — a generic PM tool would struggle to fit into this rigid, internally-defined framework.
- **No direct customer access problem** here (unlike Stefan) — requirements come from structured market sources, not from missing user research.

**Potential Pivot / Adjustment Signals**

- The real opportunity is **information aggregation and filtering** — not document generation. A tool that pulls from Slack, Teams, Outlook, Confluence, and supplier inputs to surface "what matters now" could resonate.
- The **Codebeamer integration angle** is relevant — any tool needs to speak the language of existing enterprise requirements systems to have adoption potential.
- Michael's lukewarm reaction to "Chat PRD" is a strong signal to **reframe the value proposition** away from document creation and toward **decision support and signal consolidation.**
- Enterprise-grade AI tools need to **clearly differentiate from Copilot** — the baseline expectation for AI assistance is already Microsoft-level for this persona.

---

## 11. Follow-Up Actions

- **Reframe product pitch** — move away from "AI generates your PRD" toward "AI helps you manage and consolidate information across complex stakeholder landscapes."
- Explore integration with **Codebeamer or similar requirements management tools** as a potential enterprise wedge.
- Validate with other interviewees: Is **information fragmentation** (not PRD creation) the more universal pain in enterprise PM roles?
- Consider whether the **"Copilot comparison"** is a positioning problem — we need a clearly articulated differentiation story.
- Test whether the concept resonates better when framed around **decision-making support** rather than document output.
