import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { newCompanionPermission } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = async () => {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const canCreateCompanion = await newCompanionPermission();

    return (
        <main className="w-full flex justify-center items-start py-10 px-6">
            {canCreateCompanion ? (
                <article className="w-full max-w-2xl flex flex-col gap-6">
                    <h1 className="text-3xl font-bold">Companion Builder</h1>
                    <CompanionForm />
                </article>
            ) : (
                <article className="w-full max-w-xl text-center space-y-4 bg-white p-6 rounded-lg shadow-sm">
                    <Image
                        src="/images/limit.svg"
                        alt="Companion Limit Reached"
                        width={360}
                        height={230}
                        className="mx-auto"
                    />
                    <div className="cta-badge">Upgrade Your Plan</div>
                    <h1 className="text-2xl font-semibold">You've Reached Your Limit</h1>
                    <p className="text-gray-600">
                        You've reached your companion limit. Upgrade to create more companions and unlock premium features.
                    </p>
                    <Link
                        href="/subscription"
                        className="btn-primary w-full inline-block py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                        Upgrade My Plan
                    </Link>
                </article>
            )}
        </main>
    );
};

export default NewCompanion;
