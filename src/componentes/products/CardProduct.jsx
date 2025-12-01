 {/*import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
 import { formatPrice } from "../../helpers/index.js";

export const CardProduct = ({
  img,
  name,
  price,
  slug,
  colors,
  variants,
}) => {
  const [activeColor, setActiveColor] = useState(
    colors && colors.length > 0 ? colors[0] : { name: "", color: "" }
  );

  // Identificar la variante según el color seleccionado
  const selectedVariant = variants?.find(
    (variant) => variant.color === activeColor.color
  );

  const stock = selectedVariant?.stock || 0;

  return (
    <div className="flex flex-col gap-6 relative">
      <Link
        to={`/allProductosDominicanos/${slug}`}
        className="flex relative group overflow-hidden"
      >
        <div className="flex h-[350px] w-full items-center justify-center py-2 lg:h-[250px]">
          <img
            src={img}
            alt={name}
            className="object-contain h-full w-full"
          />
        </div>

        <button className="bg-white border border-slate-200 absolute w-full bottom-0 py-3 rounded-3xl flex items-center justify-center gap-1 text-sm font-medium hover:bg-stone-100 translate-y-full transition-all duration-300 group-hover:translate-y-0">
          <FiPlus />
          Añadir
        </button>
      </Link>

      <div className="flex flex-col gap-1 items-center">
        <p className="text-[15px] font-medium">{name}</p>
        <p className="text-[15px] font-medium">{formatPrice(price)}</p>

        <div className="flex gap-3">
          {colors?.map((color) => (
            <span
              key={color.color}
              className="grid place-items-center w-5 h-5 rounded-full cursor-pointer"
              onClick={() => setActiveColor(color)}
            >
              <span
                className="w-3.5 h-3.5 rounded-full"
                style={{ backgroundColor: color.color }}
              />
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-2 left-2">
        {stock === 0 && <span>Agotado</span>}
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      stock: PropTypes.number,
    })
  ).isRequired,
};
*/}
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import PropTypes from "prop-types";
import { useCart } from "/src/context/cartcontext.jsx";
import { formatPrice } from "../../helpers/index.js";

export const CardProduct = ({ product }) => {
  const { addToCart } = useCart();

  const { id, name, price, slug, images, colors, variants } = product;

  const [activeColor, setActiveColor] = useState(
    colors && colors.length > 0 ? colors[0] : { name: "", color: "" }
  );

  const selectedVariant =
    variants?.find((variant) => variant.color === activeColor.color) ||
    variants?.[0];

  const stock = selectedVariant?.stock ?? 0;

  const [imgOpen, setImgOpen] = useState(null); 

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      img: images?.[0],
      variantId: selectedVariant?.id || "default",
      stock,
    });
  };

  return (
    <div className="flex flex-col gap-6 relative">

      <div className="relative group overflow-hidden">

        <div
          className="flex h-[350px] w-full items-center justify-center py-2 lg:h-[250px]"
        >
          <img
            src={images?.[0]}
            alt={name}
            className="object-contain h-full w-full cursor-pointer"
            onClick={() => setImgOpen(images?.[0])} //  Abrir imagen al hacer click
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-white border border-slate-200 absolute w-full bottom-0 py-3 rounded-3xl flex items-center justify-center gap-1 text-sm font-medium hover:bg-stone-100 translate-y-full transition-all duration-300 group-hover:translate-y-0"
        >
          <FiPlus />
          Añadir
        </button>
      </div>

      {/* Informacion */}
      <div className="flex flex-col gap-1 items-center">
        <p className="text-[15px] font-medium">{name}</p>
        <p className="text-[15px] font-medium">{formatPrice(price)}</p>

        <div className="flex gap-3">
          {colors?.map((color) => (
            <span
              key={color.color}
              className="grid place-items-center w-5 h-5 rounded-full cursor-pointer"
              onClick={() => setActiveColor(color)}
            >
              <span
                className="w-3.5 h-3.5 rounded-full"
                style={{ backgroundColor: color.color }}
              />
            </span>
          ))}
        </div>
      </div>

      {stock === 0 && (
        <div className="absolute top-2 left-2 text-xs bg-red-500 text-white px-2 rounded">
          Agotado
        </div>
      )}

      {/* abrir la imagen al hacer click */}
     {imgOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setImgOpen(null)}
        >
          <img
            src={imgOpen}
            alt="Vista ampliada"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

CardProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

