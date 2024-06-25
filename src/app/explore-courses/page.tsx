"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const courses = [
    {
        id: "intro-to-ai",
        title: "Introduction to AI",
        description:
            "Learn the basics of artificial intelligence and its applications.",
        image: "/image.png",
    },
    {
        id: "ml-fundamentals",
        title: "Machine Learning Fundamentals",
        description:
            "Dive into the core concepts of machine learning algorithms.",
        image: "/image.png",
    },
    {
        id: "nlp",
        title: "Natural Language Processing",
        description: "Explore how AI understands and generates human language.",
        image: "/image.png",
    },
    {
        id: "cv",
        title: "Computer Vision",
        description:
            "Understand how machines interpret visual data and images.",
        image: "/image.png",
    },
    {
        id: "deep-learning",
        title: "Deep Learning",
        description: "Master deep learning techniques and neural networks.",
        image: "/image.png",
    },
    {
        id: "data-science",
        title: "Data Science",
        description: "Explore data science methodologies and tools.",
        image: "/image.png",
    },
];

const ExploreCourses = () => {
    return (
        <>
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
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-white p-6 rounded shadow"
                            >
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="mb-4 w-full h-40 object-cover"
                                />
                                <div className="course-content">
                                    <h3 className="text-xl font-bold mb-2">
                                        {course.title}
                                    </h3>
                                    <p>{course.description}</p>
                                    <Button asChild>
                                        <Link href={`/courses/${course.id}`}>
                                            Course Page
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExploreCourses;
