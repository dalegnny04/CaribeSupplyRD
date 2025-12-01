import { useCart } from "/src/context/cartcontext.jsx";

export const CartPage = () => {
  const { cart, increase, decrease, removeFromCart, total } = useCart();

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Carrito de Compras</h2>

      {/* CARRITO VACÍO */}
      {cart.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 border rounded-lg">
          <p className="text-xl font-semibold text-gray-700">
            Tu carrito está vacío
          </p>
          <p className="text-gray-500 mt-1">
            Agrega productos para continuar con tu compra.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          
          {/* LISTA DE PRODUCTOS */}
          {cart.map((item) => (
            <div
              key={item.key}  // ← clave correcta
              className="flex justify-between items-center border rounded-lg p-4 bg-white shadow-sm"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.img || item.image || item.images?.[0]}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md border"
                />

                <div>
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-gray-600">${item.price}</p>

                  {item.variantName && (
                    <p className="text-sm text-gray-500">
                      Variante: {item.variantName}
                    </p>
                  )}
                </div>
              </div>

              {/* CONTROL DE CANTIDAD */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decrease(item.key)}   // ← usar key
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>

                <span className="font-medium">{item.quantity}</span>

                <button
                  onClick={() => increase(item.key)}   // ← usar key
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* ELIMINAR */}
              <button
                onClick={() => removeFromCart(item.key)}  // ← usar key
                className="text-red-600 font-semibold hover:underline"
              >
                Eliminar
              </button>
            </div>
          ))}

          {/* TOTAL */}
          <h3 className="text-2xl font-bold text-right mt-5">
            Total: <span className="text-green-600">${total.toFixed(2)}</span>
          </h3>

          {/* BOTÓN DE PAGO */}
          <button className="bg-black text-white w-full py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition">
            Proceder al Pago
          </button>
        </div>
      )}
    </div>
  );
};
