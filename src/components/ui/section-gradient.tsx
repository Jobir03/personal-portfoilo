import { cn } from "@/lib/utils";

interface SectionGradientProps {
    className?: string;
}

export function SectionGradient({ className }: SectionGradientProps) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                "absolute top-0 left-0 w-full flex justify-center pointer-events-none overflow-hidden select-none",
                className
            )}
        >
            <div className="w-[1000px] md:w-[1222px] shrink-0 relative -top-[100px] sm:-top-[150px] opacity-80 dark:opacity-60">
                <svg
                    width="1222"
                    height="283"
                    viewBox="0 0 1222 283"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                >
                    <g opacity="0.7" filter="url(#filter0_f_9289_13491)">
                        <circle cx="772" cy="-167.171" r="250" fill="#4E6EFF" />
                    </g>
                    <g opacity="0.3" filter="url(#filter1_f_9289_13491)">
                        <circle cx="450" cy="-167.171" r="250" fill="#FF58D5" />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_9289_13491"
                            x="322"
                            y="-617.171"
                            width="900"
                            height="900"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="100"
                                result="effect1_foregroundBlur_9289_13491"
                            />
                        </filter>
                        <filter
                            id="filter1_f_9289_13491"
                            x="0"
                            y="-617.171"
                            width="900"
                            height="900"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="100"
                                result="effect1_foregroundBlur_9289_13491"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
}
