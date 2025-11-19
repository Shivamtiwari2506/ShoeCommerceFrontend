const WhyChooseSection = () => {
   return (
     <section className="py-16 px-6 md:px-16 bg-white">
       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
         
         <img
           src="../../src/assets/whyChooseUs.jpeg"
           alt="Why Choose ShoeVerse"
           className="rounded-2xl shadow-lg"
         />
 
         <div>
           <h2 className="text-3xl font-bold mb-4">Why Choose ShoeVerse?</h2>
           <ul className="text-gray-600 text-lg space-y-3">
             <li className="flex items-start">
               <span className="text-gray-800 mr-3 mt-1">✓</span>
               Premium materials & expert craftsmanship in every pair
             </li>
             <li className="flex items-start">
               <span className="text-gray-800 mr-3 mt-1">✓</span>
               100-day comfort guarantee — wear them, love them, or return them
             </li>
             <li className="flex items-start">
               <span className="text-gray-800 mr-3 mt-1">✓</span>
               Eco-friendly production with recycled & sustainable materials
             </li>
             <li className="flex items-start">
               <span className="text-gray-800 mr-3 mt-1">✓</span>
               Fast & free shipping + hassle-free returns
             </li>
           </ul>
         </div>
 
       </div>
     </section>
   );
 }

export default WhyChooseSection;