'use client'

import {NavbarContent, NavbarItem} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";

export default function NavbarMenuItems(){
    const router = useRouter()

    return(
        <NavbarContent className="flex gap-4" justify="center">
            <NavbarItem isActive>
                <Link href="/">
                    Home
                </Link>
            </NavbarItem>
            <NavbarItem isActive>

                <Link href="/shop">
                    Shop
                </Link>
            </NavbarItem>
            <NavbarItem isActive>
                <Link href="/about-us">
                    About Us
                </Link>
            </NavbarItem>
            <NavbarItem isActive>
                <Link href="/contact-us">
                    Contact Us
                </Link>
            </NavbarItem>
        </NavbarContent>
    )
}