import axios from 'axios'
import React from 'react'

export default function Update({ studentId }) {

  const handleSubmit = async(e) => {

    e.preventDefault();
    const fullname = e.target.fullName.value
    const age = e.target.age.value
    const phone = e.target.phone.value
    const address=e.target.address.value
    const currentclass = e.target.class.value

  

  try {
    const response = await axios.put(`http://localhost:7000/update/${studentId}`, {
      fullname: fullname,  // New student fullname
      age: age,  // New student age
      Phone: phone,
      address:address,
      currentclass:currentclass
    });

    console.log("Student updated:", response.data);
  } catch (error) {
    console.error("Error updating student:", error.response?.data || error.message);
  }

}


return (
  <div>
    <center>

      <div className=" absolute top-12 left-96 right-0 flex justify-center items-center max-w-sm h-auto bg-emerald-950 p-4">
        <div className="w-auto max-w-md bg-emerald-300 shadow-lg rounded-lg p-6">

          <form onSubmit={handleSubmit}>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
           
            <div>
              <label className="block text-gray-700 font-semibold mb-1">age</label>
              <input
                type="number"
                placeholder="age"
                name="age"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
           
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Phone</label>
              <input
                type="number"
                placeholder="phone"
                name="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Address</label>
              <input
                type="text"
                placeholder="address"
                name="address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Current Class</label>
              <input
                type="number"
                placeholder="currentclass"
                name="class"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Submit"
                required
                className=" bg-green-700  mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </form>

        </div>
      </div>
    
    </center>
  </div>
)
}
