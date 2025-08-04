'use client'

import { useEffect, useState } from 'react'
import { useRuntimeConfig } from '../lib/useRuntimeConfig'

export default function Home() {
  const [data, setData] = useState<string | null>(null)
  const [fetchError, setFetchError] = useState<string | null>(null)
  const { config, error: configError, loading } = useRuntimeConfig()

  useEffect(() => {
    // Wait for config to load
    if (loading || !config) return

    console.log('Using backend URL from runtime config:', config.backendUrl)
    
    fetch(`${config.backendUrl}/api/hello`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        setData(data.message)
        setFetchError(null)
      })
      .catch((err) => {
        setFetchError(`Failed to fetch: ${err.message}`)
      })
  }, [config, loading])

  // Show loading state
  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white">
        <div className="neo-brutal-card text-center">
          <h1 className="text-4xl font-black mb-6 text-black neo-brutal-text-shadow uppercase tracking-wider">LOADING SYSTEM</h1>
          <div className="neo-brutal-border bg-yellow-400 p-4 inline-block">
            <p className="text-black font-black uppercase">INITIALIZING...</p>
          </div>
        </div>
      </main>
    )
  }

  // Show config error
  if (configError) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white">
        <div className="neo-brutal-card text-center max-w-2xl">
          <h1 className="text-4xl font-black mb-8 text-black neo-brutal-text-shadow uppercase tracking-wider">SYSTEM ERROR</h1>
          <div className="neo-brutal-border bg-red-500 p-6 mb-6">
            <p className="text-white font-black text-xl uppercase">CONFIGURATION FAILED</p>
            <p className="text-white font-bold mt-2">{configError}</p>
          </div>
          <div className="neo-brutal-border bg-blue-400 p-4">
            <p className="text-black font-bold uppercase text-sm">
              SOLUTION: VERIFY CONFIG.JSON IN PUBLIC DIRECTORY
            </p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white">
      <div className="text-center max-w-4xl w-full">
        {/* Start Now Banner */}
        <div className="neo-brutal-card bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-8 neo-brutal-hover cursor-pointer">
          <div className="text-center py-6">
            <h2 className="text-5xl font-black text-white neo-brutal-text-shadow uppercase tracking-wider mb-2">
              🚀 START NOW 🚀
            </h2>
            <p className="text-xl font-bold text-white uppercase tracking-wide">
              UNLEASH YOUR POTENTIAL TODAY!
            </p>
          </div>
        </div>

        <h1 className="text-6xl font-black mb-12 text-black neo-brutal-text-shadow uppercase tracking-wider">
          NEO BRUTAL SYSTEM
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="neo-brutal-card bg-red-500">
            <h2 className="text-2xl font-black text-white uppercase mb-4">STATUS</h2>
            <p className="text-white font-bold text-xl">HOLA</p>
          </div>
          
          <div className="neo-brutal-card bg-blue-500">
            <h2 className="text-2xl font-black text-white uppercase mb-4">MODE</h2>
            <p className="text-white font-bold text-xl">YOYO</p>
          </div>
          
          <div className="neo-brutal-card bg-green-500">
            <h2 className="text-2xl font-black text-white uppercase mb-4">WORKS</h2>
            <p className="text-white font-bold text-xl">ACTIVE</p>
          </div>
          
          <div className="neo-brutal-card bg-yellow-400">
            <h2 className="text-2xl font-black text-black uppercase mb-4">FINALLY</h2>
            <p className="text-black font-bold text-xl">DEPLOYED</p>
          </div>
        </div>

        <div className="neo-brutal-card bg-white mb-8">
          <h2 className="text-3xl font-black text-black uppercase mb-6 neo-brutal-text-shadow">
            BACKEND CONNECTION
          </h2>
          {fetchError ? (
            <div className="neo-brutal-border bg-red-500 p-6">
              <p className="text-white font-black text-xl uppercase">CONNECTION FAILED</p>
              <p className="text-white font-bold mt-2">{fetchError}</p>
            </div>
          ) : (
            <div className="neo-brutal-border bg-green-500 p-6">
              <p className="text-white font-black text-xl uppercase">CONNECTION SUCCESS</p>
              <p className="text-white font-bold text-2xl mt-2">
                {data ? data.toUpperCase() : 'LOADING...'}
              </p>
            </div>
          )}
        </div>

        <div className="neo-brutal-card bg-purple-500">
          <h3 className="text-xl font-black text-white uppercase mb-4">SYSTEM INFO</h3>
          <div className="space-y-2 text-white font-bold">
            <div className="neo-brutal-border bg-black p-3">
              <span className="text-yellow-400">BACKEND URL:</span> {config?.backendUrl || 'NOT LOADED'}
            </div>
            <div className="neo-brutal-border bg-black p-3">
              <span className="text-yellow-400">SOURCE:</span> RUNTIME CONFIG (CONFIG.JSON)
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
