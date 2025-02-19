import {Provider} from '@/components/ui/provider';
import {QuizProvider} from '@/context';
import type {Metadata} from 'next';
import {Rubik} from 'next/font/google';

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
            <body className={`bodycss ${rubikSerif.variable}`}>
                <Provider>
                    <QuizProvider>{children}</QuizProvider>
                </Provider>
            </body>
        </html>
    );
}
