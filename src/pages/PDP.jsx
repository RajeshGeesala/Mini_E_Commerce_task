import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProduct, fetchProductsByCategory } from "../api";
import { useCart, useWishlist } from "../utils/cart";
import ProductImages from "../components/ProductImages";
import ProductDetails from "../components/ProductDetails";
import SimilarProductsCarousel from "../components/SimilarProductsCarousel";

export default function PDP() {
  const { id } = useParams();
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const loadProduct = async () => {
      const p = await fetchProduct(id);
      setProduct(p);
      const similar = await fetchProductsByCategory(p.category);
      setSimilarProducts(similar);
    };
    loadProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const visibleItems = 3;

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <ProductImages
            images={product.images}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
          />
        </div>

        <ProductDetails
          product={product}
          qty={qty}
          setQty={setQty}
          addToCart={addToCart}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
        />
      </div>

      {similarProducts.length > 0 && (
        <SimilarProductsCarousel
          similarProducts={similarProducts}
          carouselIndex={carouselIndex}
          visibleItems={visibleItems}
          prevSlide={() => setCarouselIndex((i) => Math.max(i - 1, 0))}
          nextSlide={() =>
            setCarouselIndex((i) =>
              Math.min(i + 1, similarProducts.length - visibleItems)
            )
          }
          goToProduct={(pid) => {
            navigate(`/products/${pid}`);
            window.scrollTo(0, 0);
          }}
        />
      )}
    </div>
  );
}
