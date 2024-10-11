import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";
export interface Order {
  name: string;
  slug: string;
}

function SortOrderSelector() {
  const orders: Order[] = [
    { name: "Relevance", slug: "" },
    { name: "Date added", slug: "-added" },
    { name: "Name", slug: "name" },
    { name: "Release date", slug: "-released" },
    { name: "Popularity", slug: "-metacritic" },
    { name: "Average Rating", slug: "-rating" },
  ];
  const [selectedOrder, onSelectOrder] = useGameQueryStore((s) => [
    s.gameQuery.order,
    s.onSelectOrder,
  ]);
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
        Order by: {selectedOrder?.name || "Relevance"}
      </MenuButton>
      <MenuList>
        {orders.map((order) => {
          return (
            <MenuItem
              onClick={() => {
                onSelectOrder(order);
              }}
              key={order.name}
              value={order.slug}
            >
              {order.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default SortOrderSelector;
