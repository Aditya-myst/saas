import { getAllCompanions } from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/CompanionCard";
import { getSubjectColor } from "@/lib/utils";
import SubjectFilter from "@/components/SubjectFilter";
import SearchInput from "@/components/Searchinginput";

interface SearchParams {
    searchParams: {
        subject?: string;
        topic?: string;
    };
}

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
    const subject = searchParams.subject || '';
    const topic = searchParams.topic || '';

    const companions = await getAllCompanions({ subject, topic });

    return (
        <main className="px-6 py-8 space-y-6">
            {/* Header & Filters */}
            <section className="flex flex-wrap justify-between gap-4 items-center">
                <h1 className="text-3xl font-bold text-gray-900">Companion Library</h1>
                <div className="flex gap-3 flex-wrap">
                    <SearchInput />
                    <SubjectFilter />
                </div>
            </section>

            {/* Companions Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {companions.length > 0 ? (
                    companions.map((companion) => (
                        <CompanionCard
                            key={companion.id}
                            {...companion}
                            color={getSubjectColor(companion.subject)}
                        />
                    ))
                ) : (
                    <p className="text-muted-foreground col-span-full">
                        No companions found for the selected filters.
                    </p>
                )}
            </section>
        </main>
    );
};

export default CompanionsLibrary;
