import React from 'react';
import { ExternalLink, Github, Calendar, CheckCircle, AlertTriangle, Lightbulb, ThumbsUp, Globe, Code, Zap, Users, Heart, Clock } from 'lucide-react';
import Image from 'next/image';

export default function projectDiabetesCare() {
  const project = {
    overview: {
      title: "DiabetesCare Kenya",
      description:         "DiabetesCare Kenya is a comprehensive web-based platform designed to empower Kenyans with diabetes to better manage their condition through real-time monitoring, personalized insights, and AI-powered support.",
      image: "/assets/images/diabeteskenya.png",
      site: "https://diabetes-care-kenya.vercel.app/",
      status: "In Development",
      source: "https://github.com/ahmednule/coffee-hub",
      startDate: "2025-2",
    },
    features: [
        "Real-time diabetes monitoring and tracking capabilities.",
        "Personalized insights and AI-powered health recommendations.",
        "Comprehensive diabetes management tools and resources.",
        "User-friendly interface for easy health data input and tracking.",
        "Educational content about diabetes care and management.",
        "Progress tracking and health goal setting features.",
        "Integration with healthcare provider recommendations.",
        "Secure health data management and privacy protection.",
      ],
    techStack: [
      { alt: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { alt: "React.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { alt: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { alt: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { alt: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { alt: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    ],
    metrics: [
      { alt: "Performance", score: "91", icon: Zap },
      { alt: "Accessibility", score: "100", icon: Users },
      { alt: "Best Practices", score: "96", icon: CheckCircle },
      { alt: "SEO", score: "88", icon: Globe },
    ],
    caseStudy: [
      {
        title: "Problem",
        description:          "Diabetes management in Kenya faces significant challenges including limited access to specialized care, lack of continuous monitoring tools, and insufficient patient education. Many Kenyans with diabetes struggle to maintain proper blood sugar levels and track their health progress effectively.",
        icon: AlertTriangle,
        bgColor: "bg-red-900/20",
        borderColor: "border-red-500/30",
        iconColor: "text-red-400"
      },
      {
        title: "Solution",
        description:           "DiabetesCare Kenya provides a comprehensive digital platform that empowers users with real-time monitoring, AI-powered insights, and personalized diabetes management tools. The platform bridges the gap between patients and quality diabetes care through technology and education.",
        icon: Lightbulb,
        bgColor: "bg-yellow-900/20",
        borderColor: "border-yellow-500/30",
        iconColor: "text-yellow-400"
      },
      {
        title: "Outcome",
        description:"The platform empowers Kenyans with diabetes to take control of their health through better monitoring, education, and AI-powered insights. This leads to improved health outcomes, better diabetes management, and enhanced quality of life for users across Kenya.",
        icon: ThumbsUp,
        bgColor: "bg-green-900/20",
        borderColor: "border-green-500/30",
        iconColor: "text-green-400"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              DiabetesCare Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {project.overview.title}
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {project.overview.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={project.overview.site}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </a>
              <a
                href={project.overview.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-slate-700"
              >
                <Github className="w-5 h-5 mr-2" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Heart className="w-8 h-8 mr-3 text-purple-400" />
                Project Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 text-lg leading-relaxed">
                  {project.overview.description}
                </p>
                <div className="flex items-center mt-6 text-slate-400">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Started: November 2024</span>
                  <span className="mx-4">•</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                    <span>{project.overview.status}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="w-7 h-7 mr-3 text-green-400" />
                Key Features
              </h3>
              <div className="grid gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-purple-500/50 transition-all duration-200"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-slate-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="w-7 h-7 mr-3 text-blue-400" />
                Case Study
              </h3>
              {project.caseStudy.map((study, index) => (
                <div
                  key={index}
                  className={`${study.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${study.borderColor}`}
                >
                  <div className="flex items-center mb-4">
                    <study.icon className={`w-8 h-8 mr-3 ${study.iconColor}`} />
                    <h4 className="text-xl font-semibold text-white">{study.title}</h4>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{study.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Performance Metrics */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-yellow-400" />
                Performance Metrics
              </h3>
              <div className="space-y-4">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <metric.icon className="w-5 h-5 mr-2 text-slate-400" />
                        <span className="text-slate-300">{metric.alt}</span>
                      </div>
                      <span className="text-white font-semibold">{metric.score}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${metric.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Code className="w-6 h-6 mr-2 text-blue-400" />
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {project.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-purple-500/50 transition-all duration-200 hover:transform hover:scale-105"
                  >
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      className="w-10 h-10 mb-2"
                      width={900}
                      height={600}
                    />
                    <span className="text-slate-300 text-sm text-center">{tech.alt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Stats */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-green-400" />
                Project Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Status</span>
                  <span className="text-yellow-400 font-medium">{project.overview.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Started</span>
                  <span className="text-white">November 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Platform</span>
                  <span className="text-white">Web Application</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Type</span>
                  <span className="text-white">Mental Health Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience Mental Wellness?
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Explore the platform and see how technology can support mental health and well-being.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={project.overview.site}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Live Site
              </a>
              <a
                href={project.overview.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-slate-700"
              >
                <Github className="w-5 h-5 mr-2" />
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}