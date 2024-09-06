import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/cart.jsx'
import Cart from './Cart.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Products() {
  const [showModal, setshowModal] = useState(false);
  const [products, setProducts] = useState([])
  const { cartItems, addToCart , removeFromCart} = useContext(CartContext)

  const toggle = () => {
    setshowModal(!showModal);
  };

  // async function getProducts() {
  //   const response = await fetch('https://dummyjson.com/products')
  //   const data = await response.json()
  //   setProducts(data.products)
  // }
  async function getProducts() {
    const response = await fetch('public/transformed_products.json'); // Adjust the path if necessary
    const data = await response.json();
    setProducts(data); // Assuming the JSON data structure matches your needs
}

  const Product=[
    {
        category: "Air Purifying Plants",
        plants: [
            {
                name: "Snake Plant",
                image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                description: "Produces oxygen at night, improving air quality.",
                cost: "$15",
                clicked:false
            },
            {
                name: "Spider Plant",
                image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                description: "Filters formaldehyde and xylene from the air.",
                cost: "$12",
                clicked:false

            },
            {
                name: "Peace Lily",
                image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                description: "Removes mold spores and purifies the air.",
                cost: "$18",
                clicked:false
            },
            {
                name: "Boston Fern",
                image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                description: "Adds humidity to the air and removes toxins.",
                cost: "$20",
                clicked:false
            },
            {
                name: "Rubber Plant",
                image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                description: "Easy to care for and effective at removing toxins.",
                cost: "$17",
                clicked:false
            },
            {
                name: "Aloe Vera",
                image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                description: "Purifies the air and has healing properties for skin.",
                cost: "$14",
                clicked:false
            }
        ]
    },
    {
        category: "Aromatic Fragrant Plants",
        plants: [
            {
                name: "Lavender",
                image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Calming scent, used in aromatherapy.",
                cost: "$20"
            },
            {
                name: "Jasmine",
                image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Sweet fragrance, promotes relaxation.",
                cost: "$18"
            },
            {
                name: "Rosemary",
                image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                description: "Invigorating scent, often used in cooking.",
                cost: "$15"
            },
            {
                name: "Mint",
                image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                description: "Refreshing aroma, used in teas and cooking.",
                cost: "$12"
            },
            {
                name: "Lemon Balm",
                image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                description: "Citrusy scent, relieves stress and promotes sleep.",
                cost: "$14"
            },
            {
                name: "Hyacinth",
                image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
                cost: "$22"
            }
        ]
    },
    {
        category: "Insect Repellent Plants",
        plants: [
            {
                name: "oregano",
                image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                description: "The oregano plants contains compounds that can deter certain insects.",
                cost: "$10"
            },
            {
                name: "Marigold",
                image:"https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                description: "Natural insect repellent, also adds color to the garden.",
                cost: "$8"
            },
            {
                name: "Geraniums",
                image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                description: "Known for their insect-repelling properties while adding a pleasant scent.",
                cost: "$20"
            },
            {
                name: "Basil",
                image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                description: "Repels flies and mosquitoes, also used in cooking.",
                cost: "$9"
            },
            {
                name: "Lavender",
                image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Calming scent, used in aromatherapy.",
                cost: "$20"
            },
            {
                name: "Catnip",
                image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                description: "Repels mosquitoes and attracts cats.",
                cost: "$13"
            }
        ]
    },
    {
        category: "Medicinal Plants",
        plants: [
            {
                name: "Aloe Vera",
                image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                description: "Soothing gel used for skin ailments.",
                cost: "$14"
            },
            {
                name: "Echinacea",
                image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                description: "Boosts immune system, helps fight colds.",
                cost: "$16"
            },
            {
                name: "Peppermint",
                image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                description: "Relieves digestive issues and headaches.",
                cost: "$13"
            },
            {
                name: "Lemon Balm",
                image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                description: "Calms nerves and promotes relaxation.",
                cost: "$14"
            },
            {
                name: "Chamomile",
                image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                description: "Soothes anxiety and promotes sleep.",
                cost: "$15"
            },
            {
                name: "Calendula",
                image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
                description: "Heals wounds and soothes skin irritations.",
                cost: "$12"
            }
        ]
    },
    {
        category: "Low Maintenance Plants",
        plants: [
            {
                name: "ZZ Plant",
                image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Thrives in low light and requires minimal watering.",
                cost: "$25"
            },
            {
                name: "Pothos",
                image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
                description: "Tolerates neglect and can grow in various conditions.",
                cost: "$10"
            },
            {
                name: "Snake Plant",
                image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                description: "Needs infrequent watering and is resilient to most pests.",
                cost: "$15"
            },
            {
                name: "Cast Iron Plant",
                image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
                description: "Hardy plant that tolerates low light and neglect.",
                cost: "$20"
            },
            {
                name: "Succulents",
                image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
                description: "Drought-tolerant plants with unique shapes and colors.",
                cost: "$18"
            },
            {
                name: "Aglaonema",
                image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
                description: "Requires minimal care and adds color to indoor spaces.",
                cost: "$22"
            }
        ]
    }
];

  useEffect(() => {
    getProducts()
  }, [])

  const notifyAddedToCart = (item) => toast.success(`${item.title} added to cart!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#fff',
      color: '#000',
    }
    });

  const notifyRemovedFromCart = (item) => toast.error(`${item.title} removed from cart!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#000',
      color: '#fff',
    }
    });

    const handleRemoveFromCart = (product) => {
      removeFromCart(product);
      notifyRemovedFromCart(product);
    };

  return (
    <div className='flex flex-col justify-center bg-gray-100' style={{width:"100vw",margin:"auto"}}>
      <nav style={{backgroundColor:'green',height:"120px"}}> <div style={{alignContent:"center"}} className='flex justify-between items-center py-2 px-20'>
        <div><img style={{height:"100px",borderRadius:"100%"}} src="data:image/jpeg;base64,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" alt="" /></div>
       <div> 
      <h2 style={{fontFamily:"sans-serif",fontWeight:"bold"}}>Paradise Nersery</h2>
       <h2>Where Green Meets serenity </h2></div>
        <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Shop Now</h1>
        {!showModal && <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
          onClick={toggle}
        >Cart ({cartItems.length})</button>}
      </div></nav>
      <ToastContainer />
     
      
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
        {
          products.map(product => (
          
            <div key={product.id} className='bg-white shadow-md rounded-lg px-10 py-10'>
              <div> {product.category}</div>
              <img src={product.thumbnail} alt={product.title} className='rounded-md h-48' />
              <div className='mt-4'>
                <h1 className='text-lg uppercase font-bold'>{product.title}</h1>
                <p className='mt-2 text-gray-600 text-sm'>{product.description}...</p>
                <p className='mt-2 text-gray-600'>${product.price}</p>
               
              </div>
               <div className='mt-6 flex justify-between items-center'>
                {
                  !cartItems.find(item => item.id === product.id) ? (
                    <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                      onClick={() => {
                        addToCart(product)
                        notifyAddedToCart(product)
                      }
                      }
                      >
                        Add to cart
                      </button>
                  ) : (
                    <div className="flex gap-4">
                    <button
                      className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        addToCart(product)
                      }}
                    >
                      {/* +
                    </button>
                    <p className='text-gray-600'>{cartItems.find(item => item.id === product.id).quantity}</p>
                    <button
                      className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        const cartItem = cartItems.find((item) => item.id === product.id);
                        if (cartItem.quantity === 1) {
                          handleRemoveFromCart(product);
                        } else {
                          removeFromCart(product);
                        }
                      }}
                    >
                      - */}
                      Added to cart
                    </button>
                  </div>
                  )
                }
              </div>
            </div>

          ))
        }
      </div>
      <Cart showModal={showModal} toggle={toggle} />
    </div>
  )
}
