import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function NotificationsPage() {
  return (
    <Layout>
      <Card noPadding={true}>
        <div className="">
          <div className="flex gap-2 items-center border-b border-b-gray-100 p-4 ">
            <Link href={'/profile'}>
              <Avatar url={"https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"} />
            </Link>
            <div>
              <Link href={'/profile'} className={'font-semibold mr-1 hover:underline'}>John Doe</Link>
              liked
              <Link href={''} className={'ml-1 text-socialGreen hover:underline'}>your photo</Link>
            </div>
          </div>
          <div className="flex gap-2 items-center border-b border-b-gray-100 p-4 ">
            <Avatar url={"https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"} />
            <div>
              <Link href={'/profile'} className={'font-semibold mr-1 hover:underline'}>John Doe</Link>
              liked
              <Link href={''} className={'ml-1 text-socialGreen hover:underline'}>your photo</Link>
            </div>
          </div>
          <div className="flex gap-2 items-center border-b border-b-gray-100 p-4 ">
            <Avatar url={"https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"} />
            <div>
              <Link href={'/profile'} className={'font-semibold mr-1 hover:underline'}>John Doe</Link>
              liked
              <Link href={''} className={'ml-1 text-socialGreen hover:underline'}>your photo</Link>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}