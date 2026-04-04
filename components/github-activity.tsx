"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, Users, Star, BookOpen, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface GitHubData {
  public_repos: number
  followers: number
  following: number
  created_at: string
  name: string
}

const fallbackData: GitHubData = {
  public_repos: 80,
  followers: 49,
  following: 14,
  created_at: "2023-05-07T08:22:47Z",
  name: "Ahmed Nule",
}

export function GitHubActivity() {
  const [data, setData] = useState<GitHubData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.github.com/users/ahmednule")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch")
        return res.json()
      })
      .then((json) => {
        setData(json)
        setLoading(false)
      })
      .catch(() => {
        setData(fallbackData)
        setLoading(false)
      })
  }, [])

  const stats = data || fallbackData
  const joinDate = new Date(stats.created_at).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })

  const githubStats = [
    { label: "Public Repos", value: stats.public_repos, icon: BookOpen },
    { label: "Followers", value: stats.followers, icon: Users },
    { label: "Following", value: stats.following, icon: Star },
    { label: "Since", value: joinDate, icon: Calendar },
  ]

  return (
    <section className="px-6 py-24 lg:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            GitHub Presence
          </h2>
          <p className="text-muted-foreground">
            My open-source footprint on GitHub
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl border border-border p-6 animate-pulse"
              >
                <div className="w-10 h-10 rounded-xl bg-muted mb-4" />
                <div className="h-6 w-16 bg-muted rounded mb-2" />
                <div className="h-4 w-24 bg-muted rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {githubStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-card rounded-2xl border border-border p-6 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com/ahmednule" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View GitHub Profile
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
