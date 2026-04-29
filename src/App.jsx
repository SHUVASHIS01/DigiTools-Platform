import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [activeTab, setActiveTab] = useState('products') // 'products' or 'cart'

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err))
  }, [])

  const handleAddToCart = (product) => {
    setCart([...cart, product])
    toast.success(`${product.name} added to cart!`)
  }

  const handleRemoveFromCart = (indexToRemove) => {
    const removedItem = cart[indexToRemove]
    const updatedCart = cart.filter((_, index) => index !== indexToRemove)
    setCart(updatedCart)
    toast.info(`${removedItem.name} removed from cart.`)
  }

  const handleCheckout = () => {
    setCart([])
    toast.success("Checkout successful! Cart cleared.")
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <ToastContainer position="bottom-right" autoClose={3000} />
      
      {/* Navbar Placeholder */}
      <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">DigiTools</div>
        <div>Cart ({cart.length})</div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-4 mb-8">
          <button 
            className={`btn rounded-full px-8 ${activeTab === 'products' ? 'btn-primary' : 'btn-outline border-gray-300 text-gray-600 hover:border-primary hover:text-primary'}`}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
          <button 
            className={`btn rounded-full px-8 ${activeTab === 'cart' ? 'btn-primary' : 'btn-outline border-gray-300 text-gray-600 hover:border-primary hover:text-primary'}`}
            onClick={() => setActiveTab('cart')}
          >
            Cart ({cart.length})
          </button>
        </div>

        {activeTab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="card bg-base-100 shadow-xl border border-gray-100">
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>{product.description}</p>
                  <div className="card-actions justify-end mt-4">
                    <button 
                      className="btn btn-primary w-full"
                      onClick={() => handleAddToCart(product)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'cart' && (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty.</p>
            ) : (
              <div>
                <div className="space-y-4 mb-6">
                  {cart.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-4">
                        {item.icon && <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain" />}
                        <span className="font-semibold">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="font-medium text-gray-600">{item.price}</span>
                        <button 
                          className="text-red-500 hover:text-red-700 font-medium text-sm"
                          onClick={() => handleRemoveFromCart(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center border-t border-gray-100 pt-6 mb-6">
                  <span className="font-semibold text-gray-500">Total</span>
                  <span className="text-xl font-bold">
                    ${cart.reduce((total, item) => total + parseInt(item.price.replace('$', '')), 0)}
                  </span>
                </div>
                <button 
                  className="btn btn-primary w-full"
                  onClick={handleCheckout}
                >
                  Proceed To Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
