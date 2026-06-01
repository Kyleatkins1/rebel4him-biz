import { useAuth } from '../lib/auth'

function Dashboard() {
  const { user } = useAuth()
  const firstName = user?.email?.split('@')[0] ?? 'there'

  return (
    <div className="dashboard">
      <div className="dashboard-greeting">
        <h2>Hey, {firstName} 👋</h2>
        <p className="text-muted">Here's your business at a glance</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Revenue This Month</span>
          <span className="stat-value">$0</span>
          <span className="stat-trend trend-neutral">No data yet</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Open Quotes</span>
          <span className="stat-value">0</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Active Jobs</span>
          <span className="stat-value">0</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Pending Follow-ups</span>
          <span className="stat-value">0</span>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="dashboard-section">
        <h3 className="section-title">Quick Actions</h3>
        <div className="quick-actions">
          <button className="quick-action-btn">
            <span className="quick-action-icon">👤</span>
            <span>New Customer</span>
          </button>
          <button className="quick-action-btn">
            <span className="quick-action-icon">📝</span>
            <span>New Quote</span>
          </button>
          <button className="quick-action-btn">
            <span className="quick-action-icon">📋</span>
            <span>New Job</span>
          </button>
        </div>
      </section>

      {/* Upcoming Jobs */}
      <section className="dashboard-section">
        <h3 className="section-title">Upcoming Jobs</h3>
        <div className="empty-state">
          <span className="empty-icon">📋</span>
          <p>No upcoming jobs</p>
          <p className="text-muted">Jobs will appear here once you create them</p>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="dashboard-section">
        <h3 className="section-title">Recent Activity</h3>
        <div className="empty-state">
          <span className="empty-icon">📊</span>
          <p>No recent activity</p>
          <p className="text-muted">Activity will show up as you use the app</p>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
