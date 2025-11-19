export default function TeamSection() {
   const team = [
     {
       name: "Shivam Tiwari",
       role: "Founder & Developer",
       img: "https://randomuser.me/api/portraits/men/32.jpg",
     },
     {
       name: "Aarohi Singh",
       role: "Brand & Marketing Lead",
       img: "https://randomuser.me/api/portraits/women/44.jpg",
     },
     {
       name: "Rohan Mehta",
       role: "Product Designer",
       img: "https://randomuser.me/api/portraits/men/19.jpg",
     },
   ];
 
   return (
     <section className="bg-gray-100 py-16 px-6 md:px-16">
       <div className="max-w-5xl mx-auto">
         <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
 
         <div className="grid md:grid-cols-3 gap-10 text-center">
           {team.map((member, index) => (
             <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
               <img
                 src={member.img}
                 alt={member.name}
                 className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
               />
               <h3 className="text-xl font-semibold">{member.name}</h3>
               <p className="text-gray-600">{member.role}</p>
             </div>
           ))}
         </div>
 
       </div>
     </section>
   );
 }
 