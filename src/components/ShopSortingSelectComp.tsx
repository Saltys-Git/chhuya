'use client'
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
const sortingValues = [
    {label: "Default sorting"},
    {label: "Best selling"},
    {label: "Alphabetically, A-Z"},
    {label: "Price, low to high"},
    {label: "Price, high to low"},
    {label: "Date, new to old"},
    {label: "Date, old to new"},
];

export default function ShopSortingSelectComp(){
    return(
        <Select
              items={sortingValues}
              label="Sorting"
              className="max-w-xs"
              variant={"underlined"}
          >
              {(value) => <SelectItem key={value.label}>{value.label}</SelectItem>}
          </Select>
    )
}