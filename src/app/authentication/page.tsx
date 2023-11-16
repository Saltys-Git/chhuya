'use client'
import {Button} from '@nextui-org/button';
import { FaFacebookF,FaGooglePlusG,FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {Label} from "@/components/ui/label";
import {Input} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import {useState} from "react";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import {cn} from "@/lib/utils";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
export default function Authentication() {
  const [date, setDate] = useState<Date>()
  return (
    <div className="w-full flex flex-row space-x-1 py-24 items-center justify-center h-fit">
      <div className="w-full flex flex-col space-y-2 items-center justify-center">
          <Label className="text-xl font-bold">Login</Label>
          <Label>Enter your email and password to login</Label>
          <div className="flex flex-col w-[60%] pt-8 space-y-2">
            <Input variant="bordered" type="text" label="Phone Number or Email"/>
            <Input variant="bordered" type="password" label="Password"/>
            <Checkbox color="success">Remember me</Checkbox>
          </div>
          <Button className="w-[60%] text-white" color="success">Login</Button>
          <Label className="w-[60%] text-right py-1 text-red-500 cursor-pointer text-[12px]">Forgotten password?</Label>
          <div className="flex flex-row space-x-2 w-[60%] items-center justify-center py-1">
              <div className="w-full h-[1px] bg-slate-200"></div>
              <Label className="truncate w-full h-fit p-1">Or, login with</Label>
              <div className="w-full h-[1px] bg-slate-200"></div>
          </div>
        <div className="flex flex-row space-x-2 w-[60%] items-center justify-center py-1">
          <Button isIconOnly className="bg-blue-500" aria-label="Facebook">
            <FaFacebookF className="w-5 h-5 fill-white"/>
          </Button>
          <Button isIconOnly className="bg-sky-500" aria-label="X">
            <FaXTwitter  className="w-5 h-5 fill-white"/>
          </Button>
          <Button isIconOnly className="bg-rose-500" aria-label="Instagram">
            <FaInstagram  className="w-5 h-5 fill-white"/>
          </Button>
          <Button isIconOnly className="bg-red-500" aria-label="Google Plus">
            <FaGooglePlusG className="w-5 h-5 fill-white"/>
          </Button>
        </div>
      </div>
      <div className="h-[400px] w-[1px] bg-slate-200"></div>
      <div className="w-full flex flex-col space-y-2 items-center justify-center">
        <Label className="text-xl font-bold">Create your account</Label>
        <Label>It&apos;s free and only takes a minute.</Label>
        <div className="flex flex-col w-[60%] pt-8 space-y-2">
          <Input variant="bordered" type="text" label="Full Name" placeholder="Enter your full name"/>
          <Input variant="bordered" type="tel" label="Phone Number" placeholder="Enter your phone number"/>
          <Popover>
            <PopoverTrigger>
              <Button
                  variant={"bordered"}
                  className={"w-full h-[54px] justify-start text-left font-normal"}
              >
                <CalendarIcon className={cn("mr-2 h-4 w-4 ", !date && "stroke-slate-500")} />
                {date ? format(date, "PPP") : <span className="text-slate-500">Your birthday</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
              />
            </PopoverContent>
          </Popover>
          <Select
              label="Select gender"
              className="w-full"
              variant="bordered"
          >
            <SelectItem key={"male"} value={"male"}>
                  Male
            </SelectItem>
            <SelectItem key={"female"} value={"female"}>
                  Female
            </SelectItem>
            <SelectItem key={"other"} value={"other"}>
                  Other
            </SelectItem>
          </Select>
          <Input variant="bordered" type="password" label="Password"/>
          <Checkbox defaultSelected color="success">I&apos;d like to receive exclusive offers and promotions via SMS</Checkbox>
        </div>
        <Button className="w-[60%] text-white" color="success">Signup</Button>
        <Label className="w-[60%] text-sm">By clicking “Signup”, I agree to Chhuya&apos;s Terms of Use and Privacy Policy</Label>
        <div className="flex flex-row space-x-2 w-[60%] items-center justify-center py-1">
          <div className="w-full h-[1px] bg-slate-200"></div>
          <Label className="w-full h-fit py-1 break-keep truncate">Or, signup with</Label>
          <div className="w-full h-[1px] bg-slate-200"></div>
        </div>
        <div className="flex flex-row space-x-2 w-[60%] items-center justify-center py-1">
          <Button isIconOnly className="bg-blue-500" aria-label="Facebook">
            <FaFacebookF className="w-5 h-5 fill-white"/>
          </Button>
          <Button isIconOnly className="bg-sky-500" aria-label="X">
            <FaXTwitter  className="w-5 h-5 fill-white"/>
          </Button>
          <Button isIconOnly className="bg-rose-500" aria-label="Instagram">
            <FaInstagram  className="w-5 h-5 fill-white"/>
          </Button>
          <Button isIconOnly className="bg-red-500" aria-label="Google Plus">
            <FaGooglePlusG className="w-5 h-5 fill-white"/>
          </Button>
        </div>
      </div>
    </div>
  )
}
