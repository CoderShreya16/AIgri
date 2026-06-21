export default function Card({ title, description, image }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-green-700 mb-3">
          {title}
        </h2>

        <p className="text-gray-600">
          {description}
        </p>

        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
          Learn More
        </button>
      </div>
    </div>
  );
}