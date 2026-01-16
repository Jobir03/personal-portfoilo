export default function JSONLD() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Jobir Ashurov",
        url: "https://jobir-ashurov.uz",
        jobTitle: "Senior Frontend Developer",
        description: "Senior Frontend Developer and MERN Stack expert specializing in Next.js and React.",
        sameAs: [
            "https://github.com/jobirashurov", // Replace with real links
            "https://linkedin.com/in/jobirashurov",
            "https://twitter.com/jobirashurov"
        ],
        knowsAbout: ["React", "Next.js", "MERN Stack", "TypeScript", "Frontend Development", "Web Design"]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Jobir Ashurov Portfolio",
        url: "https://jobir-ashurov.uz",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, websiteSchema]) }}
        />
    );
}
