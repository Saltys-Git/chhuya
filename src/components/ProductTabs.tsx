'use client'
import {Card, CardBody, Tab, Tabs, User} from "@nextui-org/react";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";

interface ProductTabsProps {
    item: {
        longDescription: string;
        reviews: { rating: number; comment: string; user: string } [];
        price: number;
        name: string;
        weight: string;
        id: number;
        shortDescription: string;
        category: string;
        pictures: string[]
    } | undefined
}
function getRandomDate(startDate:any, endDate:any) {
    // Convert input strings to Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate a random time between the start and end dates
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());

    // Create a new Date object using the random time
    const randomDate = new Date(randomTime);

    // Format the date as YYYY-MM-DD (you can customize this format)
    const formattedDate = `${randomDate.getFullYear()}-${(randomDate.getMonth() + 1).toString().padStart(2, '0')}-${randomDate.getDate().toString().padStart(2, '0')}`;

    return formattedDate;
}


export default function ProductTabs({item}: ProductTabsProps){
    return(
        <div className="flex w-full flex-col">
            <Tabs aria-label="Options" variant={"underlined"} fullWidth color={"success"} defaultSelectedKey={"ai"}>
                <Tab key="ai" title="ADDITIONAL INFORMATION">
                    <Separator/>
                    <Card shadow={"none"} radius={"none"}>
                        <CardBody className={"flex flex-row p-8"}>
                            <p className="text-center p-8 text-lg font-bold w-full text-slate-400">Nothing to show here.</p>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="review" title="REVIEW">
                    <Separator/>
                    <Card shadow={"none"} radius={"none"}>
                        <CardBody className={"flex flex-col space-y-4 p-8"}>
                            {item?.reviews.map((review, index) => (
                                <div key={index} className="w-full">
                                    <User
                                        name={review.user}
                                        description={"@" +review.user.toLowerCase()}
                                        avatarProps={{
                                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                        }}
                                    />
                                    <Card className="ml-12"><CardBody>{review.comment}</CardBody></Card>
                                    <p className="w-full text-right p-2">{getRandomDate('2022-01-01', '2023-01-01')}</p>
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    )
}