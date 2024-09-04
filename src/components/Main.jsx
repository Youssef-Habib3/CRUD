"use client";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import Link from "next/link";
import { deleteUser } from "@/store/features/user";

const Main = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  return (
    <main className="overflow-auto">
      <table className="table w-full rounded-md overflow-hidden">
        <thead className="bg-gray-100 text-left h-10">
          <tr>
            <th className="min-w-10 text-center">ID</th>
            <th className="min-w-40">Name</th>
            <th className="min-w-10">Email</th>
            <th className="min-w-20 text-center">Active</th>
          </tr>
        </thead>

        <tbody className="text-left">
          {users.map((user, index) => (
            <tr key={index} className="border-b last:border-none">
              <td className="text-center">{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="ml-5 text-center flex justify-center items-center gap-1">
                <Link href={`/edit/${user.id}`}>
                  <Button variant="outline">Edit</Button>
                </Link>
                {users.length > 1 && (
                  <Button
                    variant="destructive"
                    onClick={() => dispatch(deleteUser({ id: user.id }))}
                  >
                    Delete
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Main;
