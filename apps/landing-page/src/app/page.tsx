import Text from '@hewo/ui/text';
import Image from 'next/image';

import styles from './styles.module.scss';

const Page = () => (
    <div className={styles.page}>
        <div className={styles.hero}>
            <Image
                src='/images/background.png'
                alt='Piirroskuva Minecraft-pelaajista yhteydessä toisiinsa Internetin välityksellä'
                width={1024}
                height={1024}
            />
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
    </div>
);

export default Page;
