// components/Carousel.tsx
// import the hook and options type
'use client'
import useEmblaCarousel, {EmblaOptionsType} from "embla-carousel-react";
import React, {PropsWithChildren, useEffect, useState} from "react";
import SliderDots from "@/components/SliderDots";
import SliderControl from "@/components/SliderControl";

// Define the props
type Props = PropsWithChildren & EmblaOptionsType;


const HomeSlider = ({children, ...options}: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    // We need to track the selectedIndex to allow this component to re-render in react.
    // Since emblaRef is a ref, it won't re-render even if there are internal changes to its state.
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        function selectHandler() {
            // selectedScrollSnap gives us the current selected index.
            const index = emblaApi?.selectedScrollSnap();
            setSelectedIndex(index || 0);
        }

        emblaApi?.on("select", selectHandler);
        // cleanup
        return () => {
            emblaApi?.off("select", selectHandler);
        };
    }, [emblaApi]);

    const length = React.Children.count(children);
    const canScrollNext = !!emblaApi?.canScrollNext();
    const canScrollPrev = !!emblaApi?.canScrollPrev();
    return (<div className="w-full">
            <div className="overflow-hidden w-full h-[400px]" ref={emblaRef}>
                <div className="flex">
                    {children}
                </div>
                <SliderControl canScrollPrev={canScrollPrev} canScrollNext={canScrollNext} onPrev={() => emblaApi?.scrollPrev()} onNext={() => emblaApi?.scrollNext()}/>
            </div>
            <SliderDots itemsLength={length} selectedIndex={selectedIndex}/>
        </div>
    );
};
export default HomeSlider;
