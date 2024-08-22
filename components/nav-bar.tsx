import Image from 'next/image';
import { Socials } from '@/constants';

export default function NavBar() {
  return (
    <div className='w-full h-[65px] absolute top-0 z-50 px-10 flex justify-end gap-4'>
      {Socials.map((social) => (
        <Image src={social.src} alt={social.name} key={social.name} width={24} height={24} />
      ))}
    </div>
  );
}
