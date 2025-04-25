interface SectionTitleProps {
    blackText: string;
    grayText: string;
    inline?: boolean; // true = same row, false = stacked
    maxWidth?: string; // Tailwind width class, e.g., "max-w-xl"
  }
  
  export default function SectionTitle({
    blackText,
    grayText,
    inline = false,
    maxWidth = "max-w-8xl",
  }: SectionTitleProps) {
    return (
      <div className={`w-full ${maxWidth}`} data-aos="slide-right" data-aos-duration="500" data-aos-easing="ease-out-back" data-delay="200">
        {inline ? (
          <h2 className="text-5xl/tight font-bold">
            <span className="text-black dark:text-white">{blackText} </span>
            <span className="text-secondary">{grayText}</span>
          </h2>
        ) : (
          <div>
            <h2 className="text-5xl/tight font-bold text-black dark:text-white">{blackText}</h2>
            <h2 className="text-5xl/tight font-bold text-secondary">{grayText}</h2>
          </div>
        )}
      </div>
    );
  }
  