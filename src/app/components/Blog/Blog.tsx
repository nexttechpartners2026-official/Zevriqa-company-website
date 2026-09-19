import styles from './Blog.module.css';

export default function Blog() {
  const posts = [
    {
      title: 'Microservices vs Monoliths: When to Transition',
      date: 'Oct 12, 2026',
      image: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1bbe4b441.jpg?format=avif',
    },
    {
      title: 'Securing Cloud Infrastructure in 2026',
      date: 'Sep 28, 2026',
      image: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1bbe4b445.jpg?format=avif',
    },
    {
      title: 'The Future of Edge Computing in Retail',
      date: 'Sep 15, 2026',
      image: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1bbe4b44a.jpg?format=avif',
    },
  ];

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p className={styles.kicker}>Latest Insights</p>
            <h2 className={styles.title}>Engineering blog.</h2>
          </div>
        </div>
        
        <div className={styles.grid}>
          {posts.map((post, i) => (
            <a key={i} href="#" className={styles.card}>
              <div className={styles.imageWrapper}>
                <img 
                  alt={post.title}
                  className={styles.image}
                  src={post.image}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.date}>{post.date}</p>
                <h3 className={styles.cardTitle}>{post.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
