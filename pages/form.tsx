"use client";

import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import Link from "next/link";

interface FormData {
  firstname: string;
  lastname: string;
  age: number;
}

const Form = () => {
  const toast = useToast();
  const [payload, setPayload] = useState<FormData>({
    firstname: "",
    lastname: "",
    age: 0,
  });

  const HandleSubmit = () => {
    if (payload.firstname && payload.lastname !== "" && payload.age !== 0) {
      toast({
        title: "Halo",
        description: `My name is ${payload.firstname} ${payload.lastname} and im ${payload.age} years old`,
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      setPayload({
        firstname: "",
        lastname: "",
        age: 0,
      });
    } else {
      toast({
        title: "Error",
        description: "Form is not fully filled in!",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  };
  return (
    <>
      <div className="p-6 w-2/3 m-auto">
        <div className="border-2 border-gray-400 rounded-md p-8">
          <div className="mb-6">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="base-input"
              value={payload.firstname}
              onChange={(event) =>
                setPayload({ ...payload, firstname: event.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              id="base-input"
              value={payload.lastname}
              onChange={(event) =>
                setPayload({ ...payload, lastname: event.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Age
            </label>
            <input
              type="number"
              id="base-input"
              value={payload.age}
              onChange={(event) =>
                setPayload({ ...payload, age: parseInt(event.target.value) })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex justify-end">
            <Link href="/">
              <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Home
              </button>
            </Link>
            <button
              onClick={HandleSubmit}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
