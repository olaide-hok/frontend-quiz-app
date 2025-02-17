import {Box, Flex} from '@chakra-ui/react';
import SubjectTile from '@/components/shared/subject-tile';

const subjects = [
    {
        name: 'HTML',
        imgSrc: 'images/icon-html.svg',
    },
    {
        name: 'CSS',
        imgSrc: 'images/icon-css.svg',
    },
    {
        name: 'Javascript',
        imgSrc: 'images/icon-js.svg',
    },
    {
        name: 'Accessibility',
        imgSrc: 'images/icon-accessibility.svg',
    },
];
export default function Home() {
    return (
        <Flex
            justify="space-between"
            flexDir="column"
            py={{base: '2rem', md: '40px', lg: '0'}}
            px={{base: '1.5rem', md: '64px', lg: '0'}}
            rowGap="40px">
            <Box>
                <Box as="h1" textStyle="headingRegular" color="darkNavy">
                    Welcome to the
                </Box>
                <Box
                    as="h1"
                    textStyle="headingBold"
                    color="darkNavy"
                    mt="8px"
                    mb="1rem">
                    Frontend Quiz!
                </Box>
                <Box as="p" textStyle="bodyItalic" color="greyNavy">
                    Pick a subject to get started.
                </Box>
            </Box>

            <Flex flexDir="column" rowGap="12px">
                {subjects.map(({name, imgSrc}) => (
                    <SubjectTile key={name} name={name} src={imgSrc} />
                ))}
            </Flex>
        </Flex>
    );
}
