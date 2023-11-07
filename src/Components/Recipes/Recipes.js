import { Link } from "react-router-dom";

const DUMMY_DATA = [
  {
    id: "r1",
    name: "recipe 1",
    ingredients: "this is indredients 1",
    description: "description 1",
  },
  {
    id: "r2",
    name: "recipe 2",
    ingredients: "this is indredients 2",
    description: "description 2",
  },
  {
    id: "r3",
    name: "recipe 3",
    ingredients: "this is indredients 3",
    description: "description 3",
  },
];

function Recipes() {
  return (
    <div className="mt-24 ml-8 mr-8 mb-8 max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {DUMMY_DATA.map((event) => (
        <div
          key={event.id}
          className="bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 hover:border-gray-200 "
        >
          <Link to={event.id}>
            <div className="p-5">
              <Link to={event.id}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {event.name}
                </h5>
              </Link>
              <p className="mb-2 font-normal text-gray-700">
                {event.description}
              </p>
              <div>
                <button
                  type="button"
                  className="inline-block mr-5 rounded-lg border border-blue-700 px-2.5 py-1.5 text-center text-base font-semibold text-black transition hover:bg-blue-600  hover:text-white"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="inline-block rounded-lg border border-red-700 px-2.5 py-1.5 text-center text-base font-semibold text-black transition hover:bg-red-600 hover:border-red-600 hover:text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
