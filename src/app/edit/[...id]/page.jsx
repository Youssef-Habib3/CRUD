"use client";

import { Button } from "@/components/ui/button";
import { updateUser } from "@/store/features/user";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Create = () => {
  // call redux
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  // get id
  const { id } = useParams();
  const existingUser = users.filter((f) => f.id == id);

  const { name, email } = existingUser[0];

  // set values and update them
  const [uName, setUName] = useState(name);
  const [uEmail, setUEmail] = useState(email);

  // to navigate to home page
  const navigate = useRouter();

  const handleUpdate = (e) => {
    e.preventDefault();

    // update redux
    dispatch(updateUser({ id: id, name: uName, email: uEmail }));

    navigate.replace("/");
  };

  return (
    <div className="container mx-auto flex justify-center items-center w-[100vw] h-[100vh]">
      <div className="p-10 pt-4 bg-gray-600 min-w-[100%] md:min-w-[60%]">
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Update a user
        </h1>

        <form onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="Update name"
            value={uName}
            onChange={(e) => setUName(e.target.value)}
            className="w-full p-3 rounded-md outline-none"
          />

          <input
            type="email"
            placeholder="Update email"
            value={uEmail}
            onChange={(e) => setUEmail(e.target.value)}
            className="w-full p-3 rounded-md outline-none my-3"
          />

          <Button>Update</Button>
        </form>
      </div>
    </div>
  );
};

export default Create;
