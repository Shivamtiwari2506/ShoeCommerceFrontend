export default function StatsSection() {
   const stats = [
     { label: "Customers Served", value: "50K+" },
     { label: "Products Sold", value: "120K+" },
     { label: "Brands Partnered", value: "25+" },
     { label: "Countries Reached", value: "12+" },
   ];
 
   return (
     <section className="bg-gray-100 py-16 px-6 md:px-16">
       <div className="max-w-5xl mx-auto">
         <h2 className="text-3xl font-bold text-center mb-10">Our Achievements</h2>
 
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           {stats.map((stat, index) => (
             <div key={index}>
               <p className="text-4xl font-bold text-purple-600">{stat.value}</p>
               <p className="text-gray-600 mt-2">{stat.label}</p>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 }
 