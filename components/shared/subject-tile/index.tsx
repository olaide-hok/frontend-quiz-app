'use client';

import {Flex, Image} from '@chakra-ui/react';

interface SubjectTileProps {
    name: string;
    src: string;
}
const SubjectTile = ({name, src}: SubjectTileProps) => {
    return (
        <Flex
            as="button"
            columnGap="1rem"
            align="center"
            width="100%"
            onClick={() => console.log(name)}
            color="darkNavy"
            fontSize="18px"
            fontWeight="500"
            p="12px"
            borderRadius="12px"
            bgColor="white"
            shadow="0px 16px 40px 0px rgba(143, 160, 193, 0.14)">
            <Image src={src} alt={name} />
            {name}
        </Flex>
    );
};

export default SubjectTile;
