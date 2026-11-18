import styles from './Tools.module.css';
import { ToolsData } from '@/types/cms';

interface ToolsProps {
  data?: ToolsData;
}

export default function Tools({ data }: ToolsProps) {
  const kicker = data?.kicker || 'Technology Stack';
  const title = data?.title || 'Modern tools for modern problems.';

  const defaultTools = [
    'React', 'Node.js', 'Next.js', 'TypeScript', 'AWS', 'Google Cloud',
    'Docker', 'Oracle DB', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Express.js',
  ];

  const tools =
    data?.items && data.items.length > 0
      ? data.items.map((item) => (typeof item === 'string' ? item : item.name))
      : defaultTools;

  return (
    <section className={styles.toolsSection}>
      <div className={styles.container}>
        <p className={styles.kicker}>{kicker}</p>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.tags}>
          {tools.map((tool, index) => (
            <span key={index} className={styles.tag}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
