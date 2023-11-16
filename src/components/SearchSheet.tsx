'use client'
import {CiSearch} from "react-icons/ci";
import {Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import {Card, CardBody, Image, Input} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {Label} from "@/components/ui/label";
import {products} from "@/lib/savedData";
import {Button} from "@nextui-org/button";
import {useRouter} from "next/navigation";


export function SearchSheet() {
    const router = useRouter()
    const [searchInput, setSearchInput] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    useEffect(() => {
        if (!open) setSearchInput("")
    }, [open]);
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <CiSearch className="w-6 h-6"/>
            </SheetTrigger>
            <SheetContent className="max-h-screen pb-20" side={"top"}>
                <SheetHeader>
                    <SheetTitle className="w-full text-center">Search Product</SheetTitle>
                </SheetHeader>
                <div className="w-full flex flex-col space-y-4 justify-center items-center">
                    <Input type="text"
                           label="Search"
                           variant="underlined" className="w-3/5"
                           autoComplete="off"
                           value={searchInput}
                           onChange={(e) => {
                               setSearchInput(e.target.value);
                           }}/>
                    {searchInput !== "" &&
                        <div className="w-3/5 flex flex-col justify-center items-center">
                            {products.some((product) => product.name.toLowerCase().includes(searchInput.toLowerCase().trim())) ?
                                (<div className="grid grid-cols-2 w-full gap-2 mt-4 items-center">
                                    {products.filter((product) => product.name.toLowerCase().includes(searchInput.toLowerCase()))
                                        .map((product) => {
                                            return (
                                                <SheetClose key={product.id} asChild>
                                                    <Card isBlurred
                                                          className="border-none bg-cyan-50/60 col-span-1 cursor-pointer"
                                                          isPressable
                                                          shadow="sm"
                                                          onClick={() => {
                                                              router.push(`/shop/items/${product.id}`)
                                                              setOpen(false)
                                                          }}>
                                                        <CardBody className="flex flex-row space-x-2">
                                                            <Image shadow="md" src={product.pictures[0]} alt="logo"
                                                                   height={100} width={100}
                                                                   className="object-contain aspect-square col-span-1 p-2"/>
                                                            <div className="w-full flex flex-col">
                                                                <Label
                                                                    className="text-base font-bold">{product.name}</Label>
                                                                <Label
                                                                    className="text-base font-normal line-clamp-1">{product.shortDescription}</Label>
                                                                <section className={"flex flex-row space-x-1"}>
                                                                    <Label
                                                                        className="text-xl font-black text-green-700">৳</Label>
                                                                    <Label
                                                                        className="text-base text-green-700">{product.price.toFixed(2)} BDT</Label>
                                                                </section>
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </SheetClose>
                                            )
                                        })
                                    }
                                    <SheetClose asChild>
                                        <Button onClick={() => {
                                            router.push('/shop')
                                            setOpen(false)
                                        }} className="col-span-2 mt-4 text-white font-bold" color="success">Show
                                            All</Button>
                                    </SheetClose>
                                </div>)
                                :
                                (<div className="flex flex-col space-y-6 mt-4 w-full items-center">
                                    <Label className="text-lg font-bold">No Result Found</Label>
                                    <SheetClose asChild>
                                        <Button onClick={() => router.push('/shop')}
                                                className="w-full text-white font-bold" color="success">Go To
                                            Shop</Button>
                                    </SheetClose>
                                </div>)
                            }
                        </div>
                    }
                </div>
            </SheetContent>
        </Sheet>
    )
}
