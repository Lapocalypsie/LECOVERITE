// Set an image background for the website

import Image from "next/image";

export default function DarkBackground() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Image
        src="/assets/images/auth-dark.png"
        alt="background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
}
