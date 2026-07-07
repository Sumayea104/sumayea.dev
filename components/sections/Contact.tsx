"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setStatusMessage("Sending...")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setStatusMessage("✅ Message sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => {
          setStatus("idle")
          setStatusMessage("")
        }, 5000)
      } else {
        setStatus("error")
        setStatusMessage(data.error || "❌ Failed to send. Please try again.")
      }
    } catch (error) {
      console.error("Contact error:", error)
      setStatus("error")
      setStatusMessage("❌ Network error. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        {/* Two Equal Columns */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          
          {/* Left Side - Contact Info */}
          <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Let's Connect
            </h3>
            
            {/* ✅ Icons - Now Bright & Visible */}
            <div className="space-y-4 md:space-y-5">
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl group-hover:scale-110 transition flex-shrink-0 border border-purple-200/50 dark:border-purple-800/30">
                  <Mail className="text-purple-600 dark:text-purple-400" size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 break-all">
                    sumayearahman7@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl group-hover:scale-110 transition flex-shrink-0 border border-emerald-200/50 dark:border-emerald-800/30">
                  <Phone className="text-emerald-600 dark:text-emerald-400" size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">
                    +880 1403224341
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl group-hover:scale-110 transition flex-shrink-0 border border-blue-200/50 dark:border-blue-800/30">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl group-hover:scale-110 transition flex-shrink-0 border border-green-200/50 dark:border-green-800/30">
                  <MessageCircle className="text-green-600 dark:text-green-400" size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">WhatsApp</p>
                  <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">
                    +880 1403224341
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links - Brighter */}
            <div className="mt-6 md:mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Connect with me</p>
              <div className="flex gap-3">
                <a href="https://github.com/Sumayea104" target="_blank" rel="noopener noreferrer" 
                  className="p-2.5 bg-gray-200/80 dark:bg-gray-800/80 rounded-xl hover:bg-purple-200 dark:hover:bg-purple-900/40 transition hover:scale-110">
                  <Github size={20} className="text-gray-800 dark:text-gray-200" />
                </a>
                <a href="https://www.linkedin.com/in/sumayea-rahman" target="_blank" rel="noopener noreferrer" 
                  className="p-2.5 bg-gray-200/80 dark:bg-gray-800/80 rounded-xl hover:bg-purple-200 dark:hover:bg-purple-900/40 transition hover:scale-110">
                  <Linkedin size={20} className="text-gray-800 dark:text-gray-200" />
                </a>
                <a href="https://x.com/RahmanSuma22098" target="_blank" rel="noopener noreferrer" 
                  className="p-2.5 bg-gray-200/80 dark:bg-gray-800/80 rounded-xl hover:bg-purple-200 dark:hover:bg-purple-900/40 transition hover:scale-110">
                  <Twitter size={20} className="text-gray-800 dark:text-gray-200" />
                </a>
                <a href="mailto:sumayearahman7@gmail.com" 
                  className="p-2.5 bg-gray-200/80 dark:bg-gray-800/80 rounded-xl hover:bg-purple-200 dark:hover:bg-purple-900/40 transition hover:scale-110">
                  <Mail size={20} className="text-gray-800 dark:text-gray-200" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={status === "loading"}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={status === "loading"}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  disabled={status === "loading"}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={status === "loading"}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:scale-[1.02] transition shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {statusMessage && (
                <p className={`text-center text-sm ${
                  status === "success" ? "text-green-600 dark:text-green-400" : 
                  status === "error" ? "text-red-600 dark:text-red-400" : 
                  "text-gray-600 dark:text-gray-400"
                }`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}