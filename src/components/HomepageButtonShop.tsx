"use client"
import {Button} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";

export default function HomepageButtonShop(){
    const router = useRouter()
    return(
        <div className="w-1/2">
            <Label className="text-lg font-bold">Why Eat Frozen Fish ?</Label>
            <Separator className="w-1/3 bg-green-700 h-[2px] my-4"/>
            <div className="flex flex-col space-y-2">
                <Label className="text-sm text-slate-500 px-4 pointer-none ">
                    ◼ Long Shelf Life: One of the key benefits of frozen fish is its extended shelf life.
                    Freezing fish preserves its freshness and nutritional value, allowing customers to enjoy
                    seafood even if they don&apos;t have immediate access to fresh fish.
                </Label>
                <Label className="text-sm text-slate-500 px-4 pointer-none ">
                    ◼ Convenience: Frozen fish is incredibly convenient, as it eliminates the need for frequent
                    grocery store trips. It can be stored for an extended period without compromising its taste
                    or quality, making it a great option for individuals with busy schedules.
                </Label>
                <Label className="text-sm text-slate-500 px-4 pointer-none ">
                    ◼ Nutritional Value: Freezing is an effective method of preserving nutrients in fish. By
                    freezing fish shortly after catch, Chhuya Frozen ensures that essential vitamins, minerals,
                    and omega-3 fatty acids are retained. This makes frozen fish a nutritious choice for
                    maintaining a healthy diet.
                </Label>
                <Label className="text-sm text-slate-500 px-4 pointer-none ">
                    ◼ Versatility: Frozen fish offers a wide range of options when it comes to cooking. Whether
                    you prefer grilling, baking, or frying, frozen fish can be easily prepared in various ways,
                    providing a versatile and flavorful dining experience.
                </Label>
                <Label className="text-sm text-slate-500 px-4 pointer-none ">
                    ◼ Availability: Chhuya Frozen ensures a consistent supply of high-quality frozen fish
                    throughout the year, regardless of seasonal variations. This availability allows customers
                    to enjoy their favorite fish species all year round.
                </Label>
                </div>
            <Button onClick={() => router.push('/shop')} className="mt-4 ml-4 text-white" size="md" radius="none" color="success">Shop Now</Button>
        </div>
    )
}