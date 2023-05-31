import styles from './page.module.scss';

export const rootNotFoundMetadata = {
  title: 'Not Found',
  description: "Sorry can't find the page you are looking for",
};

export default function RootNotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <p>
        ⛔️ Sorry this page was not found make sure you visit a page that exists
        ⛔️
      </p>
    </div>
  );
}
