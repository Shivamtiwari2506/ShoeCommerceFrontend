export default function MissionSection() {
   return (
     <section className="py-16 px-6 md:px-16 bg-white">
       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
         
         <img
           src="/images/Mission.jpeg"
           alt="Mission"
           className="rounded-2xl shadow-lg"
         />
 
         <div>
           <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
           <p className="text-gray-600 text-lg">
             At ShoeVerse, we aim to provide high-quality, stylish, and durable shoes
             that elevate your lifestyle. Our designs blend modern trends with all-day
             comfort for everything from workouts to everyday wear.
           </p>
         </div>
 
       </div>
     </section>
   );
 }
 