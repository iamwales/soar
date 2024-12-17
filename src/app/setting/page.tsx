import { Tabs } from "@ark-ui/react";
import Profile from "@/app/setting/Profile";

const Setting = () => {
    return (
        <div className={"bg-white rounded-3xl p-6"}>
            <Tabs.Root defaultValue="profile">
                <Tabs.List className={"flex gap-16 border-b-2 border-[#F4F5F7]"}>
                    <Tabs.Trigger className={"text-primary-100 box-border p-4 aria-selected:text-secondary aria-selected:border-b-4 aria-selected:border-secondary"} value="profile" >
                        Edit Profile
                    </Tabs.Trigger>
                    <Tabs.Trigger value="preferences" className={"text-primary-100 box-border p-4 aria-selected:text-secondary aria-selected:border-b-4 aria-selected:border-secondary"}>Preferences</Tabs.Trigger>
                    <Tabs.Trigger value="security" className={"text-primary-100 box-border p-4 aria-selected:text-secondary aria-selected:border-b-4 aria-selected:border-secondary"}>Security</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="profile">
                    <Profile />
                </Tabs.Content>
                <Tabs.Content value="preferences">Preferences</Tabs.Content>
                <Tabs.Content value="security">Security</Tabs.Content>
            </Tabs.Root>
        </div>
    )
}

export default Setting