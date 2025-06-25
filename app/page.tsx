import React from 'react';
import { Button } from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { getAllCompanions, getRecentSessions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

export default async function Page() {
    const companions = await getAllCompanions({ limit: 3 });
    const recentSessionsCompanions = await getRecentSessions({ limit: 10 });

    return (
        <main className="space-y-12 px-6 py-10">
            <section>
                <h1 className="text-3xl font-bold mb-6 underline">Popular Companions</h1>
                <div className="home-section flex flex-wrap gap-6">
                    {companions.map((companion) => (
                        <CompanionCard
                            key={companion.id}
                            {...companion}
                            color={getSubjectColor(companion.subject)}
                        />
                    ))}
                </div>
            </section>

            <section className="home-section flex flex-col lg:flex-row gap-8">
                <CompanionList
                    title="Recently completed sessions"
                    companions={recentSessionsCompanions}
                    classNames="w-full lg:w-2/3"
                />
                <CTA />
            </section>
        </main>
    );
}
