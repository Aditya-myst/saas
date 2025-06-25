import { PricingTable } from '@clerk/nextjs';

const Subscriptions = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 flex justify-center items-start">
            <div className="w-full max-w-7xl space-y-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900">Choose Your Plan</h1>
                    <p className="text-lg text-gray-600 mt-2">
                        Get access to premium features and unlock your full potential.
                    </p>
                </div>

                {/* Pricing Cards in Horizontal Layout */}
                <div className="overflow-x-auto">
                    <div className="flex gap-6 min-w-fit">
                        <PricingTable />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscriptions;
