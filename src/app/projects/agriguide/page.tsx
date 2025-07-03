import Image from "next/image";
import { ExternalLink, Github, Calendar, CheckCircle, AlertCircle, Lightbulb, ThumbsUp } from "lucide-react";

export default function ProjectAgriguide() {
  const project = {
    overview: {
      title: "AgriGuide",
      description:
        "Agriguide is an AI-driven platform designed to assist users in identifying diseases and pests affecting plants. By simply uploading an image of a plant, the system leverages AI models to analyze the image and provide accurate feedback on what type of disease or pest is impacting the plant.",
      image: "/public/assets/images/agriguide.png",
      site: "https://agriguide-sys.vercel.app/",
      status: "pending",
      source: "https://github.com/ahmednule/AgriGuide",
      startDate: "2024-06",
    },
    features: [
      "AI-powered plant disease and pest identification through image analysis.",
      "Instant feedback and diagnosis for plant health issues.",
      "User-friendly interface for easy image uploading and analysis.",
      "Comprehensive database of plant diseases and pests.",
      "Expert recommendations for treatment and prevention.",
      "Real-time analysis with high accuracy rates.",
      "Mobile-responsive design for field use.",
      "Secure image processing and data protection.",
    ],
    caseStudy: [
      {
        title: "Problem",
        icon: AlertCircle,
        bgColor: "bg-red-900",
        description:
          "Farmers and plant enthusiasts often struggle to identify diseases and pests affecting their crops and plants, leading to poor harvests and economic losses. Traditional identification methods require expert knowledge or costly consultations, making it difficult for small-scale farmers to access timely and accurate plant health diagnostics.",
      },
      {
        title: "Solution",
        icon: Lightbulb,
        bgColor: "bg-blue-600",
        description:
          "AgriGuide leverages cutting-edge AI and machine learning technologies to provide instant plant disease and pest identification through simple image uploads. The platform democratizes access to expert-level plant diagnostics, making it available to anyone with a smartphone or camera.",
      },
      {
        title: "Outcome",
        icon: ThumbsUp,
        bgColor: "bg-green-800",
        description:
          "AgriGuide empowers farmers and plant enthusiasts with instant, accurate plant health diagnostics, reducing crop losses and improving agricultural productivity. The platform bridges the gap between traditional farming and modern technology, making expert plant care accessible to everyone.",
      },
    ],
    techStack: [
      {
        alt: "Next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        alt: "React.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        alt: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        alt: "Python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        alt: "TensorFlow",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
      },
      {
        alt: "Tailwind CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
    metrics: [
      {
        alt: "Performance",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/rocket.png",
        score: "92",
      },
      {
        alt: "Accessibility",
        src: "https://img.icons8.com/ios-filled/50/cbd5e1/access-for-blind.png",
        score: "98",
      },
      {
        alt: "Best Practices",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/medal.png",
        score: "95",
      },
      {
        alt: "SEO",
        src: "https://img.icons8.com/ios-glyphs/30/cbd5e1/search--v1.png",
        score: "90",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {project.overview.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {project.overview.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href={project.overview.site}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
              <a
                href={project.overview.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Github size={20} />
                Source Code
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                Started: {project.overview.startDate}
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle size={16} />
                Status: {project.overview.status}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Image */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={project.overview.image}
              alt={project.overview.title}
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Technology Stack
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {project.techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
              >
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={48}
                  height={48}
                  className="w-12 h-12 mb-2"
                />
                <span className="text-sm text-gray-300 text-center">{tech.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Performance Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.metrics.map((metric, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg"
              >
                <Image
                  src={metric.src}
                  alt={metric.alt}
                  width={40}
                  height={40}
                  className="w-10 h-10 mb-3"
                />
                <div className="text-3xl font-bold text-green-400 mb-1">
                  {metric.score}
                </div>
                <div className="text-sm text-gray-400 text-center">
                  {metric.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg"
              >
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Case Study
          </h2>
          <div className="space-y-8">
            {project.caseStudy.map((study, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl ${study.bgColor}/20 border border-slate-700/50`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <study.icon className="text-white" size={24} />
                  <h3 className="text-2xl font-bold text-white">
                    {study.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {study.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Agriculture?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of plant health diagnostics with AgriGuide&pos;s AI-powered platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={project.overview.site}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <ExternalLink size={20} />
              Try AgriGuide Now
            </a>
            <a
              href={project.overview.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <Github size={20} />
              View Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}