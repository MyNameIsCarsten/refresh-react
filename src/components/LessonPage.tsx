import { ReactNode } from "react";
import PageNavigation from "./PageNavigation/PageNavigation.tsx";

interface Props {
    children: ReactNode;
}

function LessonPage({ children }: Props) {
    return (
        <div className="w-full h-full p-12">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_15rem] gap-6">
                {children}
                <PageNavigation />
            </div>
        </div>
    );
}

export default LessonPage;
