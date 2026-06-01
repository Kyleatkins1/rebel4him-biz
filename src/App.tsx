import { Routes, Route, Navigate } from 'react-router'
import { AuthProvider, useAuth } from './lib/auth'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Loading...</p>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Layout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/customers" element={<div className="page-placeholder">Customers — Coming Soon</div>} />
                  <Route path="/jobs" element={<div className="page-placeholder">Jobs — Coming Soon</div>} />
                  <Route path="/quotes" element={<div className="page-placeholder">Quotes — Coming Soon</div>} />
                  <Route path="/invoices" element={<div className="page-placeholder">Invoices — Coming Soon</div>} />
                  <Route path="/follow-ups" element={<div className="page-placeholder">Follow-ups — Coming Soon</div>} />
                  <Route path="/settings" element={<div className="page-placeholder">Settings — Coming Soon</div>} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  )
}

export default App
