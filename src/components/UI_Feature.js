"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

import axios from "axios";

function UI_Feature() {
  const [data, setData] = useState([]);
  const [dataAxios, setDataAxios] = useState([]);
  console.log(data);
  const [isCall, setIsCall] = useState(false);

  const syntaxFectch = `
	async function handleFetch() {
		try {
		const response = await fetch(
			"https://62c6616174e1381c0a5ddc3a.mockapi.io/api/products"
		);
	
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
	
		const data = await response.json();
		
		if (!isCall) {
			setData(data.slice(0, 4)); // Assuming setData and isCall are defined properly
			setIsCall(true);
		} else {
			setData([]);
			setIsCall(false);
		}
		} catch (error) {
		console.error("Failed to call API", error); // Logs the error to the console
		}
  	}
  `;

  const syntaxAxios = `
	async function handleAxios() {
		try {
			// Ensure isCall is defined and scoped correctly
			if (!isCall) {
				const response = await axios.get("https://62c6616174e1381c0a5ddc3a.mockapi.io/api/products");

				// Check if response data is an array 
				if (Array.isArray(response.data)) {
					setDataAxios(response.data.slice(0, 4));
				} else {
					console.error("Unexpected response format", response.data);
					setDataAxios([]);
				}
				setIsCall(true);
			} else {
				setDataAxios([]);
				setIsCall(false);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
			// Optionally set an error state here
		}
	}
  
  `;

  async function handleFetch() {
    try {
      const response = await fetch(
        "https://62c6616174e1381c0a5ddc3a.mockapi.io/api/products"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (!isCall) {
        setData(data.slice(0, 4)); // Assuming setData and isCall are defined properly
        setIsCall(true);
      } else {
        setData([]);
        setIsCall(false);
      }
    } catch (error) {
      console.error("Failed to call API", error); // Logs the error to the console
    }
  }

  async function handleAxios() {
    try {
      // Ensure isCall is defined and scoped correctly
      if (!isCall) {
        const response = await axios.get(
          "https://62c6616174e1381c0a5ddc3a.mockapi.io/api/products"
        );

        // Check if response data is an array
        if (Array.isArray(response.data)) {
          setDataAxios(response.data.slice(0, 4));
        } else {
          console.error("Unexpected response format", response.data);
          setDataAxios([]);
        }
        setIsCall(true);
      } else {
        setDataAxios([]);
        setIsCall(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Optionally set an error state here
    }
  }

  return (
    <div className="container mx-auto py-12">
      <h3 className="text-center">Feature Call API Method</h3>

      <div className="w-full  bg-white text-black p-6">
        <p>Click Button Call API With Fetch</p>
        <button
          className="text-center bg-accent rounded-xl p-2"
          onClick={handleFetch}
        >
          {isCall ? "Delete API" : "Call API"}
        </button>
        <ul className="grid gird-cols-1 xl:grid-cols-4 gap-6">
          {data?.map((val) => (
            <li key={val.id}>
              <a
                className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                href="/#"
              >
                <Image
                  src={val.image}
                  alt=""
                  className="shadow rounded-lg overflow-hidden border object-cover"
                  width={300}
                  height={300}
                />
                <div className="mt-8">
                  <h4 className="font-bold text-xl">{val.name}</h4>
                  <p className="mt-2 text-gray-600">{val.address}</p>
                  <div className="mt-5">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 shadow-sm hover:bg-gray-900"
                    >
                      Start Creating
                    </button>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <SyntaxHighlighter language="html" style={solarizedlight}>
            {syntaxFectch}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="w-full mt-6 bg-white text-black p-6">
        <p>Click Button Call API With Axios</p>
        <button
          className="text-center bg-accent rounded-xl p-2"
          onClick={handleAxios}
        >
          {isCall ? "Delete API" : "Call API"}
        </button>
        <ul className="grid gird-cols-1 xl:grid-cols-4 gap-6">
          {dataAxios?.map((val) => (
            <li key={val.id}>
              <a
                className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                href="/#"
              >
                <Image
                  src={val.image}
                  alt=""
                  className="shadow rounded-lg overflow-hidden border object-cover"
                  width={300}
                  height={300}
                />
                <div className="mt-8">
                  <h4 className="font-bold text-xl">{val.name}</h4>
                  <p className="mt-2 text-gray-600">{val.address}</p>
                  <div className="mt-5">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 shadow-sm hover:bg-gray-900"
                    >
                      Start Creating
                    </button>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <SyntaxHighlighter language="html" style={solarizedlight}>
            {syntaxAxios}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default UI_Feature;
