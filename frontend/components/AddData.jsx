import axios from 'axios'
import React from 'react'

export default function AddData() {

  const handleSubmit = (e) => {

    e.preventDefault();
    const fullname = e.target.fullName.value
    const email = e.target.email.value
    const age = e.target.age.value
    const gender = e.target.gender.value
    const phone = e.target.phone.value
    const address=e.target.address.value
    const currentclass = e.target.class.value
  

  const info = {
    fullname,
    email,
    age,
    gender,
    phone,
    address,
    currentclass
  }

  axios.post("http://localhost:7000/adddata", info)
    .then((response) => {
      console.log(response.data);

      if (response.data) {
        alert("Student added succesfully");
      }
    })

    .catch((error)=>{
      if(error.response)
      {
         alert("error:"+error.response.data.error)
      }
     
    }
    )


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
              <label className="block text-gray-700 font-semibold mb-1">email</label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
              <label className="block text-gray-700 font-semibold mb-1">Course</label>
              <input
                type="text"
                placeholder="Course"
                name="gender"
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
