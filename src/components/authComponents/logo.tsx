import Link from 'next/link';
import Image from 'next/image';
import logoSvg2 from '@/assets/svg/logo2.svg';

const Logo = ({ className }: { className?: string }) => (
  <Link href="/" className={`transition-colors ${className || 'text-orange-600 hover:text-orange-700'}`}>
    <div className="flex items-center">
      <Image src={logoSvg2} alt="YourApp Logo" width={80} height={80} />
      <span className="ml-3 text-3xl font-bold">YourApp</span>
    </div>
  </Link>
);

export default Logo;