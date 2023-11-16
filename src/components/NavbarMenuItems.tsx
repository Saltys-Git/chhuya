'use client'

import {NavbarContent, NavbarItem} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

export default function NavbarMenuItems(){
    const pathname = usePathname()

    return(
        <NavbarContent className="flex gap-4" justify="center">
            <NavbarItem isActive>
                <Link href="/" className={cn("font-semibold hover:text-green-700 hover:font-bold", pathname === "/" && "text-green-700 font-bold")}>
                    Home
                </Link>
            </NavbarItem>
            <NavbarItem isActive>

                <Link href="/shop" className={cn("font-semibold hover:text-green-700 hover:font-bold", pathname === "/shop" && "text-green-700 font-bold")}>
                    Shop
                </Link>
            </NavbarItem>
            <NavbarItem isActive>
                <Link href="/about-us" className={cn("font-semibold hover:text-green-700 hover:font-bold", pathname === "/about-us" && "text-green-700 font-bold")}>
                    About Us
                </Link>
            </NavbarItem>
            <NavbarItem isActive>
                <Link href="/contact-us" className={cn("font-semibold hover:text-green-700 hover:font-bold", pathname === "/contact-us" && "text-green-700 font-bold")}>
                    Contact Us
                </Link>
            </NavbarItem>
        </NavbarContent>
    )
}