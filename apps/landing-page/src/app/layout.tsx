import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';

import './globals.scss';
import styles from './styles.module.scss';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'TODO',
    description: 'TODO',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
    <html lang='en' className={inter.className}>
        <body className={styles.layout}>
            <div className={styles.container}>
                <Header />
                <main className={styles.content}>{children}</main>
                <Footer />
            </div>
        </body>
    </html>
);

export default RootLayout;
