import React from 'react';

const UrlEncoder = () => {

  return (
    <>
      <h1 className="text-3xl text-center mb-10">URL Encoder</h1>

      <p className="text-center mb-4">Enter your url to encode in the box below.</p>

      <textarea className="mx-auto border shadow rounded block w-5/6 md:w-1/2 mb-10 p-3" name="" id="" cols="30" rows="8" />
      <textarea className="mx-auto border shadow rounded block w-5/6 md:w-1/2 p-3 mb-4" name="" id="" cols="30" rows="8" readOnly />
      
      <button type="button" className="w-5/6 md:w-1/2 text-center border rounded block mx-auto text-white px-2 py-2 bg-purple-700 hover:bg-purple-800">Copy Encoded URL</button>
    </>
  );
};
export default UrlEncoder;