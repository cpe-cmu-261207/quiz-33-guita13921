import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import Reply from "../components/Reply";
import { comments } from "../libs/comments";
import Reply2 from "../components/Reply2";
import Commnet2 from "../components/Commnet2";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwner />
        <Comment />
        <Commnet2 />
      </div>
    </div>
  );
}
