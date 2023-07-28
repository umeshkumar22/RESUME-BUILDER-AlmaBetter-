import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideBarForm from './SideBarForm';
import { connect } from 'react-redux';
import { setPersonalInfo } from '../redux/actions';

const PersonalInfoForm = ({ setPersonalInfo }) => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phn: '',
    addr: '',
    city: '',
    state: '',
    pin: '',
    obje: '',
  });

  useEffect(() => {
    // Retrieve the data from local storage when the component mounts
    const storedData = localStorage.getItem('personalInfo');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the form data to local storage
    localStorage.setItem('personalInfo', JSON.stringify(formData));
    // Dispatch action with the form data
    setPersonalInfo(formData);
  };

  return (
    <div className="lg:grid lg:grid-cols-6">
      {/* side */}
      <div className="lg:col-start-1 lg:col-span-2">
        <SideBarForm />
      </div>

      {/* main */}
      <div className="lg:col-start-3 lg:col-span-4">
        <div className="bg-white m-6 rounded-2xl shadow dark:bg-slate-500 dark:text-white">
          <form onSubmit={handleSubmit}>
            {/* personal details form */}
            <div className="m-6 pt-4">

              {/* personal details */}
              <div>
                {/* name */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-6">
                    <label
                      htmlFor="fname"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300"
                      placeholder="First Name"
                      required
                      value={formData.fname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="lname"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300"
                      placeholder="Last Name"
                      required
                      value={formData.lname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* email phn */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300"
                      placeholder="example@gmail.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="phn"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mobile
                    </label>
                    <input
                      type="tel"
                      id="phn"
                      name="phn"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300"
                      placeholder="0000000000"
                      required
                      value={formData.phn}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* address */}
                <div>
                  <div className="mb-6">
                    <label
                      htmlFor="addr"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="addr"
                      name="addr"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300"
                      placeholder="27, street"
                      required
                      value={formData.addr}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-6">
                      <label
                        htmlFor="city"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300"
                        placeholder="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="state"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300"
                        placeholder="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="pin"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Postal Code
                    </label>
                    <input
                      type="number"
                      id="pin"
                      name="pin"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none dark:bg-slate-300"
                      placeholder="Postal Code"
                      required
                      value={formData.pin}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* objective */}
                <div className="mb-6">
                  <label
                    htmlFor="obje"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Objective
                  </label>
                  <textarea
                    rows="4"
                    cols="50"
                    type="text"
                    id="obje"
                    name="obje"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300"
                    placeholder="objective"
                    required
                    value={formData.obje}
                    onChange={handleChange}
                  />
                </div>

                {/* Link btn */}
                <div
                  onClick={handleSubmit}
                  className="grid items-center justify-center lg:px-60 pb-4"
                >
                  <Link
                    to="/workexp"
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-28 py-2.5 text-center"
                  >
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </form> {/* Add the closing tag for the form */}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPersonalInfo: (personalInfo) => dispatch(setPersonalInfo(personalInfo)),
  };
};

export default connect(null, mapDispatchToProps)(PersonalInfoForm);
