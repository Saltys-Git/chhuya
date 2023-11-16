import {Button} from '@nextui-org/button';
import HomeSlider from "@/components/HomeSlider";
import NextImage from "next/image";
import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import {IoFishOutline} from "react-icons/io5";
import {MdOutlineHandshake} from "react-icons/md";
import {BsBox2Heart} from "react-icons/bs";
import {RiSecurePaymentLine} from "react-icons/ri";
import {products} from "@/lib/savedData";
import {CiHeart, CiShoppingCart} from "react-icons/ci";
import HomepageButtonShop from "@/components/HomepageButtonShop";
import ProductsGrid from "@/components/ProductsGrid";
import DealOfDay from "@/components/DealOfDay";

const images = [
    "/images/sample.jpg",
    "/images/sample.jpg",
    "/images/sample.jpg",
];
export default function Home() {
    return (
        <div>
            <div className="flex flex-row space-x-2 my-4 px-4">
                <Card className="w-1/3 h-full">
                    <CardBody className="flex flex-col space-y-2">
                        <Label className="text-base font-semibold w-full text-center">Categories</Label>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2">
                            <IoFishOutline/> <Label className="cursor-pointer">Salt Water Fish</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2">
                            <IoFishOutline/> <Label className="cursor-pointer">Fresh Water Fish</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2">
                            <IoFishOutline/> <Label className="cursor-pointer">Preserved Fish</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2">
                            <IoFishOutline/> <Label className="cursor-pointer">Fish Fillets</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2">
                            <IoFishOutline/> <Label className="cursor-pointer">Shellfish</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2">
                            <IoFishOutline/> <Label className="cursor-pointer">Whole Fish</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2">
                            <IoFishOutline/> <Label className="cursor-pointer">Seafood Blends and Mixes</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2">
                            <IoFishOutline/> <Label className="cursor-pointer">Specialty Seafood</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2">
                            <IoFishOutline/> <Label className="cursor-pointer">Organic and Sustainable
                            Options</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2">
                            <IoFishOutline/> <Label className="cursor-pointer">Breaded and Ready-to-Cook</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2">
                            <IoFishOutline/> <Label className="cursor-pointer">Global Seafood Selection</Label></Link>
                    </CardBody>
                </Card>
                <Card className="w-full p-0 h-[400px]">
                    <HomeSlider loop>
                        {images.map((src, i) => {
                            return (
                                // 👇 style each individual slide.
                                // relative - needed since we use the fill prop from next/image component
                                // h-64 - arbitrary height
                                // flex[0_0_100%]
                                //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                                //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                                <div className="relative h-[400px] flex-[0_0_100%]" key={i}>
                                    {/* use object-cover + fill since we don't know the height and width of the parent */}
                                    <NextImage src={src} fill className="object-cover" alt="alt" priority={false}/>
                                </div>
                            );
                        })}
                    </HomeSlider>
                </Card>

            </div>
            <div className="flex flex-row space-x-6 p-6">
                <Card
                    className="w-full aspect-video bg-green-100 hover:animate-bounce shadow-lg transition-all duration-1000 ease-in-out">
                    <CardBody className="flex flex-col items-center justify-center h-full">
                        <MdOutlineHandshake className="w-14 h-14" color="red"/>
                        <Label className="text-lg font-bold mt-2 pointer-none">Cash on delivery</Label>
                        <Label className="text-sm text-slate-500 px-4 text-center pointer-none">Seal the Deal, Pay with
                            Ease – Cash on Delivery, Where Convenience Meets Confidence!</Label>
                    </CardBody>
                </Card>
                <Card
                    className="w-full aspect-video bg-orange-100 hover:animate-bounce shadow-lg transition-all duration-1000 ease-in-out">
                    <CardBody className="flex flex-col items-center justify-center h-full">
                        <BsBox2Heart className="w-14 h-14" color="red"/>
                        <Label className="text-lg font-bold mt-2 pointer-none">Secure payment</Label>
                        <Label className="text-sm text-slate-500 px-4 text-center pointer-none">Unlock Peace of Mind:
                            Your Transactions, Our Fort Knox – Secure Payments, Seamless Confidence.</Label>

                    </CardBody>
                </Card>
                <Card
                    className="w-full aspect-video bg-purple-100 hover:animate-bounce shadow-lg transition-all duration-1000 ease-in-out">
                    <CardBody className="flex flex-col items-center justify-center h-full">
                        <RiSecurePaymentLine className="w-14 h-14" color="red"/>
                        <Label className="text-lg font-bold mt-2 pointer-none">Delivery on time</Label>
                        <Label className="text-sm text-slate-500 px-4 text-center pointer-none">Prompt Precision, Swift
                            Satisfaction – Delivering On Time, Every Time.</Label>

                    </CardBody>
                </Card>
            </div>
            <div className="mt-24 flex flex-row space-x-6 p-6">
                <div className="w-1/2 flex flex-row justify-center space-x-16">
                    <NextImage src={"/images/homepage.jpg"} alt="logo" height={200} width={200}
                               className="object-cover mb-16"/>
                    <NextImage src={"/images/homepage.jpeg"} alt="logo" height={200} width={200}
                               className="object-cover mt-16"/>
                </div>
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
                        <HomepageButtonShop/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mb-6 mt-24 items-center">
                <Label className="text-2xl font-semibold">Our Best Seller</Label>
                <Separator className="w-[150px] bg-green-700 h-[2px] my-4"/>
                <ProductsGrid/>
            </div>
            <div className="flex flex-col my-24 items-center">
                <Label className="text-2xl font-semibold">Deals of The Day</Label>
                <Separator className="w-[150px] bg-green-700 h-[2px] my-4"/>
                <DealOfDay/>
            </div>
        </div>
    )
}
