import {
    Image,
    Tr,
    Td,
    Text,
    HStack
} from "@chakra-ui/react";

const RowCoin = ({ market_cap_rank, image, name, symbol, current_price, ath, price_change_percentage_24h, market_cap, market_cap_change_percentage_24h }) => {
    return (
        <Tr>
            <Td>{market_cap_rank}</Td>
            <Td>
                <HStack>
                    <Image
                        src={image}
                        boxSize="5" 
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
            <Td>${market_cap.toLocaleString()}</Td>
            <Td
                color={market_cap_change_percentage_24h > 0 ? "green.400" : "red.400"}
            >{market_cap_change_percentage_24h}</Td>
        </Tr>
    )
}

export default RowCoin