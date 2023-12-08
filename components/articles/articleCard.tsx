import Image from "next/image";
import '@/styles/global.css';
import Link from "next/dist/client/link";

export default function CardArticle(props: any) {
  return (
    <Link href={props.link}>
     
    <div className="w-[250px] mb-10 overflow-y-auto max-h-[400px]">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          className="w-full h-56 object-cover"
          src={props.imageName}
          alt="Image"
          width={150}
          height={150}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
      </div>
    </div>
    </Link>
  );
}
