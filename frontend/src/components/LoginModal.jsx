import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useUserStore } from "@/store/useUserStore";
import { Loader2 } from "lucide-react";

function LoginModal({ loginModal, setLoginModal, setSignupModal }) {
    const {login, isLoggingIn} = useUserStore();
    const [loginData, setLoginData] = useState({
      email: "",
      password: "",
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      const isSuccess = await login(loginData);
        if (isSuccess) {
          setLoginModal(false);
        }
    };

  return (
    <Dialog open={loginModal} onOpenChange={setLoginModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Please enter your credentials to login.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-300 p-4 rounded-lg shadow">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="p-2 border border-gray-400 rounded"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
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
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-950 rounded text-white"
          >
            <Loader2 className={isLoggingIn ? "animate-spin mr-2 inline-block" : "hidden"} />
            {isLoggingIn ? "Logging In..." : "Login"}
          </button>
          <div>
            <button className="text-blue-500 underline">
              Forgot Password?
            </button>
          </div>
        </form>

        <DialogFooter>
          <div className="w-full flex flex-col items-center mt-4 bg-gray-300 p-4 rounded-lg shadow">
            <div className="w-full flex items-center justify-center gap-2 mt-4">
              <button
                className="p-1"
              >
                <FcGoogle className="inline-block w-8 h-8" />
              </button>

              <button
                className="p-1"
              >
                <FaGithub className="inline-block h-8 w-8" />
              </button>
            </div>
            <div className="mt-4">
              Don't have an account?{" "}
              <button
                onClick={() => {
                  setLoginModal(false);
                  setSignupModal(true);
                }}
                className="text-blue-500 underline cursor-pointer hover:text-blue-700"
              >
                Sign Up
              </button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal;
