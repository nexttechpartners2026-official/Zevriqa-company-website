import styles from './Tools.module.css';

export default function Tools() {
  const tools = [
    'React', 'Node.js', 'Python', 'Go', 'AWS', 'Google Cloud',
    'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'GraphQL', 'TypeScript'
  ];

  return (
    <section className={styles.toolsSection}>
      <div className={styles.container}>
        <p className={styles.kicker}>Technology Stack</p>
        <h2 className={styles.title}>Modern tools for modern problems.</h2>
        
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
