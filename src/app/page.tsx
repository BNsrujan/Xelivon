import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import WhyAxearc from "./components/WhyAxearc";
import About from "./components/About";
import Insights from "./components/Insights";
import Founder from "./components/Founder";
import Booking from "./components/Booking";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import { EnquiryProvider } from "@/components/enquiry-context";
import { getPosts, getServices } from "@/lib/content";

// Content lives in the database, so re-check it periodically rather than
// baking the build-time snapshot in forever.
export const revalidate = 300;

export default async function Home() {
  const [services, posts] = await Promise.all([getServices(), getPosts()]);

  return (
    <EnquiryProvider>
      <div className="relative flex flex-col gap-7 p-4">
        <Navbar />
        <Herosection />
        <TrustedBy />
        <Services services={services} />
        <WhyAxearc />
        <About />
        <Insights posts={posts} />
        <Founder />
        <Booking />
        <Connect services={services} />
        <Footer />
      </div>
    </EnquiryProvider>
  );
}
