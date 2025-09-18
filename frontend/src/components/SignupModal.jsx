import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useUserStore } from "@/store/useUserStore";
import { Loader2 } from "lucide-react";

function SignupModal({ signupModal, setSignupModal, setLoginModal }) {
  const { signup, isSigningUp } = useUserStore();
  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isSuccess = await signup(newUserData);
    if (isSuccess) {
      setNewUserData({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
      setSignupModal(false);
      setLoginModal(true);
    }
  };

  return (
    <Dialog open={signupModal} onOpenChange={setSignupModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogDescription>
            Please enter your credentials to sign up.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-gray-300 p-4 rounded-lg shadow"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="p-2 border border-gray-400 rounded"
              required
              value={newUserData.name}
              onChange={(e) =>
                setNewUserData({ ...newUserData, name: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="p-2 border border-gray-400 rounded"
              required
              value={newUserData.email}
              onChange={(e) =>
                setNewUserData({ ...newUserData, email: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="font-semibold">
              Phone (optional)
            </label>
            <input
              type="tel"
              id="phone"
              className="p-2 border border-gray-400 rounded"
              value={newUserData.phone}
              onChange={(e) =>
                setNewUserData({ ...newUserData, phone: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="p-2 border border-gray-400 rounded"
              required
              value={newUserData.password}
              onChange={(e) =>
                setNewUserData({ ...newUserData, password: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-950 rounded text-white"
          >
            <Loader2 className={isSigningUp ? "animate-spin mr-2 inline-block" : "hidden"} />
            {isSigningUp ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <DialogFooter>
          <div className="w-full flex flex-col items-center mt-4 bg-gray-300 p-4 rounded-lg shadow">
            <div className="w-full flex items-center justify-center gap-2 mt-4">
              <button className="p-1">
                <FcGoogle className="inline-block w-8 h-8" />
              </button>

              <button className="p-1">
                <FaGithub className="inline-block h-8 w-8" />
              </button>
            </div>
            <div className="mt-4">
              Already have an account?{" "}
              <button
                onClick={() => {
                  setSignupModal(false);
                  setLoginModal(true);
                }}
                className="text-blue-500 underline cursor-pointer hover:text-blue-700"
              >
                Log In
              </button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SignupModal;
