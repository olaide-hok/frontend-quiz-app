'use client';

import {Flex, Image} from '@chakra-ui/react';

interface SubjectTileProps {
    name: string;
    src: string;
    bgColor: string;
}
const SubjectTile = ({name, src, bgColor}: SubjectTileProps) => {
    return (
        <Flex
            as="button"
            columnGap={{base: '1rem', lg: '2rem'}}
            align="center"
            onClick={() => console.log(name)}
            color="darkNavy"
            fontSize="18px"
            fontWeight="500"
            p={{base: '12px', lg: '20px'}}
            borderRadius="12px"
            bgColor="white"
            shadow="0px 16px 40px 0px rgba(143, 160, 193, 0.14)"
            _hover={{cursor: 'pointer'}}
            width={{base: '100%', lg: '564px'}}>
            <Image
                src={src}
                alt={name}
                bgColor={bgColor}
                width={{base: '40px', lg: '56px'}}
                height={{base: '40px', lg: '56px'}}
                borderRadius="6px"
                padding="5.71px"
            />
            {name}
        </Flex>
    );
};

export default SubjectTile;
