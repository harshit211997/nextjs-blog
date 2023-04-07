import Link from 'next/link';
import styles from './header.module.css'

const path = [
  { uid: 21, name: 'Home', id: 1, path: '/' },
  { uid: 31, name: 'About', id: 2, path: 'about' },
  { uid: 41, name: 'Contact', id: 3, path: 'contact' }
];
export default function Header() {
  return (
    <div className={`${styles.container}`}>
      <ul className={styles.list}>
        {path.map((value) => {
          return (
            <li key={value.uid}>
              <Link className={`nav-link px-3`} href={value.path}>{value.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
