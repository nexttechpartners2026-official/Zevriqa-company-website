import styles from './page.module.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import Cta from '../components/Cta/Cta';
import CategoryBlock from './components/CategoryBlock/CategoryBlock';

const WORKS_DATA = [
  {
    title: "Cloud Architecture",
    items: [
      {
        id: 1,
        title: "Global Payment Gateway",
        desc: "Architected a highly scalable, multi-region microservices environment to handle massive transaction volumes.",
        tags: ["AWS", "MICROSERVICES"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 2,
        title: "Data Lake Migration",
        desc: "Migrated petabytes of enterprise data to a highly available cloud storage infrastructure with zero downtime.",
        tags: ["GCP", "DATA"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 3,
        title: "Serverless Infrastructure",
        desc: "Built a fully serverless backend for real-time analytics, processing millions of events per second.",
        tags: ["AWS LAMBDA", "NODEJS"],
        image: "https://images.unsplash.com/photo-1614064641913-6b71f3016345?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 4,
        title: "Multi-Region Setup",
        desc: "Designed high availability multi-region deployment systems with automated failover and disaster recovery.",
        tags: ["AZURE", "DOCKER"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 101,
        title: "Edge Compute Network",
        desc: "Deployed distributed edge computing nodes to reduce latency for global IoT endpoints by 40%.",
        tags: ["AWS GREENGRASS", "IOT"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    title: "Web Development",
    items: [
      {
        id: 5,
        title: "Telemedicine Platform",
        desc: "Developed an end-to-end HIPAA compliant video consultation and patient records system.",
        tags: ["REACT", "WEBRTC"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 6,
        title: "LMS Portal",
        desc: "Interactive learning management system supporting over 100,000 concurrent students globally.",
        tags: ["NEXT.JS", "TYPESCRIPT"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 7,
        title: "Headless Commerce",
        desc: "High-performance e-commerce storefront integrated with a flexible headless CMS.",
        tags: ["SHOPIFY", "VUE"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 8,
        title: "Analytics Dashboard",
        desc: "Real-time financial data reporting and portfolio management dashboard for wealth advisors.",
        tags: ["D3.JS", "REACT"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 105,
        title: "Real Estate Marketplace",
        desc: "Built a high-traffic property listing platform with advanced geographic search and virtual tours.",
        tags: ["REACT", "MAPBOX"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    title: "Systems Integration",
    items: [
      {
        id: 9,
        title: "Omnichannel ERP",
        desc: "Unified inventory and sales data across 500+ physical stores and e-commerce storefronts.",
        tags: ["ERP", "API"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 10,
        title: "Supply Chain Sync",
        desc: "Real-time logistics tracking integration connecting legacy warehouse systems with modern apps.",
        tags: ["LOGISTICS", "IOT"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 11,
        title: "HRIS Data Migration",
        desc: "Seamless migration and ongoing sync for enterprise global employee HR records.",
        tags: ["HRIS", "DATA"],
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 12,
        title: "CRM Automation Flow",
        desc: "Unified marketing and sales data via custom bi-directional API integrations.",
        tags: ["SALESFORCE", "CRM"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 109,
        title: "Legacy System Gateway",
        desc: "Created a modern GraphQL layer over a 20-year-old mainframe database.",
        tags: ["GRAPHQL", "MAINFRAME"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    title: "Cybersecurity",
    items: [
      {
        id: 13,
        title: "Zero-Trust Network",
        desc: "Designed and implemented a zero-trust architecture to secure distributed global teams.",
        tags: ["SECURITY", "NETWORKING"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 14,
        title: "Penetration Testing",
        desc: "Comprehensive vulnerability and patching for a major online banking institution.",
        tags: ["PENTEST", "FINANCE"],
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 15,
        title: "Compliance Infrastructure",
        desc: "Upgraded data storage workflows to guarantee strict HIPAA and GDPR compliance mandates.",
        tags: ["HIPAA", "COMPLIANCE"],
        image: "https://images.unsplash.com/photo-1614064642236-40742f10b777?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 16,
        title: "Active Threat Monitoring",
        desc: "Implemented a 24/7 SIEM setup for threat detection and automated response.",
        tags: ["MONITORING", "AI"],
        image: "https://images.unsplash.com/photo-1510511459019-5d67af7c46a6?q=80&w=800&auto=format&fit=crop"
      },
      {
        id: 113,
        title: "Secure Identity Access",
        desc: "Deployed enterprise-wide Okta SSO with advanced conditional access policies.",
        tags: ["OKTA", "IAM"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
      }
    ]
  }
];

export default function WorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroOrbLeft}></div>
          <div className={styles.heroOrbRight}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our Works</h1>
            <p className={styles.heroDesc}>
              Explore how we've helped leading businesses scale, secure, and innovate with cutting-edge infrastructure.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            {WORKS_DATA.map((category, catIndex) => (
              <CategoryBlock key={catIndex} title={category.title} items={category.items} />
            ))}
          </div>
        </section>
      </main>
      <Cta />
      <Footer />
    </>
  );
}
