"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simple client-side authentication
    setTimeout(() => {
      // Default credentials
      if (
        (email === "admin@swipebay.net" && password === "1234") ||
        (email === "info@swipebay.net" && password === "1234")
      ) {
        // Set a cookie that expires in 24 hours
        const expiryDate = new Date()
        expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000)
        document.cookie = `admin-session=authenticated; path=/; expires=${expiryDate.toUTCString()}`
        router.push("/admin")
      } else {
        setError("Invalid email or password")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col md:flex-row md:h-screen md:overflow-hidden">
      {/* Left side - only visible on desktop */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-600 to-blue-600 p-8 lg:p-12 flex-col justify-between overflow-hidden">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/favicon.png" alt="Swipebay logo" width={40} height={40} className="h-10 w-10 object-contain" />
            <span className="text-2xl font-semibold text-white">Swipebay</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mt-8 lg:mt-12">Welcome to Swipebay Admin</h1>
          <p className="text-purple-100 mt-3 lg:mt-4 max-w-md text-sm lg:text-base">
            Manage your website content, pricing, and settings from one central dashboard.
          </p>
        </div>
        <div className="mt-auto flex items-center justify-center pt-4">
          <Image
            src="/images/avatar18.png"
            alt="Swipebay Admin Character"
            width={506}
            height={622}
            className="w-auto h-auto max-h-[440px] lg:max-h-[490px] xl:max-h-[520px] object-contain drop-shadow-2xl transition-all"
            priority
          />
        </div>
      </div>

      {/* Right side - login form */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 md:overflow-y-auto">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 flex flex-col items-center">
            <Link
              href="/"
              className="mb-6 inline-flex items-center justify-center hover:opacity-85 transition-opacity"
              aria-label="Swipebay Homepage"
            >
              <Image
                src="/swipebaygrid.png"
                alt="Swipebay"
                width={160}
                height={40}
                className="h-9 sm:h-10 w-auto object-contain"
                priority
              />
            </Link>
            <h2 className="text-2xl font-bold text-white">Sign in to your account</h2>
            <p className="text-neutral-400 mt-2 text-sm">Enter your credentials to access the admin panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-lg flex items-center gap-3">
                <AlertCircle className="h-5 w-5" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-neutral-200">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@swipebay.net"
                className="bg-[#1a1a1a] border-neutral-800 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-neutral-200">
                  Password
                </Label>
                <button type="button" className="text-sm text-[#49CBDC] hover:underline">
                  Forgot password?
                </button>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-[#1a1a1a] border-neutral-800 text-white"
                required
              />
            </div>

            <Button type="submit" disabled={isLoading} className="w-full bg-[#49CBDC] text-black hover:bg-[#49CBDC]/90">
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-neutral-400 text-sm">
              Need help? Contact{" "}
              <a href="mailto:support@swipebay.net" className="text-[#49CBDC] hover:underline">
                support@swipebay.net
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
