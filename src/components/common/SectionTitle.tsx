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
    maxWidth = "max-w-2xl",
  }: SectionTitleProps) {
    return (
      <div className={`w-full ${maxWidth}`}>
        {inline ? (
          <h2 className="text-5xl font-bold">
            <span className="text-black dark:text-white">{blackText} </span>
            <span className="text-gray-500">{grayText}</span>
          </h2>
        ) : (
          <div>
            <h2 className="text-5xl font-bold text-black dark:text-white">{blackText}</h2>
            <h2 className="text-5xl font-bold text-gray-500">{grayText}</h2>
          </div>
        )}
      </div>
    );
  }
  