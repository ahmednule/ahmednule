import Script from "next/script";

export default function PersonSchema() {
  return (
    <Script id="schema-person" type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ahmed Nule",
          "url": "https://ahmednule.vercel.app",
          "jobTitle": "Software Engineer",
          "sameAs": [
            "https://www.linkedin.com/in/ahmednule",
            "https://www.github.com/ahmednule"
          ],
          "knowsAbout": ["React", "Next.js", "JavaScript", "TypeScript", "UI/UX Design", "Tailwind CSS", "Web Development", "Front-end Development"],
          "description": "Modern, experienced Software Engineer creating beautiful, high-performance, responsive web applications.",
          "contactPoint": {
            "@type": "ContactPoint",
            "url": "https://ahmednule.vercel.app/contact",
            "contactType": "professional"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "The Nairobi National Poly"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://ahmednule.vercel.app"
          }
        }
      `}
    </Script>
  );
}