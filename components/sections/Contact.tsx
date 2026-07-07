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

  const displayEmail = process.env.NEXT_PUBLIC_EMAIL || "sumayearahman7@gmail.com"

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
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl group-hover:scale-110 transition">
                    <Mail className="text-purple-600" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium">{displayEmail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl group-hover:scale-110 transition">
                    <Phone className="text-purple-600" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="font-medium">+880 1403224341</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl group-hover:scale-110 transition">
                    <MapPin className="text-purple-600" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl group-hover:scale-110 transition">
                    <MessageCircle className="text-purple-600" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">WhatsApp</p>
                    <p className="font-medium">+880 1403224341</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Connect with me</p>
                <div className="flex gap-3">
                  <a href="https://github.com/Sumayea104" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition hover:scale-110">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/sumayea-rahman" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition hover:scale-110">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://x.com/RahmanSuma22098" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition hover:scale-110">
                    <Twitter size={20} />
                  </a>
                  <a href={`mailto:${displayEmail}`} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition hover:scale-110">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-600 outline-none transition"
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
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-600 outline-none transition"
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
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-600 outline-none transition"
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
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-600 outline-none transition resize-none"
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
                  status === "success" ? "text-green-600" : 
                  status === "error" ? "text-red-600" : 
                  "text-gray-600"
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