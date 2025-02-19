import {Box, Flex} from '@chakra-ui/react';
import SubjectTile from '@/components/shared/subject-tile';

const subjects = [
    {
        name: 'HTML',
        imgSrc: 'images/icon-html.svg',
        bgColor: '#FFF1E9',
    },
    {
        name: 'CSS',
        imgSrc: 'images/icon-css.svg',
        bgColor: '#E0FDEF',
    },
    {
        name: 'Javascript',
        imgSrc: 'images/icon-js.svg',
        bgColor: '#EBF0FF',
    },
    {
        name: 'Accessibility',
        imgSrc: 'images/icon-accessibility.svg',
        bgColor: '#F6E7FF',
    },
];
export default function Home() {
    return (
        <Flex
            justify="space-between"
            flexDir={{base: 'column', lg: 'row'}}
            py={{base: '2rem', md: '40px', lg: '0'}}
            px={{base: '1.5rem', md: '64px', lg: '0'}}
            rowGap={{base: '40px', md: '64px'}}>
            <Box>
                <Box
                    as="h1"
                    textStyle="headingRegular"
                    color="darkNavy"
                    _dark={{color: 'white'}}>
                    Welcome to the
                </Box>
                <Box
                    as="h1"
                    textStyle="headingBold"
                    color="darkNavy"
                    mt="8px"
                    mb={{base: '1rem', lg: '48px'}}
                    _dark={{color: 'white'}}>
                    Frontend Quiz!
                </Box>
                <Box
                    as="p"
                    textStyle="bodyItalic"
                    color="greyNavy"
                    _dark={{color: 'lightBluish'}}>
                    Pick a subject to get started.
                </Box>
            </Box>

            <Flex flexDir="column" rowGap="12px">
                {subjects.map(({name, imgSrc, bgColor}) => (
                    <SubjectTile
                        key={name}
                        name={name}
                        src={imgSrc}
                        bgColor={bgColor}
                    />
                ))}
            </Flex>
        </Flex>
    );
}
