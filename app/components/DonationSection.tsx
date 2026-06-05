// components/DonationSection.tsx
export default function DonationSection() {
  const raised = 1800;
  const goal = 5000;

  const percent = (raised / goal) * 100;
  const email = "mailto:Oforiokai@gmail.com";

  return (
    <section id="donate" className="section-padding bg-white">
      <div className="container-width grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-widest text-green-700 font-semibold">
            Donate
          </p>

          <h2 className="text-4xl font-bold mt-4">Help Fund the Next Phase</h2>

          <p className="mt-6 text-gray-700 leading-8">
            Donations support microloans, educational resources, farming
            equipment, and sustainable agriculture projects in Wudome Peki.
          </p>
        </div>

        <div className="bg-[#f8f5ef] rounded-3xl p-10 shadow-lg">
          <div className="flex justify-between font-semibold">
            <span>${raised} Raised</span>
            <span>${goal} Goal</span>
          </div>

          <div className="w-full h-5 bg-gray-200 rounded-full mt-4 overflow-hidden">
            <div
              className="h-full bg-green-600 rounded-full"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div className="my-2">
            <p className="text-sm">Checks should be made payable to:</p>
            <p className="mb-2">Rock Road Chapel Ministries (SCEP)</p>
            <p className="text-sm">Addressed to:</p>
            <p>Rock Road Chapel Ministries (SCEP)</p>
            <p>96 Rock Road,</p>
            <p>Berne, NY 12023.</p>
            <p className="italic text-sm mt-2">
              Checks sent to church are tax deductible.
            </p>
          </div>

          <div>
            <p>
              You can also donate directly to Dr. Ofori-Okai by contacting
              <a className="underline" href="mailto:Oforiokai@gmail.com">Oforiokai@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
