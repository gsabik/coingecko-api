import {
    Container, 
    Flex,
    Input,
    Table,
    Thead, 
    Tbody,
    Tr,
    Th,
    TableContainer,
    Heading
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import RowCoin from "./RowCoin";

const TableCoins = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => res.json())
            .then(data => {
                setCoins(data)
            })
            .catch(err => console.log(err))
            .finally(
                setLoading(false)
            );
    }, [])

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()));

    if (loading) {
        return <Loader/>
    }

    return (
        <Container maxW="container.xl" pt={6}>
            <Flex 
                justifyContent="center"
                pb={6}
                w="full"
            >
                <Heading>CoinGecko API</Heading>
            </Flex>
            <Input
                mx={8}
                onChange={handleInputChange}
                placeholder="Search"
                textAlign="center"
                type="text"
            />
            <TableContainer p={6}>
                <Table variant="striped" colorScheme="gray">
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Coin</Th>
                            <Th>Price</Th>
                            <Th>ATH</Th>
                            <Th>Price Change 24hs</Th>
                            <Th>Cap. Change 24hs</Th>
                            <Th>Details</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            filteredCoins.map(coin => (
                                <RowCoin
                                    key={coin.id}
                                    {...coin}
                                />
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default TableCoins