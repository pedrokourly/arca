// Import Components
import FormWaitlist from "@/components/forms/form-waitlist";
import WaitlistStatsCard from "@/components/layout/lista-espera/waitlist-stats-card";

const Waitlist = () => {

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6 w-full">
        <WaitlistStatsCard />
        <FormWaitlist />
      </div>
    </>
  );
};

export default Waitlist;
