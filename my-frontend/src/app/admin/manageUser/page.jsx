"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Link from 'next/link'

const ManageUser = () => {
    const fetchUserList = () => {
        axios
            .get("http://localhost:5000/user/getall")
            .then((res) => {
                console.log(res.status);
                console.log(res.data);
                setUserList(res.data);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to fetch User List");
            });
    };
    useEffect(() => {
        fetchUserList();
    }, []);

    const deleteUser = (id) => {
        axios.delete('http://localhost:5000/user/delete/' + id)
            .then((result) => {
                toast.success("User Deleted Successfully");
                fetchUserList();
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to Delete User");
            });
    };

    const [userList, setUserList] = useState([]);

    return (
        <div className=" mr-12 lg:max-w-[80%] mx-auto py-10">
            <div className="border rounded-xl shadow-lg p-8 ">
                <h1 className="text-center font-bold text-3xl">Manage User</h1>
                {/* <hr/> */}

                <table className="w-full mt-4 mb-2">
                    <thead className="bg-violet-400 text-white">
                        <tr>
                            <th className="p-2 border border-white">ID</th>
                            <th className="p-2 border border-white">NAME</th>
                            <th className="p-2 border border-white">EMAIL</th>
                            <th className="p-2 border border-white">PASSWORD</th>
                            <th colSpan={2}>ACTIONS</th>
                        </tr>
                    </thead>

                    <tbody className="bg-violet-400">
                        {userList.map((user) => {
                            return (
                                <tr key={user._id}>
                                    <td className="p-2 border via-violet-300">{user._id} </td>
                                    <td className="p-2 border via-violet-300">{user.name} </td>
                                    <td className="p-2 border via-violet-300">{user.email} </td>
                                    <td className="p-2 border via-violet-300">{user.password}</td>
                                    <td onClick={() => deleteUser(user._id)} className="p-2 border via-violet-300">
                                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                                            Delete
                                        </button>
                                    </td>
                                    <td className="p-2 border via-violet-300">
                                        <Link href={'/updateuser/' + user._id} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                            Update
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;