const NavBar = () => {
    return (
      <nav className="bg-red-800 py-4">
        <div className="mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex items-center w-4/2">
            <a href="/" className="ml-6 bg-orange-500 rounded p-1 text-gray-300 hover:text-white">
                Home
              </a>
              <a href="/cart" className="ml-6 bg-orange-500 rounded p-1 text-gray-300 hover:text-white">
                Cart
              </a>
              <a href="/inventory" className="ml-6 bg-orange-500 rounded p-1 text-gray-300 hover:text-white">
                Inventory
              </a>
              <a href="/sales" className="ml-6 bg-orange-500 rounded p-1 text-gray-300 hover:text-white">
                Sales
              </a>
              <a href="/add-product" className="ml-6 bg-orange-500 rounded p-1 text-blue-300 hover:text-white">
                Add Product
              </a>
            </div>
            <div className="flex items-center w-1/2 justify-center">
              <h2 className="text-white text-lg font-bold">RK PERFUMES</h2>
              <img className="w-[50px] h-[50px] mx-2" src="/inventoryLogo.png" alt="LOGO" />
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
export default NavBar;
  