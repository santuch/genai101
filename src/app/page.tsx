"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
    return (
        <>
            <section className="text-center text-white py-20 bg-[#373A40]">
                <h1 className="text-4xl font-bold mb-4">
                    Explore Generative AI with Ease
                </h1>
                <p className="text-lg mb-8">
                    Learn and experiment with cutting-edge AI tools in one
                    place.
                </p>
                <Button asChild>
                    <Link href="/">Get Started</Link>
                </Button>
            </section>

            {/* Our Features Section */}
            <section className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Our Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-bold mb-2">
                                User-Friendly
                            </h3>
                            <p>
                                Easily navigate and learn with our intuitive
                                interface.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-bold mb-2">
                                Cost-Effective
                            </h3>
                            <p>
                                Access powerful AI tools without breaking the
                                bank.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-bold mb-2">
                                Comprehensive Support
                            </h3>
                            <p>
                                Get help when you need it with our dedicated
                                support team.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Our Courses Section */}
            <section className="py-20 bg-gray-100" id="courses">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Explore Our Courses
                    </h2>
                    <div className="flex justify-between mb-8">
                        <input
                            type="text"
                            className="p-2 border rounded flex-1 mr-4"
                            placeholder="Search for courses..."
                        />
                        <select className="p-2 border rounded">
                            <option value="">Filter by Category</option>
                            <option value="ai">Artificial Intelligence</option>
                            <option value="ml">Machine Learning</option>
                            <option value="nlp">
                                Natural Language Processing
                            </option>
                            <option value="cv">Computer Vision</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded shadow">
                            <img
                                src="/image.png"
                                alt="Course 1"
                                className="mb-4 w-full h-40 object-cover"
                            />
                            <div className="course-content">
                                <h3 className="text-xl font-bold mb-2">
                                    Introduction to AI
                                </h3>
                                <p>
                                    Learn the basics of artificial intelligence
                                    and its applications.
                                </p>
                                <Button asChild>
                                    <Link href="/courses/intro-to-ai">
                                        Course Page
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <img
                                src="/image.png"
                                alt="Course 2"
                                className="mb-4 w-full h-40 object-cover"
                            />
                            <div className="course-content">
                                <h3 className="text-xl font-bold mb-2">
                                    Machine Learning Fundamentals
                                </h3>
                                <p>
                                    Dive into the core concepts of machine
                                    learning algorithms.
                                </p>
                                <Button asChild>
                                    <Link href="/courses/ml-fundamentals">
                                        Course Page
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded shadow">
                            <img
                                src="/image.png"
                                alt="Course 3"
                                className="mb-4 w-full h-40 object-cover"
                            />
                            <div className="course-content">
                                <h3 className="text-xl font-bold mb-2">
                                    Natural Language Processing
                                </h3>
                                <p>
                                    Explore how AI understands and generates
                                    human language.
                                </p>
                                <Button asChild>
                                    <Link href="/courses/nlp">Course Page</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-8 ">
                        <Button asChild>
                            <Link href="/explore-courses">
                                Explore More Courses
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
