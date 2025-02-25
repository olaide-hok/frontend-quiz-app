import Header from '@/components/shared/header';
import {Container} from '@chakra-ui/react';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Container
            // className="bodycss"
            role="header"
            maxW="1160px"
            padding={0}
            mt={{lg: '97px'}}
            display="flex"
            flexDir="column"
            rowGap={{lg: '99px'}}>
            <Header />
            {children}
        </Container>
    );
}
