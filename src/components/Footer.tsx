import {Separator} from "@/components/ui/separator";
import {Label} from "@/components/ui/label";
import Link from "next/link";
import {Image} from "@nextui-org/react";
import NextImage from "next/image";
import { FaFacebook,FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer(){
    return(
        <div className="w-full bg-white">
            <Separator/>
            <div className="grid grid-cols-4 space-x-2">
                <div className="flex flex-col p-6">
                    <NextImage src={"/images/logo.png"} alt="logo" height={120} width={120}/>
                    <Label className="text-lg font-bold mt-2">Chhuya Frozen Foods Ltd.</Label>
                    <Label className="text-sm">Healthy Touch</Label>
                    <div className="flex flex-row space-x-4 py-4">
                        <FaFacebook size={20}/>
                        <FaInstagram size={20}/>
                        <FaXTwitter size={20}/>
                    </div>
                </div>
                <div className="flex flex-col p-6 space-y-4">
                    <Label className="text-lg font-bold">Help & Information</Label>
                    <Separator className="w-[50px]"/>
                    <Link href="/about-us" className="hover:text-green-700 text-sm font-semibold transition-all ease-in-out duration-500">About Us</Link>
                    <Link href="#" className="hover:text-green-700 text-sm font-semibold transition-all ease-in-out duration-500">Privacy Policy</Link>
                    <Link href="#" className="hover:text-green-700 text-sm font-semibold transition-all ease-in-out duration-500">Terms & Conditions</Link>
                    <Link href="#" className="hover:text-green-700 text-sm font-semibold transition-all ease-in-out duration-500">Products Return</Link>
                    <Link href="#" className="hover:text-green-700 text-sm font-semibold transition-all ease-in-out duration-500">Wholesale Policy</Link>
                </div>
                <div className="flex flex-col p-6 space-y-4">
                    <Label className="text-lg font-bold invisible">Help & Information</Label>
                    <Separator className="w-[50px] invisible"/>
                    <Link href="/contact-us" className="hover:text-green-700 text-sm font-semibold transition-all ease-in-out duration-500">Contact Us</Link>
                    <Link href="#" className="hover:text-green-700 text-sm font-semibold transition-all ease-in-out duration-500">Online Delivery</Link>
                    <Link href="#" className="hover:text-green-700 text-sm font-semibold transition-all ease-in-out duration-500">Complain / Advice</Link>
                    <Link href="#" className="hover:text-green-700 text-sm font-semibold transition-all ease-in-out duration-500">Online Service Support</Link>
                    <Link href="#" className="hover:text-green-700 text-sm font-semibold transition-all ease-in-out duration-500">Payment Terms</Link>
                </div>
                <div className="flex flex-col p-6 space-y-4">
                    <Label className="text-lg font-bold">Stay Connected</Label>
                    <Separator className="w-[50px]"/>
                    <div className="flex flex-col space-y-1">
                        <Label className="text-base font-semibold">Chhuya Frozen Foods Ltd.</Label>
                        <Label className="text-sm">Head Office: House #29, Road # 02, Sector # 07, Uttara, Dhaka-1230.</Label>
                        <Label className="text-sm">Email:</Label>
                        <Link href="mailto:chhuyafrozenfoods@gmail.com" className="-mt-4">chhuyafrozenfoods@gmail.com</Link>
                    </div>
                </div>
            </div>
            <Separator/>
            <div className="flex flex-row justify-between items-center w-full px-4 py-5">
                <Label className="text-sm">© Copyright 2023 | <span><Link href="/" className="font-bold">Chhuya Frozen Foods</Link></span> By <a href="https://www.mytechys.co.uk" target="_blank" rel="noreferrer" className="font-bold">Techy&apos;s</a>.</Label>
                <div className="flex flex-row space-x-1">
                    <Image as={NextImage} shadow="md" src={"/images/bkash-logo.png"} alt="logo"
                           height={40} width={40} radius={"none"}
                           className="object-contain p-1 object-center"/>
                    <Image as={NextImage} shadow="md" src={"/images/rocket-logo.png"} alt="logo"
                           height={40} width={40} radius={"none"}
                           className="object-contain p-1 object-center"/>
                    <Image as={NextImage} shadow="md" src={"/images/visa-logo.png"} alt="logo"
                           height={40} width={40} radius={"none"}
                           className="object-contain p-1 object-center"/>
                    <Image as={NextImage} shadow="md" src={"/images/master-card-logo.png"} alt="logo"
                           height={40} width={40} radius={"none"}
                           className="object-contain p-1 object-center"/>
                </div>
            </div>
        </div>
    )
}