"use client"
import {Button} from "@nextui-org/button";
import {useRouter} from "next/navigation";

export default function HomepageButtonShop(){
    const router = useRouter()
    return(
        <Button onClick={() => router.push('/shop')} className="mt-4 ml-4 text-white" size="md" radius="none" color="success">Shop Now</Button>
    )
}