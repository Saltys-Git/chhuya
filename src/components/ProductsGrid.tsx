"use client"
import {Button} from "@nextui-org/button";
import {CiHeart, CiShoppingCart} from "react-icons/ci";
import {products} from "@/lib/savedData";
import {Card, CardFooter, CardHeader, Image} from "@nextui-org/react";

export default function ProductsGrid(){
    return(
        <div className="grid grid-cols-4 gap-4 p-4">
            {products.map((product, index) => {
                return (
                    <Card key={index} isPressable isFooterBlurred
                          className="w-full aspect-square col-span-1 cursor-pointer">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-green-700/60 uppercase font-bold">New</p>
                            <h4 className="text-black font-medium text-2xl">{product.name}</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-full scale-75 object-contain"
                            src={product.pictures[0]}
                        />
                        <CardFooter
                            className="absolute bg-sky-300/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                            <div>
                                <p className="text-black font-medium text-xl"> ৳{product.price.toFixed(2)}</p>
                            </div>

                            <div className="flex flex-row space-x-2">
                                <Button isIconOnly color="success">
                                    <CiHeart size={20} className="fill-white"/>
                                </Button>
                                <Button isIconOnly color="success">
                                    <CiShoppingCart size={20} className="fill-white"/>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                )
            })}
        </div>

    )
}