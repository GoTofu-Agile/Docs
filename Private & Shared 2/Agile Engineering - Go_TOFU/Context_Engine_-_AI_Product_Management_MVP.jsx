import { useState } from "react"

export default function ContextEngine() {
  const [activeView, setActiveView] = useState("dashboard")
  const [dataLoaded, setDataLoaded] = useState(false)
  const [selectedRole, setSelectedRole] = useState("CTO")
  const [signals, setSignals] = useState([])
  const [tickets, setTickets] = useState([])
  const [timelineItems, setTimelineItems] = useState([])

  const mockSlackMessages = [
    { id: 1, author: "@john.dev", channel: "#engineering", text: "Users can't login again. Third report this week.", timestamp: "2026-03-05 14:23" },
    { id: 2, author: "@sarah.qa", channel: "#engineering", text: "Confirmed - login fails on Safari with 2FA enabled", timestamp: "2026-03-05 14:45" },
    { id: 3, author: "@mike.backend", channel: "#engineering", text: "I think it's the session token expiring too fast", timestamp: "2026-03-05 15:12" },
    { id: 4, author: "@lisa.pm", channel: "#product", text: "Can we prioritize the balance sheet export feature? Finance team asking again", timestamp: "2026-03-06 09:30" },
    { id: 5, author: "@tom.design", channel: "#product", text: "Balance sheet mockups ready for review", timestamp: "2026-03-06 10:15" },
  ]

  const mockZendeskTickets = [
    { id: 101, customer: "Acme Corp", subject: "Cannot access dashboard after login", priority: "High", created: "2026-03-05" },
    { id: 102, customer: "TechStart Inc", subject: "Need balance sheet export to Excel", priority: "Medium", created: "2026-03-06" },
    { id: 103, customer: "Finance Co", subject: "Login timeout issue", priority: "High", created: "2026-03-05" },
  ]

  const mockInterviewTranscript = {
    participant: "CFO at Enterprise Client",
    date: "2026-03-04",
    excerpt: "The manual export process takes our team 3 hours every week. We need to pull data into Excel for board reporting. A one-click balance sheet export would save us significant time and reduce errors."
  }

  const loadSampleData = () => {
    const synthesizedSignals = [
      {
        id: "s1",
        theme: "Login Bug Detected",
        severity: "Critical",
        confidence: 0.92,
        summary: "Multiple reports of login failures on Safari with 2FA enabled. Session token expiration suspected.",
        affectedUsers: 15,
        sources: [
          { type: "Slack", ref: "@sarah.qa in #engineering", link: "#", timestamp: "2026-03-05 14:45" },
          { type: "Slack", ref: "@mike.backend in #engineering", link: "#", timestamp: "2026-03-05 15:12" },
          { type: "Zendesk", ref: "Ticket #101 - Acme Corp", link: "#", timestamp: "2026-03-05" },
          { type: "Zendesk", ref: "Ticket #103 - Finance Co", link: "#", timestamp: "2026-03-05" },
        ]
      },
      {
        id: "s2",
        theme: "Feature Request: Balance Sheet Export",
        severity: "High",
        confidence: 0.87,
        summary: "Multiple stakeholders requesting Excel export functionality for balance sheets. Identified as time-saving opportunity (3hrs/week per client).",
        affectedUsers: 8,
        sources: [
          { type: "Interview", ref: "CFO at Enterprise Client", link: "#", timestamp: "2026-03-04" },
          { type: "Slack", ref: "@lisa.pm in #product", link: "#", timestamp: "2026-03-06 09:30" },
          { type: "Zendesk", ref: "Ticket #102 - TechStart Inc", link: "#", timestamp: "2026-03-06" },
        ]
      },
    ]

    const aiGeneratedTickets = [
      {
        id: "t1",
        title: "Fix Safari 2FA Login Session Timeout",
        type: "Bug",
        priority: "P0 - Critical",
        description: "Users experiencing login failures on Safari browser when 2FA is enabled. Session tokens appear to expire prematurely.",
        acceptanceCriteria: [
          "Users can successfully login with 2FA on Safari",
          "Session tokens remain valid for expected duration",
          "No regression on other browsers"
        ],
        estimatedEffort: "5 Story Points",
        estimatedCost: "$3,500",
        potentialRevenue: "$0 (Retention)",
        sources: ["Slack: @sarah.qa", "Zendesk #101", "Zendesk #103"],
        status: "pending"
      },
      {
        id: "t2",
        title: "Implement One-Click Balance Sheet Excel Export",
        type: "Feature",
        priority: "P1 - High",
        description: "Add functionality to export balance sheet data directly to Excel format with one click.",
        acceptanceCriteria: [
          "Users can export balance sheet to .xlsx format",
          "Export includes all relevant financial data",
          "Format is compatible with standard Excel templates"
        ],
        estimatedEffort: "8 Story Points",
        estimatedCost: "$5,600",
        potentialRevenue: "$120k ARR (upsell opportunity)",
        sources: ["Interview: CFO", "Slack: @lisa.pm", "Zendesk #102"],
        status: "pending"
      },
    ]

    const timeline = [
      {
        id: "m1",
        milestone: "Login Bug Fix Deployed",
        date: "2026-03-15",
        status: "In Progress",
        technicalMetrics: { effort: "5 Story Points", team: "Engineering", sprint: "Sprint 12" },
        businessMetrics: { cost: "$3,500", value: "Prevents 15% churn risk", impact: "15 enterprise accounts" },
        customerMetrics: { improvement: "Zero login friction", satisfaction: "+25% CSAT expected" }
      },
      {
        id: "m2",
        milestone: "Balance Sheet Export Feature Launch",
        date: "2026-03-28",
        status: "Planning",
        technicalMetrics: { effort: "8 Story Points", team: "Full Stack", sprint: "Sprint 13" },
        businessMetrics: { cost: "$5,600", value: "$120k ARR upsell potential", impact: "Time savings: 3hrs/week per client" },
        customerMetrics: { improvement: "Automated reporting workflow", satisfaction: "Addresses top-3 feature request" }
      },
      {
        id: "m3",
        milestone: "Q1 Platform Stability Review",
        date: "2026-03-31",
        status: "Scheduled",
        technicalMetrics: { effort: "N/A", team: "All Teams", sprint: "End of Q1" },
        businessMetrics: { cost: "$0", value: "Risk mitigation", impact: "Foundation for Q2 roadmap" },
        customerMetrics: { improvement: "Increased platform reliability", satisfaction: "Baseline for Q2 improvements" }
      },
    ]

    setSignals(synthesizedSignals)
    setTickets(aiGeneratedTickets)
    setTimelineItems(timeline)
    setDataLoaded(true)
  }

  const approveTicket = (ticketId) => {
    setTickets(tickets.map(t => t.id === ticketId ? { ...t, status: "approved" } : t))
  }

  const DashboardView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Synthesis Dashboard</h1>
          <p className="text-gray-600 mt-1">AI-extracted signals from fragmented data sources</p>
        </div>
        <button
          onClick={loadSampleData}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Load Sample Fragmented Data
        </button>
      </div>

      {!dataLoaded && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <div className="text-blue-900 font-medium text-lg mb-2">No Data Loaded</div>
          <p className="text-blue-700">Click "Load Sample Fragmented Data" to simulate ingestion from Slack, Zendesk, and User Interviews</p>
        </div>
      )}

      {dataLoaded && (
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Active Integrations
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 p-3 rounded">
                <div className="font-medium text-sm text-gray-900">Slack</div>
                <div className="text-xs text-gray-600 mt-1">{mockSlackMessages.length} messages ingested</div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <div className="font-medium text-sm text-gray-900">Zendesk</div>
                <div className="text-xs text-gray-600 mt-1">{mockZendeskTickets.length} tickets analyzed</div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <div className="font-medium text-sm text-gray-900">User Interviews</div>
                <div className="text-xs text-gray-600 mt-1">1 transcript processed</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Extracted Signals</h2>
            {signals.map(signal => (
              <div key={signal.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{signal.theme}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        signal.severity === "Critical" ? "bg-red-100 text-red-800" : "bg-orange-100 text-orange-800"
                      }`}>
                        {signal.severity}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{signal.summary}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Confidence: {(signal.confidence * 100).toFixed(0)}%</span>
                      <span>•</span>
                      <span>Affected Users: {signal.affectedUsers}</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm font-medium text-gray-900 mb-2">Sources ({signal.sources.length})</div>
                  <div className="grid grid-cols-2 gap-2">
                    {signal.sources.map((source, idx) => (
                      <button
                        key={idx}
                        className="text-left p-2 bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${
                            source.type === "Slack" ? "bg-purple-500" :
                            source.type === "Zendesk" ? "bg-green-500" : "bg-blue-500"
                          }`}></span>
                          <span className="text-xs font-medium text-gray-900">{source.type}</span>
                        </div>
                        <div className="text-xs text-gray-600 mt-1">{source.ref}</div>
                        <div className="text-xs text-gray-500 mt-1">{source.timestamp}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  const TriageView = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI-Generated Tickets</h1>
        <p className="text-gray-600 mt-1">Review and approve development tasks based on user signals</p>
      </div>

      {!dataLoaded ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
          <div className="text-yellow-900 font-medium text-lg mb-2">No Tickets Generated</div>
          <p className="text-yellow-700">Load sample data from the Dashboard first</p>
        </div>
      ) : (
        <div className="space-y-6">
          {tickets.map(ticket => (
            <div key={ticket.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="grid grid-cols-2 divide-x divide-gray-200">
                <div className="p-6 bg-gray-50">
                  <h3 className="font-semibold text-gray-900 mb-4">Source Signals</h3>
                  <div className="space-y-3">
                    {ticket.sources.map((source, idx) => (
                      <div key={idx} className="bg-white p-3 rounded border border-gray-200">
                        <div className="text-sm font-medium text-gray-900">{source}</div>
                        <div className="text-xs text-gray-600 mt-1">Click to view original context</div>
                      </div>
                    ))}
                    <div className="bg-blue-50 p-3 rounded border border-blue-200">
                      <div className="text-xs font-medium text-blue-900">AI Synthesis</div>
                      <div className="text-xs text-blue-700 mt-1">
                        {ticket.type === "Bug" ? "Pattern detected across multiple channels indicating critical issue" : "High-value feature request validated across stakeholder groups"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Generated Ticket</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      ticket.type === "Bug" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"
                    }`}>
                      {ticket.type}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">Title</div>
                      <div className="text-base font-semibold text-gray-900">{ticket.title}</div>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">Priority</div>
                      <div className="text-sm text-gray-900">{ticket.priority}</div>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">Description</div>
                      <div className="text-sm text-gray-900">{ticket.description}</div>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">Acceptance Criteria</div>
                      <ul className="text-sm text-gray-900 space-y-1">
                        {ticket.acceptanceCriteria.map((criteria, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>{criteria}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-xs font-medium text-gray-600">Estimated Effort</div>
                        <div className="text-sm font-semibold text-gray-900 mt-1">{ticket.estimatedEffort}</div>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-600">Estimated Cost</div>
                        <div className="text-sm font-semibold text-gray-900 mt-1">{ticket.estimatedCost}</div>
                      </div>
                    </div>

                    {ticket.potentialRevenue !== "$0 (Retention)" && (
                      <div className="bg-green-50 p-3 rounded border border-green-200">
                        <div className="text-xs font-medium text-green-900">Revenue Opportunity</div>
                        <div className="text-sm font-semibold text-green-800 mt-1">{ticket.potentialRevenue}</div>
                      </div>
                    )}

                    <div className="pt-4">
                      {ticket.status === "pending" ? (
                        <div className="flex gap-2">
                          <button
                            onClick={() => approveTicket(ticket.id)}
                            className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Approve & Sync to Jira
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                            Edit
                          </button>
                        </div>
                      ) : (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                          <div className="text-green-800 font-medium">✓ Approved & Synced to Jira</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  const TimelineView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Unified Timeline</h1>
          <p className="text-gray-600 mt-1">Single source of truth for all stakeholders</p>
        </div>
        <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
          {["CTO", "CFO", "Customer"].map(role => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                selectedRole === role
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              View as {role}
            </button>
          ))}
        </div>
      </div>

      {!dataLoaded ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
          <div className="text-yellow-900 font-medium text-lg mb-2">No Timeline Data</div>
          <p className="text-yellow-700">Load sample data from the Dashboard first</p>
        </div>
      ) : (
        <div className="space-y-4">
          {timelineItems.map((item, idx) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    item.status === "In Progress" ? "bg-blue-100" :
                    item.status === "Planning" ? "bg-yellow-100" : "bg-gray-100"
                  }`}>
                    <span className="text-lg font-bold text-gray-700">{idx + 1}</span>
                  </div>
                  {idx < timelineItems.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-200 mt-2"></div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.milestone}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                      item.status === "Planning" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">Target Date: {item.date}</div>

                  {selectedRole === "CTO" && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="font-medium text-blue-900 mb-3">Technical View</div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-blue-700 mb-1">Effort</div>
                          <div className="text-sm font-semibold text-blue-900">{item.technicalMetrics.effort}</div>
                        </div>
                        <div>
                          <div className="text-xs text-blue-700 mb-1">Team</div>
                          <div className="text-sm font-semibold text-blue-900">{item.technicalMetrics.team}</div>
                        </div>
                        <div>
                          <div className="text-xs text-blue-700 mb-1">Sprint</div>
                          <div className="text-sm font-semibold text-blue-900">{item.technicalMetrics.sprint}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedRole === "CFO" && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="font-medium text-green-900 mb-3">Business View</div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-green-700 mb-1">Cost</div>
                          <div className="text-sm font-semibold text-green-900">{item.businessMetrics.cost}</div>
                        </div>
                        <div>
                          <div className="text-xs text-green-700 mb-1">Value</div>
                          <div className="text-sm font-semibold text-green-900">{item.businessMetrics.value}</div>
                        </div>
                        <div>
                          <div className="text-xs text-green-700 mb-1">Impact</div>
                          <div className="text-sm font-semibold text-green-900">{item.businessMetrics.impact}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedRole === "Customer" && (
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <div className="font-medium text-purple-900 mb-3">Customer View</div>
                      <div className="space-y-3">
                        <div>
                          <div className="text-xs text-purple-700 mb-1">Improvement</div>
                          <div className="text-sm font-semibold text-purple-900">{item.customerMetrics.improvement}</div>
                        </div>
                        <div>
                          <div className="text-xs text-purple-700 mb-1">Expected Impact</div>
                          <div className="text-sm font-semibold text-purple-900">{item.customerMetrics.satisfaction}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200 p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Context Engine</h2>
          <p className="text-xs text-gray-600 mt-1">AI Product Management</p>
        </div>
        
        <nav className="space-y-2">
          <button
            onClick={() => setActiveView("dashboard")}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
              activeView === "dashboard"
                ? "bg-blue-50 text-blue-900"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">📊</span>
              <span>Dashboard</span>
            </div>
            <div className="text-xs text-gray-600 mt-1 ml-8">AI Synthesis</div>
          </button>

          <button
            onClick={() => setActiveView("triage")}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
              activeView === "triage"
                ? "bg-blue-50 text-blue-900"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">🎫</span>
              <span>Triage</span>
            </div>
            <div className="text-xs text-gray-600 mt-1 ml-8">Review Tickets</div>
          </button>

          <button
            onClick={() => setActiveView("timeline")}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
              activeView === "timeline"
                ? "bg-blue-50 text-blue-900"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">📅</span>
              <span>Timeline</span>
            </div>
            <div className="text-xs text-gray-600 mt-1 ml-8">Stakeholder View</div>
          </button>
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-xs text-gray-600 mb-2">Data Status</div>
          <div className={`flex items-center gap-2 text-sm ${dataLoaded ? "text-green-700" : "text-gray-500"}`}>
            <span className={`w-2 h-2 rounded-full ${dataLoaded ? "bg-green-500" : "bg-gray-300"}`}></span>
            <span>{dataLoaded ? "Data Loaded" : "No Data"}</span>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-auto p-8">
        {activeView === "dashboard" && <DashboardView />}
        {activeView === "triage" && <TriageView />}
        {activeView === "timeline" && <TimelineView />}
      </main>
    </div>
  )
}