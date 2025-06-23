    'use server'

    import { auth } from "@clerk/nextjs/server";
    import { createSupabaseClient } from "@/lib/supabase";

    export const createCompanion = async (formData: CreateCompanion) => {
        const { userId: author } = await auth(); // removed await — `auth()` is not async
        const supabase = createSupabaseClient();

        const { data, error } = await supabase
            .from('companions') // ✅ use `.from()`, not `.form()`
            .insert({ ...formData, author })
            .select();

        if (error || !data) throw new Error(error?.message || 'Failed to create companion.');

        return data[0];
    };
