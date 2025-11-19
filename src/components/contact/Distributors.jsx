export default function Distributors() {
   const distributors = [
     {
       name: "Mumbai Footwear Hub",
       person: "Rajesh Kumar",
       phone: "+91 98987 65432",
       email: "mumbaihub@shoeverse.com",
       address: "Andheri East, Mumbai, Maharashtra",
     },
     {
       name: "Delhi Shoe Center",
       person: "Amit Sharma",
       phone: "+91 98765 12340",
       email: "delhicenter@shoeverse.com",
       address: "Connaught Place, New Delhi",
     },
     {
       name: "Bangalore Sports Distributors",
       person: "Kiran Reddy",
       phone: "+91 90123 45678",
       email: "bangaloredist@shoeverse.com",
       address: "Koramangala, Bangalore, Karnataka",
     },
   ];
 
   return (
     <section className="py-16 px-6 md:px-16 text-white">
       <div className="max-w-5xl mx-auto">
         <h2 className="text-3xl font-bold mb-10 text-center text-black">
           Our Distributors
         </h2>
 
         <div className="grid md:grid-cols-3 gap-8">
           {distributors.map((dist, index) => (
             <div
               key={index}
               className="bg-gray-600 p-6 rounded-xl shadow shadow-gray-300 hover:border-white transition"
             >
               <h3 className="text-xl font-semibold">{dist.name}</h3>
 
               <p className="text-gray-300 mt-2">
                 <span className="font-medium">Contact Person:</span> {dist.person}
               </p>
 
               <p className="text-gray-300 mt-1">
                 <span className="font-medium">Phone:</span> {dist.phone}
               </p>
 
               <p className="text-gray-300 mt-1">
                 <span className="font-medium">Email:</span> {dist.email}
               </p>
 
               <p className="text-gray-300 mt-1">
                 <span className="font-medium">Address:</span> {dist.address}
               </p>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 }
 