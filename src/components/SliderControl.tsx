// components/CarouselControls.tsx
import classNames from "classnames";
import clsx from "clsx";
import {MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";

type Props = {
    canScrollPrev: boolean;
    canScrollNext: boolean;
    onPrev(): void;
    onNext(): void;
};
const SliderControl = (props: Props) => {
    return (
        <div className="flex gap-2 justify-between w-full relative">
            {/*<button
                onClick={() => {
                    if (props.canScrollPrev) {
                        props.onPrev();
                    }
                }}
                disabled={!props.canScrollPrev}
                className={classNames({
                    "px-4 py-2 text-white rounded-md ": true,
                    "bg-indigo-200": !props.canScrollPrev,
                    "bg-indigo-400": props.canScrollPrev,
                })}
            >
                Prev
            </button>*/}
            <MdArrowBackIosNew onClick={() => {
                if (props.canScrollPrev) {
                    props.onPrev();
                }
            }}
            className={clsx("sm:-top-[225px] left-0 ml-2 -top-[130px] absolute sm:w-[60px] sm:h-[60px] w-5 h-5",
            !props.canScrollPrev && "hidden")}/>
            <MdArrowForwardIos
                onClick={() => {
                    if (props.canScrollNext) {
                        props.onNext();
                    }
                }}
                className={clsx("sm:-top-[225px] right-0 mr-2 -top-[130px] absolute sm:w-[60px] sm:h-[60px] w-5 h-5",
                    !props.canScrollNext && "hidden")}/>
            {/*<button
                onClick={() => {
                    if (props.canScrollNext) {
                        props.onNext();
                    }
                }}
                disabled={!props.canScrollNext}
                className={classNames({
                    "px-4 py-2 text-white rounded-md sm:-top-[320px] right-0 -top-[130px] absolute": true,
                    "bg-indigo-200": !props.canScrollNext,
                    "bg-indigo-400": props.canScrollNext,
                })}
            >
                Next
            </button>*/}
        </div>
    );
};
export default SliderControl;
