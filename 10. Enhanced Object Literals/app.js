function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle: function(title) {
            return this.inventory.find(book => book.title === title);
        }
    }
} 

const inventory = [
    {title: 'Harry Potter', price:10},
    {title: 'Eloquent Javascript', price:5}
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');