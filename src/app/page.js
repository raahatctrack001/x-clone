import Input from "../components/Input";

export default function Home() {
  return (
    <div className=" mx-auto min-h-screen border-x border-gray-200">
      {/* Header */}
      <div className="py-3 px-4 sticky top-0 z-50 bg-white border-b border-gray-300 shadow-sm">
        <h2 className="text-xl font-semibold">Home</h2>
      </div>

      {/* Input Section */}
      <div className="p-4 border-b border-gray-200 bg-gray-700">
        <Input />
      </div>

      {/* Feed Section (Uncomment when needed) */}
      {/* <Feed /> */}
      
      {/* Placeholder for content */}
      <div className="p-4 text-center text-gray-500">No posts yet.</div>
    </div>
  );
}
