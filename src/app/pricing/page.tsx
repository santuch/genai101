"use client";
import { Button } from "@/components/ui/button";

const Pricing = () => {
    return (
        <section className="pricing py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Choose Your Plan</h2>
                <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="pricing-card bg-white p-6 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">Free Plan</h3>
                        <p className="price text-2xl text-red-500 mb-4">
                            $0 / month
                        </p>
                        <ul className="text-left mb-4">
                            <li className="mb-2"> Access to basic courses</li>
                            <li className="mb-2"> Community support</li>
                            <li className="mb-2"> Limited API access</li>
                        </ul>
                        <Button className="w-full bg-black text-white">
                            Get Started
                        </Button>
                    </div>
                    <div className="pricing-card bg-white p-6 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">Pro Plan</h3>
                        <p className="price text-2xl text-red-500 mb-4">
                            $15 / month
                        </p>
                        <ul className="text-left mb-4">
                            <li className="mb-2"> Access to all courses</li>
                            <li className="mb-2"> Priority support</li>
                            <li className="mb-2"> Unlimited API access</li>
                            <li className="mb-2"> Exclusive webinars</li>
                        </ul>
                        <Button className="w-full bg-black text-white">
                            Choose Plan
                        </Button>
                    </div>
                    <div className="pricing-card bg-white p-6 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">
                            Enterprise Plan
                        </h3>
                        <p className="price text-2xl text-red-500 mb-4">
                            Contact Us
                        </p>
                        <ul className="text-left mb-4">
                            <li className="mb-2"> Custom solutions</li>
                            <li className="mb-2"> Dedicated support</li>
                            <li className="mb-2"> Advanced integrations</li>
                            <li className="mb-2"> Training sessions</li>
                        </ul>
                        <Button className="w-full bg-black text-white">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
