import {
    Box,
    Button,
    Image,
    Tr,
    Td,
    Text,
    HStack,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    VStack,
    ModalFooter,
} from "@chakra-ui/react";

const RowCoin = ({ 
    ath, 
    current_price, 
    circulating_supply,
    high_24h, 
    image, 
    low_24h, 
    market_cap_rank, 
    market_cap, 
    market_cap_change_percentage_24h, 
    name, 
    price_change_percentage_24h, 
    symbol, 
    total_volume
}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <Tr>
            <Td>{market_cap_rank}</Td>
            <Td>
                <HStack>
                    <Image
                        boxSize="5"
                        src={image}
                    />
                    <Text fontWeight="semibold">{name}</Text>
                    <Text color="gray.500">{symbol.toUpperCase()}</Text>
                </HStack>
            </Td>
            <Td>${current_price.toLocaleString()}</Td>
            <Td>${ath.toLocaleString()}</Td>
            <Td
                color={price_change_percentage_24h > 0 ? "green.400" : "red.400"}
                >{price_change_percentage_24h}</Td>
            <Td
                color={market_cap_change_percentage_24h > 0 ? "green.400" : "red.400"}
            >{market_cap_change_percentage_24h}</Td>
            <Td>
                <Button size="sm" onClick={onOpen}>More</Button>

                {/* Modal */}

                <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>
                        <HStack>
                            <Box
                                bgColor="gray.100"
                                display="flex"
                                justifyContent="center"
                                rounded="md"
                                w="full"
                            >
                                <Text
                                    as="span"
                                    >Rank #{market_cap_rank}</Text>
                            </Box>
                        </HStack>
                    </ModalHeader>
                    <ModalBody>
                        <VStack
                            alignItems="flex-start"
                            pb={4}
                            spacing={6}
                        >
                            <Text fontWeight="semibold">Total volume:
                                <Text as="span" fontWeight="normal"> ${total_volume.toLocaleString()}</Text>
                            </Text>
                            <Text fontWeight="semibold">Market capitalization:
                                <Text as="span" fontWeight="normal"> ${market_cap.toLocaleString()}</Text>
                            </Text>
                            <Text fontWeight="semibold">Circulating supply:
                                <Text as="span" fontWeight="normal"> ${circulating_supply.toLocaleString()}</Text>
                            </Text>
                            <HStack
                                border="2px" 
                                borderColor="gray.300" 
                                rounded="md"
                                w="full" 
                                >
                                <VStack w="full" py={2}>
                                    <Text fontWeight="semibold">Min and max of the last 24hs</Text>
                                    <HStack
                                        justifyContent="space-around"
                                        w="full"
                                    >
                                        <Text color="red.400">${low_24h.toLocaleString()}</Text>
                                        <Text color="green.400">${high_24h.toLocaleString()}</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <HStack w="full" justifyContent="center">
                            <Button alignItems="center" onClick={onClose}>Close</Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
                </Modal>
            </Td>
        </Tr>
    )
}

export default RowCoin