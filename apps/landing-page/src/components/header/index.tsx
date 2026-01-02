import Link from 'next/link';

import styles from './styles.module.scss';

const Header = () => (
    <header className={styles.header}>
        <nav>
            <Link href='/' className={styles.logo}>
                LOGO
            </Link>

            <ul className={styles.navbar}>
                <li>
                    Game Servers
                    <ul className={styles.submenu}>
                        <li>
                            <Link href='/game-servers/minecraft'>Minecraft</Link>
                        </li>
                        <li>
                            <Link href='/game-servers/hytale'>Hytale</Link>
                        </li>
                        <li>
                            <Link href='/game-servers/'>Browse all</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    Help
                    <ul className={styles.submenu}>
                        <li>
                            <a href='/help/guides'>Guides</a>
                        </li>
                        <li>
                            <a href='/help/faq'>FAQ</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
