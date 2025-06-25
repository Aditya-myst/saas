import Image from "next/image";
import Link from "next/link";

const Cta = () => {
    return (
        <section className="bg-black text-white px-6 py-10 rounded-xl max-w-screen-md mx-auto space-y-6 text-center">
            {/* Badge */}
            <div className="inline-block px-4 py-1 bg-white text-black rounded-full text-sm font-medium">
                Start learning your way.
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Build and Personalize Learning Companion
            </h2>

            {/* Description */}
            <p className="text-white/80 text-base max-w-xl mx-auto leading-snug">
                Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun.
            </p>

            {/* Image */}
            <div className="flex justify-center">
                <Image
                    src="/images/cta.svg"
                    alt="cta"
                    width={300}
                    height={220}
                    className="object-contain w-[300px] h-[220px]"
                />
            </div>

            {/* Optional Button (Uncomment if needed) */}
            {
      <Link href="/companions/new" passHref>
        <div className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition">
          <Image src="/icons/plus.svg" alt="plus icon" width={14} height={14} />
          <span>Build a New Companion</span>
        </div>
      </Link>
      }
        </section>
    );
};

export default Cta;
