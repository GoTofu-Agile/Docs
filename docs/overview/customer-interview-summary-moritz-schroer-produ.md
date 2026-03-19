---
title: Customer Interview Summary — Moritz Schröer (Produ
source: Private & Shared 2/Agile Engineering - Go_TOFU/Customer Interview Summary — Moritz Schröer (Produ 31a0f2153d6d800d9c71e1b10a27f428.md
---
# Customer Interview Summary — Moritz Schröer (Product Manager)

**Interview conducted:** March 04, 2026 (single session, ~51 min)
**Interviewer:** Thinh Porrmann| **Interviewee:** Moritz Schröer — Product Manager, 1KOMMA5° (1,5 Grad)

Transcript and recording: [https://fathom.video/share/1e6dvJF3eQ6Psn-m-Qv2tXNrd3qGmkAL](https://fathom.video/share/1e6dvJF3eQ6Psn-m-Qv2tXNrd3qGmkAL)

---

## 1. Interviewee Profile

Tabelle

| Field | Detail |
| --- | --- |
| **Role** | Product Manager (App Platform Team) |
| **Product** | Energy Management System app — optimizes PV, heat pump, battery via software against intraday energy market prices; plus consumer-facing app for visibility |
| **Product Type** | B2C app + B2B2C platform (hardware + software); clean energy / climate tech |
| **Users** | End consumers (homeowners with PV/battery/heat pump installations) |
| **Org Size** | ~3,000 total (incl. trades/installation workforce); ~200 in product & software development |
| **Immediate Team** | ~8 people: 1 PM, 1 Engineering Manager, 3–4 developers, 1–2 designers, QA |
| **Framework** | Shape Up (6-week cycles with shaping + betting table); other teams use Scrum with 2-week sprints |
| **PM org structure** | 8 PMs + 1 Head of Product across App (4 PMs) and Energy Management System (4 PMs); separate product teams for business intelligence / non-software product |
| **External resources** | Agency developers used to balance capacity peaks |

---

## 2. Day-in-the-Life Summary

- Relatively few fixed meetings compared to peers: **two 15-min syncs per week** (Tuesday + Friday) for team check-in on status, barriers, and open topics.
- **Biweekly alignment meeting** to review cycle progress, adjust scope, and preview upcoming bets.
- **Weekly PM sync** across all product managers for cross-team alignment.
- Heavy **async communication via Slack** — ~50 channels relevant to the PM role (internal team, collaboration, notification, announcement channels per team, plus cross-team project channels).
- **Linear** (ticket system) automations push notifications into Slack channels for bugs, status changes, and milestone completions.
- Developers report progress **weekly in Linear** (what was done, next steps, blockers, dependencies). PM reviews and coordinates cross-team dependencies.
- PM conducts **user interviews**, prepares betting table sessions, runs retrospectives, and creates/maintains KPI reporting.
- Significant context switching across channels; information scattered across Slack, Notion, Linear, Zendesk, internal portals, Google Docs/Sheets, and BI dashboards (Luca).

---

## 3. Key Decisions & Deliverables

- Major planning decisions happen at the **betting table** (Shape Up): 1.5-hour session where team reviews 6–8 pre-shaped bets, assigns appetite (weeks of investment), and sets priorities.
- Shaping happens **in parallel** with the building phase (not sequentially as in canonical Shape Up). Shaping = discovery + requirements — PM drives business impact framing; developers contribute technical feasibility.
- Shaped bets are documented in **Notion**; approved bets are tracked in **Linear**.
- **Prioritization criteria:** business impact (revenue, cost savings, support ticket reduction, app ratings improvement) + time/effort + available capacity (especially backend developer bottleneck).
- **No formal scoring system** — decisions are qualitative/discussion-based in the betting table, informed by data where available.
- For most other teams (~90%), prioritization is **top-down** (management decides features); Moritz's platform team has more autonomy due to infrastructure/framework focus.
- **Deliverables:** shaped bet documents (equivalent to PRDs), Linear tickets, KPI dashboards/reports, C-level presentations (Google Slides/Docs), retrospective facilitation.

---

## 4. Signals, Data Sources & Tools

**Tool Stack**

Tabelle

| Tool | Usage |
| --- | --- |
| **Linear** | Ticketing, project tracking, progress reporting, Slack automations |
| **Notion** | Knowledge base, interview database, shaped bet documents, general documentation |
| **Slack** | ~50 channels; async communication hub; automated notifications from Linear; collaboration & announcement channels per team |
| **Google Workspace** | Gmail, Google Chat, Docs, Slides, Sheets — C-level reporting and documentation |
| **Figma + Bridget** | Design system, component library, UI/UX |
| **Zendesk** | Customer support ticketing (owned by separate team; PM team gets exports) |
| **Luca** | BI / KPI dashboards (data loaded from Google Sheets) |
| **Cursor** | AI coding assistant — used by developers (massive efficiency gains); PMs experimented with it for automations and agents |
| **Whisper** | Speech-to-text for meeting notes / PRD drafting (used unofficially by PMs despite not being officially approved) |
| **Gemini / NotebookLM** | Ad-hoc data analysis (e.g., customer support ticket classification); NotebookLM preferred for data privacy but limited in dataset size |
| **Flutter** | App frontend framework (relevant for PM prototyping with design system) |

**Data Sources for Decision-Making**

- Customer interviews (conducted by PMs; stored in Notion database — includes insights not directly related to the interview topic)
- Customer support tickets (Zendesk — exported by another team, not directly accessible; often misclassified between teams)
- App reviews (flow into Slack via automated workflow)
- Surveys (conducted periodically)
- Internal KPI dashboards (Luca — built by data scientists; updated weekly to monthly)
- Error/crash data (being set up; currently reactive rather than proactive)
- Internal portals with customer data (separate systems, limited PM access)
- Slack channel discussions (cross-team signals, bug reports, ad-hoc context)

---

## 5. Pain Points & Friction (Grounded in Interview)

**5.1 Data Fragmentation — The #1 Pain**

Moritz identified this as his biggest pain point, repeatedly. Data relevant to product decisions is scattered across ~50 Slack channels, Notion, Zendesk, internal portals, Google Sheets, Luca dashboards, and app review pipelines. Consolidating data for discovery or shaping is *"massiv aufwendig"* (massively effortful). The PM must manually pull from multiple systems to form a coherent picture.

**5.2 Discovery Is Time-Consuming**

Creating a shaped bet / requirements document takes **"ein halber Tag bis Tag"** (half a day to a full day) per document, depending on research depth. Much of that time goes to hunting down and synthesizing data from scattered sources. With Whisper + LLM assistance (voice-to-template), Moritz already sees significant time savings but the workflow is ad-hoc and unofficial.

**5.3 Dependency on Data Scientists for KPI Dashboards**

PMs are *"super abhängig"* (super dependent) on data scientists/developers to build KPI dashboards — which is not the data team's core job. The back-and-forth cycle (PM requests → data scientist builds → PM reviews → corrections) is slow and frustrating. Moritz wishes PMs could self-serve dashboards via natural language or voice.

**5.4 Late Signal Detection (Support Ticket Blindspot)**

**Concrete example:** A login/invitation-link issue affected many customers but was only detected late because first-level support had workarounds and the issue never escalated to the product team. It turned out to be **30% of app-related first-level tickets** and consumed **190 hours of support time**. The data existed but *"ist noch nicht bei uns angekommen"* (hadn't reached the PM team). Only discovered through customer interviews and later confirmed via AI-assisted analysis of first-level ticket exports.

**5.5 Data Privacy / Compliance Friction**

Sensitive customer data (IDs, billing) must be manually scrubbed before using external AI tools. Whisper is officially not approved but universally used by PMs. Large datasets (e.g., 50,000-row billing reconciliation) are difficult to process securely. A self-hosted / privacy-compliant tool would remove this friction.

**5.6 Zendesk Integration Gap**

No good integration between Zendesk and the PM workflow. Support tickets are exported manually by another team and handed over. Misclassification of tickets between teams causes further delays. PMs lack direct, queryable access to support data.

**5.7 Cursor POC Cost Blow-Up**

A proof-of-concept with Cursor for the development team was halted because token costs scaled to *"tausende Euros pro Person"* (thousands of euros per person) per month. AI tooling adoption is constrained by cost at scale, not just compliance.

---

## 6. AI / LLM Usage (Grounded)

- **Cursor:** Developers use it extensively (*"können gar nicht mehr zurückgehen"* — can't go back). PMs experimented with building Slack-aggregation agents and automations. POC paused due to cost.
- **Whisper:** PMs use speech-to-text to dictate requirements against a template, then clean up — saves significant drafting time. Officially not approved; universally used.
- **Gemini:** Used for ad-hoc analysis of customer support ticket exports (e.g., classifying first-level tickets to find the login issue).
- **NotebookLM:** Considered for privacy-sensitive analysis but limited by dataset size constraints.
- **MCP Servers:** Moritz is aware of Model Context Protocol for connecting tools (Slack, Notion, Google) and sees integration quality as the make-or-break factor for AI agent usefulness.
- **General sentiment:** AI tooling delivers *"geisteskranke Zeitersparnis"* (insane time savings) — the team has identified many use cases through unstructured experimentation. No formal AI strategy yet; bottom-up adoption.

---

## 7. Ideas & Desired Solution (From Interview)

- **Consolidated data layer:** A tool that connects all PM-relevant data sources (Slack, Notion, Linear, Zendesk, internal portals, Google Sheets) and lets PMs query/pull data via prompts or voice. *"Das ist safe auf jeden Fall wahrscheinlich auch einfach so nice, wenn du so ein Tool hast für PMs, dass du die halt alle connecten kannst."*
- **Auto-PRD from interviews:** Upload multiple customer interviews → synthesize key themes → generate draft PRDs. Moritz confirmed this would be valuable: *"Wenn du halt sagen kannst, hey, ich gebe dir zehn Interviews, kannst du mir da verschiedene PIDs erstellen."*
- **Self-serve KPI dashboards:** PMs should be able to describe a metric in natural language and get a dashboard without needing a data scientist. Would eliminate the back-and-forth dependency.
- **Proactive anomaly detection:** Heatmaps, frustration clicks, or support ticket pattern detection that pushes alerts to PMs before issues escalate (instead of discovering them retroactively through interviews).
- **PM prototyping with design system:** Ability to plug in the company's design system (Flutter/Figma components) and build quick prototypes or mockups to show customers — without involving design or dev.
- **Privacy-compliant AI:** A tool that can handle sensitive customer data without requiring manual scrubbing. Self-hosted or EU-compliant would remove the biggest adoption blocker.

---

## 8. Reactions to Proposed Solutions

Tabelle

| Proposed Solution | Reaction | Notes |
| --- | --- | --- |
| Auto-PRD from customer data + interviews | ✅ Positive | Wants multi-interview synthesis → theme extraction → PRD drafts. Already does this manually. |
| Session recording + heatmap → auto-tickets | ✅ Positive | *"Mit Sicherheit interessant"* — especially proactive anomaly alerts before issues hit support. |
| Timeline/status boards for team management | ⚪ Neutral / Already solved | Linear + Slack automations already handle this well. Not a pain point. |
| Decision support / prioritization engine | 🟡 Mixed | Useful in theory but ~90% of decisions at other teams are top-down anyway. His team has autonomy but scope is narrow. |

---

## 9. Key Quotes (Translated from German)

- *"Es sind einfach sehr viele unterschiedliche Kanäle mit Daten, auch relevanten Daten."* — (There are simply very many different channels with data, including relevant data.)
- *"Wir sind halt gerade super abhängig von Data Scientists oder Developern, dass die uns helfen müssen, irgendwelche KPI-Dashboards zu bauen — was eigentlich nicht deren Kernjob ist."* — (We are super dependent on data scientists/developers to help us build KPI dashboards — which isn't actually their core job.)
- *"Ein halber Tag bis Tag für so ein Dokument."* — (Half a day to a full day per [requirements] document.)
- *"Die meisten haben gesagt, sie können gar nicht mehr zurückgehen, weil halt teilweise so geisteskranke Zeitersparnis war mit Cursor."* — (Most said they can't go back because the time savings with Cursor were insane.)
- *"Offiziell dürfen wir auch Whisper nicht verwenden. Unoffiziell benutzen das alle PMs."* — (Officially we're not allowed to use Whisper. Unofficially all PMs use it.)
- *"Wir haben super viele unzufriedene Kunden gehabt… das haben wir halt erst relativ spät detected."* — (We had many unhappy customers… we only detected it relatively late.) [on the login issue]
- *"Ich glaube, damit steht und fällt das halt leider auch, je nachdem, welche Systeme du hast und wie gut die kompatibel sind."* — (It stands or falls depending on what systems you have and how compatible they are.) [on MCP/integrations]
- *"Langfristig wird es relevanter, dass du halt gute Business-Entscheidungen, auch Feature-Entscheidungen triffst als Product Manager, und dass es halt dann schneller geht."* — (Long-term it becomes more relevant that you make good business and feature decisions as a PM, and that it happens faster.) [on AI accelerating dev → PM becomes the bottleneck]

---

## 10. Implications for "Cursor for Product Managers" Hypothesis

**What Aligns**

- Moritz is **already using AI tools** (Whisper, Gemini, Cursor agents) in ad-hoc ways to solve exactly the problems the hypothesis targets — synthesizing data, drafting requirements, automating Slack aggregation. The need is validated by behavior, not just stated preference.
- The **data fragmentation pain is acute and structural** (50+ Slack channels, 6+ tools with relevant data). A consolidation/synthesis layer has clear value.
- The **"AI makes devs faster → PM pipeline becomes the bottleneck"** insight is a strong tailwind: as Cursor accelerates development, PMs need to shape faster and make better decisions. Moritz articulated this explicitly.
- **Privacy-compliant AI** is a real differentiator — the gap between "unofficially everyone uses Whisper" and "officially not approved" is a product opportunity for a compliant alternative.

**What Challenges**

- **Status/timeline visibility is already solved** by Linear + Slack automations in this context — not a universal pain point.
- **Prioritization is largely top-down** (~90% of teams) — a decision-support tool has limited value if management overrides it anyway.
- **Integration quality (MCP compatibility) is make-or-break.** If the product can't connect to Linear, Notion, Slack, Zendesk, and Google seamlessly, it won't be adopted.
- **Cost sensitivity is real** — the Cursor POC was killed on cost. Pricing must be defensible per-seat at scale.
- **PMs are already building their own agents with Cursor** — a product must be significantly better than DIY to justify switching.

---

## 11. Follow-Up Actions

- Moritz agreed to a **follow-up session** once more concrete ideas/prototypes are available.
- Review **"Matlock" tool** (recommended by Moritz) — appears to be a PM dashboard/AI tool in the space.
- Request access to a sanitized shaped bet document and Notion interview database structure for prototyping.
- Explore the login-issue case study as a demo scenario: "What if the tool had flagged the invitation-link pattern 3 months earlier?"

---

## 12. Interview Completion Status

Interview covered: role & team, day/week workflow, tools & data sources, prioritization process, pain points, AI usage, desired solutions, and reactions to proposed concepts. Language: German. Single session, ~51 minutes. Follow-up agreed.
