import EighthSection from "@/components/EighthSection";
import FifthSection from "@/components/FifthSection";
import FourthSection from "@/components/FourthSection";
import HeroSection from "@/components/HeroSection";
import NinthSection from "@/components/NinthSection";
import SecondSection from "@/components/SecondSection";
import SeventhSection from "@/components/SeventhSection";
import SixthSection from "@/components/SixthSection";
import TenthSection from "@/components/TenthSection";
import ThirdSection from "@/components/ThirdSection";

export default function Home() {
	return (
		<main className='bg-white text-black'>
			<HeroSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
			<SixthSection />
			<SeventhSection />
			<EighthSection />
			<NinthSection />
			<TenthSection />
		</main>
	);
}
