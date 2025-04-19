const Container = ({children} : {children : React.ReactNode}) => {
    return (
        <div className="max-w-[1420px] w-full mx-auto px-4 xl:px-20 h-full">
            {children}
        </div>
    );
}
 
export default Container;