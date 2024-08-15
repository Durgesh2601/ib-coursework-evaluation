import FileUpload from "./FileUpload";

export default function CourseworkForm() {
  return (
    <form className="bg-white p-8 rounded-lg shadow-lg mt-8 space-y-6">
      <FileUpload />
      <div>
        <label className="block text-gray-700 mb-2">Coursework Type</label>
        <select className="w-full p-3 border rounded-lg">
          <option>IA Example</option>
          <option>EE Example</option>
          <option>IO Example</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Subject</label>
        <select className="w-full p-3 border rounded-lg">
          <option>Physics</option>
          <option>Chemistry</option>
          <option>Mathematics</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Essay Title</label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg"
          placeholder="Enter your essay title"
        />
      </div>
      <button className="w-full bg-green-600 text-white py-3 rounded-lg">
        Evaluate your Score
      </button>
    </form>
  );
}
