import { filterItemsByPrice, Item } from './filterItems'; 

describe('Filter Items by Price', () => {
    
    it('DEbe filtrar los elementos que son más baratos que el precio pasado', () => {
        // GIVEN
        const items: Item[] = [
            { name: 'Item 1', price: 10 },
            { name: 'Item 2', price: 20 },
            { name: 'Item 3', price: 5 },
            { name: 'Item 4', price: 15 },
        ];
        const priceMax = 15;

        // WHEN
        const filteredItems = filterItemsByPrice(items, priceMax);

        // THEN
        expect(filteredItems).toHaveLength(2); 
        expect(filteredItems.every(item => item.price < priceMax)).toBe(true);
    });

    it('Debe retornar un array vacío cuando ningñun precio cumple la condición', () => {
        // GIVEN
        const items: Item[] = [
            { name: 'Item 1', price: 25 },
            { name: 'Item 2', price: 30 },
            { name: 'Item 3', price: 22 },
        ];
        const priceMax = 20;

        // WHEN
        const filteredItems = filterItemsByPrice(items, priceMax);

        // THEN
        expect(filteredItems).toHaveLength(0); 
    });
});
