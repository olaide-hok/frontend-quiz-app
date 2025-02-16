import {Provider} from '@/components/ui/provider';
import type {Metadata} from 'next';
import {Rubik} from 'next/font/google';
// import '@/assets/styles/globals.css';

const rubikSerif = Rubik({
    variable: '--font-rubik-serif',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'A Frontend Quiz App',
    description: 'A frontend quiz app created with next app.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${rubikSerif.variable}`}>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
