import { TbBrandGithub, TbBrandLinkedin, TbExternalLink } from 'react-icons/tb';
import './global.scss';
import styles from './layout.module.scss';
import { Providers } from './Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />

      <body>
        <Providers>
          {children}

          <footer className={styles.footer}>
              <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer noopener">
                <TbBrandGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/miguelmartinsrocha"
                target="_blank"
                rel="noreferrer noopener"
              >
                <TbBrandLinkedin />
              </a>

              <a href="https://miguelrocha.dev" target="_blank" rel="noreferrer noopener">
                <TbExternalLink />
              </a>

              <a href="https://boracodar.dev" target="_blank" rel="noreferrer noopener">
                #boraCodar
              </a>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
