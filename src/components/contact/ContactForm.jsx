export default function ContactForm() {
   return (
     <section className="py-16 px-6 md:px-16 bg-gray-200 text-white">
       <div className="max-w-3xl mx-auto bg-black p-10 rounded-2xl">
         <h2 className="text-2xl font-semibold mb-6 text-nowrap">Send us a message</h2>
 
         <form className="grid gap-6">
           <input
             type="text"
             required
             placeholder="Your Name"
             className="p-3 rounded-md bg-gray-00 text-white outline-none border border-gray-700 focus:border-white"
           />
 
           <input
             type="email"
             required
             placeholder="Your Email"
             className="p-3 rounded-md bg-gray-800 text-white outline-none border border-gray-700 focus:border-white"
           />
 
           <textarea
             rows="5"
             placeholder="Your Message"
             className="p-3 rounded-md bg-gray-800 text-white outline-none border border-gray-700 focus:border-white"
           ></textarea>
 
           <button
             type="submit"
             onClick={(e) => e.preventDefault()}
             className="py-3 px-6 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
           >
             Send Message
           </button>
         </form>
       </div>
     </section>
   );
 }
 