import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {Logo} from "@/components/Logo";
import {CiHeart, CiUser} from "react-icons/ci";
import {CartSheet} from "@/components/CartSheet";
import Link from "next/link";
import {SearchSheet} from "@/components/SearchSheet";
import NavbarMenuItems from "@/components/NavbarMenuItems";

export default function NavbarComp() {
    return (
        <Navbar shouldHideOnScroll maxWidth="full">
            <NavbarBrand>
                <Link href="/" className="flex flex-row items-center">
                    <Logo />
                    <p className="font-bold text-inherit">CHHUYA FROZEN FOODS</p>
                </Link>
            </NavbarBrand>
            <NavbarMenuItems/>
            <NavbarContent justify="end">
                <NavbarItem className="flex cursor-pointer">
                    <SearchSheet/>
                </NavbarItem>
                <NavbarItem className="flex cursor-pointer">
                    <Link href="/authentication">
                        <CiUser className="w-6 h-6"/>
                    </Link>
                </NavbarItem>
                <NavbarItem className="flex cursor-pointer">
                    <CiHeart className="w-6 h-6"/>
                </NavbarItem>
                <NavbarItem className="flex cursor-pointer">
                    <CartSheet/>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
