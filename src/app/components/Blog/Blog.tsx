import styles from './Blog.module.css';
import { BlogData } from '@/types/cms';
import { getMediaUrl } from '@/lib/cms';

interface BlogProps {
  data?: BlogData;
}

export default function Blog({ data }: BlogProps) {
  const kicker = data?.kicker || 'Latest Insights';
  const title = data?.title || 'Engineering blog.';

  const defaultPosts = [
    {
      title: 'Microservices vs Monoliths: When to Transition',
      date: 'Oct 12, 2026',
      imageUrl: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1bbe4b441.jpg?format=avif',
      link: '#',
    },
    {
      title: 'Securing Cloud Infrastructure in 2026',
      date: 'Sep 28, 2026',
      imageUrl: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1bbe4b445.jpg?format=avif',
      link: '#',
    },
    {
      title: 'The Future of Edge Computing in Retail',
      date: 'Sep 15, 2026',
      imageUrl: 'https://files.cdn-files-a.com/uploads/12396961/800_gi-6aae1bbe4b44a.jpg?format=avif',
      link: '#',
    },
  ];

  const posts = data?.posts && data.posts.length > 0 ? data.posts : defaultPosts;

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p className={styles.kicker}>{kicker}</p>
            <h2 className={styles.title}>{title}</h2>
          </div>
        </div>

        <div className={styles.grid}>
          {posts.map((post, i) => {
            const cmsImg = 'image' in post && post.image ? getMediaUrl(post.image) : null;
            const imgSrc =
              cmsImg ||
              ('imageUrl' in post && post.imageUrl ? post.imageUrl : null) ||
              ('image' in post && typeof post.image === 'string' ? post.image : null) ||
              defaultPosts[i % defaultPosts.length].imageUrl;

            return (
              <a key={i} href={post.link || '#'} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img
                    alt={post.title}
                    className={styles.image}
                    src={imgSrc}
                  />
                </div>
                <div className={styles.content}>
                  <p className={styles.date}>{post.date || 'Recent'}</p>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
