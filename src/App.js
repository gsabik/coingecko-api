import {
    Container,
    Flex,
    Heading
} from "@chakra-ui/react";
import TableCoins from "./components/TableCoins";

const App = () => {
    return (
        <Container
            maxW="container.xl"    
        >
            <Flex
                justifyContent="center"
                padding={6}
                w="full"
            >
                <Heading>CoinGecko API</Heading>
            </Flex>
            <TableCoins/>
        </Container>
    )
}

export default App