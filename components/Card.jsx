export default function Card({ title, description, image }) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700/50 hover:border-green-100 dark:hover:border-green-900/30 transition-all duration-300 overflow-hidden flex flex-col h-full">

      <div className="overflow-hidden h-48 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-green-800 dark:text-green-400 mb-3 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
          {title}
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed flex-grow">
          {description}
        </p>

        <button className="mt-5 w-fit bg-green-700 dark:bg-green-600 text-white font-medium px-5 py-2.5 rounded-xl hover:bg-green-800 dark:hover:bg-green-500 transition-colors cursor-pointer active:scale-95 duration-150">
          Learn More
        </button>
      </div>
    </div>
  );
}