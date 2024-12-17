import { Tabs } from "@ark-ui/react";

const Setting = () => {
    return (
        <div className={"bg-white rounded-3xl p-6"}>
            <Tabs.Root>
                <Tabs.List className={"border-1 border-[#F4F5F7]"}>
                    <Tabs.Trigger value="profile">Edit Profile</Tabs.Trigger>
                    <Tabs.Trigger value="preferences">Preferences</Tabs.Trigger>
                    <Tabs.Trigger value="security">Security</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="react">React Content</Tabs.Content>
                <Tabs.Content value="vue">Vue Content</Tabs.Content>
                <Tabs.Content value="solid">Solid Content</Tabs.Content>
            </Tabs.Root>
        </div>
    )
}

export default Setting