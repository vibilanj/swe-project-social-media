import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Card from "./Card";
import FriendInfo from "./FriendInfo";
import PostCard from "./PostCard";

export default function ProfileContent({activeTab, userId}) {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null);
  const supabase = useSupabaseClient();

  useEffect(() => {
    if (!userId) {
      return;
    }
    if (activeTab === 'posts') {
      loadPosts().then(() => {});
    }
  }, [userId]);

  async function loadPosts() {
    const posts = await userPosts(userId);
    const profile = await userProfile(userId);
    setPosts(posts);
    setProfile(profile);
  }

  async function userPosts(userId) {
    const {data} = await supabase.from('posts')
      .select('id, content, created_at, photos, author')
      .order('created_at', {ascending: false})
      .eq('author', userId);
    return data;
  }

  async function userProfile(userId) {
    const {data} = await supabase.from('profiles')
      .select()
      .eq('id', userId);
    return data?.[0];
  }

  return (
    <div>
    {activeTab === 'posts' && (
      <div>
        {posts?.length > 0 && posts.map(post => (
          <PostCard key={post.created_at} {...post} profiles={profile} />
        ))}
      </div>
    )}
    {activeTab === 'about' && (
        <div>
          <Card>
            <h2 className="text-3xl mb-2">About me</h2>
            <p className="mb-2 text-sm">Hi, I'm a data scientist with a background in Computer Science and Statistics. My expertise lies in machine learning, statistical modeling, and data visualization, and I've worked with various industries, including finance, healthcare, and e-commerce.</p>
            <p className="mb-2 text-sm">My passion for transforming complex data into valuable insights has helped businesses identify new opportunities, optimize operations, and increase profitability. I'm a great communicator and team player, and I always collaborate with colleagues and stakeholders to ensure my insights are effectively communicated and understood.</p>
            <p className="mb-2 text-sm">Aside from my technical expertise, I'm also passionate about giving back to my community. I volunteer my time to mentor aspiring data scientists and support organizations focused on using data for social good.</p>
            <p className="mb-2 text-sm">In my free time, I enjoy hiking, reading, and exploring new technologies. I'm always eager to learn and expand my knowledge in the ever-evolving field of data science.</p>
          </Card>
        </div>
      )}
    {activeTab === 'friends' && (
        <div>
          <Card>
            <h2 className="text-3xl mb-2">Friends</h2>
            <div className="">
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
            </div>
          </Card>
        </div>
      )}
    {activeTab === 'photos' && (
        <div>
          <Card>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img src="https://images.unsplash.com/photo-1601581875039-e899893d520c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img src="https://images.unsplash.com/photo-1601581874834-3b6065645e07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img src="https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img src="https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}