export default function ValuesSection() {
   const values = [
     {
       title: "Quality",
       desc: "We craft durable, premium footwear using top-quality materials."
     },
     {
       title: "Comfort",
       desc: "Designed for all-day support with modern foot-friendly ergonomics."
     },
     {
       title: "Style",
       desc: "Trend-focused designs to help you stand out effortlessly."
     },
   ];
 
   return (
     <section className="py-16 px-6 md:px-16 bg-white">
       <div className="max-w-5xl mx-auto text-center">
         <h2 className="text-3xl font-bold mb-10">What We Stand For</h2>
 
         <div className="grid md:grid-cols-3 gap-8">
           {values.map((val, index) => (
             <div key={index} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
               <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
               <p className="text-gray-600">{val.desc}</p>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 }
