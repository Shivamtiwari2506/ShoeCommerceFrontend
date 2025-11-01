import React, { useEffect, useRef, useState } from "react";
import { TestimonialCard } from "./TestimonialCard";
import TestimonyForm from "./homecomps/TestimonyForm";
import api from '../../services/axiosInstance';
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

// Shoe data
const shoes = [
  {
    name: "Classic Sneaker",
    description: "Timeless design with premium comfort.",
    price: "$89.99",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&grayscale",
    alt: "Classic Sneaker",
  },
  {
    name: "Urban Boot",
    description: "Bold style for city adventures.",
    price: "$129.99",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c6a83699-80a8-4d1d-be9c-c670fb4af833/PHANTOM+6+HIGH+ELITE+LE+FG.png",
    alt: "Urban Boot",
  },
  {
    name: "Sport Runner",
    description: "Lightweight and built for speed.",
    price: "$79.99",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7414c6ed-74c1-4abd-9ebe-085e9184d0bd/W+NIKE+PEGASUS+PLUS+FK.png",
    alt: "Sport Runner",
  },
  {
    name: "Women Slides",
    description: "Timeless design with premium comfort.",
    price: "$89.99",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7d621362-cd83-4fdc-a529-d3d832d8f644/WMNS+JORDAN+NOLA+SLIDE.png",
    alt: "Women Slides",
  },
  {
    name: "Shower Slides",
    description: "Gripped and styled for bathroom.",
    price: "$129.99",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3b67c4f5-f47f-43b2-ab45-93778ad1b9f5/JORDAN+FRANCHISE+SLIDE+SH.png",
    alt: "Shower Slides",
  },
  {
    name: "Men's Slides",
    description: "Lightweight and built for comfort.",
    price: "$79.99",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d9b53749-3841-40ed-8c0e-beaecd31d9fb/NIKE+OFFCOURT+ADJUST+SLIDE.png",
    alt: "Men's Slides",
  },
  {
    name: "Nike Victori One",
    description: "Timeless design with stylish comfort.",
    price: "$89.99",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c622ef79-4ab0-4183-b83f-8f4d2ea10dac/NIKE+VICTORI+ONE+SLIDE.png",
    alt: "Nike Victori One",
  },
  {
    name: "Urban Boot",
    description: "Bold style for city adventures.",
    price: "$129.99",
    image:
      "https://cdn-images.farfetch-contents.com/23/95/88/04/23958804_57080094_1000.jpg",
    alt: "Urban Boot",
  },
  {
    name: "High Knee Boots",
    description: "Lightweight and built for comfort.",
    price: "$79.99",
    image:
      "https://cdn-images.farfetch-contents.com/20/16/86/38/20168638_50456849_1000.jpg",
    alt: "High Knee Boots",
  },
];
// Reusable ShoeCard component
const ShoeCard = React.memo(({ name, description, price, image, alt }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
    <img
      src={image}
      alt={alt}
      className="w-full h-64 object-cover filter grayscale"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <p className="mt-2 font-bold">{price}</p>
      <Link
        to="/shop"
        className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
      >
        Shop Now
      </Link>
    </div>
  </div>
));

const HomeBody = () => {
  const [loadTestimonials, setLoadTestimonials] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const containerRef = useRef();
  const scrollRef = useRef(0);
  const requestRef = useRef();
  const speed = 1.5;

  const container = containerRef.current;
  const totalWidth = container?.scrollWidth / 2;

  const step = () => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;
    scrollRef.current += speed;

    if (scrollRef.current >= totalWidth) scrollRef.current = 0;

    container.scrollLeft = scrollRef.current;
    requestRef.current = requestAnimationFrame(step);
  };

  const getTestimonials = async () => {
    try {
      const response = await api.get('/testimonials');
      if (response?.data?.success === true) {
        setLoadTestimonials(response?.data?.data);
      } else {
        toast.error(response.data.message || 'Failed to load testimonials');
      }
    } catch (error) {
      toast.error(error.response?.data?.error || error.message || 'Network error');
    }
  }

  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  const submitForm = async (values) => {
    try {
      const response = await api.post('/create/testimonial', values);
  
      if (response?.data?.success) {
        toast.success(response.data.message);
        getTestimonials();
      } else {
        toast.error(response.data.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error(error.response?.data?.error || error.message || 'Network error');
    } finally {
      toggleModal();
    }
  };  

  useEffect(() => {
    getTestimonials();
  }, [])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const handleMouseEnter = () => cancelAnimationFrame(requestRef.current);
  const handleMouseLeave = () => {
    if (requestRef.current !== undefined) {
      requestRef.current = requestAnimationFrame(step);
    }
  };
  return (
    <main className="bg-gray-100 text-gray-900">
      {/* Featured Shoes Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
          Featured Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              name={shoe.name}
              description={shoe.description}
              price={shoe.price}
              image={shoe.image}
              alt={shoe.alt}
            />
          ))}
        </div>
      </section>

      {/* Promotional Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Limited Time Offer
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Get 20% off your first purchase! Use code{" "}
            <span className="font-bold">MONO20</span> at checkout.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition transform hover:scale-105"
          >
            Shop Sale
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="pt-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-12">
          What Our Customers Say
        </h2>

        <div       
          ref={containerRef}
          className="overflow-hidden w-full cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex gap-3"
          >
            {[...loadTestimonials, ...loadTestimonials]?.map(
              (review, index) => (
                <TestimonialCard
                  key={index}
                  name={review?.userId?.userName}
                  message={review?.message}
                  image={review?.userId?.profileImageUrl}
                  rating={review.rating}
                />
              )
            )}
          </div>
        </div>
        <div className="flex items-center justify-center py-6">
          <button className="inline-block bg-gray-200 text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-400 transition transform hover:scale-105" onClick={() => setOpenModal(true)}>
            Add your review
          </button>
        </div>
      </section>
      {
        openModal && <TestimonyForm openModal={openModal} toggleModal={toggleModal} submitForm={submitForm} />
      }
    </main>
  );
};

export default HomeBody;
