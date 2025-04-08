export default function Sidebar() {
    return (
      <aside className="bg-white md:w-64 border-r md:sticky md:top-0 md:h-screen p-4 shadow">
        <div className="flex flex-col items-center">
          <img
            src="https://source.unsplash.com/100x100/?woman,travel"
            className="rounded-full w-24 h-24 mb-2"
            alt="Profile"
          />
          <h1 className="text-lg font-bold">Asa Steinars</h1>
          <p className="text-sm text-gray-600 text-center">Adventurer exploring Norway</p>
        </div>
      </aside>
    );
  }
  