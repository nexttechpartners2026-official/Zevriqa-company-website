import styles from './TechStack.module.css';
import { TechStackData, TechCategoryItem } from '@/types/cms';

const DEFAULT_CATEGORIES: TechCategoryItem[] = [
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

interface TechStackProps {
  data?: TechStackData;
}

export default function TechStack({ data }: TechStackProps) {
  const kicker = data?.kicker || 'Our Technology Stack';
  const title = data?.title || 'Tools we use to build.';
  const categories = data?.categories && data.categories.length > 0 ? data.categories : DEFAULT_CATEGORIES;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.kicker}>{kicker}</p>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.grid}>
          {categories.map((cat, index) => {
            const toolsList = (cat.tools || []).map((t) => (typeof t === 'string' ? t : t.name));
            return (
              <div key={cat.id || index} className={styles.card}>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
                <div className={styles.tags}>
                  {toolsList.map((tool, idx) => (
                    <span key={idx} className={styles.tag}>{tool}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
