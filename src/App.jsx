import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FiCheck } from 'react-icons/fi'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Cta from './components/Cta'
import Footer from './components/Footer'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [activeTab, setActiveTab] = useState('products')

  useEffect(() => {
    fetch('/products.json')
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

  const getTagColor = (type) => {
    switch(type) {
      case 'warning': return 'bg-orange-100 text-orange-600'
      case 'success': return 'bg-green-100 text-green-600'
      case 'secondary': return 'bg-purple-100 text-purple-600'
      default: return 'bg-gray-100 text-gray-600'
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Navbar cartCount={cart.length} />
      
      <main className="flex-grow">
        <Banner />
        <Stats />

        <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="border-2 border-dotted border-blue-400 p-8 rounded-xl mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Premium Digital Tools</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
              </p>
            </div>

            <div className="flex justify-center items-center gap-2 bg-white rounded-full p-1 w-max mx-auto border border-gray-200 shadow-sm">
              <button 
                className={`px-8 py-2 rounded-full font-medium transition-all ${activeTab === 'products' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-gray-900 bg-transparent'}`}
                onClick={() => setActiveTab('products')}
              >
                Products
              </button>
              <button 
                className={`px-8 py-2 rounded-full font-medium transition-all ${activeTab === 'cart' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-gray-900 bg-transparent'}`}
                onClick={() => setActiveTab('cart')}
              >
                Cart ({cart.length})
              </button>
            </div>
          </div>

          {activeTab === 'products' && (
            <div className="border-2 border-dotted border-blue-400 p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map(product => (
                  <div key={product.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                        {product.icon ? <img src={product.icon} alt={product.name} className="w-8 h-8 object-contain" /> : <div className="w-8 h-8 bg-gray-200 rounded-full"></div>}
                      </div>
                      {product.tag && (
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTagColor(product.tagType)}`}>
                          {product.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">{product.description}</p>
                    
                    <div className="flex items-baseline mb-6">
                      <span className="text-3xl font-extrabold text-gray-900">{product.price}</span>
                      <span className="text-gray-500 text-sm font-medium">{product.period}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {product.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                          <FiCheck className="text-green-500 text-lg flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button 
                      className={`w-full py-3 rounded-xl font-medium transition-colors mt-auto ${cart.some(item => item.id === product.id) ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-primary text-white hover:bg-primary-focus'}`}
                      onClick={() => handleAddToCart(product)}
                      disabled={cart.some(item => item.id === product.id)}
                    >
                      {cart.some(item => item.id === product.id) ? 'Added to cart' : 'Buy Now'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'cart' && (
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Your Cart</h3>
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">Your cart is empty.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-sm flex-shrink-0">
                          {item.icon && <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <span className="text-sm text-gray-500 block sm:hidden">{item.price}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                        <span className="font-medium text-gray-600 hidden sm:block">{item.price}</span>
                        <button 
                          className="text-red-500 hover:text-red-700 font-medium text-sm transition-colors"
                          onClick={() => handleRemoveFromCart(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex justify-between items-center border-t border-gray-200 pt-6 mt-6">
                    <span className="font-semibold text-gray-500 text-lg">Total</span>
                    <span className="text-2xl font-bold text-gray-900">
                      ${cart.reduce((total, item) => total + parseInt(item.price.replace('$', '')), 0)}
                    </span>
                  </div>
                  
                  <button 
                    className="w-full py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary-focus transition-colors text-lg shadow-lg shadow-primary/30 mt-8"
                    onClick={handleCheckout}
                  >
                    Proceed To Checkout
                  </button>
                </div>
              )}
            </div>
          )}
        </section>

        <Steps />
        <Pricing />
        <Cta />
      </main>

      <Footer />
    </div>
  )
}

export default App
