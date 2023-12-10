function filterItemsByPrice(items: Item[], price: number): Item[] {
    
    const filteredItems = items.filter(item => item.price < price)

    return filteredItems
}

interface Item {
  name: string;
  price: number;
}

export { filterItemsByPrice, Item };