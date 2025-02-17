import Header from '@/components/shared/header';
import {Container} from '@chakra-ui/react';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Container padding={0}>
            <Header />
            {children}
        </Container>
    );
}
