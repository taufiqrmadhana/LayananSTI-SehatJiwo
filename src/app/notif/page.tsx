import Header from "@/components/header";
import Notifications from "@/components/notif/notifications";

export default function NotificationPage() {
  return (
    <div className="flex h-screen">
      <Header />
      <main className="flex-1 ml-60 bg-[#FBFADA] overflow-y-auto">
          <Notifications />
      </main>
    </div>
  );
}
