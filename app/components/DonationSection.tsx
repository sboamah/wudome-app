// components/DonationSection.tsx
export default function DonationSection() {
    const raised = 1800;
    const goal = 5000;
  
    const percent = (raised / goal) * 100;
  
    return (
      <section
        id="donate"
        className="section-padding bg-white"
      >
        <div className="container-width grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-widest text-green-700 font-semibold">
              Donate
            </p>
  
            <h2 className="text-4xl font-bold mt-4">
              Help Fund the Next Phase
            </h2>
  
            <p className="mt-6 text-gray-700 leading-8">
              Donations support microloans,
              educational resources, farming
              equipment, and sustainable agriculture
              projects in Wudome Peki.
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
  
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[25, 50, 100, 250].map((amount) => (
                <button
                  key={amount}
                  className="bg-white border hover:bg-green-600 hover:text-white transition py-4 rounded-2xl font-semibold"
                >
                  ${amount}
                </button>
              ))}
            </div>
  
            <button className="w-full mt-6 bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl font-semibold transition">
              Continue to Donation
            </button>
          </div>
        </div>
      </section>
    );
  }