import {Button} from '@nextui-org/button';
import {Label} from "@/components/ui/label";
import {Card, CardFooter, Image} from "@nextui-org/react";
import NextImage from 'next/image';
import {Separator} from "@/components/ui/separator";
const team = [
  {name:"Sample Text", position:"CEO", image:"/images/person3.jpg"},
  {name:"Sample Text", position:"GM", image:"/images/person3.jpg"},
  {name:"Sample Text", position:"CMO", image:"/images/person3.jpg"},
]
export default function Home() {
  return (
    <div>
      <div className="h-[150px] w-full flex flex-row items-center justify-center bg-[url('../../public/images/contact-bg.jpg')] bg-center bg-cover ">
        <div className="w-full h-full bg-slate-500/50 flex flex-col justify-center items-center">
          <Label className="text-4xl font-bold text-center text-white ">About us</Label>
          <Label className="text-sm mt-2 text-center text-white">Home &gt; About us</Label>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 p-8 px-24 gap-8 my-36">
        <div className="col-span-2 flex flex-col relative w-full items-center justify-center">
          <Image
              isZoomed
              src="/images/about1.jpg"
              alt="Chhuya Frozen Foods Ltd"
              className="object-cover aspect-video h-[500px] mb-10"
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <Label className="text-4xl font-bold mb-4">Who We Are?</Label>
          <div className="flex flex-row items-center space-x-2">
            <Separator className="w-[50px] h-[2px] bg-green-700"/>
            <Label className="text-sm">Where Quality Meets Freshness, Bringing Ocean Bounty to Your Table.</Label>
          </div>
          <div className="space-y-4 flex flex-col">
            <Label className="text-sm mt-6 leading-loose">
              CFFL operates 98 own ponds in Gazipur and Bramonbaria for the purpose of fish cultivation. 15 number of Fisheries graduate are working with CFFL, who are responsible for  looking after small fry fish, Pond Management, Identify and monitor areas and issues impacting fish, Research ecosystems to determine impacts caused by global change, pollution, and other causes.
            </Label>
            <Label className="text-sm mt-2 leading-loose">
              CFFL possesses a total land area of 500( Five Hundred) decimal units to support its factory operations located in Dasuya, Narayanpur, Kapasia, Gazipur which maintain all kinds of international standard procedures. Through these facilities, the company efficiently carries out fish farming, processing, and distribution activities to meet market demands and contribute to the local economy.
            </Label>
            <Label className="text-sm mt-2 leading-loose">
              As a startup company, we are driven by a passion to make CFFL a trusted name in the frozen food industry. With our unwavering commitment to quality, sustainability, and customer satisfaction, we are trying to create an appreciate place for ourselves in the market and become a go-to choice for frozen fish products.
            </Label>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 p-8 px-24 gap-8 my-36">
        <div className="col-span-2 flex flex-col">
          <Label className="text-4xl font-bold mb-4">Our Story</Label>
          <div className="flex flex-row items-center space-x-2">
            <Separator className="w-[50px] h-[2px] bg-green-700"/>
            <Label className="text-sm">Where Quality Meets Freshness, Bringing Ocean Bounty to Your Table.</Label>
          </div>
          <div className="space-y-4 flex flex-col">
            <Label className="text-sm mt-6 leading-loose">
              Chhuya Frozen Foods Limited, a sister concern of Chhuya Group is on of the largest conglomerates in Bangladesh, with a turnover of USD $117.65 million equivalent to BDT 10,000 million. Currently Chhuya Group operating 4 entitles such as Chhuya Frozen Foods Ltd, Chhuya Agro Products Ltd, Chhuya Fisheries & Hatcheries Limited & Peerage Properties Ltd.
            </Label>
            <Label className="text-sm mt-2 leading-loose">
              For special contribution to the Fisheries industry , Chhuya Group achieved Gold Medal in 2023 from the Bangladeshi Government..
            </Label>
          </div>
        </div>
        <div className="col-span-2 flex flex-col relative w-full items-center justify-center">
          <Image
              isZoomed
              src="/images/about2.png"
              alt="Chhuya Frozen Foods Ltd"
              className="object-cover aspect-video h-[500px] mb-10"
          />
        </div>
      </div>
      <div className="my-36 h-[350px] w-full flex flex-row items-center justify-between bg-[url('../../public/images/about3.jpg')] bg-fixed bg-center bg-cover ">
        <div className="p-24 w-full h-full bg-slate-500/80 flex flex-col justify-center items-center">
          <Label className="text-4xl font-bold text-center text-white ">Our Mission</Label>
          <Separator className="w-[50px] h-[2px] bg-green-700 mt-2 mb-2"/>
          <Label className="text-sm mt-2 text-center text-white">To provide our customers with high
            quality, ensure availability and best prices fish products.
          </Label>
        </div>
        <div className="p-24 w-full h-full bg-slate-500/80 flex flex-col justify-center items-center">
            <Label className="text-4xl font-bold text-center text-white ">Our Vision</Label>
            <Separator className="w-[50px] h-[2px] bg-green-700 mt-2 mb-2"/>
            <Label className="text-sm mt-2 text-center text-white">To be the Leading House-hold Brand as well as promoting the health benefits of consuming fish.
            </Label>
          </div>
      </div>
      <div className="flex flex-col justify-center items-center my-16">
        <Label className="text-4xl font-semibold">Behind The Brand</Label>
        <Label className="text-sm text-center max-w-[900px] p-2">
          Meet the Heartbeat of Chhuya Frozen Foods Ltd. – Our Team is a dedicated blend of passion, expertise, and unwavering commitment to delivering the finest frozen seafood. From seasoned fishermen to meticulous quality control specialists, our diverse talents converge to ensure that every catch is handled with care, and each product bears the hallmark of excellence. Together, we navigate the seas of innovation and sustainability, united by a shared vision to bring you the freshest, most delectable frozen fish. Get to know the faces behind your seafood journey and discover the collective spirit that propels Chhuya towards culinary perfection.
        </Label>
        <Separator className="w-[120px] bg-green-700 h-[2px] mb-4 mt-2"/>
        <div className="flex flex-row space-x-12 p-6 justify-between px-16">
          {team.map((person, i) => {
            return (
                <Card
                    key={i}
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                >
                  <Image
                      alt="Woman listing to music"
                      className="object-contain bg-green-200"
                      height={200}
                      src={person.image}
                      width={200}
                  />
                  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-gray-300/80">{person.name}</p>
                    <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                      {person.position}
                    </Button>
                  </CardFooter>
                </Card>
            );
          })
          }
        </div>
      </div>
    </div>
  )
}
