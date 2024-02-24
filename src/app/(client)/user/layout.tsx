import { Sidebar } from '@/components/client/user';

export default function UserLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex px-[150px] py-8 min-h-[500px] gap-8">
      <Sidebar />
      {children}
    </div>
  );
}
