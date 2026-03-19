---
title: What do competitors offer as data enrichment for s
source: Private & Shared 2/Agile Engineering - Go_TOFU/What do competitors offer as data enrichment for s 3220f2153d6d80f287bbca3fc482cc40.md
---
# What do competitors offer as data enrichment for synthetic user profiles?

Here's the granular breakdown you're looking for — by platform, with specific **file formats**, **input mechanisms**, **integration types**, and the **internal department** that would provide each.

---

# 🗂️ Detailed Data Requirements by Platform

---

## 1. 🔵 Synthetic Users (`syntheticusers.com`)

**Architecture:** LLM-first + optional RAG enrichment layer

### What they ask for and how:

| Input Type | Format | Delivery Method | Owning Department |
| --- | --- | --- | --- |
| **Target audience description** | Free-text (typed in UI) | Web form / study setup wizard | Product / UX / Marketing |
| **Product/feature context** | Free-text paragraph or bullet points | Typed directly into the study prompt | Product Management |
| **Customer interview transcripts** | `.txt`, `.pdf`, `.docx` (implied via RAG upload) | File upload into their RAG knowledge base | UX Research |
| **Existing personas** | Free-text or document | Pasted/uploaded as context | Marketing / UX |
| **Product flows / user journeys** | Free-text description or screenshots | Uploaded or described in study setup | Product / UX |
| **Prior research reports** | `.pdf`, `.docx` | RAG document upload | Insights / Research |

**Key detail:** Without any uploaded data, Synthetic Users generates personas purely from LLM world knowledge. With uploaded docs, those documents are chunked into a vector store and retrieved during simulation. There is **no native CRM/analytics integration** — it's entirely file-upload + free-text based.

---

## 2. 🟢 Delve AI (`delve.ai`)

**Architecture:** First-party data connectors → AI persona engine → synthetic research layer

### What they ask for and how:

| Input Type | Format | Delivery Method | Owning Department |
| --- | --- | --- | --- |
| **Website analytics** | GA4 data | **OAuth integration** — you connect your Google Analytics account directly (no file export needed) | Marketing / Growth / Analytics |
| **E-commerce data** | Shopify store data | **Direct platform integration** (OAuth / API key) | E-Commerce / Data |
| **Social audience data** | LinkedIn, Facebook, Twitter data | **OAuth integration** per platform | Marketing / Social |
| **Competitor website analysis** | URL input only | You type the competitor's URL — Delve scrapes it | Strategy / Product Marketing |
| **CRM/customer lists** | `.csv` file upload (name, email, firmographic fields) | Manual upload | Sales / CRM / RevOps |
| **B2B contact data** | `.csv` with fields: company, role, industry, size | File upload | Sales / Marketing Ops |
| **Custom audience data** | Structured `.csv` | Upload | Data / Analytics |

**Key detail:** Delve AI has the most **native integrations** of all platforms reviewed. GA4 and Shopify connections are plug-and-play OAuth. For CRM data, it's still a **manual CSV export** from HubSpot/Salesforce — there is no direct CRM API integration documented.

---

## 3. 🟡 Evidenza AI (`evidenza.ai`)

**Architecture:** Fully managed / white-glove service — they build the synthetic sample for you from a brief

### What they ask for and how:

| Input Type | Format | Delivery Method | Owning Department |
| --- | --- | --- | --- |
| **Product category description** | Free-text brief (written or in a call) | Onboarding call + written brief document (`.docx`/`.pdf`) | Marketing / Strategy |
| **Target audience criteria** | Free-text or structured brief (job title, industry, geography, behaviors) | Shared via email or intake form | Marketing / Insights |
| **Survey questions / research objectives** | Free-text in a Word doc or Google Doc | Shared via email | Insights / Market Research |
| **Brand assets / ad creatives for testing** | `.jpg`, `.png`, `.pdf`, `.mp4` | File upload or shared link | Brand / Creative |
| **Prior brand tracking or survey data** | `.xlsx`, `.csv`, `.pdf` (optional for grounding) | Email/upload | Insights |
| **Competitive set** | List of competitor names | Typed into brief | Strategy / Product Marketing |

