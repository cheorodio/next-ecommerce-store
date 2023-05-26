import styles from './story.module.scss';

export const metadata = {
  title: { default: 'Vida | Handmade Jewellery' },
  description: 'Dedicated for best quality handmade jewellery',
};
export default function OurStoryPage() {
  return (
    <div className={styles.storyContainer}>
      <h1>Hi, this is our story page</h1>
      <p>🚧 it's under construction, please come back later 🚧</p>
    </div>
  );
}
