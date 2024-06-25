import Link from "next/link";

const SideBar = () => {
    return (
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
    );
};

export default SideBar;
