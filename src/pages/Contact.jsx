import NavBar from "../components/NavBar";

const Contact =() => {
    return (
        <div>
            <NavBar/>
            

        <div className="bg-gray-100 h-screen flex items-start justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full border border-gray-300 rounded p-2"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
        </div>
        
    )
}
export default Contact;