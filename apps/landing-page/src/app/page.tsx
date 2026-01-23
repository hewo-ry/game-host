import Image from 'next/image';

import ServerMap from '@/components/map';

import styles from './styles.module.scss';

const Page = () => (
    <div className={styles.page}>
        <div className={styles.hero}>
            <div className={styles.image}>
                <Image
                    src='/images/background.png'
                    alt='Piirroskuva Minecraft-pelaajista yhteydessä toisiinsa Internetin välityksellä'
                    width={1024}
                    height={1024}
                />

                <div className={styles.dot1_a} />
                <div className={styles.dot1_b} />
                <div className={styles.dot1_c} />
                <div className={styles.dot1_d} />

                <div className={styles.dot2_a} />
                <div className={styles.dot2_b} />
                <div className={styles.dot2_c} />
                <div className={styles.dot2_d} />

                <div className={styles.dot3_a} />
                <div className={styles.dot3_b} />
                <div className={styles.dot3_c} />
                <div className={styles.dot3_d} />

                <div className={styles.dot4_a} />
                <div className={styles.dot4_b} />
                <div className={styles.dot4_c} />
                <div className={styles.dot4_d} />
            </div>
            <div className={styles.content}>
                <h1>Lag is over. Your blocky empire awaits</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum purus vitae justo
                    vulputate.
                </p>
                <button>
                    Launch server now
                    <span style={{ marginLeft: '10px' }}>→</span>
                </button>
            </div>
        </div>

        <ServerMap />
    </div>
);

export default Page;
