import { useState } from "react";
import ProductList from "./ProductList";
import { useInventory } from "../../context/InventoryContext";

export default function ProductCatalog() {
    const inventory = useInventory();
    const [searchQuery, setSearchQuery] = useState("")

    const filteredProducts = inventory.filter(
        (item) =>
            item.stock > 0 &&
            item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center p-1 mb-2 blue-400">
            <h1 className="mx-2 mt-1 font-bold text-2xl">Product Catalog</h1>
            <div className="m-2 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border hover:border-blue-400 p-2 rounded w-full"
                />
            </div>
            {filteredProducts.length > 0 ? (
                <ProductList products={filteredProducts} />
            ) : (
                <p className="m-2 text-blue-500">No products found.</p>
            )}
        </div>
    );
}
