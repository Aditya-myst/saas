import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
}

const CompanionCard = ({
                           id,
                           name,
                           topic,
                           subject,
                           duration,
                           color,
                       }: CompanionCardProps) => {
    return (
        <article
            className="companion-card rounded-lg p-4 text-white shadow-md flex flex-col gap-4"
            style={{ backgroundColor: color }}
        >
            {/* Header */}
            <div className="flex justify-between items-center">
        <span className="subject-badge bg-white/20 px-2 py-1 rounded text-sm font-medium uppercase">
          {subject}
        </span>
                <button className="companion-bookmark hover:opacity-80 transition">
                    <Image
                        src="/icons/bookmark.svg"
                        alt="Bookmark icon"
                        width={12.5}
                        height={15}
                    />
                </button>
            </div>

            {/* Title & Topic */}
            <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-sm text-white/90">{topic}</p>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-2 text-sm text-white/90">
                <Image
                    src="/icons/clock.svg"
                    alt="Clock icon"
                    width={13.5}
                    height={13.5}
                />
                <span>{duration} minutes</span>
            </div>

            {/* Action Button */}
            <Link href={`/companions/${id}`} className="w-full">
                <div className="btn-primary w-full text-center py-2 rounded bg-white text-black font-semibold hover:bg-gray-200 transition">
                    Launch Lesson
                </div>
            </Link>
        </article>
    );
};

export default CompanionCard;
