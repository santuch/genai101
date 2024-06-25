"use client";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

const CoursePage = () => {
    const params = useParams();
    const { id } = params;

    return (
        <div className="course-page container mx-auto flex my-8">
            <aside className="sidebar bg-white p-4 rounded shadow sticky top-20 h-screen">
                <h3 className="text-lg font-bold mb-4">Course Contents</h3>
                <ul>
                    <li className="mb-2">
                        <a href="#title">Title / Description</a>
                    </li>
                    <li className="mb-2">
                        <a href="#dictionary">Dictionary (สารบัญ)</a>
                    </li>
                    <li className="mb-2">
                        <a href="#course-info">Course Info</a>
                    </li>
                    <li className="mb-2">
                        <a href="#widget">Generate Widget</a>
                    </li>
                </ul>
            </aside>

            <main className="course-content flex-1 ml-8 bg-white p-6 rounded shadow">
                <section id="title" className="mb-8">
                    <h1 className="text-3xl font-bold">Course Title: {id}</h1>
                    <img
                        src="/course-image.png"
                        alt="Course Image"
                        className="mb-4 w-full h-40 object-cover"
                    />
                    <p className="text-lg">
                        This is a detailed description of the course, covering
                        all the key aspects and what students can expect to
                        learn.
                    </p>
                    <p className="mt-4">
                        Basic Info: Duration, Level, Prerequisites, etc.
                    </p>
                </section>

                <section id="dictionary" className="mb-8">
                    <h2 className="text-2xl font-bold">Dictionary (สารบัญ)</h2>
                    <ul className="list-disc ml-6 mt-2">
                        <li>Term 1: Definition</li>
                        <li>Term 2: Definition</li>
                        <li>Term 3: Definition</li>
                    </ul>
                </section>

                <section id="course-info" className="mb-8">
                    <h2 className="text-2xl font-bold">Course Info</h2>
                    <p>
                        This section provides more detailed information about
                        the course, including modules, lessons, and key topics
                        covered.
                    </p>
                </section>

                <section id="widget">
                    <h2 className="text-2xl font-bold">Generate Widget</h2>
                    <div className="widget bg-gray-100 p-4 rounded shadow mt-4">
                        <p>
                            Widget content goes here. This can be an interactive
                            component or additional resources related to the
                            course.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CoursePage;
