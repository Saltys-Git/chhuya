import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";
import ShopSortingSelectComp from "@/components/ShopSortingSelectComp";
import ProductsGrid from "@/components/ProductsGrid";
import {Checkbox, CheckboxGroup, Pagination} from "@nextui-org/react";
import {categories} from "@/lib/savedData";

const price = ["৳100-৳500", "৳501-৳1000", "৳1001-৳2000", "৳2001-৳3000", "৳3001-৳4000", "৳4001-৳5000"]

export default function Shop() {

  return (
    <div className="items-center flex flex-col">
        <div className="h-[150px] w-full flex flex-row items-center justify-center bg-[url('../../public/images/homepage.jpeg')] bg-center bg-cover ">
            <div className="w-full h-full bg-slate-500/50 flex flex-col justify-center items-center">
                <Label className="text-4xl font-bold text-center text-white ">Shop</Label>
                <Label className="text-sm mt-2 text-center text-white">Home &gt; Shop</Label>

            </div>
        </div>
        <div className="w-full flex flex-row">
            <div className="w-1/5 p-4 flex flex-col mt-4">
                <Label className="text-lg font-bold w-full text-center">Filter</Label>
                <Separator/>
                <div className="h-[35px] w-full flex flex-row items-center mt-6">
                    <Separator orientation="vertical" className="w-[2px] bg-green-700"/>
                    <Label className="mx-2 text-base">CATEGORIES</Label>
                    <div className="w-full h-[1px] bg-slate-200"></div>
                </div>
                <div className="w-full flex flex-col space-y-1 my-2 px-2">
                    <CheckboxGroup color={"success"}
                        defaultValue={["Saltwater", "Shellfish"]}
                    >
                        {categories.map(category =>{
                            return(
                                <Checkbox key={category} value={category} size="sm">
                                    {category}
                                </Checkbox>
                            )
                        })
                        }
                    </CheckboxGroup>
                </div>
                <div className="h-[35px] w-full flex flex-row items-center mt-2">
                    <Separator orientation="vertical" className="w-[2px] bg-green-700"/>
                    <Label className="mx-2 text-base">PRICE</Label>
                    <div className="w-full h-[1px] bg-slate-200"></div>
                </div>
                <div className="w-full flex flex-col space-y-1 my-2 px-2">
                    <CheckboxGroup color={"success"}
                    >
                        {price.map(category =>{
                            return(
                                <Checkbox key={category} value={category} size="sm">
                                    {category}
                                </Checkbox>
                            )
                        })
                        }
                    </CheckboxGroup>
                </div>
            </div>
            <div className="w-4/5 flex flex-col p-4 items-center">
                <div className="self-end w-[170px]">
                    <ShopSortingSelectComp/>
                </div>
                <div className="grid grid-cols-4 gap-4 p-4">
                    <ProductsGrid variant={"lg"}/>
                </div>
                <Pagination total={10} initialPage={1} className="my-4" color={"success"}/>
            </div>
        </div>
    </div>
  )
}
