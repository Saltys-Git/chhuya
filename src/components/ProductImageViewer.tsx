'use client'
import Image from "next/image";
import {useState} from "react";
import {cn} from "@/lib/utils";

interface ProductImageViewerProps {
    item: {
        longDescription: string;
        reviews: { rating: number; comment: string; user: string }[];
        price: number;
        name: string;
        weight: string;
        id: number;
        shortDescription: string;
        category: string;
        pictures: string[]
    } | undefined
}

export default function ProductImageViewer({item}: ProductImageViewerProps){
    const [indexValue, setIndexValue] = useState<number>(0)
	return (
        <div className="w-1/2 p-4 flex flex-col space-y-2">
            <div className="relative w-full aspect-square bg-slate-200">
                <Image src={item?.pictures[indexValue] as string} alt={item?.name as string} fill className="object-cover"/>
            </div>
            <div className="flex flex-row space-x-2">
                {item?.pictures.map((picture, index) => {
                    return(
                        <div onClick={()=>{
                            setIndexValue(index)
                        }} key={index} className={cn("relative h-[70px] aspect-square bg-slate-200 hover:ring-2 hover:ring-green-500", indexValue===index && "ring-2 ring-green-500")}>
                            <Image src={picture} alt={item?.name as string} fill className="object-cover"/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}