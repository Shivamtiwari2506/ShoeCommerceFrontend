const VisionSection = () => {
   return (
     <section className="py-16 px-6 md:px-16 bg-gray-50">
       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
         
         <div className="order-2 md:order-1">
           <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
           <p className="text-gray-600 text-lg">
             To become the world's most loved footwear brand by empowering every step 
             with innovation, sustainability, and timeless style. We dream of a future 
             where comfort meets consciousness — shoes that not only look good but also 
             do good for the planet and the people who wear them.
           </p>
         </div>
 
         <img
           src="/images/Vision.jpeg"
           alt="Vision"
           className="rounded-2xl shadow-lg order-1 md:order-2 max-h-80 w-full object-cover"
         />
       </div>
     </section>
   );
 }

 export default VisionSection;