import { NavLink, useLocation } from 'react-router'
import { useAuth } from '../lib/auth'
import type { ReactNode } from 'react'

const NAV_ITEMS = [
  { path: '/', label: 'Dashboard', icon: '📊' },
  { path: '/customers', label: 'Customers', icon: '👥' },
  { path: '/jobs', label: 'Jobs', icon: '📋' },
  { path: '/more', label: 'More', icon: '☰' },
]

const SIDEBAR_ITEMS = [
  { path: '/', label: 'Dashboard', icon: '📊' },
  { path: '/customers', label: 'Customers', icon: '👥' },
  { path: '/jobs', label: 'Jobs', icon: '📋' },
  { path: '/quotes', label: 'Quotes', icon: '📝' },
  { path: '/invoices', label: 'Invoices', icon: '💰' },
  { path: '/follow-ups', label: 'Follow-ups', icon: '🔔' },
  { path: '/settings', label: 'Settings', icon: '⚙️' },
]

function Layout({ children }: { children: ReactNode }) {
  const { user, signOut } = useAuth()
  const location = useLocation()

  const getPageTitle = () => {
    const item = SIDEBAR_ITEMS.find((i) => i.path === location.pathname)
    return item?.label ?? 'Rebel4Him Biz'
  }

  return (
    <div className="app-layout">
      {/* Desktop sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="logo-icon">🦅</span>
            <span className="logo-text">R4H Biz</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          {SIDEBAR_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
              end={item.path === '/'}
            >
              <span className="sidebar-link-icon">{item.icon}</span>
              <span className="sidebar-link-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="user-avatar">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
            <div className="user-info">
              <span className="user-name">{user?.email?.split('@')[0]}</span>
              <button className="btn-text" onClick={signOut}>
                Sign out
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <header className="mobile-header">
          <h1 className="mobile-title">{getPageTitle()}</h1>
        </header>
        <div className="page-content">{children}</div>
      </main>

      {/* Mobile bottom nav */}
      <nav className="bottom-nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `bottom-nav-item ${isActive ? 'active' : ''}`
            }
            end={item.path === '/'}
          >
            <span className="bottom-nav-icon">{item.icon}</span>
            <span className="bottom-nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Layout
