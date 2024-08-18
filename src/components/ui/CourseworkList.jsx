
export default function CourseworkList({ title, items }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-secondary-text mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
