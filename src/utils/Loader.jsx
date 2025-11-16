import { IconLoader2 } from "@tabler/icons-react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white space-y-4">
      <IconLoader2
        size={40}
        stroke={2.5}
        className="text-black animate-spin"
      />
      <p className="text-gray-600 text-lg font-medium">Loading, please wait...</p>
    </div>
  );
};

export default Loader;
