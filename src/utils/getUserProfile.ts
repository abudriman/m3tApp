import supabase from "@/supabase"
import { Preferences } from "@capacitor/preferences"

export const getUserProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    const { data: dataProfile, error: errorProfile } = await supabase
        .from('profiles')
        .select('name')
        .eq('user_id', user?.id)
        .single()

    if (!errorProfile) {
        await Preferences.set({ key: 'user', value: JSON.stringify(user) })
        await Preferences.set({ key: "profile", value: JSON.stringify(dataProfile) })
    }
}