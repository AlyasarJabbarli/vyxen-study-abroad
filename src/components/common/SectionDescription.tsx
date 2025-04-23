interface SectionDescriptionProps{
    textTop: string;
    textBottom: string;
    marginTop?: string;
}

const SectionDescription = ({textTop, textBottom, marginTop="mt-7"}: SectionDescriptionProps) => {
    return (
        <div className={`text-tgray text-xl ${marginTop}`}>
            <p>
                {textTop}
            </p>
            <p>
                {textBottom}
            </p>
        </div>
    );
}
 
export default SectionDescription;