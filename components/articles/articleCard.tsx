import Image from "next/image";
import "@/styles/scrollbar.css";
import Link from "next/dist/client/link";

export default function CardArticle(props: any) {
  return (
    <Link href={props.link}>
      <div className="mb-10 max-h-[400px] w-[250px] overflow-y-auto">
        <div className="max-w-sm overflow-hidden rounded shadow-lg">
          <Image
            className="h-56 w-full object-cover"
            src={props.imageName}
            alt="Image"
            width={150}
            height={150}
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">{props.title}</div>
            <p className="text-base text-gray-700">{props.description}</p>
          </div>
          <div className="px-6 pb-2 pt-4"></div>
        </div>
      </div>
    </Link>
  );
}
