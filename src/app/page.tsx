import Banner from "@/compenent/home/Banner";
import Services from "@/compenent/home/Services";
import WhyChooseUs from "@/compenent/home/WhyChooseUs";
import BusinessCountup from "@/compenent/home/BusinessCountup";
import OurCustomers from "@/compenent/home/OurCustomers";



export default function Home() {
  return (
    <div>
      <Banner/>
      <WhyChooseUs/>
      <Services/>
      <BusinessCountup/>
      <OurCustomers/>
    </div>
  );
}
