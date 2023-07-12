import { IMAGE_BASE_URL } from "@/utils/routes";
const Movie = ({ name, backdrop_path, rating, date }) => {
  return (
    <div className="mt-6 grid grid-cols-4  sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={`${IMAGE_BASE_URL}/${backdrop_path}`}
            alt=""
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-700 ">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Released Date: {date}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">
            {rating.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
