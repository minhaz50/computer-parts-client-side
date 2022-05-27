import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const Login = () => {
  const [SignInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 className="text-5xl font-semibold text-center">Login</h2>

          <div className="divider">OR</div>
          <button
            onClick={() => SignInWithGoogle()}
            className="btn btn-outline"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
