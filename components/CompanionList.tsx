import {
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHeader,
    TableHead,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface Companion {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
}

interface CompanionsListProps {
    title: string;
    companions?: Companion[];
    classNames?: string;
}

const CompanionList = ({ title, companions = [], classNames }: CompanionsListProps) => {
    return (
        <article className={cn("companion-list pb-10", classNames)}>
            <h2 className="font-bold text-3xl mb-6">{title}</h2>

            {companions.length === 0 ? (
                <p className="text-muted-foreground text-lg">No companions found.</p>
            ) : (
                <div className="w-full overflow-x-auto rounded-xl border bg-white shadow-sm">
                    <Table className="min-w-[700px]">
                        <TableHeader className="sticky top-0 bg-gray-100 z-10">
                            <TableRow>
                                <TableHead className="text-md text-gray-700 w-2/3">Lesson</TableHead>
                                <TableHead className="text-md text-gray-700">Subject</TableHead>
                                <TableHead className="text-md text-right text-gray-700">Duration</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {companions.map((companion, index) => (
                                <TableRow
                                    key={`${companion.id}-${index}`} // ✅ unique key to prevent React warning
                                    className="hover:bg-gray-50 transition duration-200 cursor-pointer"
                                >
                                    {/* Lesson Info */}
                                    <TableCell>
                                        <Link href={`/companions/${companion.id}`} className="flex items-center gap-4">
                                            <div
                                                className="w-[60px] h-[60px] flex items-center justify-center rounded-lg bg-opacity-10 shrink-0"
                                                style={{ backgroundColor: getSubjectColor(companion.subject) }}
                                            >
                                                <Image
                                                    src={`/icons/${companion.subject}.svg`}
                                                    alt={`${companion.subject} icon`}
                                                    width={32}
                                                    height={32}
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="font-semibold text-lg text-gray-900">{companion.name}</p>
                                                <p className="text-sm text-gray-500">{companion.topic}</p>
                                            </div>
                                        </Link>
                                    </TableCell>

                                    {/* Subject Badge */}
                                    <TableCell>
                                        <div
                                            className="text-sm font-medium px-2 py-1 rounded-lg shadow-sm text-white text-center w-fit"
                                            style={{ backgroundColor: getSubjectColor(companion.subject) }}
                                        >
                                            {companion.subject}
                                        </div>
                                    </TableCell>

                                    {/* Duration */}
                                    <TableCell>
                                        <div className="flex items-center gap-2 justify-end text-gray-700">
                                            <Image
                                                src="/icons/clock.svg"
                                                alt="Clock"
                                                width={16}
                                                height={16}
                                                className="opacity-80"
                                            />
                                            <span className="text-sm font-medium">{companion.duration} mins</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </article>
    );
};

export default CompanionList;