**Key detail:** Evidenza is **almost entirely brief-driven** — no technical integrations at all in the full-service tier. Clients provide a written brief and get back a `.pptx` report. Self-serve (coming soon) will expose a form-based UI. No raw data pipelines required.

---

## 4. 🟣 Aaru (`aaru.com`)

**Architecture:** Population-scale simulation + enterprise BI integration

### What they ask for and how:

| Input Type | Format | Delivery Method | Owning Department |
| --- | --- | --- | --- |
| **Existing customer segmentation model** | `.csv`, `.xlsx`, or direct BI connector | API integration or file export from data warehouse | Data Engineering / BI / Analytics |
| **Behavioral/outcome data** (purchases, churn, clicks) | Structured `.csv` or database export | API / flat file | Data / CRM |
| **Segment definitions / ICP criteria** | Free-text or structured schema | Written brief + technical onboarding | Sales Strategy / RevOps |
| **Survey/research objectives** | Free-text | Intake call | Insights / Strategy |

**Key detail:** Aaru is explicitly built to **integrate with BI systems** (think Tableau, Looker, Snowflake-adjacent pipelines). They use measurable outcomes/behavioral data — not self-reported survey data — as training ground-truth. This is the most technically demanding onboarding of all platforms.

---

## 5. 🟠 Deepsona AI (`deepsona.ai`)

| Input Type | Format | Delivery Method | Owning Department |
| --- | --- | --- | --- |
| **Persona brief** | Free-text (typed in UI) | Web form | UX / Product |
| **Interview scripts / research protocols** | Free-text or `.docx` | Upload or paste | UX Research |
| **Existing user research** | `.pdf`, `.docx` | Upload | UX Research / Insights |

**Key detail:** Lightweight, UX-researcher-oriented tool. No integrations — pure text/document input. Outputs simulated interview transcripts.

---

## 6. 🔴 UXia (`uxia.app`)

| Input Type | Format | Delivery Method | Owning Department |
| --- | --- | --- | --- |
| **Persona description** | Free-text | UI form | UX / Product |
| **Interview questions / discussion guide** | Free-text (typed in session setup) | Web UI | UX Research |
| **Product description or prototype URL** | URL or free-text | Typed | Product |
| **Existing user personas** | Pasted text or `.pdf` | Upload/paste | UX / Marketing |

---

## 7. 🟤 Toluna Harmonaize (`tolunacorporate.com`)

**Architecture:** Synthetic layer built on top of Toluna's real-panel survey data

| Input Type | Format | Delivery Method | Owning Department |
| --- | --- | --- | --- |
| **Prior Toluna survey data** | Native (already in Toluna platform) | Platform-internal — no export/import if already a Toluna client | Insights / Market Research |
| **Survey instrument / questionnaire** | Toluna survey builder UI, or import `.xlsx` question template | Platform UI + spreadsheet upload | Insights |
| **Brand tracking / tracking study data** | Stored within Toluna platform | Internal | Brand / Insights |
| **Audience screener criteria** | Structured form in UI | Web form | Insights / Research Ops |

**Key detail:** Harmonaize is deeply tied to the **existing Toluna ecosystem**. If you're not already a Toluna client, onboarding requires migrating or recreating historical survey data. The synthetic layer extends real panel data — it doesn't replace the need for some real responses as a calibration baseline.

---

## 8. 🔵 Qualtrics Edge (`qualtrics.com/edge`)

| Input Type | Format | Delivery Method | Owning Department |
| --- | --- | --- | --- |
| **Prior Qualtrics survey results** | Native Qualtrics dataset (`.qsf` project files) | Platform-internal | CX / Insights |
| **CX program data** (NPS, CSAT, DSAT) | Native Qualtrics data or `.csv` import | Platform UI + file import | Customer Success / CX |
| **XM Directory contacts** | `.csv` with contact attributes | Bulk upload or CRM sync (Salesforce native integration available) | CRM / Customer Success |
| **Employee experience data** | Native Qualtrics Engage dataset | Platform-internal | HR / People Analytics |
| **Survey templates / questions** | Qualtrics native format or `.docx`/copy-paste | Platform UI | Insights |

