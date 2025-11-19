export default function ContactDetails() {
   const details = [
     {
       title: "Email",
       value: "support@shoeverse.com",
     },
     {
       title: "Phone",
       value: "+91 98765 43210",
     },
     {
       title: "Address",
       value: "123, Street Name, Mumbai, India",
     },
   ];
 
   return (
     <section className="py-16 px-6 md:px-16 text-white">
       <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">
 
         {details.map((item, idx) => (
           <div key={idx} className="bg-gray-900 p-8 rounded-xl">
             <h3 className="text-xl font-semibold">{item.title}</h3>
             <p className="mt-2 text-gray-300">{item.value}</p>
           </div>
         ))}
 
       </div>
     </section>
   );
 }
 