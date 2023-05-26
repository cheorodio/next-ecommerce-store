import styles from './blog.module.scss';

export const metadata = {
  title: { default: 'Vida | Handmade Jewellery' },
  description: 'Dedicated for best quality handmade jewellery',
};
export default function BlogPage() {
  return (
    <div className={styles.blogContainer}>
      <h1>Hi, this is our blog page</h1>
      <p>🚧 it's under construction, please come back later 🚧</p>
    </div>
  );
}
