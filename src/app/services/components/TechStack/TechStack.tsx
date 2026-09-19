import styles from './TechStack.module.css';

const TECH_CATEGORIES = [
  {
    title: 'Frontend',
    tools: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    tools: ['Node.js', 'Python', 'Go', 'Java', 'GraphQL']
  },
  {
    title: 'Database',
    tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
  },
  {
    title: 'Cloud',
    tools: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Vercel']
  },
  {
    title: 'DevOps & CI/CD',
    tools: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform']
  },
  {
    title: 'AI & Data',
    tools: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Apache Kafka']
  }
];

export default function TechStack() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.kicker}>Our Technology Stack</p>
        <h2 className={styles.title}>Tools we use to build.</h2>

        <div className={styles.grid}>
          {TECH_CATEGORIES.map((cat, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <div className={styles.tags}>
                {cat.tools.map((tool, idx) => (
                  <span key={idx} className={styles.tag}>{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