**Key detail:** Qualtrics Edge is the most **ecosystem-locked** product — it's essentially a synthetic augmentation of your existing Qualtrics investment. The real power requires Salesforce or SAP integration (native connectors exist) plus historical CX data. Standalone use is minimal.

---

## 9. 🟢 Symar AI (`symar.ai`) & Lakmoos (`lakmoos.com`)

Both are AI-assisted research automation tools (moderator bots + analysis):

| Input Type | Format | Delivery Method | Owning Department |
| --- | --- | --- | --- |
| **Discussion guide / screener** | Free-text or `.docx` | Upload or paste | UX Research / Insights |
| **Stimulus materials** (concepts, images, prototypes) | `.jpg`, `.png`, `.pdf`, Figma URL | Upload or link | Product / Design |
| **Target audience spec** | Free-text / structured form | Web UI | UX / Marketing |

---

# 🗺️ Master Map: Data Format × Department × Delivery Method

| **Data Asset** | **Format** | **Delivery** | **Department** | **Used By** |
| --- | --- | --- | --- | --- |
| Web/analytics data | GA4 native | OAuth integration | Marketing/Analytics | Delve AI |
| E-commerce transactions | Shopify native / `.csv` | Platform OAuth / file upload | E-Commerce / Data | Delve AI, Aaru |
| CRM contacts & segments | `.csv` export | Manual upload | Sales / RevOps | Delve AI, Aaru |
| BI/segmentation models | `.csv`, `.xlsx`, SQL export | API / file | Data Engineering | Aaru |
| Survey/quant data | Qualtrics native, `.xlsx`, `.csv` | Platform-internal / import | Insights / Market Research | Qualtrics, Toluna |
| Interview transcripts | `.pdf`, `.txt`, `.docx` | File upload (RAG) | UX Research | Synthetic Users, Deepsona |
| Research reports/briefs | `.pdf`, `.docx`, `.pptx` | Email / upload | Insights / Strategy | Evidenza, all |
| Persona definitions | Free-text (web form) | Typed in UI | UX / Product / Marketing | All platforms |
| Brand/ad creatives | `.jpg`, `.png`, `.mp4`, `.pdf` | File upload | Brand / Creative | Evidenza |
| Prototype/product URLs | URL string | Typed | Product | UXia, Symar |
| Product flows / journeys | Free-text or `.pdf` | Typed / uploaded | Product Management | Synthetic Users |
| NPS / CSAT data | Qualtrics native / `.csv` | Platform-internal / import | Customer Success | Qualtrics |
| Competitor URLs | URL string | Typed | Strategy / PMM | Delve AI |
| Social audience data | LinkedIn/Facebook native | OAuth | Marketing / Social | Delve AI |

---

# 💡 Key Insight for Your Business

The competitive landscape splits into **3 clear data onboarding models**:

| Model | Tools | What you need | Friction |
| --- | --- | --- | --- |
| **Brief-only** (no technical data needed) | Evidenza, Deepsona, UXia, Symar, Lakmoos | A text description of audience + goals | Very low — anyone can start |
| **File upload** (structured or unstructured) | Synthetic Users, Toluna | CSVs, PDFs, DOCXs, transcripts | Medium — requires someone to gather & clean |
| **Native integrations** (connected data) | Delve AI, Aaru, Qualtrics | OAuth to analytics/CRM + BI pipelines | High — requires IT/Eng involvement |

The platforms with **native integrations** produce more accurate synthetic users but have higher sales friction. The **brief-only** platforms are fast to deploy but are essentially LLM-with-a-prompt, with lower fidelity. There's a clear **gap in the market for a middle-ground**: structured file uploads (CSV/XLSX of customer data + research docs) that don't require full API/OAuth setup but still go beyond pure free-text briefs.
