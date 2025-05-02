import Image from "next/image";
import Hello from "@/app/components/hello";

export default function Home() {

  return (
    <>
      <h2 className="text-3xl">Welcome to next.js</h2>
      <Hello />
    </>
  );
}
