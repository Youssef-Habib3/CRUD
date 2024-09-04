"use client";

import { Button } from "@/components/ui/button";
import { createUser } from "@/store/features/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Create = () => {
  // taking values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // to navigate to home page
  const navigate = useRouter();

  // call redux
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleCreate = (e) => {
    e.preventDefault();

    // add user in redux
    dispatch(createUser({ id: users[users.length - 1].id + 1, name, email }));

    navigate.replace("/");
  };

  return (
    <div className="container mx-auto flex justify-center items-center w-[100vw] h-[100vh]">
      <div className="p-10 pt-4 bg-gray-600 min-w-[100%] md:min-w-[60%]">
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Create new user
        </h1>

        <form onSubmit={handleCreate}>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 rounded-md outline-none"
          />

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-md outline-none my-3"
          />

          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Create;
