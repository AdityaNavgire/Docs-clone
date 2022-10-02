import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <img
        src="https.//links.papareact.com/1ui"
        height="300"
        width="550"
        objectFit="containe"
        alt="/"
      />
      <Button className="w-40 mt-2" color="blue" onClick={() => signIn()}>
        Login
      </Button>
    </div>
  );
}


export default Login;
