import { WaitlistForm } from "@/components/waitlist/formList";

export default function Home() {
  return (
    <div className="font-sans flex items-center justify-items-center min-h-screen p-8 pb-20 gap-12 sm:p-20">
      <WaitlistForm />
    </div>
  );
}
