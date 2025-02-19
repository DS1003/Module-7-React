import React, { createContext, useContext, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback(({ title, description, duration = 5000, type = 'info' }) => {
    const id = crypto.randomUUID()
    setToasts((prevToasts) => [...prevToasts, { id, title, description, type }])

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, duration)
  }, [])

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }, [])

  const clearToasts = useCallback(() => {
    setToasts([])
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast, clearToasts }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2" aria-live="polite">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`w-80 rounded-lg p-4 shadow-lg ring-1 ring-black ring-opacity-5 
                ${toast.type === 'success' ? 'bg-green-100 text-green-800' : ''}
                ${toast.type === 'error' ? 'bg-red-100 text-red-800' : ''}
                ${toast.type === 'info' ? 'bg-blue-100 text-blue-800' : ''}`}
            >
              <div className="flex items-start">
                <div className="flex-1">
                  {toast.title && (
                    <h3 className="text-sm font-medium">{toast.title}</h3>
                  )}
                  {toast.description && (
                    <p className="mt-1 text-sm">{toast.description}</p>
                  )}
                </div>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="ml-4 inline-flex text-gray-400 hover:text-gray-500"
                  aria-label="Close notification"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
