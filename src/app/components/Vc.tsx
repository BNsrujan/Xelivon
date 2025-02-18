import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import React from 'react'
 
const reviews = [
  {
    name: "Jack",
   
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
   
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
   
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
   
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
   
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
 
}: {
  img: string;
  name: string;

}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex justify-center h- w-64 flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="">
          <figcaption className="text-sm font-medium dark:text-white">
            
          </figcaption>
    </div>
    </div>
    </figure>

  );
};

export function Vc() {
  return (
    <div className=' flex w-full  bg-white rounded-2xl justify-center items-center gap-7 px-12'>
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
     
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
    </div>
  );
}
