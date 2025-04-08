export default function LocationCard({ location }) {
    return (
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <img src={location.image} alt={location.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-1">{location.title}</h2>
          <p className="text-gray-600 text-sm">{location.description}</p>
        </div>
      </div>
    );
  }