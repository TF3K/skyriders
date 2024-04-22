"use client"

import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { Button } from "../ui/button"
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

export function Social(){
    const onClick = (provider: "google" | "facebook") => {
        signIn(provider,{
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        });
    }

    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
            size={"lg"}
            className="w-full"
            variant={"outline"}
            onClick={async () => onClick("google")}
            >
                <FcGoogle className="h-6 w-6" />
            </Button>
            <Button
            size={"lg"}
            className="w-full"
            variant={"outline"}
            onClick={() => onClick("facebook")}
            >
                <FaFacebook className="h-6 w-6 text-blue-600" />
            </Button>
        </div>
    )
}