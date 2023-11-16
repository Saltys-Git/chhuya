'use client'
import {Card, CardBody, Image} from "@nextui-org/react";
import {products} from "@/lib/savedData";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";
import {Button} from "@nextui-org/button";
import {CiHeart, CiShoppingCart} from "react-icons/ci";

export default function DealOfDay(){
    return(
        <div className="grid grid-cols-2 gap-4 p-4">
            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] col-span-1"
                shadow="sm"
            >
                <CardBody>
                    <div
                        className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <Image
                                alt="picture"
                                className="object-contain p-4 aspect-square"
                                height={500}
                                shadow="md"
                                src={products[0].pictures[0]}
                                width="100%"
                            />
                        </div>
                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <Label className="text-xl font-bold">{products[0].name}</Label>
                            <Label className="text-lg font-bold">৳{products[0].price.toFixed(2)}</Label>
                            <Separator className="my-2"/>
                            <Label className="text-sm font-normal">{products[0].shortDescription}</Label>
                            <div className="flex flex-row my-4 space-x-1">
                                <Button startContent={<CiShoppingCart
                                    size={20}
                                    className="fill-white"/>}
                                        color={"success"} className="text-white">
                                    Add to cart</Button>
                                <Button isIconOnly color="success">
                                    <CiHeart size={20} className="fill-white"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Separator className="my-2"/>
                    <div className="flex flex-row justify-between px-4">
                        <Label className="text-lg font-bold">Hurry Up! Offer ends in</Label>
                        <Label className="text-lg font-bold text-red-700">7d : 2h : 5m : 15s</Label>
                    </div>
                </CardBody>
            </Card>
            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] col-span-1"
                shadow="sm"
            >
                <CardBody>
                    <div
                        className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <Image
                                alt="picture"
                                className="object-contain p-4 aspect-square"
                                height={500}
                                shadow="md"
                                src={products[1].pictures[0]}
                                width="100%"
                            />
                        </div>
                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <Label className="text-xl font-bold">{products[1].name}</Label>
                            <Label className="text-lg font-bold">৳{products[1].price.toFixed(2)}</Label>
                            <Separator className="my-2"/>
                            <Label className="text-sm font-normal">{products[1].shortDescription}</Label>
                            <div className="flex flex-row my-4 space-x-1">
                                <Button startContent={<CiShoppingCart
                                    size={20}
                                    className="fill-white"/>}
                                        color={"success"} className="text-white" >
                                    Add to cart</Button>
                                <Button isIconOnly color="success">
                                    <CiHeart size={20} className="fill-white"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Separator className="my-2"/>
                    <div className="flex flex-row justify-between px-4">
                        <Label className="text-lg font-bold">Hurry Up! Offer ends in</Label>
                        <Label className="text-lg font-bold text-red-700">7d : 2h : 5m : 15s</Label>
                    </div>
                </CardBody>
            </Card>

        </div>
    )
}