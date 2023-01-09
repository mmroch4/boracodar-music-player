import './global.scss';
import styles from './layout.module.scss';
import { Providers } from './Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />

      <body>
        <header className={styles.header}>#boraCodar</header>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
