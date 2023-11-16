'use client'
import {Button} from "@nextui-org/react";
import { CiTrash } from "react-icons/ci";
import Image from "next/image";
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {CiShoppingCart} from "react-icons/ci";
import {ScrollShadow} from "@nextui-org/react";
import {Separator} from "@/components/ui/separator";
import {useEffect} from "react";

const cartItems = [{
    product: 0,
    quantity: 1,
    weight: 0
},{
    product: 0,
    quantity: 1,
    weight: 0
}]
const products = [{
    displayName :"Shrimp",
    image: "/images/shrimp.png",
    price: 10,
    description: "Things You Need To Know There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to...",
    weight: [500,1000]
}]

export function CartSheet() {
    let totalPrice = 0
    const total = cartItems.reduce((acc, curr) => {
        const product = products[curr.product]
        return acc + (product.price * curr.quantity)
    }, 0)
    useEffect(() => {
        if(cartItems.length > 0){
            const total = cartItems.reduce((acc, curr) => {
                const product = products[curr.product]
                return acc + (product.price * curr.quantity)
            }, 0)
            totalPrice = total
        }
      }, [cartItems]);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <CiShoppingCart className="w-6 h-6 hover:fill-green-700"/>
            </SheetTrigger>
            <SheetContent className="max-h-screen pb-20">
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                    <SheetDescription>
                       Items: 0
                    </SheetDescription>
                </SheetHeader>
                <div className="h-full w-full flex flex-col justify-center items-center space-y-4">
                    <Label className="text-lg font-bold">Your cart is empty</Label>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button className="w-full text-white" color="success">Go To Shop</Button>
                        </SheetClose>
                    </SheetFooter>
                    <ScrollShadow className="w-full h-full">
                        {cartItems.map((item, index) => {
                            const product = products[item.product]
                            return(
                                <div key={index} className="flex flex-col space-y-2">
                                    <Separator />
                                    <div className={"grid grid-cols-5 w-full"}>
                                        <Image src={product.image} alt="logo" height={65} width={65} className="object-contain aspect-square col-span-1"/>
                                        <div className={"flex flex-col p-2 col-span-3"}>
                                            <Label className="text-base font-normal">{product.displayName} - {product.weight[item.weight]}g</Label>
                                            <Label className="text-base font-normal">QTY : {item.quantity}</Label>
                                            <section className={"flex flex-row"}>
                                                <Label className="text-xl font-black">৳</Label>
                                                <Label className="text-base font-normal">{product.price.toFixed(2)}</Label>
                                            </section>
                                        </div>
                                        <div className="grid col-span-1 justify-items-end p-2">
                                            <CiTrash className="w-5 h-5 cursor-pointer stroke-1" color="red"/>
                                        </div>
                                    </div>
                                    <Separator />
                                </div>
                            )
                        })}
                    </ScrollShadow>
                    <div className="w-full flex flex-col space-y-2">
                        <div className="flex flex-row justify-between">
                            <Label className="text-lg font-bold">Total</Label>
                            <Label className="text-lg font-bold">${total.toFixed(2)}</Label>
                        </div>
                        <Button className="w-full text-white" color="success">Checkout</Button>
                    </div>
                </div>

            </SheetContent>
        </Sheet>
    )
}
