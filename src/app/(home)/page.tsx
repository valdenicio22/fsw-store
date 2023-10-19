import { Banner } from "@/components/ui/banner";
import Categories from "./components/categories";

export default function Home() {
  return (
    <div className="max-w-[390px]">
      <div className="my-8">
        <Banner src="/banner-home-01.png" alt="discount banner" />
      </div>
      <Categories />
    </div>
  );
}
