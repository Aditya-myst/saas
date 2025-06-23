import {
    Table,
    TableBody,
    TableCaption,
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

const CompanionList = ({ title, companions, classNames }: CompanionsListProps) => {
    return (
        <article className={cn('companion-list', classNames, 'pb-6')}>
            <h2 className="font-bold text-3xl mb-4">
                {title}
            </h2>
            <div className="w-full overflow-y-auto">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-lg w-2/3">Lessons</TableHead>
                            <TableHead className="text-lg">Subject</TableHead>
                            <TableHead className="text-lg text-right">Duration</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {companions?.map(({ id, subject, name, topic, duration }) => (
                            <TableRow key={id}>
                                <TableCell>
                                    <Link href={`/companion/${id}`}>
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-[60px] h-[60px] flex items-center justify-center rounded-lg max-hd:hidden"
                                                style={{ backgroundColor: getSubjectColor(subject) }}
                                            >
                                                <Image
                                                    src={`/icons/${subject}.svg`}
                                                    alt={subject}
                                                    width={35}
                                                    height={35}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="font-bold text-xl">{name}</p>
                                                <p className="text-sm text-muted-foreground">{topic}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <div className="subject-badge w-fit">{subject}</div>
                                    <div
                                        className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                                        style={{ backgroundColor: getSubjectColor(subject) }}
                                    >
                                        <Image
                                            src={`/icons/${subject}.svg`}
                                            alt={subject}
                                            width={18}
                                            height={18}
                                        />
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2 w-full justify-end">
                                        <p className="text-xl">
                                            {duration}
                                            <span className="max-md:hidden"> mins</span>
                                        </p>
                                        <Image
                                            src="/icons/clock.svg"
                                            alt="minutes"
                                            width={14}
                                            height={14}
                                            className="max-md:inline"
                                        />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </article>
    );
};

export default CompanionList;
