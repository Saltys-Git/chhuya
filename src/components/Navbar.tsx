import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {Logo} from "@/components/Logo";
import {CiHeart, CiSearch, CiUser} from "react-icons/ci";
import {CartSheet} from "@/components/CartSheet";
import Link from "next/link";
import {SearchSheet} from "@/components/SearchSheet";

export default function NavbarComp() {
    return (
        <Navbar shouldHideOnScroll maxWidth="full">
            <NavbarBrand>
                <Link href="/" className="flex flex-row items-center">
                    <Logo />
                    <p className="font-bold text-inherit">CHHUYA FROZEN FOODS</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/asd">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="/" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
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
