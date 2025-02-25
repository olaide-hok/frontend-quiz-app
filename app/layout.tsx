import {Provider} from '@/components/ui/provider';
import {QuizProvider} from '@/context';
import type {Metadata} from 'next';
import localFont from 'next/font/local';

const rubik = localFont({
    src: [
        {
            path: '../assets/fonts/Rubik-Italic-VariableFont_wght.ttf',
            style: 'italic',
        },
        {
            path: '../assets/fonts/Rubik-VariableFont_wght.ttf',
            style: 'normal',
        },
    ],
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
            <body className={`bodycss ${rubik.className}`}>
                <Provider>
                    <QuizProvider>{children}</QuizProvider>
                </Provider>
            </body>
        </html>
    );
}
