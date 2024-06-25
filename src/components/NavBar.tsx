import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavBar = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="text-2xl font-bold">
                    <Link href="/">genai101</Link>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/explore-courses">Courses</Link>
                        </li>
                        <li>
                            <Link href="/pricing">Pricing</Link>
                        </li>
                    </ul>
                </nav>
                <div className="space-x-2">
                    <Button variant="secondary" asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/signup">Sign Up</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
