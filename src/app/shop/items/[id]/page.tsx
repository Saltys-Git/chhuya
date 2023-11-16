import {Metadata} from "next";
import {products} from "@/lib/savedData";
import Image from "next/image";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";
import {Card, Input, Tabs, Tab, CardBody, Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import {CiHeart, CiShoppingCart, CiGift, CiDeliveryTruck ,CiMedal ,CiMoneyBill ,CiBank  } from "react-icons/ci";
import {Button} from "@nextui-org/button";
import ProductImageViewer from "@/components/ProductImageViewer";
import ProductTabs from "@/components/ProductTabs";

type Props = {
    params: { id: string }
}

const promoData = [
    {icon: <CiMoneyBill  className={"w-12 h-12 aspect-square fill-green-700"}/>, text: "Cash on Delivery"},
    {icon: <CiDeliveryTruck className={"w-12 h-12 aspect-square fill-green-700"}/>, text: "Free & fast Delivery"},
    {icon: <CiMedal  className={"w-12 h-12 aspect-square fill-green-700"}/>, text: "Premium Quality"},
    {icon: <CiBank  className={"w-12 h-12 aspect-square fill-green-700"}/>, text: "100% Secure Payment"},
]

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    // read route params
    const item = products.find(product => (product.id).toString() === params.id)

    return {
        title: item?.name + " - Chhuya Frozen Foods",
        description: 'Healthy Touch',
    }
}

export default async function Items({ params }: { params: { id: string } }){
    const item = products.find(product => (product.id).toString() === params.id)
    return(
        <div className="">
            <div className="flex flex-row w-full h-fit">
                <ProductImageViewer item={item}/>
                <div className="w-1/2 flex flex-col p-4">
                    <Label className="text-2xl font-bold">{item?.name}</Label>
                    <Label className="text-lg font-bold text-green-700">৳{item?.price.toFixed(2)}</Label>
                    <Label className="text-base mb-2">Weight:  {item?.weight}</Label>
                    <Separator/>
                    <Label className="text-slate-400 my-4 text-sm font-normal">{item?.longDescription}</Label>
                    <div className="flex flex-row items-center space-x-1 my-2">
                        <Label className="text-lg font-bold text-green-700">{Math.floor(Math.random() * 100) + 1}</Label>
                        <Label className="text-base ">sold in last</Label>
                        <Label className="text-lg font-bold text-green-700">{Math.floor(Math.random() * 24) + 1}</Label>
                        <Label className="text-base ">Hour</Label>
                    </div>
                    <div className="flex flex-row space-x-4 my-4 items-center">
                        <Label className="text-base font-bold hover:text-green-700 cursor-pointer">Delivery & Return</Label>
                        <Label className="text-base font-bold hover:text-green-700 cursor-pointer">Ask a Question</Label>
                    </div>
                    <div className="flex flex-row mb-4 mt-1 space-x-1 items-center">
                        <Input type="number" min={1} defaultValue={"1"} className="w-[150px]" labelPlacement={"outside"} variant={"bordered"}/>
                        <Button startContent={<CiGift
                            size={20}
                            className="fill-white"/>}
                                color={"success"} className="text-white w-full">
                            Buy now</Button>
                        <Button startContent={<CiShoppingCart
                            size={20}
                            className="fill-white"/>}
                                color={"success"} className="text-white w-full">
                            Add to cart</Button>
                        <Button isIconOnly color="success">
                            <CiHeart size={20} className="fill-white w-fit"/>
                        </Button>
                    </div>
                    <Separator/>
                    <div className="flex flex-row items-center space-x-1">
                        <Label className="text-base ">Real time </Label>
                        <Label className="text-lg font-bold text-green-700">{Math.floor(Math.random() * 1000) + 1}</Label>
                        <Label className="text-base "> Visitor right now</Label>
                    </div>
                    <Label className="text-sm">Category:  {item?.category}</Label>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6 px-6 my-6">
                {promoData.map((item, index) => (
                    <Card key={index} className="col-span-1 flex flex-col space-y-2 items-center justify-center ring-1 ring-green-700 p-6" shadow={"none"} radius={"sm"}>
                        {item.icon}
                        <Label className="text-sm">{item.text.toUpperCase()}</Label>
                    </Card>
                ))}
            </div>
            <Separator/>
            <ProductTabs item={item}/>
        </div>
    )
}