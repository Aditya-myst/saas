import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getCompanion } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import Image from "next/image";
import CompanionComponent from "@/components/CompanionComponent";

interface CompanionSessionPageProps {
    params: { id: string };
}

const CompanionSession = async ({ params }: CompanionSessionPageProps) => {
    const { id } = params;
    const companion = await getCompanion(id);
    const user = await currentUser();

    if (!user) redirect("/sign-in");
    if (!companion?.name) redirect("/companions");

    const { name, subject, title } = companion;

    return (
        <main>
            <article className="flex rounded-lg justify-between p-6 max-md:flex-col">
                <div className="flex items-center gap-2">
                    <div
                        className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                        style={{ backgroundColor: getSubjectColor(subject) }}
                    >
                        <Image
                            src={`/icons/${subject}.svg`}
                            alt={subject}
                            width={35}
                            height={35}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-2xl">{name}</p>
                            <div className="subject-badge max-sm:hidden">{subject}</div>
                        </div>
                        <p className="items-start text-2xl max-md:hidden">{title}</p>
                    </div>
                </div>
            </article>

            <CompanionComponent
                {...companion}
                companionId={id}
                userName={user.firstName ?? "Guest"}
                userImage={user.imageUrl ?? "/default-user.png"}
            />
        </main>
    );
};

export default CompanionSession;
