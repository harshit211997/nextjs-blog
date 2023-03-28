import Link from 'next/link';
import styles from './header.module.css'

const path = [
  { uid: 21, name: ' Home', id: 1, path: '/' },
  { uid: 31, name: 'Blog', id: 2, path: 'Blog' },
  { uid: 41, name: 'About', id: 3, path: 'About' }
];
export default function Header() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {path.map((value) => {
          return (
            <li key={value.uid}>
              <Link className={styles.link} href={value.path}>{value.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
