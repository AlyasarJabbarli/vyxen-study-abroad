import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className='min-w-36 py-3'>
            <Link href={"/"}>
                <Image src="/logo.png" alt="Logo" width={130} height={100} />
            </Link>
        </div>
    );
}

export default Logo;