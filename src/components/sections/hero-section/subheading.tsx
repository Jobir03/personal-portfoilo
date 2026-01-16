import { Stars } from "@/assets/stars";

type PropsType = {
  text: string;
};

export function Subheading({ text }: PropsType) {
  return (
    <div className="rounded-full mb-6 max-w-fit mx-auto bg-linear-to-r from-[hsl(227,100%,63%,0.5)] to-[hsl(227,100%,70%,0.5)] p-0.5">
      <div className="bg-white dark:bg-dark-primary py-2 text-xs md:text-sm items-center gap-1 md:gap-2 px-5 inline-flex dark:text-white/90 rounded-full">
        <Stars />
        <p>{text}</p>
      </div>
    </div>
  );
}
